# Mishri Kitchen & Home Interior — Enhanced PRD + TRD + Design System
**Version 2.0 | Static Informational Website | Vercel Deployment**

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Business Information](#2-business-information)
3. [Site Architecture](#3-site-architecture)
4. [Page Specifications](#4-page-specifications)
5. [Component Library](#5-component-library)
6. [CTA Strategy](#6-cta-strategy)
7. [Content Strategy](#7-content-strategy)
8. [SEO Blueprint](#8-seo-blueprint)
9. [Design System](#9-design-system)
10. [Technical Requirements](#10-technical-requirements)
11. [Vercel Deployment Guide](#11-vercel-deployment-guide)
12. [Project Folder Structure](#12-project-folder-structure)
13. [Data Files Specification](#13-data-files-specification)
14. [Image Strategy](#14-image-strategy)
15. [Performance Targets](#15-performance-targets)
16. [Launch Checklist](#16-launch-checklist)

---

## 1. Project Overview

### What We Are Building

A **premium static informational website** for Mishri Kitchen & Home Interior — a modular kitchen and home interior brand based in New Delhi with 14+ years of experience.

### Primary Goals

| Goal | Metric |
|---|---|
| Drive phone/WhatsApp inquiries | Click-to-call & WhatsApp CTAs on every page |
| Showcase portfolio & trust | Project gallery + testimonials |
| Local SEO visibility | Delhi/Paschim Vihar keywords, LocalBusiness schema |
| Fast, mobile-first experience | Lighthouse 95+ on all metrics |

### What This Is NOT

- No backend, no database, no CMS
- No contact forms, no authentication
- No e-commerce or booking system
- No user-generated content

### Deployment Target

Vercel — free hobby tier is sufficient for this static site.

---

## 2. Business Information

| Field | Value |
|---|---|
| **Brand Name** | Mishri Kitchen & Home Interior |
| **Managing Director** | Sandeep Singh |
| **Experience** | 14+ years |
| **Primary Phone** | +91 9718499747 |
| **Secondary Phone** | +91 9650656670 |
| **WhatsApp** | +91 9718499747 |
| **Office Address** | Shop No.14, Garg Plaza, Bhera Enclave, Paschim Vihar, New Delhi – 110087 |
| **Factory/Warehouse** | Peeragarhi Industrial Area, New Delhi – 110087 |
| **Business Hours** | Mon–Sat: 10:00 AM – 7:00 PM |
| **Google Maps Link** | `https://maps.google.com/?q=Bhera+Enclave+Paschim+Vihar+New+Delhi` |
| **WhatsApp Link** | `https://wa.me/919718499747` |

---

## 3. Site Architecture

### Page Map

```
/ (Home)
├── /about
├── /services
├── /portfolio
├── /categories
│   ├── /categories/modular-kitchen
│   ├── /categories/interiors
│   ├── /categories/wardrobes
│   └── /categories/appliances
├── /reviews
└── /contact
```

### Navigation Structure

**Primary Nav (Desktop):**
Home | About | Services | Portfolio | Categories ▾ | Reviews | Contact

**Categories Dropdown:**
- Modular Kitchens
- Home Interiors
- Wardrobes
- Kitchen Appliances

**Mobile Nav:**
Hamburger menu → full-screen overlay with same links + sticky bottom CTA bar always visible

---

## 4. Page Specifications

### 4.1 Home Page (`/`)

#### Section 1: Hero

**Layout:** Full-viewport with background kitchen image (dark overlay 40%), centered text, floating stats bar at bottom.

**Content:**
```
Headline:      Crafting Premium Kitchens & Interiors That Feel Like Home
Subheadline:   14+ years of creating modular kitchens and elegant living spaces
               across Delhi NCR
```

**CTA Buttons (left to right):**
1. `📞 Call Now` → `tel:+919718499747` (Primary — wood background)
2. `💬 WhatsApp Us` → `https://wa.me/919718499747` (Secondary — gold border)
3. `🖼 View Portfolio` → `/portfolio` (Ghost — white border)

**Stats Row (floating bar at bottom of hero):**
| Stat | Label |
|---|---|
| 14+ | Years Experience |
| 100+ | Projects Completed |
| 50+ | Happy Families |
| 100% | Custom Designs |

---

#### Section 2: About Preview

**Layout:** 2-column — image left, text right (stacks on mobile)

**Content:**
- Short intro paragraph about Mishri Kitchen
- Founder name: Sandeep Singh
- 3 bullet highlights: Quality, Experience, Trust
- Link: "Read Our Story →" → `/about`

---

#### Section 3: Services Grid

**Layout:** 3×3 grid (2 col on mobile)

**Cards (7 services):**
Each card has: Icon + Service Name + 1-line description + "Learn More →"

| Service | Icon | Description |
|---|---|---|
| Modular Kitchen Design | 🍳 | Custom L/U/Island/Parallel layouts |
| Home Interior Design | 🛋️ | Living rooms, bedrooms, dining & more |
| Wardrobe Design | 🚪 | Sliding, hinged, walk-in solutions |
| Kitchen Appliances | ⚙️ | Chimneys, cooktops, microwaves, ovens |
| Space Planning | 📐 | Maximize every sq ft intelligently |
| Material Selection | 🪵 | Premium laminates, hardware & finishes |
| Project Management | 📋 | End-to-end execution, on time |

---

#### Section 4: Product Category Cards

**Layout:** 4 large horizontal cards (2×2 grid on desktop, stacked on mobile)

Each card:
- Background image (kitchen/interior photo)
- Category name overlay
- Short tagline
- "Explore →" button

| Category | Tagline | Link |
|---|---|---|
| Modular Kitchens | 7 styles, endless possibilities | `/categories/modular-kitchen` |
| Home Interiors | Every room, perfectly designed | `/categories/interiors` |
| Wardrobes | Smart storage, elegant finish | `/categories/wardrobes` |
| Kitchen Appliances | Top brands, best prices | `/categories/appliances` |

---

#### Section 5: Featured Projects Carousel

**Layout:** Horizontal scroll carousel with navigation arrows. 3 cards visible on desktop, 1 on mobile.

**Each Project Card:**
- Project photo
- Room type badge (e.g., "Modular Kitchen")
- Location (e.g., "Paschim Vihar, Delhi")
- 1-line description

**Minimum 6 project cards** (use placeholder images initially)

CTA below carousel: "View All Projects →" → `/portfolio`

---

#### Section 6: Why Choose Us

**Layout:** 4 icon cards in a row (2×2 on mobile)

| Heading | Body |
|---|---|
| Expert Team | 14+ years crafting kitchens and interiors across Delhi |
| Premium Materials | Only ISI-certified ply, hardware & branded finishes |
| Fully Custom | Every design is made to your space and taste |
| End-to-End | Design, supply, install — one team, zero stress |

---

#### Section 7: Testimonials

**Layout:** 3-column card grid (1 col on mobile)

**Each Card:**
- Star rating (★★★★★)
- Review text (2–3 lines)
- Client name + location
- Project type tag

**Sample testimonials (minimum 6):**
```
1. "Very professional team and excellent finishing quality. Our kitchen looks stunning!"
   — Priya Sharma, Paschim Vihar | Modular Kitchen

2. "Sandeep Sir guided us through every decision. The wardrobe exceeded all expectations."
   — Rajesh Kumar, Janakpuri | Wardrobe Design

3. "Timely delivery and zero compromise on materials. Highly recommended!"
   — Neha Gupta, Punjabi Bagh | Full Home Interior

4. "Best kitchen designer in Paschim Vihar. Clean work, great team."
   — Amit Verma, Shalimar Bagh | L-Shaped Kitchen

5. "Transformed our small flat into a dream home. Value for money."
   — Sunita & Vikram, Rohini | Living Room + Bedroom

6. "Installed chimney and cooktop — smooth service, quick installation."
   — Mohit Arora, Pitampura | Kitchen Appliances
```

CTA: "See All Reviews →" → `/reviews`

---

#### Section 8: Google Map Embed

**Layout:** Full-width map (400px height)

- Embed Google Map centered on Paschim Vihar, New Delhi
- Below map: Address card + "Get Directions" button → Google Maps link
- Note: Use `<iframe>` embed — no Google Maps API key required for static embed

**Google Maps Embed URL:**
```
https://maps.google.com/maps?q=Bhera+Enclave+Paschim+Vihar+New+Delhi&output=embed
```

---

#### Section 9: Final CTA Banner

**Layout:** Full-width gradient banner (wood tones)

```
Headline:   Ready to Transform Your Home?
Body:       Get a free consultation. Our team visits your site and designs a plan — no charge.
Buttons:    [📞 Call Now]   [💬 WhatsApp]
```

---

### 4.2 About Page (`/about`)

**Sections:**

1. **Page Hero** — "About Mishri Kitchen & Home Interior" + background image
2. **Our Story** — 3–4 paragraph narrative about the brand, founded by Sandeep Singh
3. **Design Philosophy** — 3 pillars with icons: Precision, Quality, Personalisation
4. **Founder Message** — Photo placeholder + quote from Sandeep Singh
5. **Journey Timeline** — Horizontal/vertical timeline:
   - 2012: Founded in Paschim Vihar
   - 2015: First 50 kitchens delivered
   - 2018: Expanded to full home interiors
   - 2021: 100+ projects milestone
   - 2024: Premium appliance division launched
6. **Our Expertise** — 4 stat cards (same as hero stats)
7. **CTA Section** — "Let's Build Something Beautiful Together" + phone + WhatsApp

---

### 4.3 Services Page (`/services`)

**Page Hero:** "Our Services" + subtext

**Service Cards (7 total):**

Each card is expanded (not compact) with:
- Large icon
- Service name (H2)
- 3–4 line description
- Key features list (4 bullet points)
- CTA: "Enquire Now" → WhatsApp link

**Expanded service definitions:**

| Service | Features |
|---|---|
| Modular Kitchen Design | Custom layouts, branded hardware, soft-close mechanisms, maximised storage |
| Home Interior Design | Living, bedroom, dining — complete room transformations |
| Wardrobe Design | Sliding/hinged/walk-in, mirror doors, internal fitting |
| Kitchen Appliances | Branded chimneys, cooktops, microwaves, ovens — supply + install |
| Space Planning | 3D layout, dimension optimisation, ergonomic design |
| Material Selection | Ply grade consultation, laminate choices, hardware selection |
| Project Management | Timeline planning, procurement, site supervision, handover |

---

### 4.4 Portfolio Page (`/portfolio`)

**Filter Bar (tabs, sticky below navbar on scroll):**
All | Kitchens | Living Rooms | Bedrooms | Wardrobes | TV Units | Office Interiors

**Gallery Layout:** Masonry grid — 3 columns desktop, 2 tablet, 1 mobile

**Each Portfolio Card:**
- Project image
- Hover overlay with: project type + location + "View →"
- Click → Lightbox (full image + project name + location + description)

**Lightbox navigation:** prev/next arrows, close button, keyboard support (ESC, arrow keys)

**Minimum 12 placeholder project entries** across categories

**Bottom CTA:** "Like what you see? Let's design yours. [WhatsApp Us]"

---

### 4.5 Category Pages (`/categories/[slug]`)

**Static pages — 4 total:**

#### `/categories/modular-kitchen`

**Subcategories (rendered as anchor sections or tabs):**
- L-Shaped Kitchen
- U-Shaped Kitchen
- Island Kitchen
- Parallel Kitchen
- Modern Kitchen
- Luxury Kitchen
- Compact Kitchen

**Each subcategory section:**
- Image
- Name (H2)
- 2–3 paragraph description
- Benefits list (4 items)
- Materials used (3 items)
- CTA: "Get a Quote" → WhatsApp

#### `/categories/interiors`

Subcategories: Living Room | Bedroom | TV Unit | Study Room | Office | Dining Room

#### `/categories/wardrobes`

Subcategories: Sliding | Walk-in | Hinged | Glass Door

#### `/categories/appliances`

Subcategories: Chimneys | Cooktops | Microwaves | Ovens

Each with: brief description + brands carried + WhatsApp CTA

---

### 4.6 Reviews Page (`/reviews`)

**Section 1: Rating Hero**
```
4.8 / 5.0  ★★★★★
Based on 100+ completed projects
Trusted by families across Delhi NCR
```

**Section 2: Review Cards Grid**

3 columns desktop, 1 column mobile.

Each card:
- Stars (gold ★ icons)
- Review body (2–4 lines)
- Client avatar placeholder (initials circle)
- Name + location
- Project type badge
- Date (month + year)

**Minimum 9 review cards**

**Section 3: Video Reviews Placeholder**
```
[Video Review Placeholder Card — "Coming Soon"]
```

**Section 4: CTA**
"Join 100+ happy families. [Call Now] [WhatsApp Us]"

---

### 4.7 Contact Page (`/contact`)

**NO FORMS. All contact via phone/WhatsApp/directions only.**

**Section 1: Contact Hero**
"Get In Touch — We'd Love to Help"

**Section 2: Contact Cards (3-column)**

| Card 1 | Card 2 | Card 3 |
|---|---|---|
| 📍 Visit Us | 📞 Call Us | 💬 WhatsApp |
| Shop No.14, Garg Plaza, Bhera Enclave, Paschim Vihar, New Delhi – 110087 | +91 9718499747 +91 9650656670 | Chat instantly on WhatsApp for quotes & queries |
| [Get Directions] | [Call Now] | [WhatsApp Us] |

**Section 3: Business Hours**

| Day | Hours |
|---|---|
| Monday – Saturday | 10:00 AM – 7:00 PM |
| Sunday | By Appointment |

**Section 4: Factory/Workshop**

Secondary address card:
Peeragarhi Industrial Area, New Delhi – 110087

**Section 5: Google Map Embed (Full Width)**

Same embed as homepage, 500px height.

**Section 6: Large CTA Area**
```
Headline: Ready to Start Your Project?
Body:     Our team is available Mon–Sat, 10 AM – 7 PM. Walk in or call ahead.
Buttons:  [Call +91 9718499747]  [WhatsApp Us]  [Get Directions]
```

---

## 5. Component Library

### 5.1 Navbar

**Desktop:**
- Left: Logo (text or SVG logo)
- Center: Nav links
- Right: "Call Now" button (wood background)
- Transparent on hero, solid white (with shadow) on scroll

**Mobile:**
- Left: Logo
- Right: Hamburger icon
- On open: Full-screen overlay menu
- Always shows: sticky bottom CTA bar (separate from navbar)

### 5.2 Footer

**Layout:** 4-column grid (stacks to 2×2 on mobile, 1 col on small mobile)

| Col 1 | Col 2 | Col 3 | Col 4 |
|---|---|---|---|
| Logo + tagline + phone + WhatsApp | Quick Links (all pages) | Services (all 7) | Address + Hours |

**Bottom bar:** © 2024 Mishri Kitchen & Home Interior. All rights reserved.

### 5.3 Sticky Mobile Bottom Bar

Fixed at bottom, always visible on mobile:

```
[ 📞 Call ]  [ 💬 WhatsApp ]  [ 📍 Directions ]
```

Width: 33.33% each. Height: 56px. Background: white with top border.

### 5.4 Desktop Floating Actions

Fixed right side:
- 📞 Phone button (wood colored circle)
- 💬 WhatsApp button (green circle)

Positioned: `right: 24px, bottom: 120px`

### 5.5 CTA Button Variants

```
Primary:    bg-wood text-white rounded-full px-6 py-3 hover:bg-dark-wood
Secondary:  border-2 border-wood text-wood rounded-full px-6 py-3 hover:bg-wood/10
Gold:       bg-gold text-dark rounded-full px-6 py-3 hover:bg-gold/90
Ghost:      border border-white text-white rounded-full px-6 py-3 hover:bg-white/10
WhatsApp:   bg-green-500 text-white rounded-full px-6 py-3
```

### 5.6 Section Headers

Pattern used consistently across all pages:

```
[Gold horizontal rule — 40px wide]
Section Label (small caps, gold, letter-spaced)
Main Heading (Playfair Display, H2 size)
Optional subtext (Inter, text-secondary)
```

### 5.7 Breadcrumb

Appears on all inner pages below navbar:

`Home > Services` or `Home > Categories > Modular Kitchen`

---

## 6. CTA Strategy

### Contact Link Map

| Action | URL |
|---|---|
| Call Primary | `tel:+919718499747` |
| Call Secondary | `tel:+919650656670` |
| WhatsApp | `https://wa.me/919718499747` |
| WhatsApp with message | `https://wa.me/919718499747?text=Hi%2C%20I%20am%20interested%20in%20your%20services` |
| Google Maps Directions | `https://maps.google.com/maps?daddr=Bhera+Enclave+Paschim+Vihar+New+Delhi` |

### CTA Placement Rules

Every page must have:
1. CTA in hero/top section
2. CTA in middle of page (after main content)
3. CTA at bottom of page before footer

---

## 7. Content Strategy

### Placeholder Images

Until real project photos are available, use **Unsplash** URLs for kitchen/interior images:

```
Kitchen:  https://images.unsplash.com/photo-1556909114-f6e7ad7d3136
Interior: https://images.unsplash.com/photo-1586023492125-27b2c045efd7
Bedroom:  https://images.unsplash.com/photo-1616594039964-ae9021a400a0
Wardrobe: https://images.unsplash.com/photo-1558618666-fcd25c85cd64
```

Add `?w=800&q=80&auto=format` to all Unsplash URLs for optimised delivery.

### `next/image` Usage

All images must use the `next/image` component with:
- `width` and `height` props
- `placeholder="blur"` with `blurDataURL` (generate with `plaiceholder` npm package)
- `loading="lazy"` for below-the-fold images
- `priority` for hero images

### Alt Text Standard

Format: `[What is shown] - Mishri Kitchen & Home Interior`

Example: `L-shaped modular kitchen in white laminate - Mishri Kitchen & Home Interior`

---

## 8. SEO Blueprint

### Meta Tags Per Page

| Page | Title | Description |
|---|---|---|
| Home | Premium Modular Kitchen & Home Interiors in Delhi | Mishri Kitchen offers modular kitchens, wardrobe designs & home interiors in Paschim Vihar, Delhi. 14+ years of experience, 100+ projects. Call now. |
| About | About Us — Mishri Kitchen & Home Interior Delhi | Learn about Mishri Kitchen's 14-year journey designing premium modular kitchens and home interiors across Delhi NCR. |
| Services | Modular Kitchen & Interior Design Services — Delhi | Explore our modular kitchen, wardrobe, interior design, appliance & project management services in New Delhi. |
| Portfolio | Kitchen & Interior Portfolio — Mishri Kitchen Delhi | Browse our completed modular kitchen and home interior projects across Delhi NCR. |
| Categories/Modular | Modular Kitchen Designs — L-shape, U-shape, Island | Premium modular kitchen designs in Delhi. L-shaped, U-shaped, island, parallel & luxury kitchens. Custom quotes available. |
| Reviews | Customer Reviews — Mishri Kitchen Delhi | See what 100+ happy families say about Mishri Kitchen & Home Interior's quality and service. |
| Contact | Contact Mishri Kitchen — Paschim Vihar, New Delhi | Visit or call Mishri Kitchen at Shop No.14, Garg Plaza, Bhera Enclave, Paschim Vihar, New Delhi. Mon–Sat 10AM–7PM. |

### Structured Data (JSON-LD)

#### LocalBusiness Schema (in `app/layout.tsx`)

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Mishri Kitchen & Home Interior",
  "description": "Premium modular kitchen and home interior design services in Delhi",
  "url": "https://mishrikitchen.in",
  "telephone": "+919718499747",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Shop No.14, Garg Plaza, Bhera Enclave",
    "addressLocality": "Paschim Vihar",
    "addressRegion": "Delhi",
    "postalCode": "110087",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "28.6690",
    "longitude": "77.0997"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "10:00",
      "closes": "19:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "100"
  }
}
```

#### FAQ Schema (on Services page)

Sample FAQs:
1. How long does a modular kitchen installation take?
2. Do you provide warranty on materials?
3. What is the cost of a modular kitchen in Delhi?
4. Do you do site visits before designing?
5. Which areas in Delhi do you serve?

### robots.txt

```
User-agent: *
Allow: /
Sitemap: https://mishrikitchen.in/sitemap.xml
```

### sitemap.xml

Generate using `next-sitemap` package. All 10+ pages included.

### Open Graph Tags

```
og:type = website
og:title = [Page Title]
og:description = [Page Description]
og:image = https://mishrikitchen.in/og-image.jpg (1200×630)
og:url = https://mishrikitchen.in[/page-path]
twitter:card = summary_large_image
```

---

## 9. Design System

### Theme Identity

**Mood:** Warm luxury. Natural wood. Premium craftsmanship. Trustworthy.

**Inspiration:** High-end interior showroom meets Indian hospitality — inviting, expert, and personal.

### Color Tokens

```css
/* Base */
--color-bg:           #FAF7F2;   /* Off-white warm background */
--color-surface:      #F6F1E8;   /* Card / section background */
--color-border:       #E3D9CD;   /* Dividers, card borders */

/* Wood Palette */
--color-wood:         #6B4423;   /* Primary CTA, headings */
--color-wood-dark:    #4A2F1B;   /* Hover state */
--color-wood-light:   #A47551;   /* Accents, icons */
--color-beige:        #E7D8C9;   /* Muted backgrounds */

/* Gold */
--color-gold:         #C9A86A;   /* Section labels, star ratings, decorative */
--color-gold-light:   #E8D5A3;   /* Subtle highlights */

/* Text */
--color-text:         #2D241D;   /* Primary body text */
--color-text-muted:   #6F6257;   /* Secondary/caption text */

/* Status */
--color-success:      #2F855A;   /* WhatsApp green tone */
--color-whatsapp:     #25D366;   /* WhatsApp CTA only */
```

### Typography

```css
/* Fonts — load via next/font/google */
font-display:  'Playfair Display', serif;  /* H1–H3, hero */
font-body:     'Inter', sans-serif;        /* body, captions, nav */

/* Scale */
--text-hero:   clamp(40px, 5vw, 64px);
--text-h1:     clamp(32px, 4vw, 48px);
--text-h2:     clamp(24px, 3vw, 36px);
--text-h3:     clamp(20px, 2.5vw, 28px);
--text-body:   16px;
--text-small:  14px;
--text-xs:     12px;
```

### Border Radius

```css
--radius-sm:   8px;
--radius-md:   12px;
--radius-lg:   16px;
--radius-xl:   24px;
--radius-2xl:  32px;
--radius-full: 9999px;   /* Buttons */
```

### Shadows

```css
--shadow-card:  0 4px 20px rgba(0, 0, 0, 0.06);
--shadow-hover: 0 15px 40px rgba(0, 0, 0, 0.12);
--shadow-float: 0 8px 32px rgba(107, 68, 35, 0.20);   /* For floating CTAs */
```

### Spacing Scale

```css
4px | 8px | 12px | 16px | 20px | 24px | 32px | 40px | 48px | 64px | 80px | 96px | 128px
```

### Section Spacing

- Desktop: `padding-y: 96px`
- Tablet: `padding-y: 64px`
- Mobile: `padding-y: 48px`

---

## 10. Technical Requirements

### Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | Next.js 15 (App Router) | Static generation, SEO, image optimisation |
| Language | TypeScript | Type safety |
| Styling | Tailwind CSS v3 | Utility-first, consistent design tokens |
| Fonts | `next/font/google` | Zero-layout-shift font loading |
| Images | `next/image` | Auto WebP/AVIF + lazy loading |
| Icons | `lucide-react` | Lightweight, consistent |
| Animation | Framer Motion | Scroll reveals, carousel |
| Carousel | `embla-carousel-react` | Lightweight, touch-friendly |
| Lightbox | `yet-another-react-lightbox` | Accessible, keyboard nav |
| SEO | `next-seo` + manual meta | Full control |
| Sitemap | `next-sitemap` | Auto-generate on build |
| Deployment | Vercel | Free, zero-config for Next.js |

### Rendering Strategy

**All pages: Static Site Generation (SSG)**

```typescript
// No getServerSideProps. Use:
export const dynamic = 'force-static'         // App Router
// OR simply don't fetch from APIs at runtime
```

All content lives in `/src/data/*.ts` files. No API calls at runtime.

### Environment Variables

Only one optional env var needed:

```env
NEXT_PUBLIC_SITE_URL=https://mishrikitchen.in
```

No secret keys. No API keys. Truly static.

---

## 11. Vercel Deployment Guide

### Step 1: Initialize Project

```bash
npx create-next-app@latest mishri-kitchen \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*"
cd mishri-kitchen
```

### Step 2: Install Dependencies

```bash
npm install \
  framer-motion \
  lucide-react \
  next-seo \
  next-sitemap \
  embla-carousel-react \
  yet-another-react-lightbox
```

### Step 3: Add Fonts in `layout.tsx`

```typescript
import { Playfair_Display, Inter } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})
```

### Step 4: Configure `next.config.ts`

```typescript
const nextConfig = {
  output: 'export',           // Static HTML export (optional for Vercel)
  images: {
    unoptimized: false,       // Keep true only if using `output: 'export'`
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
}

export default nextConfig
```

> **Note:** If using `output: 'export'`, set `images: { unoptimized: true }` since Next.js Image Optimization requires a server. On Vercel, omit `output: 'export'` to keep image optimization working.

### Step 5: Configure `next-sitemap` — `next-sitemap.config.js`

```javascript
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://mishrikitchen.in',
  generateRobotsTxt: true,
  sitemapSize: 7000,
}
```

Add to `package.json`:
```json
"scripts": {
  "postbuild": "next-sitemap"
}
```

### Step 6: Deploy to Vercel

```bash
# Option A — CLI
npx vercel

# Option B — Git
# 1. Push to GitHub
# 2. Import repo at vercel.com/new
# 3. Set NEXT_PUBLIC_SITE_URL environment variable
# 4. Click Deploy
```

### Step 7: Custom Domain (Optional)

In Vercel dashboard → Project → Settings → Domains → Add `mishrikitchen.in`

Update DNS at domain registrar:
```
A Record:     @    76.76.19.61
CNAME Record: www  cname.vercel-dns.com
```

---

## 12. Project Folder Structure

```
mishri-kitchen/
├── public/
│   ├── favicon.ico
│   ├── og-image.jpg          ← 1200×630 Open Graph image
│   ├── logo.svg
│   └── images/
│       └── hero-kitchen.jpg  ← Hero background
│
├── src/
│   ├── app/
│   │   ├── layout.tsx         ← Root layout, fonts, structured data
│   │   ├── page.tsx           ← Home page
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   └── page.tsx
│   │   ├── portfolio/
│   │   │   └── page.tsx
│   │   ├── categories/
│   │   │   ├── page.tsx       ← Categories index
│   │   │   └── [slug]/
│   │   │       └── page.tsx   ← Dynamic static category page
│   │   ├── reviews/
│   │   │   └── page.tsx
│   │   └── contact/
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── StickyMobileBar.tsx
│   │   │   └── FloatingActions.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── SectionHeader.tsx
│   │   │   ├── Breadcrumb.tsx
│   │   │   ├── StarRating.tsx
│   │   │   └── Badge.tsx
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── AboutPreview.tsx
│   │       ├── ServicesGrid.tsx
│   │       ├── CategoryCards.tsx
│   │       ├── ProjectsCarousel.tsx
│   │       ├── WhyChooseUs.tsx
│   │       ├── Testimonials.tsx
│   │       ├── GoogleMap.tsx
│   │       └── CTABanner.tsx
│   │
│   ├── data/
│   │   ├── services.ts         ← All 7 services data
│   │   ├── categories.ts       ← 4 categories + subcategories
│   │   ├── portfolio.ts        ← 12+ project entries
│   │   ├── testimonials.ts     ← 9+ reviews
│   │   ├── stats.ts            ← Homepage stats
│   │   └── seo.ts              ← Meta strings per page
│   │
│   ├── lib/
│   │   └── constants.ts        ← Phone, WhatsApp, Maps URLs
│   │
│   └── styles/
│       └── globals.css         ← CSS variables + Tailwind base
│
├── next.config.ts
├── next-sitemap.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 13. Data Files Specification

### `src/lib/constants.ts`

```typescript
export const CONTACT = {
  phone1: '+919718499747',
  phone2: '+919650656670',
  phone1_display: '+91 97184 99747',
  phone2_display: '+91 96506 56670',
  tel1: 'tel:+919718499747',
  tel2: 'tel:+919650656670',
  whatsapp: 'https://wa.me/919718499747',
  whatsappWithMessage: 'https://wa.me/919718499747?text=Hi%2C%20I%20am%20interested%20in%20your%20services',
  maps: 'https://maps.google.com/maps?q=Bhera+Enclave+Paschim+Vihar+New+Delhi',
  mapsDirections: 'https://maps.google.com/maps?daddr=Bhera+Enclave+Paschim+Vihar+New+Delhi',
  mapsEmbed: 'https://maps.google.com/maps?q=Bhera+Enclave+Paschim+Vihar+New+Delhi&output=embed',
  address: {
    line1: 'Shop No.14, Garg Plaza',
    line2: 'Bhera Enclave, Paschim Vihar',
    city: 'New Delhi',
    pin: '110087',
  },
  hours: 'Mon–Sat: 10:00 AM – 7:00 PM',
}
```

### `src/data/services.ts`

```typescript
export type Service = {
  id: string
  icon: string          // Lucide icon name
  title: string
  shortDesc: string
  description: string
  features: string[]
}

export const services: Service[] = [
  {
    id: 'modular-kitchen',
    icon: 'ChefHat',
    title: 'Modular Kitchen Design',
    shortDesc: 'Custom L/U/Island/Parallel layouts',
    description: '...',
    features: ['...'],
  },
  // ... 6 more
]
```

### `src/data/categories.ts`

```typescript
export type Subcategory = {
  id: string
  name: string
  image: string
  description: string
  benefits: string[]
  materials: string[]
}

export type Category = {
  slug: string
  title: string
  tagline: string
  description: string
  image: string
  subcategories: Subcategory[]
}

export const categories: Category[] = [
  { slug: 'modular-kitchen', ... },
  { slug: 'interiors', ... },
  { slug: 'wardrobes', ... },
  { slug: 'appliances', ... },
]
```

### `src/app/categories/[slug]/page.tsx`

```typescript
import { categories } from '@/data/categories'

export async function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }))
}

export async function generateMetadata({ params }) {
  const category = categories.find(c => c.slug === params.slug)
  return {
    title: `${category?.title} — Mishri Kitchen Delhi`,
    description: category?.description,
  }
}
```

---

## 14. Image Strategy

### Priority Order for Real Photos

1. Hero background (homepage + category pages)
2. Portfolio project photos
3. About page (founder/team/workshop)
4. Service section illustrations

### Optimisation Rules

| Rule | Implementation |
|---|---|
| Use WebP/AVIF | Automatic via `next/image` on Vercel |
| Blur placeholder | `placeholder="blur"` on all images |
| Lazy load | Default for below-fold; `priority` for hero |
| Explicit dimensions | Always set `width` + `height` |
| Alt text | Descriptive, keyword-rich (see Section 7) |

### External Image Domains

Allowed in `next.config.ts`:
- `images.unsplash.com` (placeholders)
- Remove once real photos are added

### File Size Guidelines

| Image Type | Max Size | Dimensions |
|---|---|---|
| Hero background | 200KB | 1920×1080 |
| Portfolio/project | 100KB | 800×600 |
| Card thumbnails | 60KB | 400×300 |
| Open Graph image | 150KB | 1200×630 |
| Logo | <10KB | SVG preferred |

---

## 15. Performance Targets

### Lighthouse Scores

| Metric | Target |
|---|---|
| Performance | ≥ 95 |
| Accessibility | ≥ 95 |
| Best Practices | ≥ 95 |
| SEO | 100 |

### Core Web Vitals

| Metric | Target |
|---|---|
| LCP (Largest Contentful Paint) | < 2.5s |
| CLS (Cumulative Layout Shift) | < 0.1 |
| FID/INP (Interaction to Next Paint) | < 200ms |

### How to Achieve This

- `next/font/google` → zero layout shift from fonts
- `next/image` with explicit dimensions → zero CLS from images
- No third-party scripts except optional Google Analytics
- Tailwind CSS purges unused styles → minimal CSS bundle
- All content is static → zero hydration delay for content
- Preload hero image with `priority` prop
- Defer map iframe load until in-view (use `loading="lazy"` on `<iframe>`)

---

## 16. Launch Checklist

### Pre-Development
- [ ] Gather real project photos from client (minimum 12)
- [ ] Get founder photo for About page
- [ ] Confirm Google Maps embed URL (test in browser)
- [ ] Confirm exact business hours
- [ ] Create OG image (1200×630) with logo + kitchen photo
- [ ] Register domain (mishrikitchen.in or similar)

### During Development
- [ ] All 7 pages built and routed
- [ ] Mobile sticky CTA bar working on all pages
- [ ] Desktop floating CTA working on all pages
- [ ] Google Map iframe embedded and loading
- [ ] All phone/WhatsApp links tested on actual mobile device
- [ ] All images using `next/image` with alt text
- [ ] `generateStaticParams` for `/categories/[slug]`
- [ ] JSON-LD structured data in root layout
- [ ] `robots.txt` in `/public`

### Pre-Launch
- [ ] `next-sitemap` generating sitemap on build
- [ ] All meta titles and descriptions set
- [ ] Open Graph tags verified (use opengraph.xyz)
- [ ] Lighthouse run on all 7 pages
- [ ] Test on real Android + iOS devices
- [ ] Test all CTA links (tel, WhatsApp, Google Maps)
- [ ] Environment variable `NEXT_PUBLIC_SITE_URL` set in Vercel

### Post-Launch
- [ ] Submit sitemap to Google Search Console
- [ ] Verify LocalBusiness structured data via schema.org validator
- [ ] Test site speed at pagespeed.web.dev
- [ ] Add Google Analytics (optional — no env var needed, can use `next/script`)
- [ ] Set up Vercel Analytics (free, zero-config)

---

*End of PRD — Version 2.0*
*Mishri Kitchen & Home Interior | Static Website | Vercel Deployment*
