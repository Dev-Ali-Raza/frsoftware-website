import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { brand, company } from '../data/site'

/** Branded loading screen shown briefly on first paint. */
export default function Preloader() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] grid place-items-center bg-white"
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-6">
            <motion.img
              src={brand.logo}
              alt={company.name}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="h-16 w-auto sm:h-20"
              draggable="false"
            />
            {/* thin brand progress line */}
            <div className="h-1 w-40 overflow-hidden rounded-full bg-surface-200">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
                className="h-full w-1/2 rounded-full bg-gradient-to-r from-navy-700 to-brand-500"
              />
            </div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-sm font-medium tracking-wide text-slate-500"
            >
              {company.tagline}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
