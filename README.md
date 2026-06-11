# FR Software Solutions — Company Website

> **Building technology that powers business growth.**

A premium, animated single-page company website for **FR Software Solutions** — a software
house building POS systems, inventory management, restaurant & retail management, accounting
systems, dashboards, and custom web/desktop applications.

Built with **Vite + React 18 + Tailwind CSS v4 + Framer Motion**, deployable to **Netlify**
at [www.frsoftwaresolutions.com](https://www.frsoftwaresolutions.com/).

![Stack](https://img.shields.io/badge/Vite-6-646CFF) ![React](https://img.shields.io/badge/React-18-61DAFB) ![Tailwind](https://img.shields.io/badge/Tailwind-v4-38BDF8)

---

## ✨ Sections & features

| Section | Highlights |
| --- | --- |
| Loading screen | Animated logo ring + tagline, fades into the page |
| Navbar | Sticky glass-blur on scroll, active-link highlight, mobile menu, **Get Free Demo** CTA |
| Hero | 3D POS dashboard mockup, 8 floating capability icons, moving grid, particles, parallax, cover-image slot |
| Stats | Animated glowing counter cards |
| About | Company story + 3 premium cards |
| Services | 12 animated service cards |
| Products | 3 product cards (Restaurant MS, Inventory MS, **Mart POS** flagship) with detail modals |
| Portfolio | 15 projects, 9 category filters, animated grid + detail modals with business benefits |
| Dev Work | GitHub-style repository cards with activity graphs (14 repos) |
| Team | Glassmorphism profiles with animated gradient borders, 3D tilt, skills, portfolio links |
| Why Choose Us | 11-reason feature grid |
| Process | 6-step glowing zigzag timeline |
| Industries | 13 industry pills |
| Technologies | Dual-direction marquee of tech badges |
| Testimonials | Auto-playing carousel (pauses on hover) |
| CTA band | WhatsApp / Demo / Discuss buttons + prominent phone number |
| Contact | Validated form (Netlify Forms) with service dropdown + info cards |
| Extras | Floating WhatsApp button, back-to-top, scroll progress bar, custom scrollbar, `prefers-reduced-motion` support |

---

## 🖼 Brand assets (logo & cover image)

The site is wired to pick up your official assets automatically — just drop the files in:

```
public/brand/logo.png    ← official logo (transparent PNG recommended)
public/brand/cover.jpg   ← cover image (used as the hero background, behind a dark overlay)
```

- **No code changes needed.** Until the files exist, a sharp gradient "FR" monogram and the
  gradient/grid hero background render instead — nothing ever looks broken.
- The logo appears in the navbar, footer, and loading screen.
- To update the favicon, replace `public/favicon.svg` (or add `favicon.png` and update the
  `<link rel="icon">` in `index.html`).

---

## ✏️ Editing content

**All text/content lives in one file:** `src/data/site.js` — company info, nav, hero copy,
stats, about cards, services, products, portfolio projects, repo cards, team, why-choose-us,
process steps, industries, technologies, testimonials, and the contact-form service options.

---

## 🧑‍💻 Local development

```bash
npm install      # install dependencies
npm run dev      # dev server → http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build → http://localhost:4173
```

---

## 🚀 Deploying to Netlify

See **DEPLOY.md** for full instructions. Quick options:

1. **Drag & drop** — `npm run build`, then drag `dist/` onto <https://app.netlify.com/drop>
2. **CLI** — `netlify deploy --build --prod`
3. **Git** (recommended) — push to GitHub and "Import from Git" in Netlify.
   Build command `npm run build`, publish directory `dist` (already in `netlify.toml`).

## 📨 Contact form

Uses **Netlify Forms** — works automatically once deployed to Netlify; submissions appear
under **Forms** in the Netlify dashboard. Field names are mirrored in the hidden form in
`index.html` (keep them in sync with `src/components/Contact.jsx`).

---

## 🗂 Project structure

```
src/
  data/site.js            ← ALL editable content
  components/
    Preloader.jsx         ← branded loading screen
    Navbar.jsx  Hero.jsx  Stats.jsx  About.jsx
    Services.jsx  Products.jsx  Portfolio.jsx  DevWork.jsx
    Team.jsx  WhyChooseUs.jsx  Process.jsx
    Industries.jsx  Technologies.jsx  Testimonials.jsx
    CtaBand.jsx  Contact.jsx  Footer.jsx
    FloatingActions.jsx   ← WhatsApp float + back-to-top
    Icon.jsx  Logo.jsx  Modal.jsx  TiltCard.jsx  Counter.jsx
    Reveal.jsx  SectionHeading.jsx  ScrollProgress.jsx
  App.jsx                 ← page composition
  index.css               ← Tailwind v4 theme tokens + animations
public/brand/             ← drop logo.png & cover.jpg here
netlify.toml              ← build + redirects + headers
index.html                ← SEO meta + hidden Netlify form
```
