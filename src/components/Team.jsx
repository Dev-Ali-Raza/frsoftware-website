import { motion } from 'framer-motion'
import { Linkedin, Twitter } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { StaggerGroup, staggerItem } from './Reveal'
import { team } from '../data/site'

export default function Team() {
  return (
    <section id="team" className="relative py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Our team"
          title="The people behind the pixels"
          subtitle="A senior, multidisciplinary crew of engineers, designers and strategists who genuinely care about your product."
        />

        <StaggerGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-850/60 p-6 text-center transition-all duration-300 hover:border-brand-500/40 hover:-translate-y-1"
            >
              <div className="pointer-events-none absolute inset-x-0 -top-16 h-32 bg-gradient-to-b from-brand-500/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative mx-auto h-24 w-24">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-24 w-24 rounded-full object-cover ring-2 ring-white/10"
                  />
                ) : (
                  <div className="grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 font-display text-2xl font-extrabold text-white ring-2 ring-white/10">
                    {member.initials}
                  </div>
                )}
              </div>

              <h3 className="mt-5 text-lg font-bold text-white">{member.name}</h3>
              <p className="text-sm text-brand-300">{member.role}</p>

              <div className="mt-4 flex justify-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <a
                  href="#"
                  aria-label={`${member.name} on LinkedIn`}
                  className="grid h-8 w-8 place-items-center rounded-lg bg-white/5 text-slate-300 transition-colors hover:bg-brand-500 hover:text-white"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  aria-label={`${member.name} on X`}
                  className="grid h-8 w-8 place-items-center rounded-lg bg-white/5 text-slate-300 transition-colors hover:bg-brand-500 hover:text-white"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
