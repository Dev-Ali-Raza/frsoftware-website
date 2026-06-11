import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { testimonials } from '../data/site'

const AUTOPLAY_MS = 6000

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)

  const go = (dir) => {
    setDirection(dir)
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => go(1), AUTOPLAY_MS)
    return () => clearInterval(t)
  }, [paused])

  const current = testimonials[index]

  return (
    <section id="testimonials" className="relative py-24">
      <div className="pointer-events-none absolute right-1/4 bottom-0 -z-10 h-[380px] w-[550px] rounded-full bg-brand-600/10 blur-[140px]" />

      <div className="container-px">
        <SectionHeading
          eyebrow="Client Feedback"
          title="What Business Owners Say"
          subtitle="Real feedback from the shops, restaurants, and businesses running our software every day."
        />

        <Reveal className="mx-auto mt-14 max-w-3xl">
          <div
            className="glass relative overflow-hidden p-8 sm:p-12"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <Quote className="absolute left-6 top-6 h-16 w-16 text-brand-500/10" />

            <div className="relative min-h-[180px] sm:min-h-[150px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.figure
                  key={index}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -60 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="text-center"
                >
                  <div className="flex justify-center gap-1">
                    {Array.from({ length: current.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <blockquote className="mt-5 text-lg leading-relaxed text-slate-200 sm:text-xl">
                    “{current.quote}”
                  </blockquote>
                  <figcaption className="mt-6">
                    <p className="font-display font-bold text-white">{current.name}</p>
                    <p className="text-sm text-accent-300">{current.role}</p>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            {/* controls */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > index ? 1 : -1)
                      setIndex(i)
                    }}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === index ? 'w-7 bg-gradient-to-r from-brand-500 to-accent-400' : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
