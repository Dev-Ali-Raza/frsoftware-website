import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BrandMark } from './Logo'
import { company } from '../data/site'

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
          className="fixed inset-0 z-[100] grid place-items-center bg-ink-950"
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="relative grid h-24 w-24 place-items-center">
              {/* spinning gradient ring */}
              <span className="loader-ring absolute inset-0 rounded-full border-2 border-transparent border-t-accent-400 border-r-brand-500" />
              <span className="absolute inset-2 rounded-full bg-brand-500/10 animate-pulse-glow" />
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <BrandMark className="h-14 w-14" />
              </motion.div>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-sm font-medium tracking-wide text-slate-400"
            >
              {company.tagline}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
