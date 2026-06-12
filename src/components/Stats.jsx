import Counter from './Counter'
import { StaggerGroup, staggerItem } from './Reveal'
import { motion } from 'framer-motion'
import { stats } from '../data/site'

/** Trust band — quiet editorial stat row separated by hairlines. */
export default function Stats() {
  return (
    <section className="border-y border-white/10 bg-ink-950/60">
      <div className="container-px">
        <StaggerGroup
          className="grid grid-cols-2 divide-white/10 sm:grid-cols-3 sm:divide-x lg:grid-cols-5"
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
                  className="font-display text-4xl font-extrabold text-white"
                />
              ) : (
                <span className="font-display text-xl font-extrabold leading-tight text-white">
                  {item.label}
                </span>
              )}
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                {item.value !== null ? item.label : item.sub}
              </span>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
