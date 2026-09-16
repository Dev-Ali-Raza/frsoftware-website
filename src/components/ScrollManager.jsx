import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * On route change: scroll to top, or to the #hash target once it exists.
 * Hash-only changes on the same page are left to the browser.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation()
  const prevPath = useRef(null)

  useEffect(() => {
    const pathChanged = prevPath.current !== pathname
    prevPath.current = pathname
    if (!pathChanged) return

    if (hash) {
      let tries = 0
      const tick = () => {
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        else if (tries++ < 60) requestAnimationFrame(tick)
      }
      tick()
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
  }, [pathname, hash])

  return null
}
