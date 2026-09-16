import { Facebook, Github, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import Logo from './Logo'
import SmartLink from './SmartLink'
import { WhatsAppIcon } from './FloatingActions'
import { company, navLinks, services, products, projects } from '../data/site'
import { projectPath } from '../lib/projects'
import { openWhatsApp, waMeUrl } from '../lib/whatsapp'

const socials = [
  { icon: Facebook, label: 'Facebook', href: company.social.facebook },
  { icon: Instagram, label: 'Instagram', href: company.social.instagram },
  { icon: Linkedin, label: 'LinkedIn', href: company.social.linkedin },
  { icon: WhatsAppIcon, label: 'WhatsApp', href: waMeUrl, onClick: openWhatsApp },
  { icon: Github, label: 'GitHub', href: company.social.github },
]

const linkClass = 'text-sm text-slate-400 transition-colors hover:text-brand-300'
const headingClass = 'text-xs font-bold uppercase tracking-[0.2em] text-white'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-900 text-slate-400">
      {/* blue top rule — echoes the swoosh */}
      <div className="h-1 w-full bg-gradient-to-r from-navy-700 via-brand-500 to-brand-300" />

      <div className="container-px relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          {/* brand column */}
          <div>
            <Logo variant="light" imgClassName="h-12" />
            <p className="mt-4 text-sm font-semibold text-brand-300">{company.tagline}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              {company.description}
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  onClick={s.onClick}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all hover:-translate-y-0.5 hover:border-brand-400 hover:bg-brand-500 hover:text-white"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* quick links */}
          <div>
            <h3 className={headingClass}>Quick Links</h3>
            <ul className="mt-5 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <SmartLink href={link.href} className={linkClass}>{link.label}</SmartLink>
                </li>
              ))}
            </ul>
            <h3 className={`${headingClass} mt-7`}>Featured Projects</h3>
            <ul className="mt-4 space-y-2.5">
              {projects.filter((p) => p.featured).map((p) => (
                <li key={p.slug}>
                  <SmartLink href={projectPath(p)} className={linkClass}>{p.name}</SmartLink>
                </li>
              ))}
            </ul>
          </div>

          {/* services + products */}
          <div>
            <h3 className={headingClass}>Services</h3>
            <ul className="mt-5 space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <SmartLink href="#services" className={linkClass}>{s.title}</SmartLink>
                </li>
              ))}
            </ul>
            <h3 className={`${headingClass} mt-7`}>Products</h3>
            <ul className="mt-4 space-y-2.5">
              {products.map((p) => (
                <li key={p.name}>
                  <SmartLink href={p.slug ? `/projects/${p.slug}` : '#products'} className={linkClass}>{p.name}</SmartLink>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h3 className={headingClass}>Contact</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a href={`tel:${company.phonePlain}`} className={`flex items-start gap-3 ${linkClass}`}>
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className={`flex items-start gap-3 ${linkClass}`}>
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                {company.location}
              </li>
            </ul>
            <SmartLink href="#contact" className="btn-primary mt-6 px-5 py-2.5 text-xs">
              Get Free Demo
            </SmartLink>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row">
          <p className="text-xs text-slate-500">© 2026 {company.name}. All rights reserved.</p>
          <p className="text-xs text-slate-500">{company.domain}</p>
        </div>
      </div>
    </footer>
  )
}
