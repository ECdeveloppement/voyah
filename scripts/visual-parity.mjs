import { spawn } from 'node:child_process'
import fs from 'node:fs'
import http from 'node:http'
import path from 'node:path'
import process from 'node:process'

import { chromium } from 'playwright'
import pixelmatch from 'pixelmatch'
import { PNG } from 'pngjs'

const ROOT = process.cwd()
const SITE_TS = path.join(ROOT, 'data', 'site.ts')
const LOCAL_ORIGIN = 'http://127.0.0.1:4173'
const VIEWPORT = { width: 1440, height: 900 }
const CLIP = { x: 0, y: 0, width: VIEWPORT.width, height: 2400 }

const FIXED_REFERENCE_MAP = new Map([
  ['index.html', 'official-homepage-shot.png'],
  ['brand.html', 'official-brand_html.png'],
  ['service.html', 'official-service_html.png'],
  ['energy.html', 'official-energy_html.png'],
  ['store.html', 'official-store_html.png'],
  ['corporate.html', 'official-corporate_html.png'],
  ['joinus.html', 'official-joinus_html.png'],
  ['document.html', 'official-document_html.png']
])

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function httpOk(url) {
  return new Promise((resolve) => {
    const req = http.get(url, (res) => {
      res.resume()
      resolve(Boolean(res.statusCode && res.statusCode >= 200 && res.statusCode < 500))
    })
    req.on('error', () => resolve(false))
    req.setTimeout(1500, () => {
      req.destroy()
      resolve(false)
    })
  })
}

async function waitForServerReady(url, timeoutMs = 600000) {
  const start = Date.now()
  while (Date.now() - start < timeoutMs) {
    // eslint-disable-next-line no-await-in-loop
    if (await httpOk(url)) return
    // eslint-disable-next-line no-await-in-loop
    await sleep(800)
  }
  throw new Error(`Server not ready after ${timeoutMs}ms: ${url}`)
}

function extractSlugsFromSiteTs(content) {
  const slugs = []
  const lines = content.split(/\r?\n/)
  let currentKind = null

  for (const line of lines) {
    const kindMatch = line.match(/kind:\s*'([^']+)'/)
    if (kindMatch) currentKind = kindMatch[1]

    if (currentKind === 'model' || currentKind === 'info' || currentKind === 'legal') {
      const slugMatch = line.match(/slug:\s*'([^']+)'/)
      if (slugMatch) {
        slugs.push(slugMatch[1])
        currentKind = null
      }
    }
  }

  return Array.from(new Set(slugs))
}

function referencePathForSlug(slug) {
  const file = FIXED_REFERENCE_MAP.get(slug)
  return file ? path.join(ROOT, file) : null
}

function pngFromBuffer(buffer) {
  return PNG.sync.read(buffer)
}

function cropPng(png, w, h) {
  if (png.width === w && png.height === h) return png
  const out = new PNG({ width: w, height: h })
  PNG.bitblt(png, out, 0, 0, w, h, 0, 0)
  return out
}

function scoreFromPngs(a, b) {
  const w = Math.min(a.width, b.width)
  const h = Math.min(a.height, b.height)
  const aa = cropPng(a, w, h)
  const bb = cropPng(b, w, h)
  const diff = new PNG({ width: w, height: h })
  const diffPixels = pixelmatch(aa.data, bb.data, diff.data, w, h, {
    threshold: 0.1
  })
  const total = w * h
  return {
    score: Math.max(0, 1 - diffPixels / total),
    diffPixels,
    total,
    diff
  }
}

async function screenshotLocalPage(page, url) {
  await page.goto(url, { waitUntil: 'networkidle', timeout: 120000 })
  await page.setViewportSize(VIEWPORT)
  await page.addStyleTag({
    content: `
      html { scroll-behavior: auto !important; }
      *, *::before, *::after {
        animation: none !important;
        transition: none !important;
        caret-color: transparent !important;
      }
      body { text-rendering: geometricPrecision !important; }
      * { color: transparent !important; text-shadow: none !important; }
      input, textarea { -webkit-text-fill-color: transparent !important; }
    `
  })
  await page.waitForTimeout(1200)
  return page.screenshot({ clip: CLIP })
}

async function run() {
  const siteTs = fs.readFileSync(SITE_TS, 'utf8')
  const slugs = extractSlugsFromSiteTs(siteTs)
  const fixedRoutes = slugs.filter((slug) => referencePathForSlug(slug) && fs.existsSync(referencePathForSlug(slug)))
  const skippedRoutes = slugs.filter((slug) => !fixedRoutes.includes(slug))

  const dev = spawn('cmd', ['/c', 'npm', 'run', 'dev', '--', '--port', '4173', '--host', '127.0.0.1', '--strictPort'], {
    cwd: ROOT,
    stdio: 'ignore',
    windowsHide: true
  })

  try {
    await waitForServerReady(`${LOCAL_ORIGIN}/en/brand.html`)

    const browser = await chromium.launch({ headless: true })
    const context = await browser.newContext({
      viewport: VIEWPORT,
      deviceScaleFactor: 1
    })

    const page = await context.newPage()
    const perRoute = []

    for (const slug of fixedRoutes) {
      const refPath = referencePathForSlug(slug)
      if (!refPath) continue

      const localUrl = `${LOCAL_ORIGIN}/en/${slug === 'index.html' ? '' : slug}`
      // eslint-disable-next-line no-await-in-loop
      const [localBuf, refBuf] = await Promise.all([
        screenshotLocalPage(page, localUrl),
        fs.promises.readFile(refPath)
      ])

      const localPng = pngFromBuffer(localBuf)
      const refPng = pngFromBuffer(refBuf)
      const { score } = scoreFromPngs(localPng, refPng)
      perRoute.push({ slug, score })
    }

    await browser.close()

    const overallScore = perRoute.reduce((sum, entry) => sum + entry.score, 0) / Math.max(1, perRoute.length)
    const sorted = [...perRoute].sort((a, b) => a.score - b.score)
    const report = {
      measuredAt: new Date().toISOString(),
      viewport: VIEWPORT,
      clip: CLIP,
      method: 'Top-2400px pixel similarity against fixed local official reference PNG captures with text hidden and animations disabled.',
      routesMeasured: perRoute.length,
      routesSkipped,
      overallScore,
      lowest5: sorted.slice(0, 5),
      highest5: sorted.slice(-5)
    }

    const outPath = path.join(ROOT, 'parity-report.json')
    fs.writeFileSync(outPath, JSON.stringify(report, null, 2), 'utf8')

    // eslint-disable-next-line no-console
    console.log(`OVERALL_SCORE ${(overallScore * 100).toFixed(1)}% across ${perRoute.length} fixed routes.`)
    // eslint-disable-next-line no-console
    console.log(`Report: ${outPath}`)
  } finally {
    dev.kill()
  }
}

run().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err)
  process.exitCode = 1
})
