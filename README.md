# FR Software Solutions — Company Website

A modern, animated single-page marketing website for **FR Software Solutions**, built with
Vite + React + Tailwind CSS v4 + Framer Motion, and ready to deploy to **Netlify** at
[frsoftwaresolutions.online](https://frsoftwaresolutions.online/).

![Stack](https://img.shields.io/badge/Vite-6-646CFF) ![React](https://img.shields.io/badge/React-18-61DAFB) ![Tailwind](https://img.shields.io/badge/Tailwind-v4-38BDF8)

---

## ✨ Features

- **Animated hero** with an aurora gradient background and scroll cue
- **Sticky blur navbar** + scroll progress bar + mobile menu
- **Services**, **Portfolio** (with category filtering), **Process**, **Team**
- **Client testimonials** marquee
- **Working contact form** powered by **Netlify Forms** (no backend needed)
- Smooth scroll-reveal animations throughout (respects `prefers-reduced-motion`)
- SEO meta tags, Open Graph image, custom favicon, security headers
- Fully responsive, accessible, fast (~99 KB gzipped JS)

---

## ✏️ Editing your content

**Everything you'll want to change lives in one file:**

```
src/data/site.js
```

There you can update:

| Section            | What to edit                                            |
| ------------------ | ------------------------------------------------------- |
| Company info       | `company` — name, email, phone, location, social links  |
| Hero stats         | `stats`                                                 |
| Trusted-by logos   | `trustedBy`                                             |
| Services           | `services`                                              |
| Projects/portfolio | `projects` + `projectCategories`                        |
| Process steps      | `process`                                               |
| Testimonials       | `testimonials`                                          |
| Team members       | `team`                                                  |
| Navigation         | `navLinks`                                              |

> **Replace the placeholder names, projects and quotes with your real data**, then rebuild/redeploy.

### Adding real team photos
Put image files in `public/` (e.g. `public/team/faisal.jpg`) and set the `image` field in
`team` to `/team/faisal.jpg`. If `image` is empty, a styled initials avatar is shown.

---

## 🧑‍💻 Local development

```bash
npm install      # install dependencies (already done)
npm run dev      # start dev server → http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

---

## 🚀 Deploying to Netlify

See **DEPLOY.md** for full step-by-step instructions. Two quick options:

### Option A — Drag & drop (fastest, no account setup)
1. Run `npm run build`
2. Go to <https://app.netlify.com/drop>
3. Drag the **`dist`** folder onto the page → it goes live instantly
4. In **Site settings → Domain management**, add `frsoftwaresolutions.online`

### Option B — Netlify CLI (repeatable)
```bash
npm install -g netlify-cli
netlify login
netlify deploy --build --prod
```

### Option C — Git + continuous deploy (recommended long-term)
Push this folder to a GitHub repo, then "Import from Git" in Netlify.
Build command `npm run build`, publish directory `dist` (already set in `netlify.toml`).

---

## 📨 Contact form

The contact form uses **Netlify Forms** and works automatically once deployed to Netlify —
submissions appear in your Netlify dashboard under **Forms**. No server or API key required.
(A hidden static form in `index.html` lets Netlify detect it at build time.)

To get email notifications: **Netlify → Forms → Settings & notifications → Add notification**.

---

## 🗂 Project structure

```
src/
  data/site.js          ← ALL editable content
  components/            ← UI sections (Hero, Services, Projects, …)
  App.jsx               ← page composition
  index.css             ← Tailwind theme + brand tokens
public/                 ← favicon, OG image, (your images)
netlify.toml            ← build + redirects + headers
index.html              ← <head> meta + hidden Netlify form
```
