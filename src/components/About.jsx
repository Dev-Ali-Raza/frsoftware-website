import { motion } from 'framer-motion'
import { BadgeCheck, Building2 } from 'lucide-react'
import Icon from './Icon'
import Reveal, { StaggerGroup, staggerItem } from './Reveal'
import { about, company, images } from '../data/site'

export default function About() {
  return (
    <section id="about" className="section-light relative py-28">
      <div className="container-px">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* ---------------- photo ---------------- */}
          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-[0_24px_60px_-24px_rgba(15,29,43,0.35)]">
              <img
                src={images.about}
                alt="The FR Software Solutions team collaborating"
                className="h-[420px] w-full object-cover lg:h-[540px]"
              />
              {/* bottom-only navy overlay for the caption */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-navy-800/90 via-navy-800/50 to-transparent" />
              <p className="absolute bottom-6 left-6 right-6 font-display text-lg font-bold text-white">
                {company.tagline}
              </p>
            </div>

            {/* floating badge overlapping the photo corner */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="card absolute -top-6 -right-3 flex items-center gap-3 px-5 py-4 sm:-right-6"
            >
              <span className="icon-tile shrink-0">
                <Building2 className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-2xl font-extrabold leading-none text-navy-800">5+ years</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Business Software
                </p>
              </div>
            </motion.div>
          </Reveal>

          {/* ---------------- copy ---------------- */}
          <div>
            <Reveal>
              <span className="eyebrow">Who We Are</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy-800 sm:text-4xl lg:text-5xl lg:leading-[1.08]">
                Driven by Real Business Needs, <span className="text-gradient">Built for Growth</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1} className="mt-6 space-y-4">
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="leading-relaxed text-slate-600">
                  {p}
                </p>
              ))}
            </Reveal>

            {/* feature rows */}
            <StaggerGroup className="mt-9 space-y-5" stagger={0.1}>
              {about.cards.map((card) => (
                <motion.div key={card.title} variants={staggerItem} className="flex items-start gap-4">
                  <span className="icon-tile shrink-0">
                    <Icon name={card.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-bold text-navy-800">{card.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{card.description}</p>
                  </div>
                </motion.div>
              ))}
            </StaggerGroup>

            {/* benefit badges */}
            <Reveal delay={0.15} className="mt-9 flex flex-wrap gap-2.5">
              {about.badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3.5 py-1.5 text-xs font-semibold text-brand-700 ring-1 ring-brand-100"
                >
                  <BadgeCheck className="h-3.5 w-3.5 text-brand-500" />
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
