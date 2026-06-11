import { motion } from 'framer-motion'
import { ArrowRight, MessagesSquare, Phone } from 'lucide-react'
import Reveal from './Reveal'
import { WhatsAppIcon } from './FloatingActions'
import { company } from '../data/site'

/** High-conversion CTA band with glowing background and floating shapes. */
export default function CtaBand() {
  return (
    <section className="relative py-24">
      <div className="container-px">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-[2.5rem] border-brand-500/20 px-6 py-16 text-center sm:px-12">
            {/* glow + animated shapes */}
            <div className="pointer-events-none absolute inset-0 -z-0">
              <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-brand-600/25 blur-[110px]" />
              <div className="aurora-blob absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-accent-500/20 blur-[80px]" />
              <div className="animate-spin-slow absolute -right-12 -top-12 h-44 w-44 rounded-3xl border border-brand-500/20" />
              <div className="animate-spin-slow absolute -left-8 -top-16 h-32 w-32 rotate-45 rounded-2xl border border-accent-400/15" style={{ animationDirection: 'reverse' }} />
              <div className="animate-bob absolute right-16 bottom-8 hidden h-16 w-16 rounded-2xl border border-white/10 bg-gradient-to-br from-brand-600/30 to-accent-500/20 backdrop-blur lg:block" />
              <div className="bg-grid absolute inset-0 opacity-30" />
            </div>

            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                Ready to <span className="text-gradient">Digitize Your Business?</span>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
                Let's build a smart software solution that saves time, reduces errors, improves
                reporting, and helps your business grow.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <a href={company.whatsapp} target="_blank" rel="noreferrer" className="btn-whatsapp px-8 py-3.5 text-base">
                  <WhatsAppIcon className="h-5 w-5" /> WhatsApp Now
                </a>
                <a href="#contact" className="btn-primary px-8 py-3.5 text-base">
                  Request Free Demo <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#contact" className="btn-ghost px-8 py-3.5 text-base">
                  <MessagesSquare className="h-4 w-4" /> Discuss Your Project
                </a>
              </div>

              <motion.a
                href={`tel:${company.phonePlain}`}
                whileHover={{ scale: 1.04 }}
                className="mt-9 inline-flex items-center gap-3 rounded-full border border-white/10 bg-ink-900/60 px-6 py-3 backdrop-blur"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-brand-600 to-accent-500 text-white">
                  <Phone className="h-4 w-4" />
                </span>
                <span className="font-display text-xl font-bold tracking-wide text-white sm:text-2xl">
                  {company.phone}
                </span>
              </motion.a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
