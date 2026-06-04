import { Star, Quote } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { testimonials } from '../data/site'

function Card({ t }) {
  return (
    <figure className="flex w-[22rem] shrink-0 flex-col rounded-2xl border border-white/10 bg-ink-850/80 p-7">
      <Quote className="h-8 w-8 text-brand-500/40" />
      <div className="mt-3 flex gap-0.5">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-300">
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 text-sm font-bold text-white">
          {t.name.split(' ').map((n) => n[0]).join('')}
        </span>
        <span>
          <span className="block text-sm font-semibold text-white">{t.name}</span>
          <span className="block text-xs text-slate-400">{t.role}</span>
        </span>
      </figcaption>
    </figure>
  )
}

export default function Testimonials() {
  const row = [...testimonials, ...testimonials]
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Client feedback"
          title="Teams love working with us"
          subtitle="We measure success by the relationships we build and the results we deliver."
        />
      </div>

      {/* Marquee row */}
      <div className="group relative mt-16 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div
          className="animate-marquee flex w-max gap-6 px-3 group-hover:[animation-play-state:paused]"
          style={{ '--marquee-duration': '55s' }}
        >
          {row.map((t, i) => (
            <Card key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
