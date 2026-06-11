import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Eye, MonitorPlay } from 'lucide-react'
import Icon from './Icon'
import Modal from './Modal'
import { StaggerGroup, staggerItem } from './Reveal'
import SectionHeading from './SectionHeading'
import { products } from '../data/site'

/* Card shows the first few features; the modal shows everything. */
const PREVIEW_COUNT = 5

export default function Products() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="products" className="relative py-24">
      <div className="pointer-events-none absolute left-0 top-1/3 -z-10 h-[460px] w-[460px] rounded-full bg-brand-600/10 blur-[150px]" />

      <div className="container-px">
        <SectionHeading
          eyebrow="Our Products"
          title="Ready-to-Deploy Business Software"
          subtitle="Proven systems already running real businesses — customized and deployed for yours."
        />

        <StaggerGroup className="mt-14 grid gap-6 lg:grid-cols-3" stagger={0.12}>
          {products.map((product) => (
            <motion.article
              key={product.name}
              variants={staggerItem}
              className={`glass-glow group relative flex flex-col overflow-hidden p-7 ${
                product.featured ? 'lg:-mt-3 lg:mb-3 border-brand-500/30' : ''
              }`}
            >
              <span className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${product.accent} opacity-40`} />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-ink-800/80 text-accent-300 shadow-inner shadow-white/5">
                    <Icon name={product.icon} className="h-6 w-6" />
                  </span>
                  <motion.span
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${
                      product.featured
                        ? 'animate-pulse-glow bg-gradient-to-r from-brand-600 to-accent-500 text-white'
                        : 'border border-white/15 bg-white/5 text-slate-300'
                    }`}
                  >
                    {product.badge}
                  </motion.span>
                </div>

                <h3 className="mt-5 text-xl font-bold">{product.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{product.description}</p>

                {/* screenshot placeholder */}
                <div className="mt-5 grid h-32 place-items-center rounded-xl border border-dashed border-white/15 bg-ink-900/50">
                  <span className="flex items-center gap-2 text-xs text-slate-500">
                    <MonitorPlay className="h-4 w-4" /> Product screenshot
                  </span>
                </div>

                <ul className="mt-5 space-y-2">
                  {product.features.slice(0, PREVIEW_COUNT).map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                      {f}
                    </li>
                  ))}
                  {product.features.length > PREVIEW_COUNT && (
                    <li className="pl-6 text-xs font-medium text-brand-300">
                      +{product.features.length - PREVIEW_COUNT} more features
                    </li>
                  )}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {product.technologies.map((t) => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>
              </div>

              <div className="relative mt-auto flex gap-3 pt-7">
                <a href="#contact" className="btn-primary flex-1 px-4 py-2.5 text-xs sm:text-sm">
                  Request Demo <ArrowRight className="h-3.5 w-3.5" />
                </a>
                <button
                  onClick={() => setSelected(product)}
                  className="btn-ghost flex-1 px-4 py-2.5 text-xs sm:text-sm"
                >
                  <Eye className="h-3.5 w-3.5" /> View Details
                </button>
              </div>
            </motion.article>
          ))}
        </StaggerGroup>
      </div>

      {/* ---------------- product detail modal ---------------- */}
      <Modal open={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <div>
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-600/40 to-accent-500/20 text-accent-300">
                <Icon name={selected.icon} className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-2xl font-bold">{selected.name}</h3>
                <p className="text-sm text-slate-400">{selected.description}</p>
              </div>
            </div>

            <h4 className="mt-7 text-sm font-bold uppercase tracking-wider text-brand-300">All Features</h4>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {selected.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                  {f}
                </li>
              ))}
            </ul>

            <h4 className="mt-7 text-sm font-bold uppercase tracking-wider text-brand-300">Technologies</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {selected.technologies.map((t) => (
                <span key={t} className="tech-badge">{t}</span>
              ))}
            </div>

            <a href="#contact" onClick={() => setSelected(null)} className="btn-primary mt-8 w-full">
              Request Free Demo <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        )}
      </Modal>
    </section>
  )
}
