import { motion } from 'framer-motion'
import { ArrowRight, MessagesSquare, Phone } from 'lucide-react'
import Reveal from './Reveal'
import { WhatsAppIcon } from './FloatingActions'
import { company, images } from '../data/site'

/** Full-width photographic CTA section. */
export default function CtaBand() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      {/* photo backdrop */}
      <div className="absolute inset-0 -z-10">
        <img src={images.cta} alt="" aria-hidden="true" loading="lazy" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-ink-950/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-transparent to-ink-950" />
      </div>

      <div className="container-px text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Let's Build Something <span className="text-gradient">Great Together</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Smart software that saves time, reduces errors, improves reporting, and helps your
            business grow.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="#contact" className="btn-primary px-8 py-4 text-base">
              Request Free Demo <ArrowRight className="h-4 w-4" />
            </a>
            <a href={company.whatsapp} target="_blank" rel="noreferrer" className="btn-whatsapp px-8 py-4 text-base">
              <WhatsAppIcon className="h-5 w-5" /> WhatsApp Now
            </a>
            <a href="#contact" className="btn-ghost px-8 py-4 text-base">
              <MessagesSquare className="h-4 w-4" /> Discuss Your Project
            </a>
          </div>

          <motion.a
            href={`tel:${company.phonePlain}`}
            whileHover={{ scale: 1.04 }}
            className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/15 bg-ink-950/60 px-6 py-3 backdrop-blur"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-ink-950">
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
