// Dev-only: scrape Unsplash search results for candidate image IDs.
import { chromium } from 'playwright-core'

const query = process.argv[2] ?? '3d render robot'
const browser = await chromium.launch({
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
})
const page = await browser.newPage({ viewport: { width: 1440, height: 2000 } })
await page.goto(`https://unsplash.com/s/photos/${encodeURIComponent(query)}`, {
  waitUntil: 'domcontentloaded',
  timeout: 60000,
})
await page.waitForTimeout(8000)
await page.evaluate(() => window.scrollTo(0, 1500))
await page.waitForTimeout(3000)

const info = await page.evaluate(() => {
  const all = [...document.querySelectorAll('img')]
  const out = new Set()
  for (const img of all) {
    const src = img.currentSrc || img.src || ''
    const m = src.match(/photo-([0-9a-f-]+)/)
    if (m) out.add(m[1])
  }
  return { total: all.length, ids: [...out], title: document.title, sample: all.slice(0, 5).map((i) => (i.currentSrc || i.src || '').slice(0, 90)) }
})
console.log(JSON.stringify(info, null, 2))
await browser.close()
