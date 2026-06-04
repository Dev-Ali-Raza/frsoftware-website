import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

/** Bold call-to-action band shown above the footer. */
export default function CtaBand() {
  return (
    <section className="container-px py-12">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-600/30 via-ink-850 to-accent-500/20 px-8 py-14 text-center sm:px-16 sm:py-20">
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brand-500/30 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-accent-500/20 blur-[100px]" />

          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Have a project in mind? Let's make it real.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
              Book a free, no-obligation consultation and get a roadmap for your idea.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="#contact" className="btn-primary text-base">
                Start a project <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#work" className="btn-ghost text-base">
                See our work
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
