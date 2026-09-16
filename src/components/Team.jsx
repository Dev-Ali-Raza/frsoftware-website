import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Linkedin } from 'lucide-react'
import TiltCard from './TiltCard'
import { StaggerGroup, staggerItem } from './Reveal'
import SectionHeading from './SectionHeading'
import { team, teamSection } from '../data/site'

export default function Team() {
  return (
    <section id="team" className="section-light relative py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Our Team"
          title={teamSection.heading}
          subtitle={teamSection.subheading}
        />

        <StaggerGroup className="mx-auto mt-14 grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3" stagger={0.15}>
          {team.map((member) => (
            <motion.div key={member.name} variants={staggerItem}>
              <TiltCard className="animated-border h-full rounded-3xl p-[1px]">
                <div className="relative flex h-full flex-col items-center rounded-3xl bg-white p-8 text-center">
                  {/* avatar */}
                  <div className="relative">
                    <span className="animate-pulse-glow absolute inset-0 rounded-full" />
                    <span className="relative grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-navy-700 to-brand-500 font-display text-2xl font-extrabold text-white shadow-xl shadow-brand-500/25">
                      {member.initials}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-navy-800">{member.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-brand-600">{member.role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">{member.intro}</p>

                  {/* skills */}
                  <div className="mt-5 flex flex-wrap justify-center gap-1.5">
                    {member.skills.map((skill) => (
                      <span key={skill} className="tech-badge px-2.5 py-0.5 text-[11px]">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* actions */}
                  <div className="mt-auto flex items-center gap-3 pt-7">
                    <a
                      href={member.portfolio}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary px-5 py-2.5 text-xs"
                    >
                      View Portfolio <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${member.name} on GitHub`}
                        className="grid h-10 w-10 place-items-center rounded-full border border-surface-300 bg-surface-100 text-navy-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    <a
                      href="#"
                      aria-label={`${member.name} on LinkedIn`}
                      className="grid h-10 w-10 place-items-center rounded-full border border-surface-300 bg-surface-100 text-navy-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
