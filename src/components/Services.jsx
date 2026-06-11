import { motion } from 'framer-motion'
import Icon from './Icon'
import { StaggerGroup, staggerItem } from './Reveal'
import SectionHeading from './SectionHeading'
import { services } from '../data/site'

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="pointer-events-none absolute right-0 top-1/4 -z-10 h-[420px] w-[420px] rounded-full bg-accent-500/10 blur-[140px]" />

      <div className="container-px">
        <SectionHeading
          eyebrow="What We Do"
          title="Software Services Built Around Your Business"
          subtitle="From POS and inventory to accounting and automation — we build the systems that run your daily operations."
        />

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={staggerItem}
              className="glass-glow group relative overflow-hidden p-7"
            >
              <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-600/35 to-accent-500/15 text-accent-300 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-accent-500/20">
                  <Icon name={service.icon} className="h-[22px] w-[22px]" />
                </span>
                <div>
                  <h3 className="text-lg font-bold leading-snug">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
