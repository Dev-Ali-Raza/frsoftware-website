import { motion } from 'framer-motion'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { processSteps } from '../data/site'

/** Six-step development process — animated vertical/zigzag timeline. */
export default function Process() {
  return (
    <section id="process" className="section-light relative isolate py-24">
      {/* fine dot-grid backdrop */}
      <div className="bg-dots pointer-events-none absolute inset-0 -z-10 opacity-50" aria-hidden="true" />

      <div className="container-px">
        <SectionHeading
          eyebrow="How We Work"
          title="Our Development Process"
          subtitle="A clear, step-by-step path from your first idea to a system running in your business."
        />

        <div className="relative mx-auto mt-16 max-w-4xl">
          {/* center line (desktop) / left line (mobile) */}
          <motion.span
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
            className="absolute left-5 top-0 h-full w-px origin-top bg-gradient-to-b from-brand-500 via-brand-300 to-transparent md:left-1/2"
            aria-hidden="true"
          />

          <ol className="space-y-10">
            {processSteps.map((step, i) => {
              const left = i % 2 === 0
              return (
                <li key={step.step} className="relative md:grid md:grid-cols-2 md:gap-12">
                  {/* node dot */}
                  <span
                    className="absolute left-5 top-7 z-10 -translate-x-1/2 md:left-1/2"
                    aria-hidden="true"
                  >
                    <span className="animate-pulse-glow block h-3.5 w-3.5 rounded-full bg-brand-500 ring-4 ring-white" />
                  </span>

                  <Reveal
                    className={`ml-12 md:ml-0 ${left ? 'md:col-start-1 md:text-right' : 'md:col-start-2'}`}
                    y={32}
                  >
                    <div className="card-hover group relative p-6">
                      <span className="pointer-events-none absolute -right-2 -top-4 font-display text-6xl font-extrabold text-navy-800/[0.05] transition-colors duration-500 group-hover:text-brand-500/15">
                        {step.step}
                      </span>
                      <div className={`flex items-center gap-3 ${left ? 'md:flex-row-reverse' : ''}`}>
                        <span className="icon-tile shrink-0 transition-transform duration-300 group-hover:scale-110">
                          <Icon name={step.icon} className="h-5 w-5" />
                        </span>
                        <h3 className="text-lg font-bold text-navy-800">{step.title}</h3>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">{step.description}</p>
                    </div>
                  </Reveal>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
