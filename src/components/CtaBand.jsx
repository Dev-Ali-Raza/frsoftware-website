import { motion } from 'framer-motion'
import { ArrowRight, MessagesSquare, Phone } from 'lucide-react'
import Reveal from './Reveal'
import { WhatsAppIcon } from './FloatingActions'
import { company } from '../data/site'
import { whatsappLinkProps } from '../lib/whatsapp'

/** Full-width navy CTA section. */
export default function CtaBand() {
  return (
    <section className="bg-hero relative overflow-hidden py-24 text-slate-300 lg:py-32">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-50" />
      <div className="aurora-blob pointer-events-none absolute -left-24 bottom-0 h-[420px] w-[420px] rounded-full bg-brand-500/20 blur-[140px]" />

      <div className="container-px relative text-center">
        <Reveal>
          <span className="eyebrow text-brand-300">Ready to start?</span>
          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let's Build Something <span className="text-gradient-light">Great Together</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Smart software that saves time, reduces errors, improves reporting, and helps your
            business grow.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="#contact" className="btn-primary px-8 py-4 text-base">
              Request Free Demo <ArrowRight className="h-4 w-4" />
            </a>
            <a {...whatsappLinkProps} className="btn-whatsapp px-8 py-4 text-base">
              <WhatsAppIcon className="h-5 w-5" /> WhatsApp Now
            </a>
            <a href="#contact" className="btn-ghost px-8 py-4 text-base">
              <MessagesSquare className="h-4 w-4" /> Discuss Your Project
            </a>
          </div>

          <motion.a
            href={`tel:${company.phonePlain}`}
            whileHover={{ scale: 1.04 }}
            className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3 backdrop-blur"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-500 text-white">
              <Phone className="h-4 w-4" />
            </span>
            <span className="font-display text-xl font-bold tracking-wide text-white sm:text-2xl">
              {company.phone}
            </span>
          </motion.a>
        </Reveal>
      </div>
    </section>
  )
}
