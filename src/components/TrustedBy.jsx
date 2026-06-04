import { trustedBy } from '../data/site'

/** Infinite marquee of client / brand names. */
export default function TrustedBy() {
  const items = [...trustedBy, ...trustedBy] // duplicate for seamless loop
  return (
    <section className="border-y border-white/5 bg-ink-950/40 py-10">
      <p className="container-px mb-7 text-center text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
        Trusted by teams at
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="animate-marquee flex w-max items-center gap-16 px-8" style={{ '--marquee-duration': '35s' }}>
          {items.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap font-display text-2xl font-bold text-slate-500/70 transition-colors hover:text-slate-300"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
