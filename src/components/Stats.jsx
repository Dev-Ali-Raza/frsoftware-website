import Counter from './Counter'
import { StaggerGroup, staggerItem } from './Reveal'
import { motion } from 'framer-motion'
import { stats } from '../data/site'

/** Trust band — clean stat row on a light tinted background. */
export default function Stats() {
  return (
    <section className="border-b border-surface-300 bg-surface-100">
      <div className="container-px">
        <StaggerGroup
          className="grid grid-cols-2 divide-surface-300 sm:grid-cols-3 sm:divide-x lg:grid-cols-5"
          stagger={0.08}
        >
          {stats.map((item) => (
            <motion.div
              key={item.label}
              variants={staggerItem}
              className="flex flex-col items-center gap-1.5 px-4 py-10 text-center"
            >
              {item.value !== null ? (
                <Counter
                  value={item.value}
                  suffix={item.suffix}
                  className="font-display text-4xl font-extrabold text-navy-800"
                />
              ) : (
                <span className="font-display text-xl font-extrabold leading-tight text-navy-800">
                  {item.label}
                </span>
              )}
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
                {item.value !== null ? item.label : item.sub}
              </span>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
