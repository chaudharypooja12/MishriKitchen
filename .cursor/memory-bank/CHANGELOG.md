# Mishri Kitchen — change log (agent memory)

Entries are **newest first**. Agents should read the latest entry before work and **append a new entry after** substantive edits.

## 2026-05-15

- **Bright wood / warm Aby v3:** Pivoted from dark-neon glass to a **light, premium wood-forward** palette in [`src/app/globals.css`](src/app/globals.css): cream page base, real walnut/brass tokens, warm radial mesh, light `glass-panel` / `glass-nav`. **Per-category accents** (`ember` | `moss` | `copper` | `indigo`) on [`src/data/categories.ts`](src/data/categories.ts) + [`src/lib/categoryAccent.ts`](src/lib/categoryAccent.ts) drive colorful category cards and hero scrims. **Warmer Unsplash curation** across [`categories.ts`](src/data/categories.ts), [`portfolio.ts`](src/data/portfolio.ts), [`Hero.tsx`](src/components/sections/Hero.tsx), [`AboutPreview.tsx`](src/components/sections/AboutPreview.tsx), [`about/page.tsx`](src/app/about/page.tsx). Shell, primitives, home sections, and inner routes retinted. Lightbox backdrop vars in `globals.css` for `yarl__portal`. **`src/lib/constants.ts` (CONTACT)** unchanged.
- **Dark glass UI v2 (superseded by v3 above):** Earlier pass used dark glassmorphism and neon-on-wood token aliases; kept in log for history only.
- **Site implementation (PRD + Aby):** Full static routes (`/`, `/about`, `/services`, `/portfolio`, `/categories`, `/categories/[slug]`, `/reviews`, `/contact`), shared shell (Navbar, Footer, sticky mobile CTAs, floating actions), `src/data/*` modules, UI primitives, Framer Motion `FadeIn`, Embla carousel, portfolio lightbox (`yet-another-react-lightbox`), LocalBusiness JSON-LD, `next-sitemap` postbuild → `public/sitemap*.xml` + `robots.txt`.
- **Config:** `next.config.ts` Unsplash `remotePatterns`; `NEXT_PUBLIC_SITE_URL` in `.env.example`; root layout fonts (**Syne** + **Plus Jakarta Sans**).
- **Design:** Aby skill at `.cursor/skills/aby/`; always-on `.cursor/rules/aby.mdc` (see conflict note there for live UI vs skill prose).
- **Memory bank:** `projectbrief.md` notes shipped **bright wood** UI as the live visual baseline alongside Aby rules.

## 2026-05-14 (earlier)

- Memory bank moved under `.cursor/memory-bank/`; design skill renamed to **Aby**; `.cursor/rules/aby.mdc` added.
