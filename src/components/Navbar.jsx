import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight, Phone } from 'lucide-react'
import Logo from './Logo'
import SmartLink from './SmartLink'
import { navLinks, company } from '../data/site'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')
  const { pathname } = useLocation()
  const onProjectPage = pathname.startsWith('/projects/')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active-link highlight: observe each section as it enters the viewport
  useEffect(() => {
    if (pathname !== '/') {
      setActive(onProjectPage ? '#portfolio' : '')
      return undefined
    }
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [pathname, onProjectPage])

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 bg-white transition-all duration-300 ${
        scrolled
          ? 'border-b border-surface-300 py-2 shadow-[0_8px_30px_-18px_rgba(15,29,43,0.35)]'
          : 'border-b border-transparent py-3'
      }`}
    >
      <nav className="container-px flex items-center justify-between gap-4">
        <Logo />

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <SmartLink
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  active === link.href
                    ? 'text-brand-600'
                    : 'text-navy-600 hover:text-navy-900'
                }`}
              >
                {link.label}
                {active === link.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-brand-500"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </SmartLink>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${company.phonePlain}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy-700 transition-colors hover:text-brand-600"
          >
            <Phone className="h-4 w-4 text-brand-500" />
            {company.phone}
          </a>
          <SmartLink href="#contact" className="btn-primary whitespace-nowrap px-5 py-2.5">
            Free Consultation <ArrowRight className="h-4 w-4" />
          </SmartLink>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-surface-300 bg-white text-navy-800 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-b border-surface-300 bg-white lg:hidden"
          >
            <ul className="container-px flex flex-col gap-1 py-5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <SmartLink
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                      active === link.href
                        ? 'bg-brand-50 text-brand-700'
                        : 'text-navy-700 hover:bg-surface-100 hover:text-navy-900'
                    }`}
                  >
                    {link.label}
                  </SmartLink>
                </li>
              ))}
              <li className="pt-2">
                <SmartLink href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full">
                  Free Consultation <ArrowRight className="h-4 w-4" />
                </SmartLink>
              </li>
              <li className="pt-1">
                <a href={`tel:${company.phonePlain}`} className="btn-secondary w-full">
                  <Phone className="h-4 w-4" /> {company.phone}
                </a>
              </li>
              <li className="pt-1 text-center text-xs text-slate-500">{company.tagline}</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
