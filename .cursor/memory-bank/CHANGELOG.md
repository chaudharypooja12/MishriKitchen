# Mishri Kitchen — change log (agent memory)

Entries are **newest first**. Agents should read the latest entry before work and **append a new entry after** substantive edits.

## 2026-05-15

- **Dark glass UI v2:** Site-wide **dark glassmorphism** (mesh background, `glass-panel` / `glass-nav`, cyan–violet–fuchsia accents). Typography: **Syne** + **Plus Jakarta Sans** (`src/app/layout.tsx`). Mobile **Embla** strips for services, categories, and testimonials; **ProjectsCarousel** dots + nav arrows. Shell and inner routes reskinned (`globals.css`, `AppShell`, `Navbar`, `Footer`, sticky/floating bars, home sections, `about` / `services` / `contact` / `reviews` / `categories` / `portfolio` pages). **`src/lib/constants.ts` (CONTACT)** unchanged. Do not revert to warm-beige without an explicit product request.
- **Site implementation (PRD + Aby):** Full static routes (`/`, `/about`, `/services`, `/portfolio`, `/categories`, `/categories/[slug]`, `/reviews`, `/contact`), shared shell (Navbar, Footer, sticky mobile CTAs, floating actions), `src/data/*` modules, UI primitives, Framer Motion `FadeIn`, Embla carousel, portfolio lightbox (`yet-another-react-lightbox`), LocalBusiness JSON-LD, `next-sitemap` postbuild → `public/sitemap*.xml` + `robots.txt`.
- **Config:** `next.config.ts` Unsplash `remotePatterns`; `NEXT_PUBLIC_SITE_URL` in `.env.example`; root layout fonts (see dark-glass entry above for current pair).
- **Design:** Aby skill at `.cursor/skills/aby/`; always-on `.cursor/rules/aby.mdc` (see conflict note there for live UI vs skill prose).
- **Memory bank:** `projectbrief.md` updated so agents treat **shipped dark glass** as the live visual baseline alongside Aby rules.

## 2026-05-14 (earlier)

- Memory bank moved under `.cursor/memory-bank/`; design skill renamed to **Aby**; `.cursor/rules/aby.mdc` added.
