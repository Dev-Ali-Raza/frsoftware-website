import { Linkedin, Github, Twitter, Instagram, ArrowUp } from 'lucide-react'
import Logo from './Logo'
import { company, navLinks, services } from '../data/site'

const socialIcons = [
  { icon: Linkedin, href: company.social.linkedin, label: 'LinkedIn' },
  { icon: Github, href: company.social.github, label: 'GitHub' },
  { icon: Twitter, href: company.social.twitter, label: 'X' },
  { icon: Instagram, href: company.social.instagram, label: 'Instagram' },
]

export default function Footer() {
  const year = '2026' // update yearly, or compute server-side
  return (
    <footer className="relative border-t border-white/10 bg-ink-950/60">
      <div className="container-px py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              {company.description}
            </p>
            <div className="mt-6 flex gap-2.5">
              {socialIcons.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-all hover:border-brand-500/50 hover:bg-brand-500 hover:text-white"
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigate
            </h4>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 5).map((s) => (
                <li key={s.title}>
                  <a
                    href="#services"
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {year} {company.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-slate-500 transition-colors hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-sm text-slate-500 transition-colors hover:text-white">
              Terms
            </a>
            <a
              href="#home"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 transition-colors hover:text-white"
            >
              Back to top <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
