import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { StaggerGroup, staggerItem } from './Reveal'
import { process } from '../data/site'

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/10 blur-[140px]" />

      <div className="container-px">
        <SectionHeading
          eyebrow="How we work"
          title="A clear, collaborative process"
          subtitle="No black boxes — you stay involved and informed from kickoff to launch and beyond."
        />

        <StaggerGroup className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* connecting line on large screens */}
          <div className="pointer-events-none absolute left-0 top-12 hidden h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block" />

          {process.map((p) => (
            <motion.div
              key={p.step}
              variants={staggerItem}
              className="group relative rounded-2xl border border-white/10 bg-ink-850/60 p-7 transition-colors hover:border-brand-500/40"
            >
              <div className="flex items-center gap-3">
                <span className="font-display text-4xl font-extrabold text-gradient">
                  {p.step}
                </span>
                <span className="h-px flex-1 bg-white/10" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.description}</p>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
