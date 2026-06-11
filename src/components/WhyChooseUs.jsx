import { motion } from 'framer-motion'
import Icon from './Icon'
import { StaggerGroup, staggerItem } from './Reveal'
import SectionHeading from './SectionHeading'
import { whyChooseUs } from '../data/site'

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-24">
      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-[400px] w-[450px] rounded-full bg-brand-600/10 blur-[140px]" />

      <div className="container-px">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Choose FR Software Solutions?"
          subtitle="Practical, business-focused software development — built to be used every single day."
        />

        <StaggerGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" stagger={0.05}>
          {whyChooseUs.map((reason) => (
            <motion.div
              key={reason.title}
              variants={staggerItem}
              className="glass-glow group flex items-start gap-4 p-5"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-brand-600/35 to-accent-500/15 text-accent-300 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Icon name={reason.icon} className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-sm font-bold text-white">{reason.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">{reason.text}</p>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
