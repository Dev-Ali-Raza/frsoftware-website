// Dev-only: full-page screenshot of the local dev server (desktop + mobile).
import { chromium } from 'playwright-core'
import { mkdirSync } from 'node:fs'

mkdirSync('shots', { recursive: true })
const browser = await chromium.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
})
for (const [name, viewport] of [['desktop', { width: 1440, height: 900 }], ['mobile', { width: 400, height: 800 }]]) {
  const page = await browser.newPage({ viewport })
  await page.goto('http://localhost:5173/', { waitUntil: 'domcontentloaded' })
  await page.waitForTimeout(4000)
  // scroll through so whileInView reveals fire
  const h = await page.evaluate(() => document.body.scrollHeight)
  for (let y = 0; y < h; y += 600) {
    await page.evaluate((t) => window.scrollTo(0, t), y)
    await page.waitForTimeout(120)
  }
  await page.evaluate(() => window.scrollTo(0, 0))
  await page.waitForTimeout(800)
  await page.screenshot({ path: `shots/full-${name}.png`, fullPage: true })
  await page.close()
}
await browser.close()
console.log('done')
