import { Facebook, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import Logo from './Logo'
import { WhatsAppIcon } from './FloatingActions'
import { company, navLinks, services, products } from '../data/site'

const socials = [
  { icon: Facebook, label: 'Facebook', href: company.social.facebook },
  { icon: Linkedin, label: 'LinkedIn', href: company.social.linkedin },
  { icon: WhatsAppIcon, label: 'WhatsApp', href: company.social.whatsapp },
  { icon: Github, label: 'GitHub', href: company.social.github },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-ink-900 to-ink-950">
      {/* subtle animated glow */}
      <div className="aurora-blob pointer-events-none absolute -top-32 left-1/4 h-[300px] w-[500px] rounded-full bg-brand-600/10 blur-[120px]" />

      <div className="container-px relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          {/* brand column */}
          <div>
            <Logo />
            <p className="mt-3 text-sm font-semibold text-accent-300">{company.tagline}</p>
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
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all hover:-translate-y-0.5 hover:border-accent-400/50 hover:text-accent-300"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* quick links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="mt-5 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-slate-400 transition-colors hover:text-accent-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* services + products */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Services</h3>
            <ul className="mt-5 space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <a href="#services" className="text-sm text-slate-400 transition-colors hover:text-accent-300">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
            <h3 className="mt-7 text-sm font-bold uppercase tracking-wider text-white">Products</h3>
            <ul className="mt-4 space-y-2.5">
              {products.map((p) => (
                <li key={p.name}>
                  <a href="#products" className="text-sm text-slate-400 transition-colors hover:text-accent-300">
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a href={`tel:${company.phonePlain}`} className="flex items-start gap-3 text-slate-400 transition-colors hover:text-accent-300">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="flex items-start gap-3 text-slate-400 transition-colors hover:text-accent-300">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                {company.location}
              </li>
            </ul>
            <a href="#contact" className="btn-primary mt-6 px-5 py-2.5 text-xs">
              Get Free Demo
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-7 sm:flex-row">
          <p className="text-xs text-slate-500">© 2026 {company.name}. All rights reserved.</p>
          <p className="text-xs text-slate-600">{company.domain}</p>
        </div>
      </div>
    </footer>
  )
}
