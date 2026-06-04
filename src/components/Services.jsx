import { motion } from 'framer-motion'
import {
  Code2, Smartphone, Cloud, Database, Sparkles, PenTool, Check,
} from 'lucide-react'
import SectionHeading from './SectionHeading'
import { StaggerGroup, staggerItem } from './Reveal'
import { services } from '../data/site'

const icons = { Code2, Smartphone, Cloud, Database, Sparkles, PenTool }

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="What we do"
          title="Full-cycle software services under one roof"
          subtitle="From a napkin sketch to a production-grade platform, our team covers every stage of the product journey."
        />

        <StaggerGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon] || Code2
            return (
              <motion.div
                key={service.title}
                variants={staggerItem}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-300 hover:border-brand-500/40 hover:bg-white/[0.04]"
              >
                {/* hover glow */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-500/0 blur-2xl transition-all duration-500 group-hover:bg-brand-500/20" />

                <div className="relative">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-500/10 text-brand-300 ring-1 ring-inset ring-white/10 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-white">{service.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                    {service.description}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {service.bullets.map((b) => (
                      <li
                        key={b}
                        className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                      >
                        <Check className="h-3 w-3 text-accent-400" /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </StaggerGroup>
      </div>
    </section>
  )
}
