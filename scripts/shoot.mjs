// Dev-only: capture section screenshots of the local dev server.
import { chromium } from 'playwright-core'
import { mkdirSync } from 'node:fs'

const OUT = 'shots'
mkdirSync(OUT, { recursive: true })

const browser = await chromium.launch({
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
})
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
await page.goto('http://localhost:5173/', { waitUntil: 'domcontentloaded' })
await page.waitForTimeout(6000) // let preloader finish + hero image load

await page.screenshot({ path: `${OUT}/01-hero.png` })

const sections = ['about', 'services', 'products', 'portfolio', 'team', 'process', 'testimonials', 'contact']
let i = 2
for (const id of sections) {
  await page.evaluate((sel) => document.querySelector(sel)?.scrollIntoView({ behavior: 'instant' }), `#${id}`)
  await page.waitForTimeout(1800) // let reveal animations + images settle
  await page.screenshot({ path: `${OUT}/${String(i++).padStart(2, '0')}-${id}.png` })
}

await browser.close()
console.log('done')
