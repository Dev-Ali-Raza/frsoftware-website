import { motion } from 'framer-motion'
import { GitBranch, Star, Lock, Globe2 } from 'lucide-react'
import { StaggerGroup, staggerItem } from './Reveal'
import SectionHeading from './SectionHeading'
import { repos, repoWork, techColors } from '../data/site'

/* Deterministic mini activity graph — bars derived from the repo name */
function ActivityGraph({ seed }) {
  const bars = Array.from({ length: 12 }, (_, i) => {
    const code = seed.charCodeAt(i % seed.length) + i * 7
    return 20 + (code % 80)
  })
  return (
    <div className="flex h-8 items-end gap-[3px]" aria-hidden="true">
      {bars.map((h, i) => (
        <motion.span
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${h}%` }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.04, duration: 0.4, ease: 'easeOut' }}
          className="w-[5px] rounded-sm bg-gradient-to-t from-brand-200 to-brand-500"
        />
      ))}
    </div>
  )
}

export default function DevWork() {
  return (
    <section id="devwork" className="section-tint relative py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Our Development Work"
          title="A Track Record You Can Browse"
          subtitle={repoWork.text}
        />

        <StaggerGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
          {repos.map((repo) => {
            const isPrivate = repo.visibility === 'Private'
            return (
              <motion.div
                key={repo.name}
                variants={staggerItem}
                className="card-hover group flex flex-col gap-3 p-5"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="flex min-w-0 items-center gap-2">
                    <GitBranch className="h-4 w-4 shrink-0 text-slate-400" />
                    <span className="truncate font-mono text-sm font-semibold text-navy-800 transition-colors group-hover:text-brand-600">
                      {repo.name}
                    </span>
                  </span>
                  <span
                    className={`inline-flex shrink-0 items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-semibold ${
                      isPrivate
                        ? 'border-amber-200 bg-amber-50 text-amber-700'
                        : 'border-emerald-200 bg-emerald-50 text-emerald-700'
                    }`}
                  >
                    {isPrivate ? <Lock className="h-2.5 w-2.5" /> : <Globe2 className="h-2.5 w-2.5" />}
                    {repo.visibility}
                  </span>
                </div>

                <p className="text-xs leading-relaxed text-slate-600">{repo.summary}</p>

                <ActivityGraph seed={repo.name} />

                <div className="mt-auto flex items-center justify-between border-t border-surface-200 pt-3 text-[11px] text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ background: techColors[repo.tech] || '#2e9ecd' }}
                    />
                    {repo.tech}
                    <span className="ml-2 hidden items-center gap-1 sm:flex">
                      <Star className="h-3 w-3" /> {repo.type}
                    </span>
                  </span>
                  <span>{repo.updated}</span>
                </div>
              </motion.div>
            )
          })}
        </StaggerGroup>
      </div>
    </section>
  )
}
