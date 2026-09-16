import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Maximize2 } from 'lucide-react'
import Lightbox from './Lightbox'
import { StaggerGroup, staggerItem } from './Reveal'

/**
 * Responsive screenshot grid with a lightbox.
 * Landscape shots get 16:10 tiles, phone shots get tall 9:16 tiles.
 * Shows `initial` tiles first, with a "show all" toggle.
 */
export default function ScreenshotGallery({ images, initial = 9 }) {
  const [open, setOpen] = useState(null)
  const [expanded, setExpanded] = useState(false)

  if (!images?.length) return null

  const mostlyPortrait = images.filter((i) => i.portrait).length > images.length / 2
  const limit = mostlyPortrait ? 10 : initial
  const visible = expanded ? images : images.slice(0, limit)
  const hidden = images.length - visible.length

  return (
    <>
      <StaggerGroup
        className={`grid gap-4 sm:gap-5 ${
          mostlyPortrait ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5' : 'sm:grid-cols-2 lg:grid-cols-3'
        }`}
        stagger={0.05}
      >
        {visible.map((img, i) => (
          <motion.figure key={img.src} variants={staggerItem} className="group">
            <button
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`Open screenshot: ${img.caption}`}
              className={`relative block w-full overflow-hidden rounded-2xl border border-surface-300 bg-surface-100 shadow-[0_10px_30px_-18px_rgba(15,29,43,0.35)] transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_18px_40px_-18px_rgba(46,158,205,0.35)] ${
                img.portrait ? 'aspect-[9/16]' : 'aspect-[16/10]'
              }`}
            >
              <img
                src={img.src}
                alt={img.caption}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-navy-800 opacity-0 shadow transition-opacity group-hover:opacity-100">
                <Maximize2 className="h-3.5 w-3.5" />
              </span>
            </button>
            <figcaption className="mt-2.5 truncate text-center text-xs font-medium text-slate-500 sm:text-sm">
              {img.caption}
            </figcaption>
          </motion.figure>
        ))}
      </StaggerGroup>

      {hidden > 0 && (
        <div className="mt-8 text-center">
          <button type="button" onClick={() => setExpanded(true)} className="btn-secondary px-6 py-3">
            Show all {images.length} screenshots <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      )}

      <Lightbox images={images} index={open} onClose={() => setOpen(null)} onChange={setOpen} />
    </>
  )
}
