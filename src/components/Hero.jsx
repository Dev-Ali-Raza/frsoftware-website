import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight, ArrowUpRight, CheckCircle2, Store, UtensilsCrossed, ShoppingCart, Warehouse,
  TrendingUp, Boxes, ScanBarcode, BarChart3, ShieldCheck,
} from 'lucide-react'
import { hero } from '../data/site'

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

const ROTATE_MS = 2600

/** Last word of the headline cycles with a blue gradient treatment. */
function RotatingWord() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % hero.rotatingWords.length), ROTATE_MS)
    return () => clearInterval(t)
  }, [])

  return (
    <span className="relative inline-grid align-bottom">
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
            className="text-gradient-light inline-block"
          >
            {hero.rotatingWords[index]}
          </motion.span>
        </AnimatePresence>
      </span>
      {/* swoosh underline — echoes the logo */}
      <svg
        className="absolute -bottom-2 left-0 w-full sm:-bottom-3"
        viewBox="0 0 120 10"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path
          d="M3,8 Q60,-2 117,5"
          stroke="var(--color-brand-500)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 2.1, duration: 0.8, ease: 'easeOut' }}
        />
      </svg>
    </span>
  )
}

/* Bars for the mock sales chart in the dashboard card */
const BARS = [42, 58, 50, 74, 66, 88, 80]

/** Product-style dashboard mock — sells "business software" at a glance. */
function DashboardMock() {
  return (
    <div className="relative">
      {/* main dashboard card */}
      <motion.div
        {...fadeUp(1.7)}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-white shadow-[0_30px_80px_-24px_rgba(0,0,0,0.6)]"
      >
        {/* window chrome */}
        <div className="flex items-center gap-2 border-b border-surface-200 bg-surface-100 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <span className="ml-3 text-[11px] font-semibold text-slate-400">FR Business Dashboard</span>
        </div>

        <div className="grid grid-cols-[52px_1fr]">
          {/* sidebar */}
          <div className="flex flex-col items-center gap-3 border-r border-surface-200 bg-navy-800 py-4">
            {[BarChart3, ScanBarcode, Boxes, TrendingUp, ShieldCheck].map((Cmp, i) => (
              <span
                key={i}
                className={`grid h-8 w-8 place-items-center rounded-lg ${
                  i === 0 ? 'bg-brand-500 text-white' : 'text-slate-400'
                }`}
              >
                <Cmp className="h-4 w-4" />
              </span>
            ))}
          </div>

          {/* content */}
          <div className="p-4 sm:p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Today's Sales</p>
                <p className="mt-1 font-display text-2xl font-extrabold text-navy-800">Rs 184,250</p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-600">
                <TrendingUp className="h-3 w-3" /> +12.4%
              </span>
            </div>

            {/* bar chart */}
            <div className="mt-4 flex h-24 items-end gap-2">
              {BARS.map((h, i) => (
                <motion.span
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 2 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={`flex-1 rounded-t-md ${i === BARS.length - 2 ? 'bg-brand-500' : 'bg-brand-100'}`}
                />
              ))}
            </div>

            {/* mini stat tiles */}
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[
                ['Orders', '312'],
                ['Low Stock', '7'],
                ['Profit', '38%'],
              ].map(([k, v]) => (
                <div key={k} className="rounded-lg border border-surface-200 bg-surface-100 px-3 py-2">
                  <p className="text-[10px] font-semibold text-slate-400">{k}</p>
                  <p className="font-display text-base font-extrabold text-navy-800">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* floating badge — inventory */}
      <motion.div
        initial={{ opacity: 0, x: 24, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 2.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="animate-bob absolute -top-8 -left-6 hidden items-center gap-3 rounded-xl border border-white/10 bg-navy-700/95 p-3 pr-4 shadow-xl backdrop-blur sm:flex lg:-left-14"
      >
        <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-500 text-white">
          <Boxes className="h-4 w-4" />
        </span>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Inventory</p>
          <p className="text-sm font-bold text-white">Stock synced</p>
        </div>
      </motion.div>

      {/* floating badge — POS */}
      <motion.div
        initial={{ opacity: 0, x: -24, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 2.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ animationDelay: '-2.5s' }}
        className="animate-bob absolute -bottom-9 right-6 hidden items-center gap-3 rounded-xl border border-surface-200 bg-white p-3 pr-4 shadow-xl sm:flex lg:-right-6"
      >
        <span className="grid h-9 w-9 place-items-center rounded-lg bg-emerald-500 text-white">
          <CheckCircle2 className="h-4 w-4" />
        </span>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">POS</p>
          <p className="text-sm font-bold text-navy-800">Invoice #4821 paid</p>
        </div>
      </motion.div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="bg-hero relative overflow-hidden pb-20 pt-32 text-slate-300 lg:pb-28 lg:pt-40">
      {/* subtle animated grid + blue glow */}
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="aurora-blob pointer-events-none absolute -right-32 top-0 h-[560px] w-[560px] rounded-full bg-brand-500/25 blur-[150px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-700 to-transparent" />

      <div className="container-px relative grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        {/* ---------------- copy ---------------- */}
        <div>
          <motion.div {...fadeUp(1.25)} className="flex flex-wrap gap-2">
            {hero.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-2 rounded-full border border-brand-400/40 bg-brand-500/10 px-3.5 py-1.5 text-xs font-bold text-brand-200"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.h1
            {...fadeUp(1.45)}
            className="mt-7 text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Build Software
            <br />
            That <RotatingWord />
          </motion.h1>

          <motion.p
            {...fadeUp(1.55)}
            className="mt-7 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
          >
            <HighlightedText text={hero.subheading} />
          </motion.p>

          <motion.div {...fadeUp(1.65)} className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-primary animate-pulse-glow px-8 py-4 text-base">
              Get Free Consultation <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#portfolio" className="btn-ghost px-8 py-4 text-base">
              View Our Work <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* trust strip */}
          <motion.div {...fadeUp(1.75)} className="mt-10 flex flex-wrap items-center gap-4">
            <div className="flex -space-x-2.5">
              {[Store, UtensilsCrossed, ShoppingCart, Warehouse].map((Cmp, i) => (
                <span
                  key={i}
                  className="grid h-10 w-10 place-items-center rounded-full border border-brand-400/40 bg-navy-700 text-brand-300 ring-2 ring-navy-800"
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

        {/* ---------------- visual ---------------- */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <DashboardMock />
        </div>
      </div>
    </section>
  )
}
