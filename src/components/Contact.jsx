import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send, CheckCircle2, ArrowRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { company } from '../data/site'

const encode = (data) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&')

const contactInfo = [
  { icon: Mail, label: 'Email', value: company.email, href: `mailto:${company.email}` },
  { icon: Phone, label: 'Phone', value: company.phone, href: `tel:${company.phone.replace(/\s/g, '')}` },
  { icon: MapPin, label: 'Location', value: company.location, href: null },
]

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...form }),
      })
      setStatus('success')
      setForm({ name: '', email: '', company: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      {/* glow */}
      <div className="pointer-events-none absolute right-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-accent-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute -left-20 bottom-0 -z-10 h-96 w-96 rounded-full bg-brand-600/15 blur-[140px]" />

      <div className="container-px">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: pitch + info */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Get in touch"
              title="Let's build something great together"
              subtitle="Tell us about your project and we'll get back to you within one business day with next steps."
            />

            <div className="mt-10 space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon
                const inner = (
                  <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.025] p-4 transition-colors hover:border-brand-500/40">
                    <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-500/15 text-brand-300">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-slate-500">
                        {item.label}
                      </span>
                      <span className="block text-sm font-medium text-white">{item.value}</span>
                    </span>
                  </div>
                )
                return (
                  <Reveal key={item.label}>
                    {item.href ? (
                      <a href={item.href} className="block">{inner}</a>
                    ) : (
                      inner
                    )}
                  </Reveal>
                )
              })}
            </div>
          </div>

          {/* Right: form */}
          <Reveal delay={0.1}>
            <div className="glass p-7 sm:p-9">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex h-full min-h-[24rem] flex-col items-center justify-center text-center"
                >
                  <CheckCircle2 className="h-16 w-16 text-accent-400" />
                  <h3 className="mt-5 text-2xl font-bold text-white">Message sent!</h3>
                  <p className="mt-2 max-w-sm text-slate-400">
                    Thanks for reaching out. We'll be in touch within one business day.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-ghost mt-6"
                  >
                    Send another <ArrowRight className="h-4 w-4" />
                  </button>
                </motion.div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {/* Netlify hidden fields */}
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Don't fill this out: <input name="bot-field" onChange={handleChange} />
                    </label>
                  </p>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Name" name="name" value={form.name}
                      onChange={handleChange} placeholder="Jane Doe" required
                    />
                    <Field
                      label="Email" name="email" type="email" value={form.email}
                      onChange={handleChange} placeholder="jane@company.com" required
                    />
                  </div>
                  <Field
                    label="Company" name="company" value={form.company}
                    onChange={handleChange} placeholder="Acme Inc. (optional)"
                  />
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">
                      Project details
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us what you're looking to build…"
                      className="w-full resize-none rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-brand-500/60 focus:ring-2 focus:ring-brand-500/20"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-sm text-rose-400">
                      Something went wrong. Please email us directly at {company.email}.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary w-full text-base disabled:opacity-60"
                  >
                    {status === 'sending' ? 'Sending…' : 'Send message'}
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-slate-300">{label}</label>
      <input
        {...props}
        className="w-full rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-brand-500/60 focus:ring-2 focus:ring-brand-500/20"
      />
    </div>
  )
}
