import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowUpRight, Globe, Activity, Store, UtensilsCrossed, ShoppingCart, Warehouse,
} from 'lucide-react'
import { hero, images } from '../data/site'

/* Phrases emphasised in the hero paragraph */
const HIGHLIGHTS = ['automate operations', 'manage sales', 'track inventory', 'handle accounting']

function HighlightedText({ text }) {
  const pattern = new RegExp(`(${HIGHLIGHTS.join('|')})`, 'g')
  return text.split(pattern).map((part, i) =>
    HIGHLIGHTS.includes(part) ? (
      <span key={i} className="font-semibold text-white">{part}</span>
    ) : (
      part
    ),
  )
}

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

/* Uptime waveform points for the right-hand status card */
const WAVE = 'M0,28 L30,28 L40,12 L48,44 L56,4 L64,36 L72,22 L84,28 L200,28'

const ROTATE_MS = 2600

/** Last word of the headline cycles with a gradient treatment. */
function RotatingWord() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % hero.rotatingWords.length), ROTATE_MS)
    return () => clearInterval(t)
  }, [])

  return (
    <span className="relative inline-grid align-bottom">
      {/* invisible longest word reserves width so the layout never jumps */}
      <span className="invisible col-start-1 row-start-1">
        {hero.rotatingWords.reduce((a, b) => (a.length >= b.length ? a : b), '')}
      </span>
      <span className="col-start-1 row-start-1 overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={hero.rotatingWords[index]}
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-gradient inline-block"
          >
            {hero.rotatingWords[index]}
          </motion.span>
        </AnimatePresence>
      </span>
      {/* hand-drawn underline flourish */}
      <svg
        className="absolute -bottom-3 left-0 w-full sm:-bottom-4"
        viewBox="0 0 120 10"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path
          d="M3,8 Q60,1 117,6"
          stroke="url(#hero-underline)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 2.1, duration: 0.8, ease: 'easeOut' }}
        />
        <defs>
          <linearGradient id="hero-underline" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="var(--color-brand-500)" />
            <stop offset="100%" stopColor="var(--color-accent-400)" />
          </linearGradient>
        </defs>
      </svg>
    </span>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-32 lg:pt-36">
      {/* dark silk-wave backdrop, hue-shifted toward purple */}
      <div className="absolute inset-0 -z-10">
        <img
          src={images.hero}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
          style={{ filter: 'hue-rotate(35deg) saturate(1.25)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/70 via-ink-950/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/40 via-transparent to-ink-950" />
        <div className="aurora-blob absolute -right-24 top-1/4 h-[520px] w-[520px] rounded-full bg-brand-600/30 blur-[140px]" />
        <div className="aurora-blob absolute left-1/3 bottom-0 h-[420px] w-[420px] rounded-full bg-accent-500/20 blur-[130px]" style={{ animationDelay: '-8s' }} />
      </div>

      <div className="container-px">
        {/* ---------------- copy ---------------- */}
        <div className="max-w-4xl">
          {/* stacked outlined tag pills */}
          <div className="mb-9 flex flex-col items-start gap-1.5">
            {hero.tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, x: -24, rotate: i % 2 === 0 ? -3 : 2 }}
                animate={{ opacity: 1, x: 0, rotate: i % 2 === 0 ? -3 : 2 }}
                whileHover={{ rotate: 0, scale: 1.06 }}
                transition={{ delay: 1.25 + i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 rounded-full border border-brand-400/50 bg-gradient-to-r from-brand-500/20 to-accent-500/10 px-4 py-1.5 text-xs font-bold text-white shadow-[0_0_24px_-8px_rgba(139,92,246,0.7)] backdrop-blur"
                style={{ marginLeft: `${i * 26}px` }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand-400 to-accent-400" />
                {tag}
              </motion.span>
            ))}
          </div>

          <motion.h1
            {...fadeUp(1.45)}
            className="text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-7xl lg:text-[5.5rem]"
          >
            Build Software
            <br />
            That <RotatingWord />
          </motion.h1>

          <motion.p
            {...fadeUp(1.55)}
            className="mt-8 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            <HighlightedText text={hero.subheading} />
          </motion.p>

          <motion.div {...fadeUp(1.65)} className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-primary animate-pulse-glow px-8 py-4 text-base">
              Get Started <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#portfolio" className="btn-ghost border-white/40 px-8 py-4 text-base">
              View Our Work <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* trust strip — industry icons + emphasised line */}
          <motion.div {...fadeUp(1.75)} className="mt-10 flex flex-wrap items-center gap-4">
            <div className="flex -space-x-2.5">
              {[Store, UtensilsCrossed, ShoppingCart, Warehouse].map((Cmp, i) => (
                <span
                  key={i}
                  className="grid h-10 w-10 place-items-center rounded-full border border-brand-500/40 bg-ink-800 text-brand-300 ring-2 ring-ink-950"
                >
                  <Cmp className="h-4 w-4" />
                </span>
              ))}
            </div>
            <p className="max-w-xs text-sm leading-snug text-slate-400">
              Trusted by <span className="font-semibold text-white">shops, restaurants &amp; retailers</span> — built
              for business owners.
            </p>
          </motion.div>
        </div>

        {/* ---------------- bottom card trio ---------------- */}
        <div className="mt-16 grid items-end gap-5 lg:mt-20 lg:grid-cols-3">
          {/* purple gradient service card */}
          <motion.div
            {...fadeUp(1.8)}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-accent-500 p-7"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.25),transparent_55%)]" />
            <span className="relative grid h-11 w-11 place-items-center rounded-full bg-white/20 text-white backdrop-blur">
              <Globe className="h-5 w-5" />
            </span>
            <h3 className="relative mt-5 text-2xl font-bold text-white">
              Web &amp; Desktop App Development
            </h3>
            <div className="relative mt-4 flex flex-wrap gap-2">
              {['Web Apps', 'Desktop Apps'].map((chip) => (
                <span key={chip} className="rounded-full border border-white/40 px-3.5 py-1 text-xs font-semibold text-white">
                  {chip}
                </span>
              ))}
            </div>
            <a
              href="#services"
              className="relative mt-6 inline-flex items-center gap-2 rounded-full border border-white/60 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-brand-700"
            >
              Get Started <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* centerpiece image card */}
          <motion.a
            {...fadeUp(1.9)}
            href="#services"
            className="group relative block h-80 overflow-hidden rounded-3xl border border-white/10 lg:h-[400px]"
          >
            <img
              src={images.heroCard}
              alt="Futuristic robot — custom software development"
              className="absolute inset-0 h-full w-full object-cover brightness-125 transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(139,92,246,0.35),transparent_65%)]" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/95 via-transparent to-transparent" />
            <span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/40 bg-ink-950/40 text-white backdrop-blur transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-ink-950">
              <ArrowUpRight className="h-5 w-5" />
            </span>
            <h3 className="absolute inset-x-6 bottom-6 text-center text-2xl font-bold text-white">
              Custom Software Development
            </h3>
          </motion.a>

          {/* uptime status card */}
          <motion.div
            {...fadeUp(2)}
            className="glass relative overflow-hidden rounded-3xl p-7"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="font-display text-4xl font-extrabold text-white">99.9%</p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Guaranteed Uptime
                </p>
              </div>
              <span className="grid h-10 w-10 place-items-center rounded-full border border-brand-500/50 text-brand-300">
                <Activity className="h-4 w-4" />
              </span>
            </div>

            <div className="mt-6 flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.2em]">
              <span className="text-slate-400">System Status</span>
              <span className="inline-flex items-center gap-1.5 text-emerald-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> Operational
              </span>
            </div>
            <svg viewBox="0 0 200 56" className="mt-3 h-14 w-full" preserveAspectRatio="none" aria-hidden="true">
              <path d={WAVE} fill="none" stroke="url(#wave-grad)" strokeWidth="2.5" strokeLinejoin="round" />
              <defs>
                <linearGradient id="wave-grad" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="var(--color-brand-500)" />
                  <stop offset="100%" stopColor="var(--color-accent-400)" />
                </linearGradient>
              </defs>
            </svg>
            <h3 className="mt-4 text-center text-2xl font-bold text-white">Reliable &amp; Supported</h3>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
