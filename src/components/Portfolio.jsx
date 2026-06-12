import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Eye, Lock, Globe2, Check, TrendingUp } from 'lucide-react'
import Modal from './Modal'
import SectionHeading from './SectionHeading'
import { projects, projectCategories, projectImages } from '../data/site'

function VisibilityBadge({ visibility }) {
  const isPrivate = visibility === 'Private'
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${
        isPrivate
          ? 'border-amber-400/30 bg-amber-400/10 text-amber-300'
          : 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300'
      }`}
    >
      {isPrivate ? <Lock className="h-3 w-3" /> : <Globe2 className="h-3 w-3" />}
      {visibility}
    </span>
  )
}

export default function Portfolio() {
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState(null)

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.categories.includes(filter))),
    [filter],
  )

  return (
    <section id="portfolio" className="relative py-24">
      <div className="pointer-events-none absolute right-1/4 top-0 -z-10 h-[400px] w-[600px] rounded-full bg-brand-600/10 blur-[150px]" />

      <div className="container-px">
        <SectionHeading
          eyebrow="Our Projects"
          title="Real Software, Built for Real Businesses"
          subtitle="We have worked on multiple business software projects including POS systems, inventory systems, accounting modules, booking systems, ecommerce, school systems, clinic systems, and custom dashboards."
        />

        {/* category filter bar */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                filter === cat ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {filter === cat && (
                <motion.span
                  layoutId="portfolio-filter"
                  className="absolute inset-0 rounded-full border border-brand-500/50 bg-brand-500/20"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative">{cat}</span>
            </button>
          ))}
        </div>

        {/* project grid */}
        <motion.div layout className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.article
                layout
                key={project.name}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="glass-glow group relative flex flex-col overflow-hidden"
              >
                {/* photo banner (accent gradient shows if the photo fails) */}
                <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${project.accent}`}>
                  <img
                    src={projectImages[project.name]}
                    alt={`${project.name} — ${project.type}`}
                    loading="lazy"
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/95 via-ink-950/25 to-transparent" />
                  <span className="absolute bottom-3 left-5 font-display text-xs font-bold uppercase tracking-widest text-white/90">
                    {project.type}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-bold leading-snug">{project.name}</h3>
                    <VisibilityBadge visibility={project.visibility} />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{project.description}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.map((t) => (
                      <span key={t} className="tech-badge px-2.5 py-0.5 text-[11px]">{t}</span>
                    ))}
                  </div>

                  <div className="mt-auto flex gap-2.5 pt-5">
                    <button
                      onClick={() => setSelected(project)}
                      className="btn-ghost flex-1 px-3 py-2 text-xs"
                    >
                      <Eye className="h-3.5 w-3.5" /> View Details
                    </button>
                    <a href="#contact" className="btn-primary flex-1 px-3 py-2 text-xs">
                      Request Similar
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ---------------- project detail modal ---------------- */}
      <Modal open={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-2xl font-bold">{selected.name}</h3>
              <VisibilityBadge visibility={selected.visibility} />
            </div>
            <p className="mt-1 text-sm font-semibold text-brand-300">{selected.type}</p>

            <h4 className="mt-6 text-sm font-bold uppercase tracking-wider text-brand-300">Overview</h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{selected.description}</p>

            <h4 className="mt-6 text-sm font-bold uppercase tracking-wider text-brand-300">Main Features</h4>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {selected.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                  {f}
                </li>
              ))}
            </ul>

            <h4 className="mt-6 text-sm font-bold uppercase tracking-wider text-brand-300">Technologies Used</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {selected.technologies.map((t) => (
                <span key={t} className="tech-badge">{t}</span>
              ))}
            </div>

            <h4 className="mt-6 text-sm font-bold uppercase tracking-wider text-brand-300">Business Benefits</h4>
            <p className="mt-2 flex items-start gap-2 text-sm leading-relaxed text-slate-300">
              <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
              {selected.benefits}
            </p>

            {selected.link && (
              <a
                href={selected.link}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-300 hover:text-accent-400"
              >
                Visit live site <ArrowUpRight className="h-4 w-4" />
              </a>
            )}

            <a href="#contact" onClick={() => setSelected(null)} className="btn-primary mt-8 w-full">
              Request Similar Project <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        )}
      </Modal>
    </section>
  )
}
