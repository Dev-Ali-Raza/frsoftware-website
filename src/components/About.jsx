import { motion } from 'framer-motion'
import { BadgeCheck } from 'lucide-react'
import Icon from './Icon'
import Reveal, { StaggerGroup, staggerItem } from './Reveal'
import { about, company, images } from '../data/site'

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-brand-600/10 blur-[140px]" />
      <div className="container-px">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* ---------------- photo ---------------- */}
          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <img
                src={images.about}
                alt="The FR Software Solutions team collaborating"
                className="h-[420px] w-full object-cover lg:h-[540px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
              <p className="absolute bottom-6 left-6 right-6 font-display text-lg font-bold text-white">
                {company.tagline}
              </p>
            </div>
          </Reveal>

          {/* ---------------- copy ---------------- */}
          <div>
            <Reveal>
              <span className="eyebrow">Who We Are</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl lg:leading-[1.08]">
                Driven by Real Business Needs, <span className="text-gradient">Built for Growth</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1} className="mt-6 space-y-4">
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="leading-relaxed text-slate-400">
                  {p}
                </p>
              ))}
            </Reveal>

            {/* feature rows */}
            <StaggerGroup className="mt-9 space-y-5" stagger={0.1}>
              {about.cards.map((card) => (
                <motion.div key={card.title} variants={staggerItem} className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-brand-400">
                    <Icon name={card.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-bold text-white">{card.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">{card.description}</p>
                  </div>
                </motion.div>
              ))}
            </StaggerGroup>

            {/* benefit badges */}
            <Reveal delay={0.15} className="mt-9 flex flex-wrap gap-2.5">
              {about.badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-slate-200"
                >
                  <BadgeCheck className="h-3.5 w-3.5 text-brand-400" />
                  {badge}
                </span>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
