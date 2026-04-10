import { spawn } from 'node:child_process'
import fs from 'node:fs'
import http from 'node:http'
import path from 'node:path'
import process from 'node:process'

import { chromium } from 'playwright'
import pixelmatch from 'pixelmatch'
import { PNG } from 'pngjs'

const ROOT = process.cwd()
const LOCAL_ORIGIN = 'http://127.0.0.1:4173'
const VIEWPORT = { width: 1440, height: 900 }
const CLIP = { x: 0, y: 0, width: VIEWPORT.width, height: 2400 }

const TARGETS = [
  { slug: 'store.html', official: 'https://www.voyah.com.cn/#/store.html' },
  { slug: 'service.html', official: 'https://www.voyah.com.cn/#/service.html' },
  { slug: 'energy.html', official: 'https://www.voyah.com.cn/#/energy.html' }
]
const LOCALES = ['en', 'fr', 'ar']

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

async function waitForServerReady(url, timeoutMs = 180000) {
  const start = Date.now()
  while (Date.now() - start < timeoutMs) {
    // eslint-disable-next-line no-await-in-loop
    if (await httpOk(url)) return
    // eslint-disable-next-line no-await-in-loop
    await sleep(700)
  }
  throw new Error(`Server not ready after ${timeoutMs}ms: ${url}`)
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
    diff
  }
}

async function screenshotNormalized(page, url) {
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
      body {
        text-rendering: geometricPrecision !important;
        -webkit-text-size-adjust: none !important;
      }
      * {
        color: transparent !important;
        text-shadow: none !important;
        -webkit-text-fill-color: transparent !important;
        -webkit-text-stroke-width: 0 !important;
      }
      input, textarea { -webkit-text-fill-color: transparent !important; }
      svg text, [aria-label], [title] { color: transparent !important; fill: transparent !important; }
    `
  })
  await page.waitForTimeout(1400)
  return page.screenshot({ clip: CLIP })
}

async function screenshotOfficial(page, slug) {
  await page.goto('https://www.voyah.com.cn/', { waitUntil: 'networkidle', timeout: 120000 })
  await page.setViewportSize(VIEWPORT)
  await page.waitForTimeout(1200)
  await page.evaluate((targetSlug) => {
    const target = document.querySelector(`a[href="/${targetSlug}"]`)
    if (!target) throw new Error(`Missing official nav link for ${targetSlug}`)
    target.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }))
  }, slug)
  await page.waitForTimeout(2600)

  const routeSelectorBySlug = {
    'store.html': '.store-container',
    'service.html': '.service-content',
    'energy.html': '.energy-content'
  }
  const selector = routeSelectorBySlug[slug]
  if (selector) {
    await page.waitForSelector(selector, { timeout: 120000 })
    await page.waitForFunction(
      (routeSelector) => {
        const node = document.querySelector(routeSelector)
        if (!node) return false
        const style = window.getComputedStyle(node)
        const rect = node.getBoundingClientRect()
        return style.display !== 'none' && style.visibility !== 'hidden' && rect.width > 200 && rect.height > 200
      },
      selector,
      { timeout: 120000 }
    )
  }

  await page.addStyleTag({
    content: `
      html { scroll-behavior: auto !important; }
      *, *::before, *::after {
        animation: none !important;
        transition: none !important;
        caret-color: transparent !important;
      }
      body {
        text-rendering: geometricPrecision !important;
        -webkit-text-size-adjust: none !important;
      }
      * {
        color: transparent !important;
        text-shadow: none !important;
        -webkit-text-fill-color: transparent !important;
        -webkit-text-stroke-width: 0 !important;
      }
      input, textarea { -webkit-text-fill-color: transparent !important; }
      svg text, [aria-label], [title] { color: transparent !important; fill: transparent !important; }
    `
  })
  await page.waitForTimeout(1400)
  return page.screenshot({ clip: CLIP })
}

async function run() {
  const dev = spawn('cmd', ['/c', 'node', '.output/server/index.mjs'], {
    cwd: ROOT,
    env: {
      ...process.env,
      NITRO_HOST: '127.0.0.1',
      NITRO_PORT: '4173'
    },
    stdio: 'ignore',
    windowsHide: true
  })

  try {
    await waitForServerReady(`${LOCAL_ORIGIN}/en/store.html`)

    const browser = await chromium.launch({ headless: true })
    const localContext = await browser.newContext({ viewport: VIEWPORT, deviceScaleFactor: 1 })
    const officialContext = await browser.newContext({ viewport: VIEWPORT, deviceScaleFactor: 1 })
    const localPage = await localContext.newPage()
    const officialPage = await officialContext.newPage()

    const scores = []
    for (const locale of LOCALES) {
      for (const item of TARGETS) {
        const localUrl = `${LOCAL_ORIGIN}/${locale}/${item.slug}`
        // eslint-disable-next-line no-await-in-loop
        const [localBuf, officialBuf] = await Promise.all([
          screenshotNormalized(localPage, localUrl),
          screenshotOfficial(officialPage, item.slug)
        ])
        const localPng = pngFromBuffer(localBuf)
        const officialPng = pngFromBuffer(officialBuf)
        const { score, diff } = scoreFromPngs(localPng, officialPng)
        scores.push({
          locale,
          slug: item.slug,
          local: localUrl,
          official: item.official,
          score
        })
        fs.writeFileSync(path.join(ROOT, `compare-${locale}-${item.slug.replace('.', '_')}.png`), PNG.sync.write(diff))
      }
    }

    await browser.close()

    const overall = scores.reduce((sum, s) => sum + s.score, 0) / scores.length
    const out = {
      measuredAt: new Date().toISOString(),
      method:
        'Top-2400px pixel similarity against live official pages with text hidden and animations disabled.',
      viewport: VIEWPORT,
      clip: CLIP,
      pages: scores,
      overallScore: overall
    }

    const outPath = path.join(ROOT, 'parity-report-three-locales.json')
    fs.writeFileSync(outPath, JSON.stringify(out, null, 2), 'utf8')
    console.log(`Report: ${outPath}`)
    for (const s of scores) {
      console.log(`${s.locale}/${s.slug}: ${(s.score * 100).toFixed(2)}%`)
    }
    console.log(`overall: ${(overall * 100).toFixed(2)}%`)
  } finally {
    dev.kill()
  }
}

run().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
