import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Loader2, Mail, MapPin, Phone, Send, Facebook, Instagram, Linkedin, Github } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { WhatsAppIcon } from './FloatingActions'
import { company, serviceOptions } from '../data/site'
import { openWhatsApp, waMeUrl } from '../lib/whatsapp'

const initialForm = { name: '', business: '', phone: '', email: '', service: '', message: '' }

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Please enter your name.'
  if (!form.phone.trim()) errors.phone = 'Please enter your phone / WhatsApp number.'
  else if (!/^[+\d][\d\s\-()]{6,}$/.test(form.phone.trim())) errors.phone = 'Please enter a valid phone number.'
  if (!form.email.trim()) errors.email = 'Please enter your email.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errors.email = 'Please enter a valid email address.'
  if (!form.service) errors.service = 'Please select a service.'
  if (!form.message.trim()) errors.message = 'Please tell us a little about your project.'
  return errors
}

const contactInfo = [
  { icon: Phone, label: 'Phone / WhatsApp', value: company.phone, href: `tel:${company.phonePlain}` },
  { icon: Mail, label: 'Email', value: company.email, href: `mailto:${company.email}` },
  { icon: MapPin, label: 'Location', value: company.location },
]

const socials = [
  { icon: Facebook, label: 'Facebook', href: company.social.facebook },
  { icon: Instagram, label: 'Instagram', href: company.social.instagram },
  { icon: Linkedin, label: 'LinkedIn', href: company.social.linkedin },
  { icon: WhatsAppIcon, label: 'WhatsApp', href: waMeUrl, onClick: openWhatsApp },
  { icon: Github, label: 'GitHub', href: company.social.github },
]

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const set = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
    setErrors((errs) => ({ ...errs, [field]: undefined }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    setStatus('sending')
    try {
      // Netlify Forms: post URL-encoded data to any path on the same site
      const body = new URLSearchParams({ 'form-name': 'contact', ...form }).toString()
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })
      if (!res.ok) throw new Error(`status ${res.status}`)
      setStatus('sent')
      setForm(initialForm)
    } catch {
      setStatus('error')
    }
  }

  const fieldError = (key) =>
    errors[key] ? <p className="mt-1.5 text-xs text-rose-500">{errors[key]}</p> : null

  return (
    <section id="contact" className="section-tint relative py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Contact Us"
          title="Let's Talk About Your Software"
          subtitle="Tell us what your business needs — we'll reply with a free consultation and demo."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          {/* ------------- info column ------------- */}
          <Reveal className="flex flex-col gap-5">
            <div className="card flex-1 p-7">
              <h3 className="text-lg font-bold text-navy-800">Contact Information</h3>
              <div className="mt-6 space-y-5">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <span className="icon-tile shrink-0">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="font-semibold text-navy-800 transition-colors hover:text-brand-600">
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-navy-800">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    onClick={s.onClick}
                    className="grid h-10 w-10 place-items-center rounded-full border border-surface-300 bg-white text-navy-700 transition-all hover:-translate-y-0.5 hover:border-brand-400 hover:bg-brand-50 hover:text-brand-700"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* location / coverage card (map-style) */}
            <div className="card relative overflow-hidden p-7">
              <div className="bg-dots absolute inset-0 opacity-40" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="relative grid h-10 w-10 place-items-center">
                    <span className="animate-pulse-glow absolute inset-1 rounded-full" />
                    <MapPin className="relative h-6 w-6 text-brand-500" />
                  </span>
                  <h3 className="text-lg font-bold text-navy-800">Serving Pakistan & Beyond</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Based in Pakistan — providing on-site and remote software solutions for local
                  businesses, plus remote development for international clients.
                </p>
              </div>
            </div>
          </Reveal>

          {/* ------------- form column ------------- */}
          <Reveal delay={0.1}>
            <form
              name="contact"
              onSubmit={onSubmit}
              noValidate
              className="card p-7 sm:p-9"
            >
              {/* honeypot for Netlify spam filtering */}
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>Don't fill this out: <input name="bot-field" /></label>
              </p>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy-700">Name *</label>
                  <input id="name" name="name" type="text" value={form.name} onChange={set('name')} placeholder="Your full name" className="field" />
                  {fieldError('name')}
                </div>
                <div>
                  <label htmlFor="business" className="mb-1.5 block text-sm font-medium text-navy-700">Business Name</label>
                  <input id="business" name="business" type="text" value={form.business} onChange={set('business')} placeholder="Your shop / company" className="field" />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy-700">Phone / WhatsApp *</label>
                  <input id="phone" name="phone" type="tel" value={form.phone} onChange={set('phone')} placeholder="+92 3XX XXXXXXX" className="field" />
                  {fieldError('phone')}
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy-700">Email *</label>
                  <input id="email" name="email" type="email" value={form.email} onChange={set('email')} placeholder="you@business.com" className="field" />
                  {fieldError('email')}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-navy-700">Service Required *</label>
                  <select id="service" name="service" value={form.service} onChange={set('service')} className="field appearance-none bg-white">
                    <option value="" disabled>Select a service…</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {fieldError('service')}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy-700">Message *</label>
                  <textarea id="message" name="message" rows={5} value={form.message} onChange={set('message')} placeholder="Tell us about your business and what you'd like the software to do…" className="field resize-none" />
                  {fieldError('message')}
                </div>
              </div>

              <motion.button
                type="submit"
                whileTap={{ scale: 0.98 }}
                disabled={status === 'sending'}
                className="btn-primary mt-7 w-full py-4 text-base disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'sending' ? (
                  <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
                ) : (
                  <>Send Message <Send className="h-4 w-4" /></>
                )}
              </motion.button>

              {status === 'sent' && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-emerald-600"
                >
                  <CheckCircle2 className="h-4 w-4" /> Thank you! We'll get back to you within 24 hours.
                </motion.p>
              )}
              {status === 'error' && (
                <p className="mt-4 text-center text-sm text-rose-500">
                  Something went wrong. Please WhatsApp us directly at {company.phone}.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
