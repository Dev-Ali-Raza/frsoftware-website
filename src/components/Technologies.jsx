import { Cpu } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { technologies } from '../data/site'

/** Technology stack — two opposing marquee rows of badges. */
export default function Technologies() {
  const rowA = technologies.filter((_, i) => i % 2 === 0)
  const rowB = technologies.filter((_, i) => i % 2 === 1)

  return (
    <section id="technologies" className="section-tint relative py-24">
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
                  className="flex items-center gap-2.5 whitespace-nowrap rounded-full border border-surface-300 bg-white px-6 py-3 text-sm font-semibold text-navy-700 shadow-sm transition-colors duration-300 hover:border-brand-400 hover:text-brand-700"
                >
                  <Cpu className="h-4 w-4 text-brand-500" />
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
