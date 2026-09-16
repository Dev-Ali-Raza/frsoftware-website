import { useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

/**
 * Full-screen image viewer with prev / next, keyboard arrows and Escape.
 * `images`: [{ src, caption, portrait }], `index`: open image or null.
 */
export default function Lightbox({ images, index, onClose, onChange }) {
  const open = index != null && images[index]
  const count = images.length

  const step = useCallback(
    (dir) => onChange((index + dir + count) % count),
    [index, count, onChange],
  )

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose, step])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex flex-col bg-navy-950/95 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={images[index].caption}
        >
          {/* top bar */}
          <div className="flex items-center justify-between gap-4 px-4 py-3 text-sm text-slate-300 sm:px-6">
            <span className="truncate font-medium text-white">{images[index].caption}</span>
            <span className="flex shrink-0 items-center gap-3">
              <span className="tabular-nums text-slate-400">{index + 1} / {count}</span>
              <button
                onClick={onClose}
                aria-label="Close"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/15"
              >
                <X className="h-4 w-4" />
              </button>
            </span>
          </div>

          {/* image (scrolls if taller than the viewport, e.g. full-page captures) */}
          <div className="relative flex-1 overflow-auto px-4 pb-6 sm:px-16" onClick={(e) => e.stopPropagation()}>
            <motion.img
              key={images[index].src}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              src={images[index].src}
              alt={images[index].caption}
              className={`mx-auto rounded-xl shadow-2xl ${
                images[index].portrait ? 'w-auto max-w-full sm:max-h-none' : 'w-full max-w-6xl'
              }`}
              style={images[index].portrait ? { maxWidth: 'min(100%, 420px)' } : undefined}
            />
          </div>

          {count > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); step(-1) }}
                aria-label="Previous"
                className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-navy-900/70 text-white transition-colors hover:bg-brand-500 sm:left-5"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); step(1) }}
                aria-label="Next"
                className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-navy-900/70 text-white transition-colors hover:bg-brand-500 sm:right-5"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
