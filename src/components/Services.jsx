import { motion } from 'framer-motion'
import Icon from './Icon'
import { StaggerGroup, staggerItem } from './Reveal'
import SectionHeading from './SectionHeading'
import { services, serviceImages } from '../data/site'

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
              className="group relative h-72 overflow-hidden rounded-2xl border border-white/10 bg-ink-850 transition-colors duration-300 hover:border-white/25"
            >
              {/* background photo with slow zoom on hover */}
              <img
                src={serviceImages[service.title]}
                alt=""
                aria-hidden="true"
                loading="lazy"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
                className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/60 to-ink-950/10" />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-ink-950/60 text-brand-400 backdrop-blur">
                  <Icon name={service.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold leading-snug">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300/90">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
