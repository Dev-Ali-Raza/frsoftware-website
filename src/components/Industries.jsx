import { motion } from 'framer-motion'
import Icon from './Icon'
import { StaggerGroup, staggerItem } from './Reveal'
import SectionHeading from './SectionHeading'
import { industries } from '../data/site'

export default function Industries() {
  return (
    <section id="industries" className="section-navy relative isolate py-24">
      {/* subtle grid backdrop (navy sections) */}
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />

      <div className="container-px">
        <SectionHeading
          tone="light"
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
              className="card-dark flex items-center gap-2.5 rounded-full px-5 py-3"
            >
              <Icon name={industry.icon} className="h-4.5 w-4.5 text-brand-300" />
              <span className="text-sm font-semibold text-white">{industry.label}</span>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
