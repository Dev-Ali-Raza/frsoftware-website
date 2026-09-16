import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Lock, Globe2, PlayCircle } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { projects, projectCategories } from '../data/site'
import { projectPath, projectThumb, projectMedia } from '../lib/projects'

function VisibilityBadge({ visibility }) {
  const isPrivate = visibility === 'Private'
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${
        isPrivate
          ? 'border-amber-200 bg-amber-50 text-amber-700'
          : 'border-emerald-200 bg-emerald-50 text-emerald-700'
      }`}
    >
      {isPrivate ? <Lock className="h-3 w-3" /> : <Globe2 className="h-3 w-3" />}
      {visibility}
    </span>
  )
}

export default function Portfolio() {
  const [filter, setFilter] = useState('All')

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.categories.includes(filter))),
    [filter],
  )

  return (
    <section id="portfolio" className="section-light relative isolate py-24">
      <div className="bg-wash pointer-events-none absolute inset-0 -z-10" />

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
                filter === cat ? 'text-white' : 'text-slate-500 hover:text-navy-800'
              }`}
            >
              {filter === cat && (
                <motion.span
                  layoutId="portfolio-filter"
                  className="absolute inset-0 rounded-full bg-navy-800"
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
                className="card-hover group relative flex flex-col overflow-hidden"
              >
                {/* photo banner (accent gradient shows if the photo fails) */}
                <Link to={projectPath(project)} className={`relative block h-48 overflow-hidden bg-gradient-to-br ${project.accent}`} aria-label={`Open ${project.name}`}>
                  <img
                    src={projectThumb(project).src}
                    alt={`${project.name} — ${project.type}`}
                    loading="lazy"
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/10 to-transparent" />
                  <span className="absolute bottom-3 left-5 font-display text-xs font-bold uppercase tracking-widest text-white/90">
                    {project.type}
                  </span>
                  {(() => {
                    const { images, video } = projectMedia(project.slug)
                    return (
                      <span className="absolute right-3 top-3 flex gap-1.5">
                        {video && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-navy-800">
                            <PlayCircle className="h-3 w-3" /> Video
                          </span>
                        )}
                        {images.length > 0 && (
                          <span className="rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-navy-800">
                            {images.length} shots
                          </span>
                        )}
                      </span>
                    )
                  })()}
                </Link>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-bold leading-snug text-navy-800">
                      <Link to={projectPath(project)} className="transition-colors hover:text-brand-600">{project.name}</Link>
                    </h3>
                    <VisibilityBadge visibility={project.visibility} />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{project.description}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.map((t) => (
                      <span key={t} className="tech-badge px-2.5 py-0.5 text-[11px]">{t}</span>
                    ))}
                  </div>

                  <div className="mt-auto flex gap-2.5 pt-5">
                    <Link to={projectPath(project)} className="btn-primary flex-1 px-3 py-2 text-xs">
                      View Project <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <a href="#contact" className="btn-secondary flex-1 px-3 py-2 text-xs">
                      Request Similar
                    </a>
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
