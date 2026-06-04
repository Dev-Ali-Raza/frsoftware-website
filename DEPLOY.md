# Deploying to Netlify + connecting frsoftwaresolutions.online

This guide takes you from the finished build to a **live site on your domain**.
Pick **one** of the three methods below. Method A is the fastest.

---

## ✅ Before you start
The production build is already generated in the `dist/` folder. If you've edited
content since, regenerate it:

```bash
npm run build
```

---

## Method A — Drag & drop (2 minutes, no CLI)

1. Open <https://app.netlify.com/drop> (log in / sign up — free).
2. Drag the entire **`dist`** folder from
   `D:\Projects\FrSoftwareSolution\dist` onto the drop zone.
3. Netlify gives you a temporary URL like `random-name.netlify.app` — your site is live. 🎉
4. Continue to **"Connect your domain"** below.

> Note: with drag-and-drop you re-drag the `dist` folder each time you update the site.
> For automatic deploys on every change, use Method C.

---

## Method B — Netlify CLI

In the project folder (`D:\Projects\FrSoftwareSolution`):

```bash
npm install -g netlify-cli   # one-time
netlify login                # opens a browser to authorize
netlify init                 # create/link a site (choose "Create & configure a new site")
netlify deploy --build --prod
```

> 💡 In Claude Code you can run the interactive login by typing
> `! netlify login` in the prompt so the browser auth happens in your session.

Then continue to **"Connect your domain"**.

---

## Method C — GitHub + continuous deploy (recommended long-term)

1. Create a new repo on GitHub (e.g. `frsoftware-website`).
2. From the project folder:
   ```bash
   git init
   git add .
   git commit -m "FR Software Solutions website"
   git branch -M main
   git remote add origin https://github.com/<you>/frsoftware-website.git
   git push -u origin main
   ```
3. In Netlify → **Add new site → Import an existing project → GitHub** → pick the repo.
4. Build settings are auto-detected from `netlify.toml`
   (build command `npm run build`, publish dir `dist`). Click **Deploy**.
5. Every `git push` now redeploys automatically.

Then continue to **"Connect your domain"**.

---

## 🌐 Connect your domain (frsoftwaresolutions.online)

In your Netlify site dashboard:

1. Go to **Domain management → Add a domain → Add `frsoftwaresolutions.online`**.
2. Netlify will ask you to verify ownership and show you DNS records.

You have two ways to point the domain. **Option 1 is simplest.**

### Option 1 — Use Netlify DNS (recommended)
1. Netlify shows 4 **nameservers** (e.g. `dns1.p0X.nlhostingdns.com`, …).
2. Log in to **wherever you bought the domain** (your registrar).
3. Find **Nameservers / DNS settings** for `frsoftwaresolutions.online`.
4. Replace the existing nameservers with the 4 from Netlify.
5. Save. Propagation takes ~15 min–24 h. Netlify auto-provisions HTTPS.

### Option 2 — Keep your registrar's DNS (add records manually)
At your registrar's DNS panel, add:

| Type  | Name / Host | Value                     |
| ----- | ----------- | ------------------------- |
| A     | `@`         | `75.2.60.5`               |
| CNAME | `www`       | `<your-site>.netlify.app` |

(Netlify shows the exact values for your site — always use the ones it gives you.)

### Final step — HTTPS
Once DNS resolves, Netlify automatically issues a free **Let's Encrypt SSL certificate**.
In **Domain management → HTTPS**, make sure **"Force HTTPS"** is enabled, and set
`frsoftwaresolutions.online` as the **primary domain** (with `www` redirecting to it).

---

## 📨 Turn on contact-form notifications
**Netlify dashboard → Forms → Settings & notifications → Add notification →
Email notification** → enter the address that should receive enquiries.

---

## 🔁 Updating the site later
1. Edit `src/data/site.js` (or any component).
2. `npm run build`
3. Re-deploy: re-drag `dist` (Method A), run `netlify deploy --build --prod` (Method B),
   or just `git push` (Method C).

---

### Need help?
Tell me which method you're using and where you get stuck — e.g. paste the DNS records
Netlify shows you, and I'll tell you exactly what to enter at your registrar.
