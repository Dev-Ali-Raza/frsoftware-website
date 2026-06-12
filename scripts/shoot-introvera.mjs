// Dev-only: capture introvera.com for visual comparison.
import { chromium } from 'playwright-core'
import { mkdirSync } from 'node:fs'

const OUT = 'shots/introvera'
mkdirSync(OUT, { recursive: true })

const browser = await chromium.launch({
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
})
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
await page.goto('https://introvera.com/', { waitUntil: 'load', timeout: 60000 })
await page.waitForTimeout(5000)

const totalHeight = await page.evaluate(() => document.body.scrollHeight)
let shot = 1
for (let y = 0; y < totalHeight && shot <= 10; y += 900) {
  await page.evaluate((top) => window.scrollTo({ top, behavior: 'instant' }), y)
  await page.waitForTimeout(1500)
  await page.screenshot({ path: `${OUT}/${String(shot++).padStart(2, '0')}.png` })
}

await browser.close()
console.log('done', totalHeight)
