import { motion } from 'framer-motion'
import Icon from './Icon'
import Reveal, { StaggerGroup, staggerItem } from './Reveal'
import SectionHeading from './SectionHeading'
import { about, company } from '../data/site'

export default function About() {
  return (
    <section id="about" className="relative py-24">
      {/* soft backdrop glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-brand-600/10 blur-[140px]" />

      <div className="container-px">
        <SectionHeading
          eyebrow="Who We Are"
          title={about.heading}
          subtitle={company.tagline}
        />

        <Reveal className="mx-auto mt-8 max-w-3xl space-y-4 text-center">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="text-lg leading-relaxed text-slate-400">
              {p}
            </p>
          ))}
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3" stagger={0.12}>
          {about.cards.map((card) => (
            <motion.div
              key={card.title}
              variants={staggerItem}
              className="glass-glow group relative overflow-hidden p-8"
            >
              {/* corner glow on hover */}
              <span className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent-500/0 blur-3xl transition-colors duration-500 group-hover:bg-accent-500/20" />
              <span className="grid h-13 w-13 place-items-center rounded-2xl bg-gradient-to-br from-brand-600/40 to-accent-500/20 p-3.5 text-accent-300 shadow-lg shadow-brand-600/20 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                <Icon name={card.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-bold">{card.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-400">{card.description}</p>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
