import { chromium } from 'playwright'

const pageUrl = 'https://www.voyah.com.cn/passion.html'

const browser = await chromium.launch({ headless: true })
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } })

await page.goto(pageUrl, { waitUntil: 'networkidle', timeout: 120000 })
await page.waitForTimeout(2500)

const assets = await page.evaluate(() => {
  const urls = new Set()
  const collect = (value) => {
    if (!value) return
    try {
      const normalized = new URL(value, location.origin).href
      if (
        normalized.includes('/voyah-resources/images/car/passion') ||
        normalized.includes('/website/')
      ) {
        urls.add(normalized)
      }
    } catch {
      // noop
    }
  }

  document.querySelectorAll('img').forEach((img) => collect(img.src))
  document.querySelectorAll('video').forEach((video) => {
    collect(video.src)
    video.querySelectorAll('source').forEach((source) => collect(source.src))
  })
  document.querySelectorAll('[style]').forEach((el) => {
    const style = el.getAttribute('style') ?? ''
    const matches = style.match(/url\(([^)]+)\)/g) ?? []
    matches.forEach((entry) => {
      const raw = entry.replace(/^url\(/, '').replace(/\)$/, '').replace(/['"]/g, '')
      collect(raw)
    })
  })

  return [...urls].sort()
})

console.log(JSON.stringify(assets, null, 2))
await browser.close()
