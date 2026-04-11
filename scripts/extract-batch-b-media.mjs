import { chromium } from 'playwright'

const targets = [
  { slug: 'titan', url: 'https://www.voyah.com.cn/titan.html' },
  { slug: 'titan_blackedition', url: 'https://www.voyah.com.cn/titan_blackedition.html' },
  { slug: 'titan_X8', url: 'https://www.voyah.com.cn/titan_X8.html' }
]

const browser = await chromium.launch({ headless: true })
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } })

const collectForPage = async ({ slug, url }) => {
  await page.goto(url, { waitUntil: 'networkidle', timeout: 120000 })
  await page.waitForTimeout(2000)

  const urls = await page.evaluate((pageSlug) => {
    const set = new Set()
    const keep = (value) => {
      if (!value) return
      try {
        const normalized = new URL(value, location.origin).href
        if (normalized.includes(`/voyah-resources/images/car/${pageSlug}/`)) {
          set.add(normalized)
        }
      } catch {
        // noop
      }
    }

    document.querySelectorAll('img').forEach((img) => keep(img.src))
    document.querySelectorAll('video').forEach((video) => {
      keep(video.src)
      video.querySelectorAll('source').forEach((source) => keep(source.src))
    })

    return [...set].sort()
  }, slug)

  return { slug, count: urls.length, urls }
}

const all = []
for (const target of targets) {
  // eslint-disable-next-line no-await-in-loop
  all.push(await collectForPage(target))
}

console.log(JSON.stringify(all, null, 2))
await browser.close()
