/* ====================================================================
   FR SOFTWARE SOLUTIONS — SITE CONTENT
   --------------------------------------------------------------------
   👉 This is the ONLY file you need to edit to update the website.
      Replace the placeholder text, names, emails and project details
      below with your real information, then redeploy.
   ==================================================================== */

export const company = {
  name: 'FR Software Solutions',
  shortName: 'FR Software',
  domain: 'frsoftwaresolutions.online',
  tagline: 'Software that moves your business forward',
  description:
    'We are a software studio that designs, builds and scales custom web, mobile and cloud products for ambitious companies worldwide.',
  email: 'hello@frsoftwaresolutions.online',
  phone: '+1 (000) 000-0000',
  location: 'Remote-first · Serving clients worldwide',
  founded: '2020',
  social: {
    linkedin: 'https://www.linkedin.com/',
    github: 'https://github.com/',
    twitter: 'https://x.com/',
    instagram: 'https://instagram.com/',
  },
}

/* Quick stats shown in the hero / stats band ------------------------ */
export const stats = [
  { value: 120, suffix: '+', label: 'Projects delivered' },
  { value: 65, suffix: '+', label: 'Happy clients' },
  { value: 18, suffix: '', label: 'Team members' },
  { value: 6, suffix: ' yrs', label: 'In business' },
]

/* Brands / "trusted by" marquee (text logos) ----------------------- */
export const trustedBy = [
  'Nexora', 'BrightPay', 'CloudNest', 'Vertex Labs',
  'Finovo', 'MediCore', 'ShopSphere', 'DataPilot',
]

/* Services ---------------------------------------------------------- */
export const services = [
  {
    icon: 'Code2',
    title: 'Custom Web Development',
    description:
      'High-performance web applications and marketing sites built with React, Next.js and modern tooling — fast, accessible and SEO-ready.',
    bullets: ['SPA & SSR apps', 'Headless CMS', 'Design systems'],
  },
  {
    icon: 'Smartphone',
    title: 'Mobile App Development',
    description:
      'Native-quality iOS & Android apps from a single codebase using React Native and Flutter, shipped to the stores and maintained.',
    bullets: ['iOS & Android', 'Offline-first', 'Push & analytics'],
  },
  {
    icon: 'Cloud',
    title: 'Cloud & DevOps',
    description:
      'Scalable cloud architecture on AWS, Azure and GCP with CI/CD, containers and infrastructure-as-code for reliable, automated delivery.',
    bullets: ['AWS · Azure · GCP', 'Docker & Kubernetes', 'CI/CD pipelines'],
  },
  {
    icon: 'Database',
    title: 'SaaS & Platform Engineering',
    description:
      'End-to-end SaaS products — multi-tenant architecture, billing, dashboards and integrations engineered to scale with your business.',
    bullets: ['Multi-tenant', 'Stripe billing', 'Role-based access'],
  },
  {
    icon: 'Sparkles',
    title: 'AI & Automation',
    description:
      'Practical AI features and workflow automation — chat assistants, document processing and data pipelines that save real hours.',
    bullets: ['LLM integration', 'Workflow automation', 'Data pipelines'],
  },
  {
    icon: 'PenTool',
    title: 'UI/UX Design',
    description:
      'Research-led product design and brand identity — wireframes, prototypes and polished interfaces your users will love.',
    bullets: ['User research', 'Prototyping', 'Design-to-code'],
  },
]

/* Projects / Portfolio ---------------------------------------------- */
/* categories used by the filter bar */
export const projectCategories = ['All', 'Web', 'Mobile', 'Cloud', 'AI']

export const projects = [
  {
    title: 'Nexora Analytics Platform',
    category: 'Web',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    description:
      'A real-time analytics dashboard processing millions of events a day, with custom reporting and team collaboration.',
    result: '3× faster reporting',
    accent: 'from-brand-500 to-indigo-700',
  },
  {
    title: 'BrightPay Mobile Wallet',
    category: 'Mobile',
    tags: ['React Native', 'Stripe', 'Firebase'],
    description:
      'A secure mobile wallet and payments app with biometric login, instant transfers and spend insights.',
    result: '4.8★ on stores',
    accent: 'from-accent-500 to-cyan-700',
  },
  {
    title: 'CloudNest Infrastructure',
    category: 'Cloud',
    tags: ['AWS', 'Kubernetes', 'Terraform'],
    description:
      'Migrated a legacy monolith to a containerized, auto-scaling cloud platform with zero-downtime deploys.',
    result: '40% lower cost',
    accent: 'from-violet-500 to-brand-700',
  },
  {
    title: 'MediCore Patient Portal',
    category: 'Web',
    tags: ['Next.js', 'HIPAA', 'TypeScript'],
    description:
      'A HIPAA-compliant patient portal with appointment booking, secure messaging and e-prescriptions.',
    result: '30k+ patients',
    accent: 'from-emerald-500 to-teal-700',
  },
  {
    title: 'DataPilot AI Assistant',
    category: 'AI',
    tags: ['Python', 'LLM', 'FastAPI'],
    description:
      'An AI assistant that answers questions over company documents and automates repetitive support tasks.',
    result: '60% fewer tickets',
    accent: 'from-fuchsia-500 to-purple-700',
  },
  {
    title: 'ShopSphere E-commerce',
    category: 'Web',
    tags: ['Next.js', 'Shopify', 'Stripe'],
    description:
      'A headless e-commerce storefront with lightning-fast pages, personalization and a custom checkout.',
    result: '+52% conversion',
    accent: 'from-orange-500 to-rose-700',
  },
]

/* Process / how we work --------------------------------------------- */
export const process = [
  {
    step: '01',
    title: 'Discover',
    description: 'We dig into your goals, users and constraints to define a clear, prioritized scope.',
  },
  {
    step: '02',
    title: 'Design',
    description: 'Wireframes and interactive prototypes turn ideas into a tangible, testable product.',
  },
  {
    step: '03',
    title: 'Build',
    description: 'Agile sprints with weekly demos — you see working software every step of the way.',
  },
  {
    step: '04',
    title: 'Launch & Scale',
    description: 'We deploy, monitor and iterate — then keep improving as your business grows.',
  },
]

/* Testimonials / client feedback ------------------------------------ */
export const testimonials = [
  {
    quote:
      'FR Software Solutions delivered our platform ahead of schedule and the quality was outstanding. They felt like part of our own team.',
    name: 'Sarah Mitchell',
    role: 'CEO, Nexora',
    rating: 5,
  },
  {
    quote:
      'The mobile app they built doubled our active users in three months. Communication was clear and they truly cared about the outcome.',
    name: 'David Chen',
    role: 'Founder, BrightPay',
    rating: 5,
  },
  {
    quote:
      'Their cloud migration cut our hosting costs by 40% with zero downtime. Genuinely impressive engineering.',
    name: 'Priya Nair',
    role: 'CTO, CloudNest',
    rating: 5,
  },
  {
    quote:
      'A reliable partner from day one. They understood our healthcare compliance needs and shipped a rock-solid portal.',
    name: 'James Carter',
    role: 'Director, MediCore',
    rating: 5,
  },
  {
    quote:
      'The AI assistant they built saved our support team countless hours. Professional, responsive and highly skilled.',
    name: 'Laura Gomez',
    role: 'Head of Ops, DataPilot',
    rating: 5,
  },
]

/* Team -------------------------------------------------------------- */
/* initials are used to render avatar placeholders — replace `image`
   with a real photo path in /public to show photos instead. */
export const team = [
  { name: 'Faisal Rahman', role: 'Founder & CEO', initials: 'FR', image: '' },
  { name: 'Ayesha Khan', role: 'Lead Product Designer', initials: 'AK', image: '' },
  { name: 'Omar Siddiqui', role: 'Principal Engineer', initials: 'OS', image: '' },
  { name: 'Hira Malik', role: 'Mobile Lead', initials: 'HM', image: '' },
  { name: 'Daniyal Ahmed', role: 'Cloud / DevOps Lead', initials: 'DA', image: '' },
  { name: 'Sana Tariq', role: 'Project Manager', initials: 'ST', image: '' },
]

/* Nav links --------------------------------------------------------- */
export const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Team', href: '#team' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]
