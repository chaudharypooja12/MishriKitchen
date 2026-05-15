# Mishri Kitchen — change log (agent memory)

Entries are **newest first**. Agents should read the latest entry before work and **append a new entry after** substantive edits.

## 2026-05-15

- **Site implementation (PRD + Aby):** Full static routes (`/`, `/about`, `/services`, `/portfolio`, `/categories`, `/categories/[slug]`, `/reviews`, `/contact`), shared shell (Navbar, Footer, sticky mobile CTAs, floating actions), `src/data/*` modules, UI primitives, Framer Motion `FadeIn`, Embla carousel, portfolio lightbox (`yet-another-react-lightbox`), LocalBusiness JSON-LD, `next-sitemap` postbuild → `public/sitemap*.xml` + `robots.txt`.
- **Config:** `next.config.ts` Unsplash `remotePatterns`; `NEXT_PUBLIC_SITE_URL` in `.env.example`; Playfair + DM Sans in root layout.
- **Design:** Aby skill at `.cursor/skills/aby/`; always-on `.cursor/rules/aby.mdc`.

## 2026-05-14 (earlier)

- Memory bank moved under `.cursor/memory-bank/`; design skill renamed to **Aby**; `.cursor/rules/aby.mdc` added.
