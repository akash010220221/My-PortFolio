# 🤖 AGENT CONTEXT DOCUMENT — Akash Kumar Portfolio
> **Purpose**: Living document for AI agents. Captures current project state, all changes made, decisions, and known issues so any agent can pick up from where the last one left off.
> **Auto-updated**: Every session should append a new `## Session` entry at the bottom.

---

## 📌 Project Overview

| Field | Value |
|---|---|
| **Project Name** | MyPortfolio |
| **Owner** | Akash Kumar (`akashkrsingh1104@gmail.com`) |
| **Type** | Personal Developer Portfolio — Single-Page Application |
| **Stack** | React 18 + Vite 5 + Tailwind CSS 3 + Framer Motion |
| **Root Path** | `c:\Users\HELLO\OneDrive\Desktop\Portfolio\MyPortfolio` |
| **Git Repo** | GitHub: `akash010220221/Cuppu11` |
| **Deploy Target** | Vercel (configured) + Netlify config also present |
| **Package Manager** | npm |
| **Node Entry** | `src/main.jsx` → `App.jsx` |

---

## 🏗️ Project Architecture

### Layout Structure
The app uses a **split-panel layout** (desktop only):
- **Left Sidebar** (fixed, `w-[400px]`): Profile photo, bio, quick metrics, social links, email copy button. Lives entirely in `App.jsx`.
- **Right Main Area** (`flex-1`, `id="main-scroll-container"`): The scrollable section with Navbar + all page sections + footer.

### Component Tree
```
App.jsx
├── <aside>  (left sidebar — inline in App.jsx, desktop only)
└── <div id="main-scroll-container">
    ├── Navbar.jsx
    ├── Hero.jsx          (section id="about")
    ├── Skills.jsx        (section id="skills")
    ├── Projects.jsx      (section id="projects")
    ├── Education.jsx     (section id="education")
    ├── Certificates.jsx  (section id="certificates")
    ├── Achievements.jsx  (section id="achievements")
    ├── Contact.jsx       (section id="contact")
    └── <footer>
```

### Navbar Scroll Tracking
- The Navbar uses `IntersectionObserver` scoped to `#main-scroll-container` (NOT `window`).
- Active link detection uses `rootMargin: "-30% 0px -65% 0px"`.
- Smooth scroll uses `react-scroll` `<Link>` with `containerId="main-scroll-container"`.
- This is critical — any scroll or anchor changes MUST target `#main-scroll-container`, not `document`.

---

## 📦 Key Dependencies

| Package | Version | Purpose |
|---|---|---|
| `react` | `^18.2.0` | UI framework |
| `react-dom` | `^18.2.0` | DOM rendering |
| `vite` | `^5.0.8` | Build tool / dev server |
| `tailwindcss` | `^3.4.1` | Utility-first CSS |
| `framer-motion` | `^11.0.3` | Animations |
| `lucide-react` | `^0.330.0` | Icon set (primary) |
| `react-icons` | `^5.5.0` | Additional icons (SiLeetcode used) |
| `react-scroll` | `^1.9.0` | Smooth in-page scroll |
| `react-router-dom` | `^6.22.0` | Installed but NOT actively used (SPA) |
| `@vitejs/plugin-react` | `^4.2.1` | Vite React plugin |
| `postcss` + `autoprefixer` | latest | CSS post-processing |

---

## 🎨 Design System

### Color Palette
| Token | Value | Usage |
|---|---|---|
| Page BG (dark) | `#131c2e` / `#0b0f17` | Main background |
| Card BG | `#111724` / `#141b2a` (hover) | All section cards |
| Accent (primary) | `emerald-400/500` (`#34d399`) | Active states, CTAs, status |
| Accent (secondary) | `indigo-400/500/600` | Form elements, section labels |
| Accent (tertiary) | `amber-400/500` | LeetCode icon, Class X score |
| Text primary | `slate-200` / `white` | Headings |
| Text secondary | `slate-400` / `slate-500` | Subtext |
| Sidebar BG | `bg-[#0d1625]` (dark navy) | Harmonized with right panel dark theme |

### Typography
- Body font: **Plus Jakarta Sans**, Inter, system-ui (configured in `index.css`)
- Mono font: `font-mono` Tailwind utility (system monospace)

### Global CSS (`src/index.css`)
- Tailwind base/components/utilities imported
- Custom `nav-shimmer-line` keyframe animation (emerald shimmer on nav hover)
- Custom scrollbar styles (6px width, `#1e293b` thumb, `#131c2e` track)
- `.bg-grid-subtle` — dot-grid pattern utility
- `.craft-card` — shared card base style with hover lift effect

---

## 📄 All Components — Current State

### `App.jsx`
- Contains the full left sidebar (profile photo, name, bio, metrics, social links).
- Profile photo: `src/assets/AkashProfile.jpg`
- Email copy button triggers `navigator.clipboard.writeText`.
- Social links: GitHub, LinkedIn, LeetCode, Email (mailto).
- **Live Visitor Counter**: fetches from `https://api.countapi.xyz` on mount.
  - Namespace/key: `akash-kumar-portfolio/visitors`
  - Uses `sessionStorage('akash_visit_counted')` guard — hits `/hit` once per session, then `/get` on repeat visits.
  - Uses `useRef(hasCounted)` to prevent double-fire in React strict mode.
  - Gracefully hidden (`visitorError`) if the API is unreachable.
  - Displays with `Eye` icon, `···` pulse while loading, then formatted count.

### `Navbar.jsx`
- Fixed top bar, offset from left sidebar on desktop: `w-full lg:w-[calc(100%-400px)]`.
- Nav links: About, Skills, Projects, Education, Certificates, Achievements, Contact, Resume (download).
- Resume link: `src/assets/Akash_Kumar_Resume.pdf` (imported directly, downloaded as `Akash_Kumar_Resume.pdf`).
- Uses Framer Motion for scale/shadow active-link animation.
- Click ripple wave effect on each nav item.
- Mobile: grid 2-col dropdown menu with `AnimatePresence` fade.

### `Hero.jsx`
- Section `id="about"`.
- (Not fully read yet — see file for details.)

### `Skills.jsx`
- Section `id="skills"`.
- (Not fully read yet — see file for details.)

### `Projects.jsx`
- Section `id="projects"`.
- Large component (24KB). Contains project cards.
- (Not fully read yet — see file for details.)

### `Education.jsx`
- Section `id="education"`.
- Three education cards: B.Tech CSE at LPU (CGPA 8.0), Class XII (83.2%), Class X (95.2%).
- Animated with Framer Motion `whileInView`.
- Score color coding: emerald (B.Tech), indigo (XII), amber (X).

### `Certificates.jsx`
- Section `id="certificates"`.
- (Not fully read yet — see file for details.)

### `Achievements.jsx`
- Section `id="achievements"`.
- (Not fully read yet — see file for details.)

### `Contact.jsx`
- Section `id="contact"`.
- **Contact form uses Web3Forms API** (`https://api.web3forms.com/submit`).
- Access key read from `import.meta.env.VITE_WEB3FORMS_ACCESS_KEY`.
- If key missing: shows error with fallback `mailto:` link.
- Has honeypot checkbox for spam prevention.
- Has success state (full-panel success message), error state (with fallback button), submitting state (spinner).
- Direct contact cards: Email + Phone (`+91 7485895414`), with copy-to-clipboard.
- Social profiles grid: LinkedIn, GitHub, LeetCode, Instagram.
- Instagram: `@ak_a_sh0102` / `https://instagram.com/ak_a_sh0102`.

### `StarBackground.jsx`
- Decorative animated star background component.
- (Not used in main layout currently — verify in App.jsx if imported anywhere.)

---

## 🔐 Environment Variables

| Variable | File | Purpose |
|---|---|---|
| `VITE_WEB3FORMS_ACCESS_KEY` | `.env` (gitignored) | Contact form submission via Web3Forms API |
| `VITE_FIREBASE_DB_URL` | `.env` (gitignored) | Firebase Realtime Database URL for live visitor counter |

- `.env.example` exists with the key template.
- `.env` is in `.gitignore` — do NOT commit it.
- When deploying to Vercel, add `VITE_WEB3FORMS_ACCESS_KEY` in the Vercel dashboard under Project → Settings → Environment Variables.

---

## 🚀 Deployment

### Vercel (Primary)
- `VERCEL_DEPLOYMENT_CHECKLIST.md` — exists in root, last updated Feb 7 2026.
- `vercel.json` — configured with SPA rewrites.
- Build command: `npm run build` → outputs to `dist/`.
- HTML error (missing `</head>`) was fixed previously.
- **Status as of last checklist**: ✅ Ready for deployment.

### Netlify
- `netlify.toml` exists but is secondary/unused — won't cause issues.

### Dev Server
```bash
cd "c:\Users\HELLO\OneDrive\Desktop\Portfolio\MyPortfolio"
npm run dev
# Starts Vite dev server, typically http://localhost:5173
```

### Production Build
```bash
npm run build
# Outputs to dist/
```

---

## 📁 Assets

| File | Size | Usage |
|---|---|---|
| `AkashProfile.jpg` | — | Sidebar profile photo |
| `Akash_Kumar_Resume.pdf` | — | Navbar resume download |
| `AkashResume_page-0001.jpg` | ~869 KB | Resume preview image |
| `DSA.jpg` | ~425 KB | Certificate/Achievement |
| `cuppu.png` | ~162 KB | Project screenshot (Cuppu app) |
| `infosys1.png` | ~128 KB | Certificate (Infosys) |
| `snazzyShop.png` | ~226 KB | Project screenshot |
| `udemy.png` | ~96 KB | Certificate (Udemy) |

---

## 👤 Owner Info (for form / contact references)

| Field | Value |
|---|---|
| Name | Akash Kumar |
| Email | akashkrsingh1104@gmail.com |
| Phone | +91 7485895414 |
| Location | India |
| GitHub | https://github.com/akash010220221 |
| LinkedIn | https://www.linkedin.com/in/akashkr0102 |
| LeetCode | https://leetcode.com/u/akashkr0102/ |
| Instagram | https://instagram.com/ak_a_sh0102 |
| LeetCode problems | 500+ solved |
| Specialization | Full Stack MERN Engineer |
| B.Tech | CSE at LPU (Aug 2023 – Present, CGPA 8.0) |

---

## 🧠 Known Decisions & Gotchas

1. **Scroll container is NOT `window`** — It's `#main-scroll-container`. Any `scroll`, `IntersectionObserver`, or `react-scroll` usage must use `containerId="main-scroll-container"`.
2. **Left sidebar is NOT a component** — It's inline JSX inside `App.jsx`. If you need to modify the sidebar, edit `App.jsx` directly.
3. **Tailwind in `dependencies` (not devDependencies)** — This is intentional for Vercel builds that may not install devDependencies.
4. **`StarBackground.jsx` exists but may be unused** — Verify before modifying or removing.
5. **`react-router-dom` is installed but not used** — The app is a pure SPA with section scrolling, not routing.
6. **Resume PDF is bundled via Vite import** — `import resumePdf from "../assets/Akash_Kumar_Resume.pdf"` in Navbar. This is loaded at build time.
7. **Web3Forms requires the access key at runtime** — The form gracefully degrades with a mailto fallback if the key is missing.

---

## 📝 Change Log

### Session 1 — 2026-10-24 (IST 22:58)
- **Agent**: Antigravity (Claude Sonnet 4.6 with Thinking)
- **What was done**:
  - User requested a living context document for AI agent handoff continuity.
  - Performed full project audit: read `App.jsx`, `Navbar.jsx`, `Education.jsx`, `Contact.jsx`, `index.css`, `package.json`, `.env.example`, `VERCEL_DEPLOYMENT_CHECKLIST.md`, and directory listings.
  - Created this file (`AGENT_CONTEXT.md`) from scratch based on audit findings.
- **No code was changed this session** — documentation only.
- **Open questions / things not yet read**:
  - `Hero.jsx`, `Skills.jsx`, `Projects.jsx`, `Certificates.jsx`, `Achievements.jsx` — not fully audited yet.
  - `tailwind.config.js` — custom animations/colors not documented here yet.
  - `vite.config.js` — not read (standard Vite + React config).
  - `jsconfig.json` — not read (likely path aliases).
  - Confirm if `StarBackground.jsx` is imported anywhere.

---

## 🔜 How to Continue (Next Agent Instructions)

1. **Read this file first** before making any changes.
2. **Append a new `## Session` entry** at the bottom of the Change Log when you start working.
3. **Update the relevant sections** (components, known issues, env vars) if you make changes.
4. **Do NOT overwrite previous sessions** — append only.
5. If the user asks for a feature, check the "Known Decisions & Gotchas" section first for constraints.
6. The dev server runs at `http://localhost:5173` by default via `npm run dev`.

### Session 2 — 2026-10-24 (IST 23:09)
- **Agent**: Antigravity (Claude Sonnet 4.6 with Thinking)
- **User request**: Optimise the left sidebar colour to match the right dark panel.
- **What was changed**: `src/App.jsx` — left `<aside>` sidebar fully restyled from light to dark:
  - `bg-slate-100` → `bg-[#0d1625]` (dark navy, distinct but harmonious with `#131c2e`)
  - `border-slate-300` → `border-slate-700/50` (all dividers)
  - `bg-emerald-100 border-emerald-300 text-emerald-700` (status pill) → `bg-emerald-500/10 border-emerald-500/30 text-emerald-400`
  - `border-emerald-200 bg-slate-200 shadow-emerald-200/50` (photo frame) → `border-emerald-500/30 bg-slate-800 shadow-emerald-500/10`
  - `from-white/40` (photo gradient overlay) → `from-[#0d1625]/70`
  - `text-slate-900` (name) → `text-white`
  - `text-emerald-600` (role) → `text-emerald-400`
  - `text-slate-500` (bio text) → `text-slate-400`
  - Metrics bar: `from-slate-200/80 to-emerald-100/60 border-slate-300` → `from-slate-800/80 to-emerald-900/20 border-slate-700/60`
  - Metrics text: `text-slate-800` → `text-slate-200`; `text-amber-500` → `text-amber-400`; `text-teal-500` → `text-teal-400`
  - Email copy button: light emerald → `from-emerald-500/10 to-teal-500/10 border-emerald-500/25`
  - GitHub icon: `bg-slate-200 border-slate-300` → `bg-slate-800 border-slate-700/60`
  - LinkedIn: `bg-blue-50 border-blue-100` → `bg-blue-500/10 border-blue-500/20`
  - LeetCode: `bg-amber-50 border-amber-100` → `bg-amber-500/10 border-amber-500/20`
  - Email: `bg-rose-50 border-rose-100` → `bg-rose-500/10 border-rose-500/20`
- **Design system updated** above: Sidebar BG now `#0d1625`.
- **Files changed**: `src/App.jsx`

### Session 3 — 2026-10-24 (IST 23:14)
- **Agent**: Antigravity (Claude Sonnet 4.6 with Thinking)
- **User request**: Add a live profile visitor counter.
- **Implementation**: CountAPI (free, zero-backend, browser-fetch) via `https://api.countapi.xyz`.
  - Namespace/key: `akash-kumar-portfolio/visitors`
  - `sessionStorage` guard: increments once per session, reads-only on re-visits.
  - `useRef(hasCounted)` prevents React StrictMode double-fire.
  - Gracefully hidden if the API is unreachable (no broken UI).
  - Displays below the metrics bar in the sidebar with an `Eye` icon + pulsing `···` while loading.
- **Files changed**: `src/App.jsx`
  - Added `useEffect`, `useRef` to React import
  - Added `Eye` to lucide-react import
  - Added `visitorCount`, `visitorLoading`, `visitorError` state + `hasCounted` ref
  - Added `useEffect` fetch block
  - Added visitor counter JSX block in sidebar below metrics bar

### Session 4 — 2026-10-24 (IST 23:20)
- **Agent**: Antigravity (Claude Sonnet 4.6 with Thinking)
- **User request**: Live counter not appearing on website.
- **Root cause**: Both `countapi.xyz` (Session 3) AND `counterapi.dev` (interim fix) are dead services (shut down / 410 Gone).
- **Fix**: Migrated to **Firebase Realtime Database** via REST API — free, permanent, Google infrastructure.
  - Uses `VITE_FIREBASE_DB_URL` env var (e.g. `https://your-project-default-rtdb.firebaseio.com`)
  - REST pattern: `GET /visitor_count.json` then `PUT /visitor_count.json` with incremented value
  - If env var not set → counter silently hidden (no broken UI)
  - `sessionStorage` guard still in place
- **Files changed**: `src/App.jsx`, `.env.example`
- **⚠️ ACTION REQUIRED by user**: Set up Firebase to make the counter appear:

#### Firebase Setup Steps (one-time, ~5 minutes)
1. Go to https://console.firebase.google.com
2. Click **Add Project** → name it (e.g. `akash-portfolio`) → disable Google Analytics → Create
3. In left sidebar: **Build → Realtime Database → Create Database**
4. Choose region (e.g. `us-central1`) → Start in **Test mode** → Enable
5. In **Rules** tab, replace with:
   ```json
   {
     "rules": {
       ".read": false,
       ".write": false,
       "visitor_count": {
         ".read": true,
         ".write": true
       }
     }
   }
   ```
6. Click **Publish**
7. Copy the Database URL from the top of the Realtime Database page (looks like `https://akash-portfolio-xxxx-default-rtdb.firebaseio.com`)
8. Paste it into `.env` as: `VITE_FIREBASE_DB_URL=https://akash-portfolio-xxxx-default-rtdb.firebaseio.com`
9. Also add this same value to Vercel environment variables for production

---
*Last updated: 2026-10-24T23:20 IST | Agent: Antigravity*

### Session 5 — 2026-10-24 (IST 23:30)
- **Agent**: Antigravity (Claude Sonnet 4.6 with Thinking)
- **User request**: Move visitor counter to the page footer.
- **What changed**: `src/App.jsx`
  - Removed counter block from left sidebar (was below metrics bar)
  - Added counter as a centered pill in the `<footer>` (top row, above copyright text)
  - Footer layout changed from `sm:flex-row justify-between` to `flex-col items-center gap-3` with a nested row for the copyright lines
  - Counter is now visible on **all screen sizes** (mobile + desktop) since it’s in the main scroll area, not the sidebar
  - Counter pill: `rounded-full bg-slate-800/60 border border-slate-700/50` with Eye icon + emerald count
- **Footer layout after change**:
  ```
  ══════════════════════════════════════
  │      [👁 Profile Views    1,247]     │  ← NEW (centered)
  │  © 2026 Akash Kumar···   React···  │
  ══════════════════════════════════════
  ```
- **Note**: Counter still requires `VITE_FIREBASE_DB_URL` to be set in `.env` to appear. Without it, the pill is hidden.

---

### Session 6 — 2026-10-24 (IST 23:52)
- **Agent**: Antigravity (Gemini 3.8 Flash)
- **User request**: Complete Firebase setup for live profile visitor counter.
- **What was done**:
  - User created Firebase project `akash-portfolio-c5c33` and Realtime Database `akash-portfolio-c5c33-default-rtdb`.
  - Configured database URL: `https://akash-portfolio-c5c33-default-rtdb.firebaseio.com`.
  - Added `VITE_FIREBASE_DB_URL=https://akash-portfolio-c5c33-default-rtdb.firebaseio.com` to `.env`.
  - Restarted Vite dev server to load new environment variables.
  - Verified live in browser: Footer displays `👁 Profile Views` and increments correctly.
- **Action remaining for production**: Remember to add `VITE_FIREBASE_DB_URL` with value `https://akash-portfolio-c5c33-default-rtdb.firebaseio.com` in Vercel project environment settings.

### Session 7 — 2026-10-24 (IST 23:59)
- **Agent**: Antigravity (Gemini 3.8 Flash)
- **User request**: Remove all text from footer except the live counter.
- **What was changed**: `src/App.jsx`
  - Removed copyright text and "Crafted with React, Tailwind CSS & Vite".
  - Cleaned up footer container to center only the live profile views counter pill (`py-6`, `flex justify-center items-center`).
- **Footer layout after change**:
  ```
  ══════════════════════════════════════
  │      [👁 Profile Views    1,247]     │  ← Only element in footer
  ══════════════════════════════════════
  ```

---
*Last updated: 2026-10-24T23:59 IST | Agent: Antigravity*
