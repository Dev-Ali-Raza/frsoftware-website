import { motion } from 'framer-motion'
import Icon from './Icon'
import { StaggerGroup, staggerItem } from './Reveal'
import SectionHeading from './SectionHeading'
import { industries } from '../data/site'

export default function Industries() {
  return (
    <section id="industries" className="relative py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Software for Every Kind of Business"
          subtitle="From corner shops to growing enterprises — if your business runs on sales, stock, or records, we can digitize it."
        />

        <StaggerGroup
          className="mt-14 flex flex-wrap justify-center gap-3 sm:gap-4"
          stagger={0.04}
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.label}
              variants={staggerItem}
              whileHover={{ y: -4, scale: 1.04 }}
              className="glass-glow flex items-center gap-2.5 rounded-full px-5 py-3"
            >
              <Icon name={industry.icon} className="h-4.5 w-4.5 text-accent-300" />
              <span className="text-sm font-semibold text-slate-200">{industry.label}</span>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
