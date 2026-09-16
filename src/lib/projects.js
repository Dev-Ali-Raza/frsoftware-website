import { projects, projectImages } from '../data/site'
import { projectDetails } from '../data/projectDetails'
import { generatedScreenshots } from '../data/screenshots.generated'

/** URL of a project's detail page. */
export const projectPath = (project) => `/projects/${project.slug}`

/** Screenshots + video for a slug (from public/projects/<slug>/). */
export function projectMedia(slug) {
  const gen = generatedScreenshots[slug] || { images: [], video: null }
  const captions = projectDetails[slug]?.captions || {}
  const images = gen.images.map((img) => {
    const file = img.src.split('/').pop()
    return { ...img, caption: captions[file] || img.caption, portrait: img.h > img.w }
  })
  return { images, video: gen.video }
}

/** Best "cover" screenshot: prefer a dashboard / POS / home screen over login or auth screens. */
export function coverShot(images) {
  if (!images.length) return null
  const boring = /login|sign-?in|register|disclaimer|password/i
  const preferred = /dashboard|pos|home|storefront|terminal/i
  const landscape = images.filter((i) => !i.portrait)
  const pool = landscape.length ? landscape : images
  return pool.find((i) => preferred.test(i.src) && !boring.test(i.src)) || pool.find((i) => !boring.test(i.src)) || pool[0]
}

/** Card thumbnail: best screenshot, else the stock photo. */
export function projectThumb(project) {
  const shot = coverShot(projectMedia(project.slug).images)
  return shot ? { src: shot.src, portrait: shot.portrait } : { src: projectImages[project.name], portrait: false }
}

/** Card data + detail-page data + media merged, or null if the slug is unknown. */
export function getProjectBySlug(slug) {
  const base = projects.find((p) => p.slug === slug)
  if (!base) return null
  const details = projectDetails[slug] || {}
  const media = projectMedia(slug)
  return {
    ...base,
    stockImage: projectImages[base.name],
    tagline: details.tagline || base.description,
    facts: details.facts || [],
    highlights: details.highlights || [],
    overview: details.overview || [base.description],
    modules: details.modules || [],
    screenshots: media.images,
    video: media.video,
  }
}

/** Up to `limit` other projects, those sharing a category first. */
export function relatedProjects(project, limit = 3) {
  const shared = projects.filter(
    (p) => p.slug !== project.slug && p.categories.some((c) => project.categories.includes(c)),
  )
  const rest = projects.filter((p) => p.slug !== project.slug && !shared.includes(p))
  return [...shared, ...rest].slice(0, limit)
}
