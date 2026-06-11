import { Cpu } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { technologies } from '../data/site'

/** Technology stack — two opposing marquee rows of glowing badges. */
export default function Technologies() {
  const rowA = technologies.filter((_, i) => i % 2 === 0)
  const rowB = technologies.filter((_, i) => i % 2 === 1)

  return (
    <section id="technologies" className="relative py-24">
      <div className="pointer-events-none absolute left-1/3 top-0 -z-10 h-[350px] w-[550px] rounded-full bg-brand-600/8 blur-[140px]" />

      <div className="container-px">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Technologies We Work With"
          subtitle="Modern, proven tools — chosen for reliability, performance, and long-term maintainability."
        />
      </div>

      <Reveal className="mt-14 space-y-5">
        {[{ row: rowA, reverse: false }, { row: rowB, reverse: true }].map(({ row, reverse }, idx) => (
          <div key={idx} className="marquee-mask overflow-hidden">
            <div
              className="animate-marquee flex w-max gap-4"
              style={{
                '--marquee-duration': '36s',
                animationDirection: reverse ? 'reverse' : 'normal',
              }}
            >
              {/* duplicated for a seamless loop */}
              {[...row, ...row, ...row, ...row].map((tech, i) => (
                <span
                  key={`${tech}-${i}`}
                  className="glass flex items-center gap-2.5 whitespace-nowrap rounded-full px-6 py-3 text-sm font-semibold text-slate-200 transition-colors duration-300 hover:border-accent-400/50 hover:text-accent-300"
                >
                  <Cpu className="h-4 w-4 text-brand-400" />
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  )
}
