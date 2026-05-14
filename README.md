# Mishri Kitchen & Home Interior

Static informational site (Next.js App Router) for modular kitchens and interiors in Delhi — see [.cursor/memory-bank/PRD.md](.cursor/memory-bank/PRD.md) for the full product spec.

## Setup

```bash
npm install
cp .env.example .env.local   # optional; set NEXT_PUBLIC_SITE_URL for metadata & sitemap
npm run dev
```

- **Build:** `npm run build` runs `next-sitemap` via `postbuild` and writes `public/sitemap.xml` and `public/robots.txt`.
- **Design:** Project UI follows **Aby** (`.cursor/skills/aby`) with PRD content and contact facts.

## Stack

Next.js 16, React 19, Tailwind CSS v4, Framer Motion, Embla Carousel, Lucide, yet-another-react-lightbox.
