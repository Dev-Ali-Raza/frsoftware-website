import { motion } from 'framer-motion'
import { ArrowRight, Play, Star } from 'lucide-react'
import { company, stats } from '../data/site'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      {/* Animated aurora background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-ink-900" />
        <div className="aurora-blob absolute -left-32 top-0 h-[34rem] w-[34rem] rounded-full bg-brand-600/30 blur-[120px]" />
        <div className="aurora-blob absolute right-0 top-24 h-[28rem] w-[28rem] rounded-full bg-accent-500/20 blur-[120px] [animation-delay:-6s]" />
        <div className="aurora-blob absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-violet-600/20 blur-[120px] [animation-delay:-12s]" />
        {/* grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.06) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent)',
          }}
        />
      </div>

      <div className="container-px">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <span className="eyebrow">
              <Star className="h-3.5 w-3.5 fill-current" />
              Trusted by 65+ companies worldwide
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-6 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            We build{' '}
            <span className="text-gradient">software</span> that moves your
            business <span className="text-gradient">forward</span>.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mx-auto mt-6 max-w-2xl text-lg text-slate-300/90 sm:text-xl"
          >
            {company.description}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a href="#contact" className="btn-primary text-base">
              Start your project <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#work" className="btn-ghost text-base">
              <Play className="h-4 w-4" /> View our work
            </a>
          </motion.div>
        </div>

        {/* Floating stat band */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
          className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-white/[0.01] px-6 py-7 text-center">
              <div className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                {s.value}
                <span className="text-gradient">{s.suffix}</span>
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-16 flex justify-center"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="h-1.5 w-1.5 rounded-full bg-white/70"
          />
        </div>
      </motion.div>
    </section>
  )
}
