import Reveal from './Reveal'

/**
 * Shared section header: eyebrow label + title + optional subtitle.
 * `tone="light"` is for use inside navy sections.
 */
export default function SectionHeading({ eyebrow, title, subtitle, align = 'center', tone = 'dark' }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'
  const isLight = tone === 'light'
  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow && (
        <Reveal>
          <span className={`eyebrow ${isLight ? 'text-brand-300' : ''}`}>{eyebrow}</span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={`mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl lg:leading-[1.08] ${
            isLight ? 'text-white' : 'text-navy-800'
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className={`mt-4 text-lg ${isLight ? 'text-slate-300' : 'text-slate-600'}`}>{subtitle}</p>
        </Reveal>
      )}
    </div>
  )
}
