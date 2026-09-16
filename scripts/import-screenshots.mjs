#!/usr/bin/env node
/**
 * Import a folder of raw screenshots into public/projects/<slug>/ as
 * optimised WebP files (requires ffmpeg on PATH).
 *
 *   node scripts/import-screenshots.mjs <sourceDir> <slug> [options]
 *
 * Options
 *   --maxw 1600        max output width (default 1600; use ~720 for phone shots)
 *                      (height is always capped at 12000px — WebP limit)
 *   --quality 80       WebP quality (default 80)
 *   --prefix m         prefix added to every output filename (e.g. "m" → m01-login.webp)
 *   --exclude "a,b"    comma-separated source filenames to skip
 *   --video path.mp4   also import a walkthrough video (re-encoded to 1280p H.264)
 *   --clean            delete existing files in the target folder first
 *
 * Output filenames are slugified from the source names:
 *   "02 Student Management.png" → "02-student-management.webp"
 * Captions on the site are derived from these names (see scripts/screenshots.mjs).
 */
import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, readdirSync, rmSync, statSync } from 'node:fs'
import { basename, extname, join, resolve } from 'node:path'

const args = process.argv.slice(2)
const VALUE_OPTS = new Set(['--maxw', '--quality', '--prefix', '--exclude', '--video'])
const positional = args.filter((a, i) => !a.startsWith('--') && !VALUE_OPTS.has(args[i - 1]))
const opt = (name, def) => {
  const i = args.indexOf(`--${name}`)
  return i === -1 ? def : args[i + 1]
}
const flag = (name) => args.includes(`--${name}`)

const [srcDir, slug] = positional
if (!srcDir || !slug) {
  console.error('usage: node scripts/import-screenshots.mjs <sourceDir> <slug> [--maxw 1600] [--quality 80] [--prefix x] [--exclude a,b] [--video file] [--clean]')
  process.exit(1)
}

const maxw = Number(opt('maxw', 1600))
const quality = Number(opt('quality', 80))
const prefix = opt('prefix', '')
const exclude = new Set((opt('exclude', '') || '').split(',').map((s) => s.trim()).filter(Boolean))
const video = opt('video', null)

const outDir = resolve('public/projects', slug)
if (flag('clean') && existsSync(outDir)) rmSync(outDir, { recursive: true, force: true })
mkdirSync(outDir, { recursive: true })

const slugify = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

const IMG = new Set(['.png', '.jpg', '.jpeg', '.webp'])
const files = readdirSync(srcDir)
  .filter((f) => IMG.has(extname(f).toLowerCase()) && !exclude.has(f) && statSync(join(srcDir, f)).isFile())
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))

let done = 0
for (const f of files) {
  const out = join(outDir, `${prefix}${slugify(basename(f, extname(f)))}.webp`)
  execFileSync('ffmpeg', [
    '-y', '-hide_banner', '-loglevel', 'error',
    '-i', join(srcDir, f),
    '-vf', `scale='min(${maxw},iw)':-2:flags=lanczos,scale=-2:'min(12000,ih)':flags=lanczos`,
    '-c:v', 'libwebp', '-quality', String(quality), '-compression_level', '6',
    out,
  ])
  done++
  process.stdout.write(`\r  ${done}/${files.length}  ${basename(out)}`.padEnd(80))
}
console.log(`\n✓ ${done} images → public/projects/${slug}/`)

if (video) {
  const outVideo = join(outDir, 'walkthrough.mp4')
  const poster = join(outDir, 'walkthrough-poster.webp')
  console.log('  encoding video…')
  execFileSync('ffmpeg', [
    '-y', '-hide_banner', '-loglevel', 'error',
    '-i', video,
    '-vf', "scale='min(1280,iw)':-2",
    '-c:v', 'libx264', '-crf', '26', '-preset', 'slow', '-pix_fmt', 'yuv420p',
    '-movflags', '+faststart',
    '-c:a', 'aac', '-b:a', '96k',
    outVideo,
  ])
  execFileSync('ffmpeg', ['-y', '-hide_banner', '-loglevel', 'error', '-ss', '3', '-i', outVideo, '-frames:v', '1', '-c:v', 'libwebp', '-quality', '80', poster])
  console.log(`✓ video → public/projects/${slug}/walkthrough.mp4 (+ poster)`)
}

console.log('\nNext: npm run screenshots   (regenerates src/data/screenshots.generated.js)')
