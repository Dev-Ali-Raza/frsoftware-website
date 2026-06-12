// Dev-only: screenshot the page at a given scroll offset.
import { chromium } from 'playwright-core'

const y = Number(process.argv[2] ?? 0)
const browser = await chromium.launch({
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
})
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
await page.goto('http://localhost:5173/', { waitUntil: 'domcontentloaded' })
await page.waitForTimeout(6000)
await page.evaluate((top) => window.scrollTo({ top, behavior: 'instant' }), y)
await page.waitForTimeout(2000)
await page.screenshot({ path: `shots/scroll-${y}.png` })
await browser.close()
console.log('done')
