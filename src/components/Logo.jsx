import { useState } from 'react'
import { brand, company } from '../data/site'

/**
 * Brand mark. Renders the official logo from /public/brand/logo.png when the
 * file exists; until then it falls back to a sharp gradient FR monogram so
 * the site never shows a broken image.
 */
export function BrandMark({ className = 'h-10 w-10' }) {
  const [missing, setMissing] = useState(false)

  if (!missing) {
    return (
      <img
        src={brand.logo}
        alt={`${company.name} logo`}
        className={`${className} object-contain`}
        onError={() => setMissing(true)}
        draggable="false"
      />
    )
  }

  return (
    <span
      className={`relative grid place-items-center overflow-hidden rounded-xl
                  bg-gradient-to-br from-brand-600 via-brand-500 to-accent-500
                  shadow-lg shadow-brand-600/40 ${className}`}
    >
      <span className="font-display text-sm font-extrabold tracking-tight text-white">FR</span>
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_55%)]" />
    </span>
  )
}

/** Wordmark + monogram lockup used in the navbar, footer and preloader. */
export default function Logo({ className = '', withTagline = false }) {
  return (
    <a href="#home" className={`group flex items-center gap-3 ${className}`}>
      <BrandMark className="h-10 w-10 shrink-0" />
      <span className="flex flex-col leading-tight">
        <span className="font-display text-lg font-bold tracking-tight text-white">
          FR <span className="text-gradient">Software Solutions</span>
        </span>
        {withTagline && (
          <span className="text-[11px] font-medium text-slate-400">{company.tagline}</span>
        )}
      </span>
    </a>
  )
}
