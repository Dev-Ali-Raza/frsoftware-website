/* ====================================================================
   FR SOFTWARE SOLUTIONS — SITE CONTENT
   --------------------------------------------------------------------
   👉 Edit this file to update website content.
   👉 Project detail pages (/projects/<slug>) also read
      src/data/projectDetails.js and screenshots in public/projects/<slug>/.
   ==================================================================== */

export const company = {
  name: 'FR Software Solutions',
  shortName: 'FR Software',
  domain: 'frsoftwaresolutions.com',
  url: 'https://frsoftwaresolutions.com',
  tagline: 'Building technology that powers business growth.',
  description:
    'FR Software Solutions is a modern software development company building POS systems, inventory management, restaurant and retail management, accounting systems, dashboards, and custom web & desktop applications for growing businesses.',
  email: 'info@frsoftwaresolutions.com',
  phone: '+92 324 0285920',
  phonePlain: '+923240285920',
  whatsappNumber: '923240285920',       // digits only, with country code — used by src/lib/whatsapp.js
  whatsappMessage: "Hello FR Software Solutions, I'm interested in your software services.",
  whatsapp: 'https://wa.me/923240285920',
  location: 'Pakistan · Serving local & international clients',
  social: {
    facebook: 'https://www.facebook.com/FRSoftwareSolutions',
    instagram: 'https://www.instagram.com/frsoftwaresolutions/',
    linkedin: 'https://www.linkedin.com/company/fr-software-solutions',
    whatsapp: 'https://wa.me/923240285920',
    github: 'https://github.com/Dev-Ali-Raza',
  },
}

/* Brand asset paths (official logo files live in /public/brand/). */
export const brand = {
  logo: '/brand/logo.png',              // navy lockup — white backgrounds
  logoWhite: '/brand/logo-white.png',   // white lockup — navy backgrounds
  logoTagline: '/brand/logo-tagline.png',
  mark: '/brand/logo-mark.png',         // "FR" initials only
  markWhite: '/brand/logo-mark-white.png',
  cover: '/brand/cover.jpg',
}

/* Nav links — keep this short (Introvera-style minimal navbar).
   All other sections stay reachable by scrolling / footer links. */
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

/* Hero ---------------------------------------------------------------- */
export const hero = {
  heading: 'Build Software That Matters',
  /* the last word cycles through these in the hero headline */
  rotatingWords: ['Matters', 'Sells', 'Scales', 'Lasts'],
  tags: ['Insight', 'Innovation', 'FR Software'],
  subheading:
    'FR Software Solutions helps businesses automate operations, manage sales, track inventory, handle accounting, and grow with custom web, desktop, and POS systems.',
  trustLine:
    'Trusted software solutions for shops, restaurants, retailers, and business owners.',
  floatingIcons: [
    { icon: 'MonitorSmartphone', label: 'POS' },
    { icon: 'Boxes', label: 'Inventory' },
    { icon: 'Calculator', label: 'Accounting' },
    { icon: 'BarChart3', label: 'Reports' },
    { icon: 'Plug', label: 'API' },
    { icon: 'Workflow', label: 'Automation' },
    { icon: 'LayoutDashboard', label: 'Dashboard' },
    { icon: 'ShieldCheck', label: 'Security' },
  ],
}

/* Trust / stats band -------------------------------------------------- */
export const stats = [
  { icon: 'FolderKanban', value: 15, suffix: '+', label: 'Software Projects' },
  { icon: 'Blocks', value: 10, suffix: '+', label: 'Business Modules' },
  { icon: 'Store', value: 5, suffix: '+', label: 'Business Categories' },
  { icon: 'Puzzle', value: null, label: 'Custom Solutions', sub: 'For Every Business' },
  { icon: 'Headset', value: null, label: 'Reliable Support', sub: 'Long-Term Focus' },
]

/* About ---------------------------------------------------------------- */
export const about = {
  heading: 'About FR Software Solutions',
  paragraphs: [
    'FR Software Solutions is a modern software development company focused on building reliable, scalable, and user-friendly business software. We help shops, restaurants, wholesalers, retailers, and service businesses digitize their daily operations through powerful software systems.',
    'Our goal is to save business owners time, reduce manual errors, improve reporting, and provide smart digital tools for business growth.',
  ],
  badges: ['Fast Delivery', 'Secure & Reliable', 'Dedicated Team', 'Long-Term Support'],
  cards: [
    {
      icon: 'Workflow',
      title: 'Business Automation',
      description:
        'We automate daily business operations including sales, inventory, billing, reports, accounting, and customer records.',
    },
    {
      icon: 'Code2',
      title: 'Custom Software Development',
      description:
        'We design and develop custom web, desktop, and database-driven applications based on each business need.',
    },
    {
      icon: 'LifeBuoy',
      title: 'Reliable Support & Maintenance',
      description:
        'We focus on long-term support, system improvements, updates, and reliable technical guidance.',
    },
  ],
}

/* Services ------------------------------------------------------------- */
export const services = [
  {
    icon: 'Code2',
    title: 'Custom Software Development',
    description: 'Tailor-made software solutions designed around your business workflow.',
  },
  {
    icon: 'Globe',
    title: 'Web Application Development',
    description: 'Modern web applications using Angular, React, .NET, APIs, and SQL databases.',
  },
  {
    icon: 'MonitorDot',
    title: 'Desktop Application Development',
    description: 'Reliable Windows desktop applications for billing, inventory, and business management.',
  },
  {
    icon: 'ScanBarcode',
    title: 'POS System Development',
    description: 'Fast and easy-to-use POS systems for shops, restaurants, cafés, supermarkets, and retail businesses.',
  },
  {
    icon: 'Boxes',
    title: 'Inventory Management Systems',
    description: 'Stock tracking, stock in/out, low stock alerts, product records, and inventory reports.',
  },
  {
    icon: 'UtensilsCrossed',
    title: 'Restaurant Management Systems',
    description: 'Restaurant billing, table and order tracking, inventory deduction, and sales reporting.',
  },
  {
    icon: 'Store',
    title: 'Retail Management Systems',
    description: 'Complete retail shop management with POS, products, purchases, sales, customers, suppliers, and reports.',
  },
  {
    icon: 'Calculator',
    title: 'Accounting & Ledger Systems',
    description: 'Customer ledgers, supplier ledgers, chart of accounts, journal entries, trial balance, profit and loss, and balance sheet.',
  },
  {
    icon: 'Plug',
    title: 'API Integrations',
    description: 'Integration with third-party APIs, payment systems, CRM platforms, dashboards, and automation workflows.',
  },
  {
    icon: 'LayoutDashboard',
    title: 'Dashboard & Reporting Solutions',
    description: 'Business dashboards, KPIs, sales reports, inventory reports, profit reports, and analytics.',
  },
  {
    icon: 'Database',
    title: 'Database Design & SQL Development',
    description: 'Clean database architecture, SQL queries, stored procedures, reporting views, and optimized data structures.',
  },
  {
    icon: 'Workflow',
    title: 'Business Process Automation',
    description: 'Automation tools that reduce repetitive tasks and improve business productivity.',
  },
]

/* Products -------------------------------------------------------------- */
export const products = [
  {
    icon: 'Stethoscope',
    badge: 'Web · Android',
    name: 'MediCare HMS',
    slug: 'medicare-hms',
    description: 'Complete hospital management: OPD, consultation, pharmacy, lab, ultrasound, wards, billing, payroll, and accounts.',
    features: [
      'Patient records with MR number and history',
      'Doctor consultation console',
      'OPD reception with tokens',
      'Pharmacy and lab with stock',
      'Ultrasound report templates',
      'Wards, beds, discharge summary',
      'Billing, receivables, statements',
      'HR, payroll, general ledger',
    ],
    technologies: ['Angular 18', '.NET 9', 'SQL Server', 'Android'],
    accent: 'from-teal-500/20 to-cyan-500/10',
    featured: true,
  },
  {
    icon: 'Warehouse',
    badge: 'Web · Responsive',
    name: 'FR POS Inventory',
    slug: 'pos-inventory',
    description: 'POS, stock, purchases, cash book, bank, and party ledgers for wholesalers and distributors.',
    features: [
      'Touch POS with live stock tiles',
      'Customers, suppliers, products',
      'Purchase book and stock reports',
      'Cash book, bank, and ledgers',
      'Daily sale and profit reports',
      'Day summary and dashboard',
      'Dark mode and mobile layout',
    ],
    technologies: ['Web App', 'SQL Server', 'Responsive'],
    accent: 'from-blue-500/20 to-indigo-500/10',
  },
  {
    icon: 'ShoppingBag',
    badge: 'Web · Ecommerce',
    name: 'Saadgi Ecommerce Platform',
    slug: 'saadgi',
    description: 'Admin-driven online store with SSR storefront, COD and online payments, courier booking, and a store assistant.',
    features: [
      'Mobile-first SSR storefront',
      'Cart, coupons, bundles, wishlist',
      'COD, JazzCash, Easypaisa, Safepay',
      'Order state machine and courier labels',
      'Built-in store assistant',
      'Admin control centre and CMS',
      'Live at saadgiwear.com',
    ],
    technologies: ['Angular SSR', '.NET 9', 'SQL Server', 'Tailwind'],
    accent: 'from-stone-500/20 to-amber-500/10',
  },
]

/* Portfolio / projects --------------------------------------------------- */
export const projectCategories = [
  'All',
  'POS Systems',
  'Inventory',
  'Web Apps',
  'Desktop Apps',
  'Management Systems',
  'Portfolio Websites',
  'Accounting',
  'Business Automation',
  'Ecommerce',
  'Mobile Apps',
]

export const projects = [
  {
    name: 'Mart POS',
    slug: 'mart-pos',
    type: 'Retail POS, Inventory & Accounting System',
    categories: ['POS Systems', 'Inventory', 'Web Apps', 'Accounting', 'Management Systems'],
    description:
      'A web-based POS, inventory, and accounting system for marts, grocery stores, and retail shops: a fast keyboard-driven billing counter with barcode scanning, plus purchases, supplier and customer ledgers, expenses, and full double-entry accounting.',
    technologies: ['Angular 17', 'ASP.NET Core 8', 'SQL Server', 'Dapper'],
    visibility: 'Private',
    features: [
      'Full-screen billing counter with barcode scanning and F-key shortcuts',
      'Cash, card, split, and credit payments; hold, resume, and returns',
      '80mm thermal receipts and barcode label printing',
      'Products, categories, units, and per-product stock history',
      'Purchases (GRN) that raise stock and supplier payables automatically',
      'Supplier and customer ledgers with payments and statements',
      'Stock adjustments and expenses by category',
      'Double-entry accounting posted automatically from every transaction',
      '13 reports incl. trial balance, P&L, balance sheet; PDF and Excel export',
      'Admin, Accountant, Data Entry roles with per-screen permissions',
    ],
    benefits:
      'The counter, the stockroom, and the books run on one database, so every bill, GRN, payment, and expense is already in the accounts and the owner sees real profit without a separate accounting package.',
    accent: 'from-brand-500 to-indigo-700',
    featured: true,
  },
  {
    name: 'DineFlow',
    slug: 'dineflow',
    type: 'Restaurant Management Platform',
    categories: ['POS Systems', 'Web Apps', 'Accounting', 'Management Systems'],
    description:
      'A cloud-based restaurant operating system: touch POS, kitchen display, QR self-ordering, online storefront, inventory, and a full double-entry accounting engine.',
    technologies: ['Angular', '.NET 9', 'SQL Server', 'SignalR', 'PWA'],
    visibility: 'Private',
    features: [
      'Touch POS for dine-in, takeaway, and delivery',
      'Real-time kitchen display system',
      'QR scan-to-order and online storefront',
      'Order acceptance queue and orders board',
      'Recipes, ingredient costing, and inventory',
      'Double-entry accounting and financial statements',
      'Multi-branch, multi-tenant, role-based access',
      'PKR, Urdu / RTL, thermal receipt and KOT printing',
    ],
    benefits:
      'POS and accounting in one system — every sale, void, refund, and stock movement is already a balanced ledger entry, so the books always match the till.',
    accent: 'from-amber-500 to-orange-700',
    featured: true,
  },
  {
    name: 'School Management System',
    slug: 'school-management-system',
    type: 'Multi-Campus School ERP',
    categories: ['Management Systems', 'Web Apps', 'Accounting', 'Business Automation'],
    description:
      'A full-scale school ERP covering admissions, fees, double-entry accounting, exams, attendance, HR and payroll, library, hostel, transport, and parent / student / teacher portals.',
    technologies: ['Angular', '.NET 9', 'SQL Server', 'PrimeNG', 'PWA'],
    visibility: 'Private',
    features: [
      'Admissions, student 360 profile, ID cards',
      'Fee structure, challans, collection, defaulters, online payment',
      'Full double-entry general ledger and financial statements',
      'Exams, marks entry, result cards, timetable, homework',
      'Student and staff attendance with biometric import',
      'HR, payroll, loans, and leave management',
      'Library, hostel, transport, inventory, procurement, fixed assets',
      'Parent, student, and teacher portals; SMS / email broadcasts',
      '50+ reports with PDF, Excel, and CSV export',
      'Multi-campus, multi-tenant, 786 granular permissions',
    ],
    benefits:
      'Runs the entire school on one database — from an admission inquiry to the general-ledger entry — so administration works from accurate, live data instead of paper registers.',
    accent: 'from-indigo-500 to-violet-800',
    featured: true,
  },
  {
    name: 'Saadgi',
    slug: 'saadgi',
    type: 'Ecommerce Platform',
    categories: ['Ecommerce', 'Web Apps', 'Inventory'],
    description:
      'A full-stack, admin-driven ecommerce platform for a premium modest-fashion brand — SSR storefront, cart and checkout, COD and online payments, courier booking, and a built-in store assistant.',
    link: 'https://www.saadgiwear.com/',
    technologies: ['Angular SSR', '.NET 9', 'SQL Server', 'Dapper', 'Tailwind CSS'],
    visibility: 'Public',
    features: [
      'Mobile-first SSR storefront with SEO and social previews',
      'Faceted catalogue, search, colour-aware product galleries',
      'Cart drawer, coupons, bundles, wishlist, reviews',
      'COD, Safepay, JazzCash, Easypaisa payments',
      'Order state machine with courier booking and shipping labels',
      'Built-in store assistant that answers from the live catalogue',
      'Admin control centre: products, orders, inventory, CMS, feature flags',
      '3D / AR product try-on',
    ],
    benefits:
      'The business runs the whole store from the admin panel — products, pricing, payments, couriers, content — with no developer needed for day-to-day changes.',
    accent: 'from-stone-700 to-amber-700',
    featured: true,
  },
  {
    name: 'FR POS Inventory',
    slug: 'pos-inventory',
    type: 'POS, Inventory & Accounts System',
    categories: ['POS Systems', 'Inventory', 'Web Apps', 'Accounting'],
    description:
      'A complete point of sale, stock, purchase, cash book, bank, and ledger system for wholesalers and distributors — with dark mode and a mobile-friendly layout.',
    technologies: ['Web Application', 'SQL Server', 'Responsive UI', 'Dark / Light Mode'],
    visibility: 'Private',
    features: [
      'Touch-friendly point of sale with product tiles',
      'Customer, supplier, and product management',
      'Purchase book and stock tracking',
      'Cash book, bank, and party ledgers',
      'Daily sale, profit, and stock reports',
      'Day summary and dashboard KPIs',
      'Users and roles',
      'Dark mode and mobile layout',
    ],
    benefits:
      'Gives stock-based businesses full visibility over inventory, cash, receivables, and profit — replacing registers and spreadsheets with accurate, instant reports.',
    accent: 'from-blue-700 to-indigo-900',
    featured: true,
  },
  {
    name: 'AI Health Assistant',
    slug: 'ai-health-assistant',
    type: 'Android App · AI Symptom Checker',
    categories: ['Mobile Apps', 'Web Apps'],
    description:
      'An Android health companion with an AI symptom checker that ranks 73 conditions, care plans, medicine reminders, a live doctor and hospital locator, and seasonal health alerts.',
    technologies: ['Android', 'FastAPI', 'Python', 'Machine Learning', 'MongoDB'],
    visibility: 'Private',
    features: [
      'Symptom checker over 248 symptoms with plain-language search',
      'Top-3 condition ranking with confidence and evidence',
      'Care plan: precautions, diet, medication guidance, specialist',
      'Doctor and hospital locator with live map and directions',
      'Medicine reminders with course length and follow-up alarms',
      'Seasonal disease and air-quality alerts',
      'Secure accounts, profile, and prediction history',
      'FastAPI backend on serverless hosting with MongoDB Atlas',
    ],
    benefits:
      'Gives patients a safe first step — a ranked, explained suggestion, the right specialist nearby, and reminders that keep a course of medicine on track.',
    accent: 'from-emerald-500 to-teal-800',
  },
  {
    name: 'MediCare HMS',
    slug: 'medicare-hms',
    type: 'Hospital Management ERP',
    categories: ['Management Systems', 'Web Apps', 'Accounting', 'Inventory', 'Business Automation'],
    description:
      'A complete hospital management system from front desk to final accounts: patients, OPD, consultation console, pharmacy, laboratory, ultrasound reporting, wards, billing, HR and payroll, and full double-entry accounting.',
    link: 'https://hms.frsoftwaresolutions.online/',
    demo: { email: 'demo@hms.com', password: 'Asdf@123' },
    technologies: ['Angular 18', '.NET 9', 'SQL Server 2022', 'Android App'],
    visibility: 'Public',
    features: [
      'Patient registration with MR number, allergies, vitals, visit timeline, documents',
      'Doctor consultation console: vitals, diagnosis, prescriptions, lab orders on one screen',
      'OPD reception with token numbers, queue status, and thermal / A4 slips',
      'Appointments scheduler by doctor',
      'Pharmacy with batches, expiry, POS sales, and FIFO cost of goods',
      'Laboratory: test catalog, orders, results, consumables stock linked to tests',
      'Ultrasound reporting with 12 pre-filled templates and WhatsApp PDF sharing',
      'Wards and beds map, admission, discharge summary',
      'Billing with partial payments, lump-sum receive, credit notes, patient statements',
      'HR, payroll, advances, payslips, salary history',
      'Full double-entry general ledger: vouchers, trial balance, P&L, balance sheet, cash flow',
      'Suppliers and payables, fixed assets with depreciation',
      '25+ date-filtered, printable reports',
      'Roles and screen-level permissions, audit trail, database backup',
    ],
    benefits:
      'One login runs every department of the hospital, and every invoice, payment, purchase, salary, and stock movement posts to the accounts automatically, so the owner sees real numbers every day without separate accounting software.',
    accent: 'from-teal-500 to-cyan-800',
    featured: true,
  },
  {
    name: 'TownOne Housing Scheme ERP',
    slug: 'townone-housing-erp',
    type: 'Real Estate & Housing Scheme ERP',
    categories: ['Management Systems', 'Web Apps', 'Accounting', 'Business Automation'],
    description:
      'A complete ERP for housing schemes and property developers: plots, blocks, bookings, installment recovery, customer ledgers, printable allotment documents, and full double-entry accounting.',
    link: 'https://townone.frsoftwaresolutions.online/login',
    technologies: ['Web Application', 'SQL Server', 'Double-Entry Accounting', 'PDF / Excel Reports'],
    visibility: 'Private',
    features: [
      'Projects, blocks, and units with bulk add and block-wise stock summary',
      'Customer profiles with CNIC, nominees, family members, and documents',
      'Booking contracts with monthly, half-yearly, demarcation, and possession streams',
      'Installment recovery: cash, bank, split receipts, cheques, overdue and defaulters',
      'Automatic late-payment surcharge with waive option',
      'Cancellation, refund, restore, and plot transfer workflows',
      'Villa construction contracts with separate ledgers',
      'Full double-entry accounting with trial balance, balance sheet, and P&L',
      'Editable printables: application form, allotment letter, demand notice, vouchers',
      '36+ reports with PDF and Excel export',
      'Roles, screen-level permissions, and activity log',
    ],
    benefits:
      'Replaces files, registers, and Excel schedules with one system that knows every plot\'s status, every customer\'s balance, and every rupee collected, and prints the paperwork automatically.',
    accent: 'from-violet-500 to-brand-700',
    featured: true,
  },
  {
    name: 'Inventory Management System',
    slug: 'inventory-management-system',
    type: 'Stock Management Software',
    categories: ['Inventory', 'Desktop Apps'],
    description:
      'A complete inventory tracking solution for retail shops, wholesalers, and stock-based businesses.',
    technologies: ['C#', 'WinForms', 'SQL Server'],
    visibility: 'Private',
    features: ['Stock in/out', 'Stock movement logging', 'Monthly reports', 'Low stock alerts', 'User role support'],
    benefits:
      'Prevents stock-outs and shrinkage with accurate movement logs, alerts, and monthly reports — no more guessing what is on the shelf.',
    accent: 'from-emerald-500 to-green-700',
  },
  {
    name: 'Custom Business Dashboard',
    slug: 'custom-business-dashboard',
    type: 'Dashboard & Analytics',
    categories: ['Web Apps', 'Business Automation', 'Accounting'],
    description:
      'A dashboard system for tracking business KPIs, reports, sales, expenses, and performance metrics.',
    technologies: ['Angular', '.NET', 'SQL Server', 'Charts'],
    visibility: 'Private',
    features: ['KPI tracking', 'Sales analytics', 'Expense reports', 'Business performance dashboard'],
    benefits:
      'Turns raw business data into clear daily KPIs so owners can spot problems and opportunities at a glance.',
    accent: 'from-accent-500 to-blue-700',
  },
  {
    name: 'Eye Optical',
    slug: 'eye-optical',
    type: 'Optical Shop Management System',
    categories: ['Management Systems', 'Desktop Apps'],
    description:
      'A management system for optical shops to handle customers, prescriptions, invoices, and records.',
    technologies: ['C#', 'WinForms', 'SQL Server'],
    visibility: 'Private',
    features: ['Customer management', 'Eyesight prescription records', 'Invoice management', 'Optical shop workflow'],
    benefits:
      'Keeps prescriptions and customer history at the shop\'s fingertips, speeding up repeat orders and improving customer service.',
    accent: 'from-teal-500 to-cyan-700',
  },
  {
    name: 'Estate Agency',
    slug: 'estate-agency',
    type: 'Real Estate Management System',
    categories: ['Management Systems', 'Business Automation'],
    description:
      'A system for managing property listings, clients, agents, deals, and agency workflows.',
    technologies: ['SQL', 'Database', 'Business Management'],
    visibility: 'Private',
    features: ['Property records', 'Client management', 'Agency workflow management', 'Deal tracking'],
    benefits:
      'Keeps property listings, client follow-ups, and deal pipelines organized so agencies close deals faster with fewer missed opportunities.',
    accent: 'from-amber-500 to-orange-700',
  },
  {
    name: 'DMS',
    slug: 'dms',
    type: 'Business Management System',
    categories: ['Management Systems', 'Web Apps', 'Business Automation'],
    description:
      'A custom data management system built for managing business records, workflows, and operational data.',
    technologies: ['CSS', 'Web Development', 'Database'],
    visibility: 'Private',
    features: ['Business records management', 'Workflow organization', 'Data management', 'Reporting support'],
    benefits:
      'Centralizes scattered business records into one organized system, reducing manual paperwork and making operational data searchable and reportable.',
    accent: 'from-sky-500 to-blue-700',
  },
  {
    name: 'Mart',
    slug: 'mart',
    type: 'Retail Management System',
    categories: ['Management Systems', 'Web Apps', 'Inventory'],
    description:
      'A retail software solution for managing products, customers, sales, inventory, and business records.',
    technologies: ['TypeScript', 'Web App', 'Database'],
    visibility: 'Private',
    features: ['Product management', 'Sales management', 'Customer records', 'Inventory tracking'],
    benefits:
      'Brings products, sales, and customer records into one system so retail owners always know what is selling and what is in stock.',
    accent: 'from-cyan-500 to-sky-700',
  },
  {
    name: 'Ali Raza Portfolio Website',
    slug: 'ali-raza-portfolio',
    type: 'Personal Portfolio Website',
    categories: ['Portfolio Websites', 'Web Apps'],
    description:
      'A professional portfolio website showcasing developer skills, projects, and experience.',
    link: 'https://dev-ali-raza.github.io/my-portfolio/',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    visibility: 'Public',
    features: ['Developer profile', 'Project showcase', 'Skills section', 'Contact section'],
    benefits:
      'A clean, fast personal brand site that presents skills and project work professionally to potential clients and employers.',
    accent: 'from-violet-500 to-purple-700',
  },
  {
    name: 'Hamza Memon Portfolio Website',
    slug: 'hamza-memon-portfolio',
    type: 'Personal Portfolio Website',
    categories: ['Portfolio Websites', 'Web Apps'],
    description:
      'A professional portfolio website showcasing developer profile, skills, and project work.',
    link: 'https://hamza-memon-0.github.io/my-portfolio/',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    visibility: 'Public',
    features: ['Developer profile', 'Skills showcase', 'Project showcase', 'Contact section'],
    benefits:
      'A polished developer portfolio that builds credibility and makes project work easy to explore.',
    accent: 'from-fuchsia-500 to-purple-700',
  },
]

/* GitHub / repository-style work section --------------------------------- */
export const repoWork = {
  heading: 'Our Development Work',
  text:
    'Our team has worked on multiple real-world business software projects including POS systems, inventory systems, accounting modules, booking systems, ecommerce, school systems, clinic systems, and custom dashboards.',
}

export const repos = [
  { name: 'DMS', type: 'Management System', tech: 'CSS', visibility: 'Private', updated: 'Updated recently', summary: 'Business records, workflows, and operational data management.' },
  { name: 'Inventory-Soda-Pos-Complete-System', type: 'Inventory + POS', tech: 'C#', visibility: 'Private', updated: 'Updated recently', summary: 'Stock, sale, purchase, cash book, ledger, and reporting system.' },
  { name: 'Estate-Agency', type: 'Real Estate System', tech: 'SQL', visibility: 'Private', updated: 'Updated recently', summary: 'Property listings, clients, agents, and deal tracking.' },
  { name: 'MartPos', type: 'Retail POS', tech: 'TypeScript', visibility: 'Private', updated: 'Updated this month', summary: 'Full-stack retail POS with accounting and dashboard KPIs.' },
  { name: 'Clinic-Management-System', type: 'Healthcare Software', tech: 'JavaScript', visibility: 'Private', updated: 'Updated recently', summary: 'Patients, appointments, records, and clinic operations.' },
  { name: 'ali-raza', type: 'Portfolio', tech: 'HTML', visibility: 'Public', updated: 'Updated recently', summary: 'Developer profile, skills, and project showcase.' },
  { name: 'Mart', type: 'Retail System', tech: 'TypeScript', visibility: 'Private', updated: 'Updated recently', summary: 'Products, customers, sales, and inventory management.' },
  { name: 'my-portfolio', type: 'Portfolio', tech: 'CSS', visibility: 'Public', updated: 'Updated recently', summary: 'Professional portfolio website with project showcase.' },
  { name: 'InventoryManagmentSystem', type: 'Stock Software', tech: 'C#', visibility: 'Private', updated: 'Updated recently', summary: 'Stock in/out, movement logs, alerts, and monthly reports.' },
  { name: 'Ecommerce', type: 'Online Store', tech: 'JavaScript', visibility: 'Public', updated: 'Updated recently', summary: 'Product listing, cart, checkout, and customer ordering.' },
  { name: 'EyeOptical', type: 'Shop Management', tech: 'C#', visibility: 'Private', updated: 'Updated recently', summary: 'Customers, prescriptions, invoices, and optical workflow.' },
  { name: 'SchoolManagementSystem', type: 'Education Software', tech: 'C#', visibility: 'Private', updated: 'Updated recently', summary: 'Students, staff, classes, fees, and academic records.' },
  { name: 'TownOneBookingSystem', type: 'Booking System', tech: 'C#', visibility: 'Private', updated: 'Updated recently', summary: 'Reservations, scheduling, and customer bookings.' },
  { name: 'RestaurantManagementSystem', type: 'Restaurant POS', tech: 'C#', visibility: 'Private', updated: 'Updated recently', summary: 'Restaurant billing, orders, and inventory deduction.' },
]

/* Language → color dot (GitHub-style) */
export const techColors = {
  'C#': '#178600',
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  HTML: '#e34c26',
  CSS: '#563d7c',
  SQL: '#e38c00',
}

/* Team ------------------------------------------------------------------ */
export const teamSection = {
  heading: 'Meet the Team Behind FR Software Solutions',
  subheading:
    'Our team combines software engineering, UI/UX design, database development, business automation, and digital marketing experience to build and grow reliable solutions for real businesses.',
}

export const team = [
  {
    name: 'Ali Raza',
    role: 'Founder / Full-Stack Software Engineer',
    initials: 'AR',
    portfolio: 'https://dev-ali-raza.github.io/my-portfolio/',
    github: 'https://github.com/Dev-Ali-Raza',
    intro:
      'Ali Raza is a full-stack software engineer focused on building business automation systems, POS solutions, inventory systems, API integrations, and modern web applications.',
    skills: [
      '.NET Core',
      'Angular',
      'SQL Server',
      'API Integrations',
      'POS Systems',
      'Inventory Systems',
      'Business Automation',
      'Desktop Applications',
      'Web Applications',
      'Database Design',
    ],
  },
  {
    name: 'Hamza Memon',
    role: 'Full-Stack Developer / UI Developer',
    initials: 'HM',
    portfolio: 'https://hamza-memon-0.github.io/my-portfolio/',
    github: 'https://github.com/Hamza-Memon-0',
    intro:
      'Hamza Memon works on frontend development, backend development, business applications, POS systems, and user-friendly software interfaces.',
    skills: [
      'Frontend Development',
      'Backend Development',
      'POS Applications',
      'Business Software',
      'Web UI Development',
      'Database Integration',
      'JavaScript',
      'TypeScript',
      'Responsive UI',
    ],
  },
  {
    name: 'Hyder Shaikh',
    role: 'Digital Marketer / Social Media Manager',
    initials: 'HS',
    portfolio: 'https://hydershaikhportfolio.vercel.app/',
    github: null,
    intro:
      'Hyder Shaikh handles digital marketing, Meta Ads campaigns, social media management, content creation, and video editing to help businesses reach and engage the right audience.',
    skills: [
      'Meta Ads',
      'Facebook & Instagram Ads',
      'Social Media Management',
      'SEO',
      'Content Writing',
      'Video Editing',
      'Post Design',
      'Community Engagement',
      'Ads Analytics',
    ],
  },
]

/* Why choose us ----------------------------------------------------------- */
export const whyChooseUs = [
  { icon: 'Settings2', title: 'Custom-Built Solutions', text: 'Software built precisely around your business needs and daily workflow.' },
  { icon: 'MousePointerClick', title: 'Clean, User-Friendly UI', text: 'Simple screens your staff can learn in minutes, not weeks.' },
  { icon: 'DatabaseZap', title: 'Scalable Database Structure', text: 'Clean data architecture that grows with your business.' },
  { icon: 'ShieldCheck', title: 'Secure Login & User Roles', text: 'Role-based access keeps your business data protected.' },
  { icon: 'BarChart3', title: 'Reporting & Analytics', text: 'Clear reports and KPIs for confident business decisions.' },
  { icon: 'LifeBuoy', title: 'Long-Term Support', text: 'We stay with you after launch — updates, fixes, and guidance.' },
  { icon: 'Wallet', title: 'Affordable for Local Businesses', text: 'Practical pricing built for shops and SMEs in Pakistan.' },
  { icon: 'Cpu', title: 'Modern Technology Stack', text: 'Angular, React, .NET, and SQL Server — reliable, current tools.' },
  { icon: 'Rocket', title: 'Fast Delivery Approach', text: 'Focused milestones get your system running sooner.' },
  { icon: 'Briefcase', title: 'Business-Focused Development', text: 'We build for real operations: sales, stock, cash, and reports.' },
  { icon: 'Award', title: 'Proven Domain Experience', text: 'Hands-on experience with POS, inventory, accounting, and management systems.' },
]

/* Development process ------------------------------------------------------ */
export const processSteps = [
  {
    step: '01',
    icon: 'MessagesSquare',
    title: 'Requirement Discussion',
    description: 'We understand your business needs, workflow, problems, and software goals.',
  },
  {
    step: '02',
    icon: 'PenTool',
    title: 'UI/UX Planning',
    description: 'We design clean, simple, and user-friendly screens for smooth daily use.',
  },
  {
    step: '03',
    icon: 'Code2',
    title: 'Development',
    description: 'We build the software using reliable technologies, clean code, and scalable structure.',
  },
  {
    step: '04',
    icon: 'TestTubes',
    title: 'Testing',
    description: 'We test functionality, security, performance, reports, and user workflows.',
  },
  {
    step: '05',
    icon: 'Rocket',
    title: 'Deployment',
    description: 'We deploy the system and help you start using it in your business.',
  },
  {
    step: '06',
    icon: 'LifeBuoy',
    title: 'Support & Updates',
    description: 'We provide improvements, maintenance, updates, and technical support.',
  },
]

/* Industries we serve ------------------------------------------------------- */
export const industries = [
  { icon: 'Store', label: 'Retail Shops' },
  { icon: 'ShoppingCart', label: 'Supermarkets' },
  { icon: 'Apple', label: 'Grocery Stores' },
  { icon: 'UtensilsCrossed', label: 'Restaurants' },
  { icon: 'Coffee', label: 'Cafés' },
  { icon: 'Warehouse', label: 'Wholesalers' },
  { icon: 'Glasses', label: 'Optical Shops' },
  { icon: 'GraduationCap', label: 'Schools' },
  { icon: 'Stethoscope', label: 'Clinics' },
  { icon: 'Building2', label: 'Real Estate Agencies' },
  { icon: 'ShoppingBag', label: 'Ecommerce Stores' },
  { icon: 'Wrench', label: 'Service Businesses' },
  { icon: 'Factory', label: 'Small & Medium Enterprises' },
]

/* Technologies ----------------------------------------------------------------- */
export const technologies = [
  'Angular',
  'React',
  '.NET Core',
  'C#',
  'SQL Server',
  'TypeScript',
  'JavaScript',
  'HTML',
  'CSS',
  'Bootstrap',
  'Tailwind CSS',
  'WinForms',
  'REST APIs',
  'Database Design',
  'Reporting Systems',
]

/* Testimonials -------------------------------------------------------------------- */
export const testimonials = [
  {
    name: 'Retail Shop Owner',
    role: 'Retail',
    quote:
      'FR Software Solutions helped us manage our stock, sales, and daily reports more efficiently. The system is simple and useful for daily business.',
    rating: 5,
  },
  {
    name: 'Restaurant Owner',
    role: 'Restaurant',
    quote:
      'Their restaurant management system made billing and inventory deduction easier for our team. The interface is easy to use.',
    rating: 5,
  },
  {
    name: 'Business Manager',
    role: 'Services',
    quote:
      'Professional team, clean software, and excellent support. They understood our business requirements and delivered a practical solution.',
    rating: 5,
  },
  {
    name: 'Wholesaler',
    role: 'Wholesale',
    quote:
      'The inventory and ledger system helped us track stock movement and customer balances with more accuracy.',
    rating: 5,
  },
]

/* Imagery (Unsplash) ----------------------------------------------------------------
   Free stock photography hot-linked from Unsplash. Swap any URL for your own
   photos / screenshots whenever you have them — sizes stay responsive. */
export const images = {
  /* dark flowing 3D silk waves — purple-shifted in the hero */
  hero: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&w=2000&q=80',
  /* glossy 3D-render cyborg for the hero centerpiece card */
  heroCard: 'https://images.unsplash.com/photo-1625314887424-9f190599bd56?auto=format&fit=crop&w=900&q=80',
  about: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
  cta: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80',
}

/* Background photo per service card (keyed by service title) */
export const serviceImages = {
  'Custom Software Development': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80',
  'Web Application Development': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
  'Desktop Application Development': 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=900&q=80',
  'POS System Development': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80',
  'Inventory Management Systems': 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=80',
  'Restaurant Management Systems': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
  'Retail Management Systems': 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80',
  'Accounting & Ledger Systems': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80',
  'API Integrations': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80',
  'Dashboard & Reporting Solutions': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
  'Database Design & SQL Development': 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=900&q=80',
  'Business Process Automation': 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80',
}

/* Thumbnail photo per portfolio project (keyed by project name) */
export const projectImages = {
  'DMS': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
  'FR POS Inventory': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
  'Estate Agency': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
  'Mart POS': 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80',
  'MediCare HMS': 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80',
  'Ali Raza Portfolio Website': 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80',
  'Hamza Memon Portfolio Website': 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
  'Mart': 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
  'Inventory Management System': 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80',
  'Saadgi': 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
  'Eye Optical': 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80',
  'School Management System': 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
  'TownOne Housing Scheme ERP': 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80',
  'DineFlow': 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
  'AI Health Assistant': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
  'Custom Business Dashboard': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
}

/* Contact form ----------------------------------------------------------------------- */
export const serviceOptions = [
  'POS System',
  'Inventory Management System',
  'Restaurant Management System',
  'Retail Management System',
  'Accounting System',
  'Custom Web Application',
  'Desktop Application',
  'API Integration',
  'Dashboard / Reporting System',
  'Other Custom Software',
]
