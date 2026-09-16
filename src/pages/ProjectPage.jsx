import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight, ArrowUpRight, Check, ChevronRight, Globe2, Lock, PlayCircle, TrendingUp, Images,
} from 'lucide-react'
import Icon from '../components/Icon'
import Reveal, { StaggerGroup, staggerItem } from '../components/Reveal'
import SmartLink from '../components/SmartLink'
import ScreenshotGallery from '../components/ScreenshotGallery'
import CtaBand from '../components/CtaBand'
import NotFound from './NotFound'
import { WhatsAppIcon } from '../components/FloatingActions'
import { whatsappLinkProps } from '../lib/whatsapp'
import { getProjectBySlug, relatedProjects, projectPath, projectThumb, coverShot } from '../lib/projects'
import usePageMeta from '../lib/usePageMeta'
import { company } from '../data/site'

function VisibilityBadge({ visibility, light = false }) {
  const isPrivate = visibility === 'Private'
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${
        light
          ? 'border-white/15 bg-white/10 text-white'
          : isPrivate
            ? 'border-amber-200 bg-amber-50 text-amber-700'
            : 'border-emerald-200 bg-emerald-50 text-emerald-700'
      }`}
    >
      {isPrivate ? <Lock className="h-3 w-3" /> : <Globe2 className="h-3 w-3" />}
      {isPrivate ? 'Private client project' : 'Public'}
    </span>
  )
}

/** Hero artwork: first screenshot in a browser / phone frame, or the stock photo. */
function HeroVisual({ project }) {
  const shot = coverShot(project.screenshots)
  const portrait = shot?.portrait

  if (portrait) {
    return (
      <div className="mx-auto w-[260px] sm:w-[300px]">
        <div className="rounded-[2.2rem] border-[6px] border-navy-700 bg-navy-900 p-1.5 shadow-2xl shadow-brand-500/20">
          <img src={shot.src} alt={`${project.name} — ${shot.caption}`} className="aspect-[9/19] w-full rounded-[1.7rem] object-cover object-top" />
        </div>
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy-900 shadow-2xl shadow-brand-500/20">
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-navy-800 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        <span className="ml-3 hidden truncate rounded-md bg-white/5 px-3 py-0.5 text-[11px] text-slate-400 sm:block">
          {project.link ? project.link.replace(/^https?:\/\//, '') : `${project.slug}.frsoftwaresolutions.com`}
        </span>
      </div>
      <div className={`relative aspect-[16/10] bg-gradient-to-br ${project.accent}`}>
        <img
          src={shot?.src || project.stockImage}
          alt={`${project.name} — ${shot?.caption || project.type}`}
          className="absolute inset-0 h-full w-full object-cover object-top"
          onError={(e) => { e.currentTarget.style.display = 'none' }}
        />
      </div>
    </div>
  )
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <Reveal className="max-w-3xl">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy-800 sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-lg text-slate-600">{subtitle}</p>}
    </Reveal>
  )
}

export default function ProjectPage() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  usePageMeta({
    title: project ? `${project.name} — ${project.type} | ${company.name}` : `Project not found | ${company.name}`,
    description: project ? project.description : '',
    path: project ? projectPath(project) : '/',
    image: project ? coverShot(project.screenshots)?.src : undefined,
  })

  if (!project) return <NotFound />

  const related = relatedProjects(project, 3)
  const hasShots = project.screenshots.length > 0

  return (
    <article>
      {/* ------------------------------------------------ hero */}
      <section className="bg-hero relative overflow-hidden pb-24 pt-28 text-slate-300 lg:pb-32 lg:pt-36">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
        <div className="aurora-blob pointer-events-none absolute -right-32 top-10 h-[420px] w-[420px] rounded-full bg-brand-500/20 blur-[140px]" />

        <div className="container-px relative">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-slate-400 sm:text-sm">
            <Link to="/" className="transition-colors hover:text-white">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/#portfolio" className="transition-colors hover:text-white">Projects</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-brand-300">{project.name}</span>
          </nav>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="eyebrow text-brand-300">{project.type}</span>
              </div>
              <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                {project.name}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">{project.tagline}</p>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                <VisibilityBadge visibility={project.visibility} light />
                {project.categories.map((c) => (
                  <span key={c} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-semibold text-slate-300">
                    {c}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                <SmartLink href="#contact" className="btn-primary px-6 py-3.5">
                  Request This Solution <ArrowRight className="h-4 w-4" />
                </SmartLink>
                <a {...whatsappLinkProps} className="btn-whatsapp px-6 py-3.5">
                  <WhatsAppIcon className="h-5 w-5" /> WhatsApp
                </a>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" className="btn-ghost px-6 py-3.5">
                    Visit live site <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
                {project.video && (
                  <a href="#walkthrough" className="btn-ghost px-6 py-3.5">
                    <PlayCircle className="h-4 w-4" /> Watch walkthrough
                  </a>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <HeroVisual project={project} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ quick facts */}
      {project.facts.length > 0 && (
        <section className="section-light relative">
          <div className="container-px">
            <StaggerGroup className="-mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
              {project.facts.map((f) => (
                <motion.div key={f.label} variants={staggerItem} className="card p-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-600">{f.label}</p>
                  <p className="mt-1.5 font-semibold text-navy-800">{f.value}</p>
                </motion.div>
              ))}
            </StaggerGroup>
          </div>
        </section>
      )}

      {/* ------------------------------------------------ overview */}
      <section className="section-light py-20 lg:py-24">
        <div className="container-px grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div>
            <SectionTitle eyebrow="Overview" title={`What ${project.name} does`} />
            <Reveal delay={0.1} className="mt-6 space-y-5">
              {project.overview.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-slate-600 sm:text-lg">{p}</p>
              ))}
            </Reveal>

            {project.highlights.length > 0 && (
              <StaggerGroup className="mt-10 grid gap-4 sm:grid-cols-2" stagger={0.08}>
                {project.highlights.map((h) => (
                  <motion.div key={h.label} variants={staggerItem} className="rounded-2xl border border-brand-100 bg-brand-50/60 p-5">
                    <p className="font-display text-2xl font-extrabold tracking-tight text-navy-800">{h.value}</p>
                    <p className="mt-1 text-sm text-slate-600">{h.label}</p>
                  </motion.div>
                ))}
              </StaggerGroup>
            )}
          </div>

          <div className="space-y-6 lg:pt-16">
            <Reveal className="card-dark p-7">
              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-300">
                <TrendingUp className="h-4 w-4" /> Business benefit
              </span>
              <p className="mt-4 text-base leading-relaxed text-slate-200">{project.benefits}</p>
            </Reveal>

            <Reveal delay={0.08} className="card p-7">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-600">Technologies</span>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ walkthrough video */}
      {project.video && (
        <section id="walkthrough" className="section-tint scroll-mt-24 py-20 lg:py-24">
          <div className="container-px">
            <SectionTitle eyebrow="Walkthrough" title="See it in action" subtitle="A short recorded tour of the real application." />
            <Reveal delay={0.1} className="mt-10 overflow-hidden rounded-3xl border border-surface-300 bg-navy-900 shadow-2xl shadow-navy-900/20">
              <video
                controls
                playsInline
                preload="metadata"
                poster={project.video.poster || undefined}
                className="aspect-video w-full"
              >
                <source src={project.video.src} type="video/mp4" />
                Your browser does not support embedded video.
              </video>
            </Reveal>
          </div>
        </section>
      )}

      {/* ------------------------------------------------ modules */}
      {project.modules.length > 0 && (
        <section className={`${project.video ? 'section-light' : 'section-tint'} py-20 lg:py-24`}>
          <div className="container-px">
            <SectionTitle eyebrow="Modules" title="What's inside" subtitle="Each module below ships as part of the system and can be tailored to your workflow." />
            <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3" stagger={0.06}>
              {project.modules.map((m) => (
                <motion.div key={m.title} variants={staggerItem} className="card-hover flex flex-col p-6">
                  <span className="icon-tile">
                    <Icon name={m.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-navy-800">{m.title}</h3>
                  <ul className="mt-3 space-y-2">
                    {m.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-slate-600">
                        <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-brand-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </StaggerGroup>
          </div>
        </section>
      )}

      {/* ------------------------------------------------ screenshots */}
      {hasShots && (
        <section id="screenshots" className={`${project.video || !project.modules.length ? 'section-tint' : 'section-light'} py-20 lg:py-24`}>
          <div className="container-px">
            <SectionTitle
              eyebrow="Screenshots"
              title="A look at the real screens"
              subtitle={`${project.screenshots.length} screenshots from the working application. Click any image to view it full size.`}
            />
            <div className="mt-12">
              <ScreenshotGallery images={project.screenshots} />
            </div>
          </div>
        </section>
      )}

      {/* ------------------------------------------------ features */}
      <section className="section-light py-20 lg:py-24">
        <div className="container-px">
          <SectionTitle eyebrow="Key features" title="Everything included" />
          <StaggerGroup className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" stagger={0.04}>
            {project.features.map((f) => (
              <motion.div key={f} variants={staggerItem} className="flex items-start gap-3 rounded-xl border border-surface-300 bg-surface-100 px-4 py-3.5">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-500 text-white">
                  <Check className="h-3 w-3" />
                </span>
                <span className="text-sm font-medium text-navy-800">{f}</span>
              </motion.div>
            ))}
          </StaggerGroup>

          {!hasShots && (
            <Reveal className="mt-12 flex flex-col items-center gap-4 rounded-3xl border border-dashed border-surface-300 bg-surface-100 p-8 text-center sm:flex-row sm:text-left">
              <span className="icon-tile shrink-0"><Images className="h-6 w-6" /></span>
              <div className="flex-1">
                <p className="font-bold text-navy-800">Want to see it running?</p>
                <p className="mt-1 text-sm text-slate-600">Screenshots for this project are shared on request. Book a free live demo and we will walk you through the real system.</p>
              </div>
              <SmartLink href="#contact" className="btn-primary shrink-0 px-5 py-2.5 text-sm">Book a demo</SmartLink>
            </Reveal>
          )}
        </div>
      </section>

      {/* ------------------------------------------------ related */}
      {related.length > 0 && (
        <section className="section-tint py-20 lg:py-24">
          <div className="container-px">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionTitle eyebrow="More work" title="Related projects" />
              <Link to="/#portfolio" className="btn-secondary px-5 py-2.5 text-sm">All projects <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <StaggerGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
              {related.map((p) => {
                const thumb = projectThumb(p)
                return (
                  <motion.div key={p.slug} variants={staggerItem}>
                    <Link to={projectPath(p)} className="card-hover group flex h-full flex-col overflow-hidden">
                      <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${p.accent}`}>
                        <img
                          src={thumb.src}
                          alt={`${p.name} — ${p.type}`}
                          loading="lazy"
                          onError={(e) => { e.currentTarget.style.display = 'none' }}
                          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/10 to-transparent" />
                        <span className="absolute bottom-3 left-5 font-display text-xs font-bold uppercase tracking-widest text-white/90">{p.type}</span>
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="text-lg font-bold text-navy-800 transition-colors group-hover:text-brand-600">{p.name}</h3>
                        <p className="mt-2 line-clamp-2 text-sm text-slate-600">{p.description}</p>
                        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-brand-600">
                          View project <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </StaggerGroup>
          </div>
        </section>
      )}

      <CtaBand />
    </article>
  )
}
