import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, TrendingUp } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { projects, projectCategories } from '../data/site'

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const visible =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="work" className="relative py-24 sm:py-32">
      {/* subtle top divider glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-px">
        <SectionHeading
          eyebrow="Our work"
          title="Projects we're proud to have shipped"
          subtitle="A selection of products we've designed and engineered for startups and enterprises alike."
        />

        {/* Filter bar */}
        <Reveal className="mt-10 flex flex-wrap justify-center gap-2.5">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                filter === cat
                  ? 'bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-lg shadow-brand-600/25'
                  : 'border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        {/* Grid */}
        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-850"
              >
                {/* Visual banner */}
                <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${project.accent}`}>
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at 30% 30%, rgba(255,255,255,.4), transparent 40%), radial-gradient(circle at 70% 70%, rgba(255,255,255,.25), transparent 45%)',
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-2xl font-extrabold text-white/90 drop-shadow">
                      {project.title.split(' ')[0]}
                    </span>
                  </div>
                  <span className="absolute left-4 top-4 rounded-full bg-black/30 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    {project.category}
                  </span>
                  <div className="absolute right-4 top-4 grid h-9 w-9 translate-y-2 place-items-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center gap-2 border-t border-white/5 pt-4 text-sm font-semibold text-accent-300">
                    <TrendingUp className="h-4 w-4" /> {project.result}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
