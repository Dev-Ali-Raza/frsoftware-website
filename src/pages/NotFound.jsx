import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import usePageMeta from '../lib/usePageMeta'
import { company } from '../data/site'

export default function NotFound() {
  usePageMeta({
    title: `Page not found | ${company.name}`,
    description: 'The page you are looking for does not exist.',
  })

  return (
    <section className="section-light flex min-h-[70vh] items-center pt-32 pb-24">
      <div className="container-px text-center">
        <span className="eyebrow mx-auto">404</span>
        <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-navy-800 sm:text-5xl">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-slate-600">
          The link may be old or mistyped. Head back to the homepage to browse our projects and services.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn-primary px-6 py-3">
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
          <Link to="/#portfolio" className="btn-secondary px-6 py-3">View projects</Link>
        </div>
      </div>
    </section>
  )
}
