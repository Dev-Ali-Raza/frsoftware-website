import { company } from '../data/site'

/** Wordmark + monogram lockup used in the navbar and footer. */
export default function Logo({ className = '' }) {
  return (
    <a href="#home" className={`group flex items-center gap-2.5 ${className}`}>
      <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 shadow-lg shadow-brand-600/30">
        <span className="font-display text-sm font-extrabold text-white">FR</span>
        <span className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-500 group-hover:translate-y-0" />
      </span>
      <span className="font-display text-lg font-bold tracking-tight text-white">
        FR <span className="text-gradient">Software</span>
      </span>
    </a>
  )
}
