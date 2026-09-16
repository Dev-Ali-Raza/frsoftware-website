import { useState } from 'react'
import { Link } from 'react-router-dom'
import { brand, company } from '../data/site'

/**
 * Square brand mark (the "FR" initials). Uses the official PNG from
 * /public/brand/; falls back to a text monogram if the file is missing.
 * `variant="light"` renders the white version for navy backgrounds.
 */
export function BrandMark({ className = 'h-10', variant = 'dark' }) {
  const [missing, setMissing] = useState(false)
  const src = variant === 'light' ? brand.markWhite : brand.mark

  if (!missing) {
    return (
      <img
        src={src}
        alt={`${company.name} logo`}
        className={`${className} w-auto object-contain`}
        onError={() => setMissing(true)}
        draggable="false"
      />
    )
  }

  return (
    <span
      className={`grid aspect-square place-items-center rounded-xl bg-navy-800 ${className}`}
    >
      <span className="font-display text-sm font-extrabold tracking-tight text-white">FR</span>
    </span>
  )
}

/**
 * Full horizontal lockup — "FR" mark + "Software Solutions" wordmark.
 * `variant="dark"` (default) is the navy logo for white backgrounds,
 * `variant="light"` is the white logo for navy backgrounds.
 */
export default function Logo({ className = '', variant = 'dark', imgClassName = 'h-11 sm:h-12' }) {
  const [missing, setMissing] = useState(false)
  const src = variant === 'light' ? brand.logoWhite : brand.logo

  return (
    <Link to="/" className={`inline-flex shrink-0 items-center ${className}`} aria-label={`${company.name} — home`}>
      {!missing ? (
        <img
          src={src}
          alt={company.name}
          className={`${imgClassName} w-auto object-contain`}
          onError={() => setMissing(true)}
          draggable="false"
        />
      ) : (
        <span className="flex items-center gap-3">
          <BrandMark className="h-10" variant={variant} />
          <span
            className={`font-display text-lg font-bold tracking-tight ${
              variant === 'light' ? 'text-white' : 'text-navy-800'
            }`}
          >
            FR <span className="text-brand-500">Software Solutions</span>
          </span>
        </span>
      )}
    </Link>
  )
}
