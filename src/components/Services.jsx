import { motion } from 'framer-motion'
import Icon from './Icon'
import { StaggerGroup, staggerItem } from './Reveal'
import SectionHeading from './SectionHeading'
import { services, serviceImages } from '../data/site'

export default function Services() {
  return (
    <section id="services" className="section-light relative py-24">
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
              className="card-hover group overflow-hidden"
            >
              {/* image banner with slow zoom on hover */}
              <div className="relative h-40 overflow-hidden bg-surface-200">
                <img
                  src={serviceImages[service.title]}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
              </div>

              <div className="p-6 pt-0">
                <span className="icon-tile relative -mt-6 shadow-md">
                  <Icon name={service.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold leading-snug text-navy-800">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
