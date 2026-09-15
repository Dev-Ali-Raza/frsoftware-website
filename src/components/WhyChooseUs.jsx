import { motion } from 'framer-motion'
import Icon from './Icon'
import { StaggerGroup, staggerItem } from './Reveal'
import SectionHeading from './SectionHeading'
import { whyChooseUs } from '../data/site'

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-tint relative py-24">
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
              className="card-hover group flex items-start gap-4 p-5"
            >
              <span className="icon-tile shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Icon name={reason.icon} className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-sm font-bold text-navy-800">{reason.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">{reason.text}</p>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
