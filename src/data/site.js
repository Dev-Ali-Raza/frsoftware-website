/* ====================================================================
   FR SOFTWARE SOLUTIONS — SITE CONTENT
   --------------------------------------------------------------------
   👉 This is the ONLY file you need to edit to update website content.
   ==================================================================== */

export const company = {
  name: 'FR Software Solutions',
  shortName: 'FR Software',
  domain: 'www.frsoftwaresolutions.com',
  url: 'https://www.frsoftwaresolutions.com',
  tagline: 'Building technology that powers business growth.',
  description:
    'FR Software Solutions is a modern software development company building POS systems, inventory management, restaurant and retail management, accounting systems, dashboards, and custom web & desktop applications for growing businesses.',
  email: 'info@frsoftwaresolutions.com',
  phone: '+92 317 3910825',
  phonePlain: '+923173910825',
  whatsapp: 'https://wa.me/923173910825',
  location: 'Pakistan · Serving local & international clients',
  social: {
    facebook: 'https://facebook.com/',
    linkedin: 'https://www.linkedin.com/',
    whatsapp: 'https://wa.me/923173910825',
    github: 'https://github.com/Dev-Ali-Raza',
  },
}

/* Brand asset paths — drop real files into /public/brand/ and they are
   picked up automatically (SVG fallbacks render until then). */
export const brand = {
  logo: '/brand/logo.png',
  cover: '/brand/cover.jpg',
}

/* Nav links ---------------------------------------------------------- */
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Team', href: '#team' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

/* Hero ---------------------------------------------------------------- */
export const hero = {
  heading: 'Building Smart Software Solutions for Growing Businesses',
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
    icon: 'UtensilsCrossed',
    badge: 'Desktop',
    name: 'Restaurant Management System',
    description: 'Windows Forms based restaurant billing and inventory software.',
    features: [
      'C# WinForms GUI',
      'Table and order tracking',
      'Smart billing',
      'Billing reports',
      'Inventory deduction',
      'Dine-in and takeaway support',
      'User-friendly interface',
    ],
    technologies: ['C#', 'WinForms', 'SQL Server'],
    accent: 'from-orange-500/20 to-rose-500/10',
  },
  {
    icon: 'Boxes',
    badge: 'Desktop',
    name: 'Inventory Management System',
    description: 'Inventory tracking solution for retail shops, wholesalers, and stock-based businesses.',
    features: [
      'Stock in/out tracking',
      'Stock movement logging',
      'Monthly reporting',
      'Low stock alerts',
      'Product type management',
      'User role support',
      'Reports and ledger support',
    ],
    technologies: ['C#', 'WinForms', 'SQL Server'],
    accent: 'from-emerald-500/20 to-teal-500/10',
  },
  {
    icon: 'ScanBarcode',
    badge: 'Flagship · Full-Stack',
    name: 'Mart POS',
    description: 'A complete full-stack retail management application built with Angular, .NET, and SQL.',
    features: [
      'Fast POS checkout',
      'Barcode/SKU scanning',
      'Cart management and discounts',
      'Multiple payment methods',
      'Thermal receipt printing',
      'Product label printing',
      'Product and inventory management',
      'Sales and invoice management',
      'Purchases and supplier management',
      'Customer ledger and statements',
      'Supplier payables and statements',
      'Expense management',
      'Double-entry accounting',
      'Profit & Loss, Trial Balance, Balance Sheet',
      'Cash & Bank Summary',
      'Dashboard KPIs',
      'User management and authentication',
      'Role-based access',
    ],
    technologies: ['Angular', '.NET', 'SQL Server', 'TypeScript', 'C#'],
    accent: 'from-brand-500/25 to-accent-500/10',
    featured: true,
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
]

export const projects = [
  {
    name: 'DMS',
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
    name: 'Inventory Soda POS Complete System',
    type: 'Inventory + POS System',
    categories: ['POS Systems', 'Inventory', 'Desktop Apps', 'Accounting'],
    description:
      'A complete stock, sale, purchase, cash book, ledger, and reporting system for inventory-based businesses.',
    technologies: ['C#', 'WinForms', 'SQL Server'],
    visibility: 'Private',
    features: [
      'Product registration',
      'Stock management',
      'Sale and purchase reports',
      'Cash book',
      'Ledger',
      'Product-wise stock reports',
      'Profit ratio reports',
    ],
    benefits:
      'Gives stock-based businesses full visibility over inventory, cash flow, and profit ratios — replacing registers and spreadsheets with accurate, instant reports.',
    accent: 'from-emerald-500 to-teal-700',
  },
  {
    name: 'Estate Agency',
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
    name: 'Mart POS',
    type: 'Retail POS & Business Management System',
    categories: ['POS Systems', 'Web Apps', 'Accounting', 'Management Systems'],
    description: 'A full-stack retail management application built with Angular, .NET, and SQL.',
    technologies: ['Angular', '.NET', 'SQL Server', 'TypeScript', 'C#'],
    visibility: 'Private',
    features: [
      'Fast POS checkout',
      'Barcode/SKU scanning',
      'Inventory management',
      'Purchases and suppliers',
      'Customers and ledgers',
      'Expenses',
      'Double-entry accounting',
      'Reports and dashboard KPIs',
      'User authentication and roles',
    ],
    benefits:
      'A complete retail back-office in one application — checkout, stock, suppliers, accounting, and KPIs — eliminating the need for separate tools.',
    accent: 'from-brand-500 to-indigo-700',
    featured: true,
  },
  {
    name: 'Clinic Management System',
    type: 'Healthcare / Clinic Software',
    categories: ['Management Systems', 'Web Apps'],
    description:
      'A clinic management solution for handling patients, appointments, records, and clinic operations.',
    technologies: ['JavaScript', 'Web App', 'Database'],
    visibility: 'Private',
    features: ['Patient records', 'Appointment handling', 'Clinic workflow management', 'Reporting'],
    benefits:
      'Streamlines patient intake, appointments, and record-keeping so clinic staff spend less time on paperwork and more on patients.',
    accent: 'from-rose-500 to-pink-700',
  },
  {
    name: 'Ali Raza Portfolio Website',
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
  {
    name: 'Mart',
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
    name: 'Inventory Management System',
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
    name: 'Ecommerce',
    type: 'Online Store / Ecommerce Website',
    categories: ['Web Apps'],
    description:
      'A web-based ecommerce project for product listing, cart, checkout, and customer ordering.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Web Development'],
    visibility: 'Public',
    features: ['Product listing', 'Shopping cart', 'Checkout flow', 'Customer ordering'],
    benefits:
      'Lets businesses sell online with a straightforward product catalog, cart, and checkout experience.',
    accent: 'from-orange-500 to-rose-700',
  },
  {
    name: 'Eye Optical',
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
    name: 'School Management System',
    type: 'Education Management Software',
    categories: ['Management Systems', 'Desktop Apps'],
    description:
      'A school management system for students, staff, classes, fees, and academic records.',
    technologies: ['C#', 'SQL Server', 'Desktop Application'],
    visibility: 'Private',
    features: ['Student records', 'Staff records', 'Fee management', 'Academic records'],
    benefits:
      'Digitizes student, staff, and fee records so school administration runs on accurate data instead of paper registers.',
    accent: 'from-blue-500 to-indigo-700',
  },
  {
    name: 'TownOne Booking System',
    type: 'Booking / Reservation System',
    categories: ['Management Systems', 'Desktop Apps', 'Business Automation'],
    description:
      'A booking management solution for reservations, scheduling, and customer bookings.',
    technologies: ['C#', 'SQL Server', 'Desktop Application'],
    visibility: 'Private',
    features: ['Booking management', 'Reservation tracking', 'Customer records', 'Scheduling'],
    benefits:
      'Eliminates double-bookings and lost reservations with a single scheduling system and clear customer records.',
    accent: 'from-violet-500 to-brand-700',
  },
  {
    name: 'Restaurant Management System',
    type: 'Restaurant POS & Billing Software',
    categories: ['POS Systems', 'Desktop Apps', 'Management Systems'],
    description: 'Windows Forms based restaurant billing and inventory software.',
    technologies: ['C#', 'WinForms', 'SQL Server'],
    visibility: 'Private',
    features: ['C# WinForms GUI', 'Table and order tracking', 'Smart billing', 'Billing reports', 'Inventory deduction'],
    benefits:
      'Speeds up billing and order handling while automatically deducting inventory — fewer mistakes during rush hours.',
    accent: 'from-rose-500 to-orange-700',
  },
  {
    name: 'Custom Business Dashboard',
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
    'Our team combines software engineering, UI/UX design, database development, and business automation experience to build reliable solutions for real businesses.',
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
