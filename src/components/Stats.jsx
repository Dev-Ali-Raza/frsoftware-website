import Icon from './Icon'
import Counter from './Counter'
import { StaggerGroup, staggerItem } from './Reveal'
import { motion } from 'framer-motion'
import { stats } from '../data/site'

/** Trust band — animated counters in glowing glass cards. */
export default function Stats() {
  return (
    <section className="relative -mt-2 py-12">
      <div className="container-px">
        <StaggerGroup className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5" stagger={0.08}>
          {stats.map((item) => (
            <motion.div
              key={item.label}
              variants={staggerItem}
              className="glass-glow group flex flex-col items-center gap-2 px-4 py-6 text-center"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-600/30 to-accent-500/20 text-accent-300 transition-transform duration-300 group-hover:scale-110">
                <Icon name={item.icon} className="h-5 w-5" />
              </span>
              {item.value !== null ? (
                <Counter
                  value={item.value}
                  suffix={item.suffix}
                  className="font-display text-3xl font-extrabold text-white"
                />
              ) : (
                <span className="font-display text-lg font-extrabold leading-tight text-white">{item.label}</span>
              )}
              <span className="text-xs font-medium text-slate-400">
                {item.value !== null ? item.label : item.sub}
              </span>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
