import { useEffect } from 'react'
import { company } from '../data/site'

const q = (sel) => document.head.querySelector(sel)
const set = (sel, attr, value) => {
  const el = q(sel)
  if (el && value != null) el.setAttribute(attr, value)
}

/** Sets <title>, description, canonical, and OG tags for a page; restores the defaults on unmount. */
export default function usePageMeta({ title, description, path = '/', image }) {
  useEffect(() => {
    const prev = {
      title: document.title,
      desc: q('meta[name="description"]')?.getAttribute('content'),
      canonical: q('link[rel="canonical"]')?.getAttribute('href'),
      ogTitle: q('meta[property="og:title"]')?.getAttribute('content'),
      ogDesc: q('meta[property="og:description"]')?.getAttribute('content'),
      ogUrl: q('meta[property="og:url"]')?.getAttribute('content'),
      ogImage: q('meta[property="og:image"]')?.getAttribute('content'),
    }
    const url = `${company.url}${path}`
    document.title = title
    set('meta[name="description"]', 'content', description)
    set('link[rel="canonical"]', 'href', url)
    set('meta[property="og:title"]', 'content', title)
    set('meta[property="og:description"]', 'content', description)
    set('meta[property="og:url"]', 'content', url)
    if (image) set('meta[property="og:image"]', 'content', image.startsWith('http') ? image : `${company.url}${image}`)

    return () => {
      document.title = prev.title
      set('meta[name="description"]', 'content', prev.desc)
      set('link[rel="canonical"]', 'href', prev.canonical)
      set('meta[property="og:title"]', 'content', prev.ogTitle)
      set('meta[property="og:description"]', 'content', prev.ogDesc)
      set('meta[property="og:url"]', 'content', prev.ogUrl)
      set('meta[property="og:image"]', 'content', prev.ogImage)
    }
  }, [title, description, path, image])
}
