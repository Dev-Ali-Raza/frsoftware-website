/* ====================================================================
   PROJECT DETAIL PAGES — /projects/<slug>
   --------------------------------------------------------------------
   Each key below matches a project's `slug` in src/data/site.js.
   Everything shown on a project's page beyond the card summary lives
   here: tagline, quick facts, overview paragraphs, modules, highlights.

   SCREENSHOTS & VIDEO
   -------------------
   Not listed here. Drop optimised images into public/projects/<slug>/
   (use `node scripts/import-screenshots.mjs <folder> <slug>` to convert
   raw PNGs to WebP) and run `npm run screenshots`. The gallery, hero
   image, and walkthrough video are picked up automatically.
   To override captions, add  captions: { 'file.webp': 'Caption' }.

   Icon names must exist in src/components/Icon.jsx.
   ==================================================================== */

export const projectDetails = {
  /* ------------------------------------------------------------------ */
  'mart-pos': {
    tagline: 'Checkout, stock, suppliers, customers, and full double-entry accounting in one retail application.',
    facts: [
      { label: 'Platform', value: 'Web application' },
      { label: 'Stack', value: 'Angular · .NET · SQL Server' },
      { label: 'Users', value: 'Multi-user, role-based' },
      { label: 'Best for', value: 'Marts, retail stores, wholesalers' },
    ],
    overview: [
      'Mart POS is our flagship retail management system. It replaces the usual mix of a billing app, an Excel stock sheet, and a separate accounts register with a single application that handles the complete retail back office.',
      'The cashier gets a fast, keyboard-friendly checkout with barcode scanning, discounts, multiple payment methods, and thermal receipt printing. The owner gets live inventory, supplier payables, customer ledgers, expenses, and a full set of financial statements generated automatically from every transaction.',
      'Because accounting is double-entry and built into the same database as sales and purchases, reports such as Profit & Loss, Trial Balance, and Balance Sheet are always in sync with what actually happened at the counter.',
    ],
    modules: [
      { icon: 'ScanBarcode', title: 'Point of Sale', items: ['Fast checkout with barcode / SKU scanning', 'Cart management, item and bill discounts', 'Cash, card, credit, and split payments', 'Thermal receipt printing', 'Hold and resume sales'] },
      { icon: 'Boxes', title: 'Products & Inventory', items: ['Product, category, and unit management', 'Product label / barcode printing', 'Live stock levels and low-stock alerts', 'Stock adjustments and movement history'] },
      { icon: 'Truck', title: 'Purchases & Suppliers', items: ['Purchase orders and purchase invoices', 'Supplier profiles and payables', 'Supplier statements and payment history', 'Purchase returns'] },
      { icon: 'Users', title: 'Customers & Ledgers', items: ['Customer profiles with credit limits', 'Customer ledger and statements', 'Receivables tracking and payment receipts', 'Sales returns'] },
      { icon: 'Calculator', title: 'Accounting', items: ['Double-entry accounting on every transaction', 'Chart of accounts and journal vouchers', 'Expense management with categories', 'Profit & Loss, Trial Balance, Balance Sheet', 'Cash & Bank summary'] },
      { icon: 'LayoutDashboard', title: 'Dashboard & Security', items: ['KPI dashboard: sales, profit, stock value, receivables', 'Daily, monthly, and custom-range reports', 'User management and authentication', 'Role-based access to modules and actions'] },
    ],
  },

  /* ------------------------------------------------------------------ */
  'dineflow': {
    tagline: 'One connected system for the whole restaurant — from the guest\'s first tap to the general-ledger entry it produces.',
    facts: [
      { label: 'Platform', value: 'Cloud web app · PWA' },
      { label: 'Stack', value: 'Angular 21 · .NET 9 · SQL Server · SignalR' },
      { label: 'Deployment', value: 'Multi-tenant, multi-branch SaaS' },
      { label: 'Best for', value: 'Cafés, dine-in, QSR, and chains in Pakistan' },
    ],
    highlights: [
      { value: '120+', label: 'Backend integration tests' },
      { value: '35', label: 'End-to-end browser tests' },
      { value: 'Real-time', label: 'Kitchen, tables, and orders via SignalR' },
      { value: 'PKR · اردو', label: 'Local currency and RTL support' },
    ],
    overview: [
      'Most restaurants juggle a separate POS, a separate accounting package, a separate online-ordering plugin, and a pile of spreadsheets, none of which talk to each other. Owners cannot see real numbers until month-end, cashiers can void sales with no trail, and the books never match the till.',
      'DineFlow collapses all of that into one connected system. Every sale, void, refund, and stock movement posts to the accounts automatically and in real time. The server is always the source of truth: prices, totals, taxes, permissions, and stock are recomputed on the backend, never trusted from the browser.',
      'It is built for the Pakistan market with PKR-native receipts, Urdu / right-to-left support, FBR / PRA / SRB fiscal-invoicing architecture, and JazzCash, Easypaisa, and Safepay payment rails. The multi-tenant design also makes it a ready-to-brand SaaS product an operator can run a chain on or resell.',
    ],
    modules: [
      { icon: 'ScanBarcode', title: 'Point of Sale', items: ['Fast touch terminal: category grid, live dish search, image tiles', 'Dine-in, takeaway, and delivery in one screen with table picker, modifiers, and combos', 'F-key shortcuts for speed (F1 search, F2 send to kitchen, F5 pay)', 'Split payments, quick-cash buttons, hold and resume tickets', 'Server-recomputed totals and tax; 80mm thermal receipt and KOT printing'] },
      { icon: 'Flame', title: 'Kitchen Display System', items: ['Live ticket board with per-order timers and station routing', 'Bump / recall, "start preparing" to "mark ready"', 'Real-time updates via SignalR', 'Order-type and table badges for the line'] },
      { icon: 'QrCode', title: 'QR Ordering & Storefront', items: ['Per-table scan-to-order menu, no app install', 'Mobile menu with photos, modifiers, cart, and live order tracking', 'Public online storefront for takeaway and delivery', 'Staff-accept, pay-first, and pay-at-table modes with per-guest security tokens'] },
      { icon: 'ClipboardList', title: 'Order Management', items: ['Order-acceptance queue for online and aggregator orders', 'Orders board with one-tap lifecycle, split / merge / transfer', 'Aggregator ingestion with commission settlement'] },
      { icon: 'Calculator', title: 'Double-Entry Accounting', items: ['Per-tenant chart of accounts with a live balance tree', 'Every payment, discount, void, refund, expense, purchase, and stock movement auto-posts a balanced journal entry', 'Journal and vouchers (JV / PV / RV / Expense), purchasing (A/P), customer A/R, cash-drawer reconciliation', 'Profit & Loss, Balance Sheet, Cash Flow, Trial Balance, Ledger, Sales Tax, aging, and Sales-to-GL reconciliation'] },
      { icon: 'Boxes', title: 'Inventory & Recipes', items: ['Ingredients with weighted-average cost', 'Recipe / BOM costing and COGS on sale', 'Wastage and stock-take variance posted to the GL at cost'] },
      { icon: 'LayoutDashboard', title: 'Dashboard & Reports', items: ['Live KPIs: revenue, orders, average ticket, items sold, with insight tips', 'Top dishes, order-type mix, payment-mode split', 'Daily sales, item sales, payments, void / discount, server sales, tax summary', 'Print, PDF, and Excel export on every report'] },
      { icon: 'ShieldCheck', title: 'Multi-Tenant & Security', items: ['One deployment serves many restaurants with strict tenant isolation', 'Multi-branch scoping with an owner "all branches" view', 'Role-based access with a fixed permission catalog and dynamic roles', 'JWT auth with silent refresh, login lockout, password policy, audit logging', 'Optimistic concurrency, idempotent order submission, gap-free voucher numbering'] },
      { icon: 'Palette', title: 'White-Label Platform', items: ['Per-tenant branding: logo, colours, fonts, light / dark theme, login background', 'SuperAdmin area to create and approve tenants and gate features per plan', 'Offline-first assets with no external CDN dependency'] },
    ],
  },

  /* ------------------------------------------------------------------ */
  'school-management-system': {
    tagline: 'A multi-campus school ERP with a real double-entry general ledger under every module, and portals for parents, students, and teachers.',
    facts: [
      { label: 'Platform', value: 'Web application · PWA' },
      { label: 'Stack', value: 'Angular 21 · PrimeNG · .NET 9 · SQL Server' },
      { label: 'Architecture', value: 'Database-per-tenant, multi-campus' },
      { label: 'Best for', value: 'Schools, school systems, academies' },
    ],
    highlights: [
      { value: '137', label: 'Application screens' },
      { value: '50+', label: 'Reports with PDF / Excel / CSV export' },
      { value: '786', label: 'Granular permissions across 19 roles' },
      { value: '500+', label: 'Automated end-to-end tests' },
    ],
    overview: [
      'The School Management System covers the entire life of a school: from an admission inquiry, through fees and accounting, exams, HR and payroll, right down to library, hostel, transport, inventory, and procurement. Underneath all of it sits a real double-entry general ledger, and there is one and only one posting path, so the books can never go out of balance.',
      'Fee receipts, refunds, cheque bounces, payroll, staff loans, goods receipts, vendor payments, inventory movements, and fixed-asset depreciation all post to the GL automatically. Financial statements, receivables aging, and a bank reconciliation come straight from the ledger.',
      'Parents pay fees and follow attendance, marks, homework, and notices from their own portal. Teachers mark attendance, enter marks, and manage homework from a "My Teaching" workspace. Small schools can switch off the modules they do not need and run only Fees, Accounting, and Admission.',
    ],
    modules: [
      { icon: 'GraduationCap', title: 'Admissions & Students', items: ['Inquiry register with follow-ups and a public online admission form', '7-tab admission form with draft, submit, and approval workflow', 'Student 360 profile: fees, attendance, documents, health, discipline, roll-number history', 'Bulk CSV import, bulk roll-number allocation, promotion wizard, alumni', 'Student ID cards with QR verification, single and bulk PDF'] },
      { icon: 'Wallet', title: 'Fee Management', items: ['Fee heads and class × head × session structure matrix', 'Bulk challan generation; collection counter with post-and-print', 'Receipts in A4 and 80mm thermal formats', 'Cheque register (collect, clear, bounce), refunds, advances with FIFO application', 'Discounts, scholarships, sibling discount, annual increment', 'Defaulters report, automated reminders, online fee payment from the parent portal'] },
      { icon: 'Calculator', title: 'Financial Accounting', items: ['4-level chart of accounts with system-account protection', 'Journal, cash, bank, receipt, payment, and contra vouchers with live Dr / Cr totals', 'Every module wired into the GL through a single posting path', 'Period lock / close, fiscal year close and reopen, bank reconciliation', 'Maker-checker approval, GL reconcile utility, trial-balance check'] },
      { icon: 'BookOpen', title: 'Examination & Academics', items: ['Exam master, subjects, marks entry grid with live validation, bulk marks import', 'Grading schemes, result cards (single and bulk PDF), term results, admit cards', 'Timetable builder with server-side conflict detection; teacher substitutions', 'Homework with attachments, syllabus planner, academic calendar, online quiz / CBT', 'Parent-teacher meeting booking and a conduct register'] },
      { icon: 'CalendarDays', title: 'Attendance', items: ['Student roster with smart pre-fill (saves ~30 clicks per class)', 'Staff attendance', 'Biometric device import: stage raw punches, then map to student and staff attendance', 'Defaulters, monthly, and daily register reports'] },
      { icon: 'Users', title: 'HR & Payroll', items: ['Employee master with education, experience, and family tabs; bulk import', 'Salary heads mapped to GL, effective-dated salary structures', 'Payroll run posted to the GL as a balanced journal; payslip PDF', 'Salary increments, staff loans with EMI schedules, advances with approval', 'Leave management and leave balance tracking'] },
      { icon: 'Library', title: 'Library, Hostel & Transport', items: ['Book catalogue, members, issue / return with automatic fines, reservations', 'Hostel rooms and beds, allotment, visitor log, out-pass workflow', 'Vehicles with document-expiry warnings, routes and stops, student assignment, fuel and maintenance logs'] },
      { icon: 'Package', title: 'Inventory, Procurement & Assets', items: ['Item master, warehouses, stock movements with running balance, stock take', 'Vendors, purchase orders, goods receipt notes, vendor payments, payables aging', 'Fixed assets: capitalisation, depreciation runs, disposal with gain / loss'] },
      { icon: 'FileText', title: 'Reports & Certificates', items: ['50+ reports: financial statements, fee and receivables, payables, academics, operations', 'Every report exports to CSV, Excel, PDF, and print, honouring on-screen filters', '13 certificate types (Transfer, Character, Bonafide, Marks, Experience, and more) on a formal layout with QR verification'] },
      { icon: 'MessagesSquare', title: 'Communication & Portals', items: ['In-app messaging, notice board, notification centre, help desk', 'Email, SMS, in-app, and web push with a bulk broadcaster and scheduling', 'Parent portal: multi-child, fees, pay now, attendance, marks, homework, notices', 'Student portal and a teacher "My Teaching" workspace', 'Bulk portal-login provisioning with one-time passwords'] },
      { icon: 'ShieldCheck', title: 'Security & Multi-Tenancy', items: ['JWT with rotating refresh tokens, 19 roles, ~786 permissions enforced server-side', 'Login rate limiting, audit trail with per-field diff, idle auto-logout, OWASP headers', 'Multi-campus switcher with consolidated reporting', 'Database-per-tenant with provisioning, migrations, and per-tenant module profiles', 'Backup and restore console with a nightly scheduler'] },
      { icon: 'Settings2', title: 'No-Code Configuration', items: ['School profile, theme and branding presets, logo, fonts', 'Academic sessions with a rollover wizard, fiscal years, numbering series', 'Business rules engine, master data editor, document template editor', 'Setup wizard and demo-data loader'] },
    ],
  },

  /* ------------------------------------------------------------------ */
  'saadgi': {
    tagline: 'A premium ecommerce platform where the business runs the whole store from the admin panel — no developer needed.',
    facts: [
      { label: 'Platform', value: 'SSR storefront + admin SPA' },
      { label: 'Stack', value: 'Angular · .NET 9 · SQL Server · Dapper' },
      { label: 'Payments', value: 'COD · Safepay · JazzCash · Easypaisa' },
      { label: 'Live at', value: 'saadgiwear.com' },
    ],
    highlights: [
      { value: 'SSR', label: 'Server-rendered for speed and SEO' },
      { value: '0 API keys', label: 'Store assistant with no paid AI service' },
      { value: 'AR', label: '3D / AR product try-on' },
      { value: 'Zero redeploys', label: 'Payments, couriers, content all configurable' },
    ],
    overview: [
      'Saadgi is a full-stack ecommerce platform built for a premium hijab and scarf brand, designed for Pakistan\'s cash-on-delivery-first market and ready to scale to the Gulf and international customers.',
      'The storefront is server-side rendered for fast loads, SEO, and rich social previews. Customers get a faceted catalogue, colour-aware product galleries, a slide-out cart with a free-shipping progress bar, bundles, coupons, wishlists, reviews, order tracking, and a "Find Your Shade" quiz that maps answers to real catalogue colours.',
      'A built-in store assistant answers from the live catalogue, understands questions about shipping, COD, returns, and payments, and records what customers ask for that is not stocked yet, so the owner knows what to add next. The admin control centre runs orders through a real state machine with courier booking and printable shipping labels, and every payment provider, courier, shipping tier, email template, and storefront feature is configurable without a redeploy.',
    ],
    modules: [
      { icon: 'ShoppingBag', title: 'Storefront', items: ['Mobile-first, server-side rendered pages', 'Faceted filters (colour, fabric, occasion, price), sort, and autocomplete search', 'Product pages with colour-aware image galleries', 'Sale pricing, "New in" badges, social-proof popups, announcement bar, countdown banner', '"Find Your Shade" colour quiz and 3D / AR "view in your space"'] },
      { icon: 'ShoppingCart', title: 'Cart, Checkout & Accounts', items: ['Slide-out cart drawer with free-shipping progress', 'Coupons, bundles, wishlist, reviews, back-in-stock alerts', 'Customer accounts with Google sign-in, order tracking, branded receipts', 'Idempotent checkout and server-authoritative pricing and shipping'] },
      { icon: 'MessagesSquare', title: 'Store Assistant', items: ['Retrieval assistant answering from the live catalogue, nothing to retrain', 'Understands product searches ("black chiffon under 2000"), shipping, COD, returns, payment, contact', 'Admin-trainable keyword → answer pairs', 'Conversation log and an unmet-demand graph for merchandising decisions'] },
      { icon: 'ClipboardList', title: 'Orders & Fulfilment', items: ['Order state machine: Pending → Confirmed → Booked → Shipped → Delivered → COD collected, plus RTO / returns', 'Optional hold-for-confirmation gate against fake COD orders', 'One-click courier booking (Shaheen and others) and printable shipping labels', 'Bulk order actions and CSV export'] },
      { icon: 'CreditCard', title: 'Payments & Couriers', items: ['COD, Safepay, JazzCash, Easypaisa', 'Enable a provider and paste its API keys, no redeploy', 'Weight-based shipping-rate tiers', 'Provider-registry pattern: only enabled, configured providers resolve'] },
      { icon: 'LayoutDashboard', title: 'Admin Control Centre', items: ['Dashboard with live KPIs: orders, revenue, COD pending, stock alerts', 'Products, bundles, coupons, reviews, returns; per-colour photos; inline stock and sale-price editing', 'Homepage and banner CMS, feature flags, branded email templates', 'Marketing: discounts, affiliate / influencer codes, newsletter capture'] },
      { icon: 'Boxes', title: 'Inventory', items: ['Concurrency-safe stock: atomic conditional decrement, never oversells', 'Restock at most once on cancellation or return', 'Low-stock alerts on the dashboard'] },
      { icon: 'ShieldCheck', title: 'Engineering', items: ['Clean Architecture: controllers never touch SQL or a vendor directly', '100% parameterised stored procedures, script-first schema applied on startup', 'JWT and role-based access for staff; customer accounts separate', 'xUnit unit and integration tests against real SQL Server; Playwright E2E on desktop and mobile'] },
    ],
  },

  /* ------------------------------------------------------------------ */
  'pos-inventory': {
    tagline: 'Point of sale, stock, purchases, cash book, bank, and party ledgers for wholesalers and distributors — on desktop and phone, in light or dark mode.',
    facts: [
      { label: 'Platform', value: 'Web application, responsive' },
      { label: 'Database', value: 'SQL Server' },
      { label: 'Users', value: 'Admin and staff roles' },
      { label: 'Best for', value: 'Wholesalers, distributors, general stores' },
    ],
    overview: [
      'FR POS Inventory was built for a wholesale grocery and commodities business: rice, pulses, sugar, flour, cooking oil, sold in bulk to shops and traders on cash and credit. It runs the complete daily cycle of such a business from one screen set: purchases from suppliers, stock, sales at the counter, cash and bank, and the running ledger of every party.',
      'The dashboard shows cash in hand, net balance, total receivable and payable, today\'s sale and purchase, and total stock value, with a sale-versus-purchase chart, top products, and top customers. The point of sale uses large product tiles with live stock counts, so a bill for a walk-in or a regular customer takes seconds.',
      'Cash book, purchase book, bank, and ledger replace the manual registers usually kept beside the counter. Reports cover daily sale, profit, and stock, and a day summary closes the day. The app switches between light and dark mode and works on a phone for owners who want to check the numbers from anywhere.',
    ],
    modules: [
      { icon: 'LayoutDashboard', title: 'Dashboard', items: ['Cash in hand, net balance, receivable, payable, today\'s sale and purchase, stock value', 'Sale vs purchase chart for any date range', 'Top products and top customers', 'One-click day summary'] },
      { icon: 'ScanBarcode', title: 'Point of Sale', items: ['Product tiles with live stock counts', 'Customer selection with saved credit customers', 'Quantity, weight (KG), price, and line totals', 'Save, print, and export invoices', 'Delete invoice with audit'] },
      { icon: 'Package', title: 'Products & Suppliers', items: ['Product master with codes and prices', 'Supplier profiles and purchase history', 'Purchase book with supplier-wise entries'] },
      { icon: 'Users', title: 'Customers & Ledger', items: ['Customer profiles with balances', 'Party ledger with running balance', 'Receivable and payable tracking'] },
      { icon: 'Wallet', title: 'Cash Book & Bank', items: ['Daily cash book with receipts and payments', 'Bank accounts and transactions', 'Net balance across cash and bank'] },
      { icon: 'BarChart3', title: 'Reports', items: ['Daily sale report', 'Profit report', 'Stock report', 'Day summary'] },
      { icon: 'ShieldCheck', title: 'Users & Experience', items: ['User accounts with roles', 'Light and dark mode', 'Responsive layout for phones and tablets', 'Global search'] },
    ],
  },

  /* ------------------------------------------------------------------ */
  'ai-health-assistant': {
    tagline: 'An Android health companion: an explained AI symptom check, the right specialist nearby, and reminders that keep a course of medicine on track.',
    facts: [
      { label: 'Platform', value: 'Android app' },
      { label: 'Backend', value: 'FastAPI on Vercel · MongoDB Atlas' },
      { label: 'Model', value: 'Multinomial Naive Bayes, 73 conditions' },
      { label: 'Running cost', value: 'Zero: only free services' },
    ],
    highlights: [
      { value: '248', label: 'Symptoms understood in everyday wording' },
      { value: '73', label: 'Conditions ranked with evidence' },
      { value: '93.98%', label: 'Accuracy with only half the symptoms given' },
      { value: 'Offline', label: 'Reminders ring without internet' },
    ],
    overview: [
      'The AI Health Assistant is an Android application backed by a FastAPI service and a trained machine-learning model. A patient describes symptoms in their own words (Urdu-English mixes like "pait dard" work), or browses by body part, and the app ranks the three most likely conditions with a plain-language confidence, the evidence behind the ranking, and the specialist to see.',
      'The model was chosen for how it behaves on partial information, because real patients report partial symptoms. It was trained on data augmented with symptom dropout, and selected by its accuracy at half the symptoms rather than by raw accuracy alone.',
      'Around the prediction sits a full companion: a care plan with precautions, diet, and medication guidance framed as something to confirm with a doctor; a live doctor and hospital locator built on OpenStreetMap with directions; medicine reminders with course lengths and follow-up alarms; and seasonal disease and air-quality alerts written for Sindh. A disclaimer must be accepted before anything else opens, and emergency buttons dial Rescue 1122 and Edhi directly.',
    ],
    modules: [
      { icon: 'Stethoscope', title: 'Symptom Checker', items: ['Free-text search over 248 symptoms with a vocabulary layer for everyday wording and misspellings', 'Closest-match suggestions and browse-by-body-part', 'Symptoms shown as removable chips; sex-inapplicable symptoms hidden'] },
      { icon: 'Cpu', title: 'Prediction', items: ['Top three conditions with severity and a confidence bar', 'Reliability wording that separates a strong match from a partial one', 'Evidence: which reported symptoms are typical, and which typical symptoms were not reported', 'Specialist for the leading condition, carried straight into the doctor locator', 'Every check saved to history'] },
      { icon: 'ClipboardList', title: 'Care Plan', items: ['Plain-language description, precautions, diet, activity guidance', 'Common medication framed as something to discuss with a doctor', 'One tap turns the medication list into reminders'] },
      { icon: 'MapPin', title: 'Doctor & Hospital Locator', items: ['Live data from OpenStreetMap via Overpass, widening from 5 km to 25 km', 'Interactive map, ranking by specialist match, distance, and verified phone number', 'Hand-researched directory of major Hyderabad hospitals', 'Directions open in Google Maps; results cached for 24 hours'] },
      { icon: 'Bell', title: 'Medicine Reminders', items: ['Medicine, dose, note, any number of times a day', 'Course length presets (3 to 14 days), up to 180 days, or ongoing', 'Follow-up alarms until the dose is marked taken', 'Scheduled by the phone: rings with no internet, costs nothing'] },
      { icon: 'ShieldCheck', title: 'Safety & Alerts', items: ['Mandatory disclaimer, repeated on every result', 'Emergency call buttons: Rescue 1122 and Edhi 115', 'Seasonal disease warnings for the current month', 'Live air quality (US AQI) for the patient\'s location'] },
      { icon: 'Users', title: 'Accounts & Profile', items: ['Register, sign in, remember me with device keystore, multiple remembered accounts', 'Hashed passwords, JWT sessions, emailed password reset', 'Profile with photo, change password, prediction history'] },
      { icon: 'Code2', title: 'Backend & Quality', items: ['FastAPI serverless on Vercel, MongoDB Atlas, token-protected endpoints', 'Timeouts on every outward call so a slow public service degrades gracefully', 'Backend test suite, end-to-end API tests, and an end-to-end app journey test', 'GitHub Actions builds and signs the release APK'] },
    ],
  },

  /* ------------------------------------------------------------------ */
  'inventory-management-system': {
    tagline: 'Know exactly what is in stock, where it went, and when to reorder.',
    facts: [
      { label: 'Platform', value: 'Windows desktop' },
      { label: 'Stack', value: 'C# WinForms · SQL Server' },
      { label: 'Users', value: 'Multi-user with roles' },
      { label: 'Best for', value: 'Shops, wholesalers, warehouses' },
    ],
    overview: [
      'The Inventory Management System is a focused stock-control application for businesses whose main problem is not billing but knowing what they have. Every stock-in and stock-out is recorded with a reason, a date, and the user who did it.',
      'Low-stock alerts and monthly reports give owners an early warning before shelves run empty, while movement logs make shrinkage and counting errors easy to trace back.',
      'It runs on a normal Windows PC with SQL Server, works offline inside the shop, and supports multiple users with separate roles for staff and management.',
    ],
    modules: [
      { icon: 'Package', title: 'Products & Types', items: ['Product registration with codes and units', 'Product type / category management', 'Opening stock and reorder levels'] },
      { icon: 'Boxes', title: 'Stock In / Stock Out', items: ['Stock-in from purchases or transfers', 'Stock-out for sales, damage, or issue', 'Every movement logged with user and date'] },
      { icon: 'Bell', title: 'Alerts', items: ['Low-stock alerts on the dashboard', 'Out-of-stock lists for reordering', 'Slow-moving stock visibility'] },
      { icon: 'FileText', title: 'Reports & Ledger', items: ['Monthly stock reports', 'Product-wise movement history', 'Stock valuation and ledger support', 'Printable and exportable reports'] },
      { icon: 'ShieldCheck', title: 'Users & Roles', items: ['Separate logins for staff and managers', 'Permission-based access to actions', 'Audit trail of who changed what'] },
    ],
  },

  /* ------------------------------------------------------------------ */
  'custom-business-dashboard': {
    tagline: 'Your business numbers on one screen, updated from real data.',
    facts: [
      { label: 'Platform', value: 'Web application' },
      { label: 'Stack', value: 'Angular · .NET · SQL Server · Charts' },
      { label: 'Users', value: 'Owners and managers' },
      { label: 'Best for', value: 'Any business with sales and expense data' },
    ],
    overview: [
      'The Custom Business Dashboard connects to a business\'s existing data (POS, accounting, or spreadsheets) and turns it into clear KPIs: sales today, this month versus last month, expenses, profit, receivables, and top products.',
      'Each dashboard is tailored to what the owner actually wants to watch, with drill-down reports behind every number.',
    ],
    modules: [
      { icon: 'LayoutDashboard', title: 'KPI Overview', items: ['Sales, profit, expenses, and cash at a glance', 'Period comparisons and trends'] },
      { icon: 'BarChart3', title: 'Analytics', items: ['Sales analytics by product, category, and branch', 'Expense breakdowns', 'Interactive charts'] },
      { icon: 'FileText', title: 'Reports', items: ['Drill-down reports behind every KPI', 'Export and scheduled summaries'] },
      { icon: 'Plug', title: 'Integrations', items: ['Connects to POS / accounting databases', 'Imports from Excel where needed'] },
    ],
  },

  /* ------------------------------------------------------------------ */
  'medicare-hms': {
    tagline: 'Front desk to final accounts: one login for every department of the hospital, with real double-entry accounting underneath.',
    facts: [
      { label: 'Platform', value: 'Web application, desktop and tablet' },
      { label: 'Stack', value: 'Angular 18 · ASP.NET Core 9 · SQL Server 2022' },
      { label: 'Deployment', value: 'Single server, on-premises or cloud; one database per hospital' },
      { label: 'Best for', value: 'Hospitals, clinics, diagnostic centres in Pakistan' },
    ],
    highlights: [
      { value: '20', label: 'Modules on one login' },
      { value: '12', label: 'Pre-filled ultrasound report templates' },
      { value: '25+', label: 'Date-filtered, printable reports' },
      { value: 'PKR', label: 'Pakistan locale, letterhead on every print' },
    ],
    overview: [
      'MediCare HMS runs a hospital end to end. Reception registers an OPD visit with a token in seconds; the doctor sees the patient\'s vitals, allergies, history, and prescriptions on one consultation console and orders lab tests from the same screen; the pharmacy sells against live stock; the lab enters results and shares the report over WhatsApp; the ward admits and discharges with a full discharge summary.',
      'Every one of those actions creates the right accounting entry automatically. An OPD fee becomes an invoice, a pharmacy sale posts cost of goods, a lab test deducts consumables, a stock receipt raises a supplier bill, and payroll posts salaries. The general ledger, trial balance, profit and loss, balance sheet, and cash flow are always current, with no separate accounting package.',
      'Billing handles the realities of a busy hospital: partial payments, a patient paying one lump sum against many open invoices (split oldest-first with an optional settlement discount), credit notes, and running patient statements. Roles decide which screens each user can open, and an audit trail records every change.',
    ],
    modules: [
      { icon: 'LayoutDashboard', title: 'Dashboard', items: ['Live KPIs: patients, appointments today, available beds, revenue today', 'Admissions trend and department load charts', 'Upcoming appointments, recent activity, global search'] },
      { icon: 'Users', title: 'Patient Management', items: ['Registration with auto MR number, demographics, blood group', 'Allergy register shown as a warning banner everywhere', 'Vitals history, visit timeline, prescriptions, lab and ultrasound reports', 'Documents and scans upload; admission history', 'Printable patient card with QR, consultation sheet, prescription, discharge summary, statement'] },
      { icon: 'Stethoscope', title: 'Consultation Console', items: ['Everything about the patient on one doctor screen', 'Vitals, diagnosis, notes, and prescriptions in one form', 'Medicine picker linked to pharmacy stock', 'Order lab tests directly; consumables deducted automatically', 'Admit / discharge bar with live ward and bed'] },
      { icon: 'ClipboardList', title: 'OPD Reception & Appointments', items: ['OPD visit with token number in seconds', 'Doctor-wise fees, queue: Waiting → In Consultation → Completed', 'OPD slip in A4 and 80mm thermal; every fee posts to accounts', 'Weekly scheduler by doctor with status tracking'] },
      { icon: 'Package', title: 'Pharmacy & Inventory', items: ['Medicine master with SKU, category, batch, expiry', 'Stock value and potential profit at a glance', 'Receive stock creates the supplier bill automatically', 'POS-style pharmacy sales with receipt print', 'Low stock and expiry tracking; FIFO cost of goods posted to accounts'] },
      { icon: 'TestTubes', title: 'Laboratory', items: ['Test catalog with parameters and reference ranges', 'Lab orders with sample time, status, and critical-value flags', 'Results entry, file attachments, letterhead report, WhatsApp PDF share', 'Consumables inventory linked to tests: ordering a test deducts stock', 'Stock, consumption, and usage-by-test reports'] },
      { icon: 'MonitorDot', title: 'Ultrasound Reporting', items: ['12 templates pre-filled with normal findings; edit only the abnormal lines', 'Study numbers, referred-by and performed-by doctors, clinical history', 'Attach scan images, signature upload, Registered → Reported → Verified', 'Letterhead print and WhatsApp PDF share'] },
      { icon: 'Building2', title: 'Wards & Beds', items: ['Ward-wise bed map: available / occupied / under cleaning', 'Admit to a bed, discharge with a full discharge summary', 'Admission history per patient'] },
      { icon: 'Receipt', title: 'Billing & Invoices', items: ['Manual, OPD, and pharmacy invoices in one place', 'Partial payments, multiple payment accounts, credit notes', 'Receive one lump sum against many invoices, split oldest-first', 'Patient statement with running balance; A4 and thermal invoice print', 'Outstanding, overdue, and receivables tracking'] },
      { icon: 'Briefcase', title: 'HR & Payroll', items: ['Employee records with salary structure, increments, and history', 'Advances with automatic recovery; one-off items (absence, fine, bonus, overtime)', 'Payroll run for any month with preview, payslip print, void with full reversal', 'WhatsApp message to employees for deductions, earnings, payslips', 'Payroll register and staff establishment reports'] },
      { icon: 'Calculator', title: 'General Ledger & Accounting', items: ['Chart of accounts (~77, editable); journal, receipt, payment, sales, purchase vouchers', 'Day book, ledger by account, opening balances, bank reconciliation', 'Trial balance, P&L, balance sheet, cash flow, tax summary, AR aging', 'Expenses by category, recurring expenses, budgets vs actual', 'Fiscal periods with locking'] },
      { icon: 'Truck', title: 'Suppliers, Payables & Fixed Assets', items: ['Supplier master with payment terms and opening balances', 'Bills for medicines, reagents, equipment, services; lump-sum payment clears oldest first', 'AP aging report', 'Asset register, straight-line depreciation, disposal with gain / loss'] },
      { icon: 'BarChart3', title: 'Reports & Analytics', items: ['Revenue and collection, day closing with drill-down to every receipt', 'OPD, patients, appointments, pharmacy stock, laboratory, consumables', 'Billing and receivables, expenses, payroll register', 'Trial balance, P&L, balance sheet, cash flow, day book', 'All date-filtered and printable'] },
      { icon: 'ShieldCheck', title: 'Settings & Security', items: ['Hospital profile and logo on every print instantly', 'Users, roles, and screen-level permissions (Admin, Doctor, Receptionist, Accountant, Nurse, Pharmacist built in)', 'Hashed passwords, token auth, rate limiting, full audit trail', 'On-demand database backup; multi-hospital ready with isolated databases'] },
    ],
  },

  /* ------------------------------------------------------------------ */
  'eye-optical': {
    tagline: 'Customers, prescriptions, and invoices for optical shops.',
    facts: [
      { label: 'Platform', value: 'Windows desktop' },
      { label: 'Stack', value: 'C# WinForms · SQL Server' },
      { label: 'Users', value: 'Shop staff and owner' },
      { label: 'Best for', value: 'Optical shops, eye clinics' },
    ],
    overview: [
      'Eye Optical is built for the specific workflow of an optical shop: a customer comes in, their eyesight prescription is recorded, frames and lenses are selected, and an invoice is issued. Next time, their history is one search away.',
      'Prescription records and invoices are linked to the customer, which speeds up repeat orders and makes it easy to answer "what did I buy last time?"',
    ],
    modules: [
      { icon: 'Users', title: 'Customers', items: ['Customer profiles with contact details', 'Complete visit and purchase history'] },
      { icon: 'Glasses', title: 'Prescriptions', items: ['Eyesight prescription records (SPH, CYL, AXIS, ADD)', 'Prescription history per customer', 'Printable prescription slips'] },
      { icon: 'Receipt', title: 'Invoices', items: ['Frame and lens invoicing', 'Advance and balance tracking', 'Order status (pending / ready / delivered)'] },
      { icon: 'BarChart3', title: 'Reports', items: ['Daily sales', 'Pending orders', 'Customer statements'] },
    ],
  },

  /* ------------------------------------------------------------------ */
  'townone-housing-erp': {
    tagline: 'Every plot, every customer, every installment, and every rupee, in one system that also prints the paperwork.',
    facts: [
      { label: 'Platform', value: 'Web application (live)' },
      { label: 'Database', value: 'SQL Server' },
      { label: 'Accounting', value: 'Full double-entry general ledger' },
      { label: 'Best for', value: 'Housing schemes, developers, property dealers' },
    ],
    highlights: [
      { value: '36+', label: 'Reports with PDF and Excel export' },
      { value: '7', label: 'Editable printable documents' },
      { value: '15%', label: 'Configurable automatic late-payment surcharge' },
      { value: 'Live', label: 'Running for a real housing scheme' },
    ],
    overview: [
      'TownOne Housing Scheme ERP runs the business side of a housing scheme. Projects are divided into blocks and units, each with size, location, price, and extra charges such as corner or park-facing. Units can be added in bulk (A-01 to A-50) and the block-wise stock summary shows what is sold, cancelled, and available at any moment.',
      'A booking creates a contract with an auto-balanced payment schedule across booking, monthly, half-yearly, demarcation, and possession streams. Recovery staff collect installments by cash, bank, cheque, or split receipts, mark overdues, send demand notices, and see the defaulters list. Late-payment surcharge is computed automatically after the grace period and can be waived per customer.',
      'Cancellations, refunds with deduction, restores, and plot transfers to a new buyer are all workflows with a full audit trail. Underneath, a complete double-entry accounting module produces the trial balance, balance sheet, and P&L, and every printable, from the seven-page application form to the provisional allotment letter, can be reworded by the client from Settings without a developer.',
    ],
    modules: [
      { icon: 'Building2', title: 'Properties & Inventory', items: ['Projects, blocks, and units with size, location, and price', 'Bulk unit creation (A-01 … A-50)', 'Block-wise stock summary: sold / cancelled / available', 'Unit cards with status'] },
      { icon: 'Users', title: 'Customers', items: ['Profile with photo, CNIC, father / husband name', 'Unlimited nominees, family members, extra contacts', 'Documents and birthday reminders'] },
      { icon: 'ClipboardList', title: 'Sales & Booking', items: ['Contract with booking, monthly, half-yearly, demarcation, and possession streams', 'Extra charges: corner, west open, road facing, park facing', 'Auto-balanced schedule with per-block defaults, discount, and agent'] },
      { icon: 'FileText', title: 'Printables', items: ['7-page application form, acceptance of booking / contract', 'Provisional allotment letter, deposit slip, demand notice, transfer letter', 'Payment and receipt vouchers', 'All wording editable from Settings'] },
      { icon: 'Wallet', title: 'Installments & Recovery', items: ['Plot and villa installment lists', 'Cash / bank / split receipts (cash + cheque + IBFT)', 'Lump-sum collection across many installments', 'Receipt edit with full audit, cheques in hand and clearing', 'Overdue marking, demand notices, defaulters list'] },
      { icon: 'Bell', title: 'Late Payment Surcharge', items: ['Automatic 15% (configurable) after grace period', 'Monthly re-compute', 'Waive option, shown in ledger'] },
      { icon: 'Workflow', title: 'Cancellation, Refund & Transfer', items: ['Cancel with write-off', 'Refund with deduction (kata)', 'Restore a cancelled file', 'Plot transfer to a new buyer with fee and schedule carry-over'] },
      { icon: 'Building2', title: 'Villas Module', items: ['Villa construction contracts on sold plots', 'Separate ledger and installment schedule'] },
      { icon: 'Calculator', title: 'Accounting', items: ['Chart of accounts, receipts, payments, fund transfers, journal entries', 'Voucher reverse, opening balances, capital accounts', 'Trial balance, balance sheet, P&L, cash / bank / day book', 'Bank reconciliation'] },
      { icon: 'Truck', title: 'Purchases & Payroll', items: ['Suppliers, purchase orders, invoices, debit notes, goods receipts', 'Inventory with average cost', 'Employees and payslips'] },
      { icon: 'BarChart3', title: 'Reports & Dashboard', items: ['36+ reports: outstanding balance, customer ledger, sale summary, collection register, aged receivables / payables, cash flow', 'Every report exports to PDF and Excel', 'Dashboard: units, sold, outstanding, customers, overdue alert, monthly collections chart'] },
      { icon: 'ShieldCheck', title: 'Security & Admin', items: ['Roles with screen-level view / create / edit / delete permissions', 'User management and activity log (who, what, when, from which IP)', 'Company info, logo, print template editor, SMS settings'] },
    ],
  },

  /* ------------------------------------------------------------------ */
  'estate-agency': {
    tagline: 'Properties, clients, agents, and deals in one pipeline.',
    facts: [
      { label: 'Platform', value: 'Database application' },
      { label: 'Stack', value: 'SQL · Business logic' },
      { label: 'Users', value: 'Agents and management' },
      { label: 'Best for', value: 'Real estate agencies, property dealers' },
    ],
    overview: [
      'The Estate Agency system organizes the day-to-day work of a property agency: which properties are listed, which clients are looking for what, which agent is handling the lead, and where each deal stands.',
      'Instead of relying on individual agents\' phones and notebooks, the agency gets a shared view of its pipeline and a record of every deal it has closed.',
    ],
    modules: [
      { icon: 'Building2', title: 'Property Records', items: ['Listings with type, location, size, and price', 'Owner details and documents', 'Availability status'] },
      { icon: 'Users', title: 'Clients & Agents', items: ['Client requirements and follow-ups', 'Agent assignment and performance', 'Contact history'] },
      { icon: 'Briefcase', title: 'Deals', items: ['Deal stages from inquiry to closing', 'Commission tracking', 'Deal history and reporting'] },
    ],
  },

  /* ------------------------------------------------------------------ */
  'dms': {
    tagline: 'One organized system for business records, workflows, and operational data.',
    facts: [
      { label: 'Platform', value: 'Web application' },
      { label: 'Stack', value: 'Web · Database' },
      { label: 'Users', value: 'Multi-user' },
      { label: 'Best for', value: 'Offices, service businesses' },
    ],
    overview: [
      'DMS is a custom data management system built for a business whose records lived across paper files, spreadsheets, and WhatsApp messages. It brings those records into one searchable database with defined workflows for how a record moves from creation to completion.',
      'The result is less duplicate data entry, faster lookups, and reports that management can trust because they come from a single source.',
    ],
    modules: [
      { icon: 'FolderKanban', title: 'Records Management', items: ['Structured record types with custom fields', 'Attachments and notes per record', 'Fast search and filtering'] },
      { icon: 'Workflow', title: 'Workflows', items: ['Status-based workflow per record type', 'Assignment to users or departments', 'History of every status change'] },
      { icon: 'FileText', title: 'Reporting', items: ['Summary and detail reports', 'Export to Excel / PDF', 'Date and status filters'] },
    ],
  },

  /* ------------------------------------------------------------------ */
  'mart': {
    tagline: 'A lighter retail system for products, sales, customers, and stock.',
    facts: [
      { label: 'Platform', value: 'Web application' },
      { label: 'Stack', value: 'TypeScript · Database' },
      { label: 'Users', value: 'Owner and staff' },
      { label: 'Best for', value: 'Small retail shops' },
    ],
    overview: [
      'Mart is a simpler retail management system for shops that need reliable sales and stock records without a full accounting module. It covers the essentials: products, sales, customers, and inventory tracking.',
      'It is a good starting point for a shop moving from manual registers to software, and it can grow into Mart POS when accounting and supplier management are needed.',
    ],
    modules: [
      { icon: 'Package', title: 'Products', items: ['Product catalog with prices and categories', 'Stock quantities per product'] },
      { icon: 'ShoppingCart', title: 'Sales', items: ['Sales entry and invoices', 'Daily sales summary'] },
      { icon: 'Users', title: 'Customers', items: ['Customer records', 'Purchase history'] },
      { icon: 'Boxes', title: 'Inventory', items: ['Stock in / out tracking', 'Low-stock visibility'] },
    ],
  },

  /* ------------------------------------------------------------------ */
  'ali-raza-portfolio': {
    tagline: 'A clean personal brand site for a full-stack software engineer.',
    facts: [
      { label: 'Platform', value: 'Static website' },
      { label: 'Stack', value: 'HTML · CSS · JavaScript' },
      { label: 'Hosting', value: 'GitHub Pages' },
      { label: 'Status', value: 'Live' },
    ],
    overview: [
      'A fast, responsive portfolio website presenting Ali Raza\'s skills, projects, and experience to potential clients and employers.',
    ],
    modules: [
      { icon: 'Code2', title: 'Sections', items: ['Developer profile and summary', 'Skills and technologies', 'Project showcase', 'Contact section'] },
      { icon: 'Rocket', title: 'Quality', items: ['Responsive on all screen sizes', 'Fast static hosting', 'Clean, readable design'] },
    ],
  },

  /* ------------------------------------------------------------------ */
  'hamza-memon-portfolio': {
    tagline: 'A polished developer portfolio that makes project work easy to explore.',
    facts: [
      { label: 'Platform', value: 'Static website' },
      { label: 'Stack', value: 'HTML · CSS · JavaScript' },
      { label: 'Hosting', value: 'GitHub Pages' },
      { label: 'Status', value: 'Live' },
    ],
    overview: [
      'A professional portfolio website presenting Hamza Memon\'s developer profile, skills, and project work.',
    ],
    modules: [
      { icon: 'Code2', title: 'Sections', items: ['Developer profile', 'Skills showcase', 'Project showcase', 'Contact section'] },
      { icon: 'Rocket', title: 'Quality', items: ['Responsive layout', 'Fast static hosting', 'Consistent visual style'] },
    ],
  },
}
