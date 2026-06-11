import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Package, CheckCircle2, TrendingUp, ShoppingCart, Receipt } from 'lucide-react'
import Icon from './Icon'
import { hero, brand, company } from '../data/site'

/* Deterministic particle field (size / position / speed) */
const PARTICLES = Array.from({ length: 16 }, (_, i) => ({
  left: `${(i * 61) % 100}%`,
  size: 2 + (i % 3),
  duration: 12 + ((i * 7) % 14),
  delay: -((i * 3.7) % 16),
}))

/* Positions for the floating capability icons around the dashboard */
const ICON_SPOTS = [
  'top-0 -left-4 lg:-left-10',
  '-top-6 right-12',
  'top-1/4 -right-6 lg:-right-12',
  'top-1/2 -left-8 lg:-left-14',
  'bottom-1/4 -right-4 lg:-right-10',
  '-bottom-6 left-10',
  'bottom-0 right-1/4',
  'top-2/3 right-1/2',
]

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  const sectionRef = useRef(null)
  const [hasCover, setHasCover] = useState(true)

  // Parallax: background drifts slower, dashboard drifts faster than scroll
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const visualY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%'])

  return (
    <section id="home" ref={sectionRef} className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* ---- layered background: cover image → gradient → grid → blobs → particles ---- */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
        {hasCover && (
          <img
            src={brand.cover}
            alt=""
            aria-hidden="true"
            onError={() => setHasCover(false)}
            className="absolute inset-0 h-full w-full object-cover opacity-[0.16]"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/80 via-ink-900/90 to-ink-900" />
        <div className="bg-grid absolute inset-0 opacity-60" />
        <div className="aurora-blob absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-brand-600/25 blur-[120px]" />
        <div className="aurora-blob absolute top-1/3 -right-40 h-[520px] w-[520px] rounded-full bg-accent-500/20 blur-[130px]" style={{ animationDelay: '-6s' }} />
        <div className="aurora-blob absolute -bottom-40 left-1/3 h-[420px] w-[420px] rounded-full bg-indigo-600/20 blur-[120px]" style={{ animationDelay: '-12s' }} />
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="particle"
            style={{ left: p.left, width: p.size, height: p.size, '--pd': `${p.duration}s`, '--pdelay': `${p.delay}s` }}
          />
        ))}
      </motion.div>

      <div className="container-px grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        {/* ---------------- copy ---------------- */}
        <div className="max-w-2xl">
          <motion.span {...fadeUp(1.3)} className="eyebrow">
            {company.tagline}
          </motion.span>

          <motion.h1
            {...fadeUp(1.4)}
            className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]"
          >
            Building Smart <span className="text-gradient">Software Solutions</span> for Growing Businesses
          </motion.h1>

          <motion.p {...fadeUp(1.5)} className="mt-6 text-lg leading-relaxed text-slate-400">
            {hero.subheading}
          </motion.p>

          <motion.div {...fadeUp(1.6)} className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-primary px-8 py-3.5 text-base">
              Request Free Demo <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#products" className="btn-ghost px-8 py-3.5 text-base">
              View Our Products
            </a>
          </motion.div>

          <motion.p {...fadeUp(1.7)} className="mt-8 flex items-center gap-2 text-sm text-slate-500">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-400" />
            {hero.trustLine}
          </motion.p>
        </div>

        {/* ---------------- 3D dashboard mockup ---------------- */}
        <motion.div
          style={{ y: visualY }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="perspective-1200 relative mx-auto w-full max-w-xl"
        >
          {/* floating capability icons */}
          {hero.floatingIcons.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2 + i * 0.12, duration: 0.5, ease: 'backOut' }}
              className={`animate-bob absolute z-20 hidden sm:flex ${ICON_SPOTS[i]}`}
              style={{ animationDelay: `${-i * 0.7}s` }}
            >
              <span className="glass flex items-center gap-2 rounded-xl px-3 py-2 shadow-lg shadow-ink-950/60">
                <Icon name={item.icon} className="h-4 w-4 text-accent-400" />
                <span className="text-xs font-semibold text-slate-200">{item.label}</span>
              </span>
            </motion.div>
          ))}

          {/* dashboard card — subtle 3D tilt via CSS transform */}
          <div
            className="preserve-3d glass relative overflow-hidden rounded-3xl border-white/15 shadow-2xl shadow-brand-600/20"
            style={{ transform: 'rotateY(-8deg) rotateX(4deg)' }}
          >
            {/* window chrome */}
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              <span className="ml-3 text-xs font-medium text-slate-400">Mart POS — Business Dashboard</span>
            </div>

            <div className="grid grid-cols-[auto_1fr] gap-4 p-5">
              {/* mini sidebar */}
              <div className="hidden flex-col gap-3 sm:flex">
                {[ShoppingCart, Package, Receipt, TrendingUp].map((Cmp, i) => (
                  <span
                    key={i}
                    className={`grid h-9 w-9 place-items-center rounded-lg border border-white/10 ${
                      i === 0 ? 'bg-brand-500/30 text-brand-300' : 'bg-white/5 text-slate-400'
                    }`}
                  >
                    <Cmp className="h-4 w-4" />
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                {/* KPI tiles */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Today's Sales", value: 'Rs 84,200', tone: 'text-accent-300' },
                    { label: 'Invoices', value: '126', tone: 'text-brand-300' },
                    { label: 'Profit', value: '+18%', tone: 'text-emerald-400' },
                  ].map((kpi) => (
                    <div key={kpi.label} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                      <p className="text-[10px] uppercase tracking-wider text-slate-500">{kpi.label}</p>
                      <p className={`mt-1 font-display text-sm font-bold sm:text-base ${kpi.tone}`}>{kpi.value}</p>
                    </div>
                  ))}
                </div>

                {/* animated bar chart */}
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-xs font-semibold text-slate-300">Weekly Sales</p>
                    <span className="flex items-center gap-1 text-[10px] font-medium text-emerald-400">
                      <TrendingUp className="h-3 w-3" /> +12.4%
                    </span>
                  </div>
                  <div className="flex h-20 items-end gap-2">
                    {[45, 70, 55, 90, 65, 100, 80].map((h, i) => (
                      <motion.span
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 2.2 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="flex-1 rounded-t-md bg-gradient-to-t from-brand-600/70 to-accent-400/90"
                      />
                    ))}
                  </div>
                </div>

                {/* activity rows */}
                <div className="space-y-2">
                  {[
                    { name: 'Low stock alert — 8 items', dot: 'bg-amber-400' },
                    { name: 'Daily report generated', dot: 'bg-emerald-400' },
                  ].map((row) => (
                    <div key={row.name} className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
                      <span className={`h-1.5 w-1.5 rounded-full ${row.dot}`} />
                      <span className="text-xs text-slate-400">{row.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* sheen */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_0%,rgba(34,211,238,0.12),transparent_55%)]" />
          </div>

          {/* depth shadow card behind */}
          <div
            className="absolute -bottom-4 left-6 right-2 -z-10 h-24 rounded-3xl bg-brand-600/20 blur-2xl"
            aria-hidden="true"
          />
        </motion.div>
      </div>
    </section>
  )
}
