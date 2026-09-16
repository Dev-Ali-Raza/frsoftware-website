#!/usr/bin/env node
/** Writes public/sitemap.xml from the project list (runs in "prebuild"). */
import { writeFileSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'

const { company, projects } = await import(pathToFileURL(resolve('src/data/site.js')).href)
const today = new Date().toISOString().slice(0, 10)
const url = (path, priority, changefreq = 'monthly') =>
  `  <url>\n    <loc>${company.url}${path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[url('/', '1.0', 'weekly'), ...projects.map((p) => url(`/projects/${p.slug}`, p.featured ? '0.9' : '0.7'))].join('\n')}
</urlset>
`
writeFileSync('public/sitemap.xml', xml)
writeFileSync('public/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${company.url}/sitemap.xml\n`)
console.log(`✓ public/sitemap.xml (${projects.length + 1} urls) + robots.txt`)
