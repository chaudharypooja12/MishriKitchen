---
name: aby
description: Aby — the Mishri Kitchen project design system (Neo Aurora: futuristic cool base + electric accents). Use for components, pages, styling, motion, and visual polish. Distinctive, production-grade UI; pairs with .cursor/memory-bank. Includes Web Interface Guidelines baseline.
license: Complete terms in LICENSE.txt
---

## Aby — project design system (Mishri Kitchen)

**Aby** is the canonical design name for this repository. The live Mishri Kitchen product UI is **Neo Aurora** (see `globals.css`, `CHANGELOG.md`): cool luminous surfaces, electric accents, frosted chrome, and confident motion — not generic brown “AI wood.” Apply everything below to Mishri Kitchen UI. Use `.cursor/memory-bank/projectbrief.md` and `PRD.md` for routes, sitemap, business data, CTAs, and SEO; use **Aby** for look-and-feel unless a PRD item is a hard client requirement (e.g. exact legal line, verified contact).

---

This skill guides creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Implement real working code with exceptional attention to aesthetic details and creative choices.

The user provides frontend requirements: a component, page, application, or interface to build. They may include context about the purpose, audience, or technical constraints.

## Design Thinking

Before coding, understand the context and commit to a BOLD aesthetic direction:
- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Pick an extreme: brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian, etc. There are so many flavors to choose from. Use these for inspiration but design one that is true to the aesthetic direction.
- **Constraints**: Technical requirements (framework, performance, accessibility).
- **Differentiation**: What makes this UNFORGETTABLE? What's the one thing someone will remember?

**CRITICAL**: Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work - the key is intentionality, not intensity.

Then implement working code (HTML/CSS/JS, React, Vue, etc.) that is:
- Production-grade and functional
- Visually striking and memorable
- Cohesive with a clear aesthetic point-of-view
- Meticulously refined in every detail

## Frontend Aesthetics Guidelines

Focus on:
- **Typography**: Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics; unexpected, characterful font choices. Pair a distinctive display font with a refined body font.
- **Color & Theme**: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes.
- **Motion**: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Use Motion library for React when available. Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions. Use scroll-triggering and hover states that surprise.
- **Spatial Composition**: Unexpected layouts. Asymmetry. Overlap. Diagonal flow. Grid-breaking elements. Generous negative space OR controlled density.
- **Backgrounds & Visual Details**: Create atmosphere and depth rather than defaulting to solid colors. Add contextual effects and textures that match the overall aesthetic. Apply creative forms like gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows, decorative borders, custom cursors, and grain overlays.

NEVER use generic AI-generated aesthetics like overused font families (Inter, Roboto, Arial, system fonts), cliched color schemes (particularly purple gradients on white backgrounds), predictable layouts and component patterns, and cookie-cutter design that lacks context-specific character.

Interpret creatively and make unexpected choices that feel genuinely designed for the context. No design should be the same. Vary between light and dark themes, different fonts, different aesthetics. NEVER converge on common choices (Space Grotesk, for example) across generations.

**IMPORTANT**: Match implementation complexity to the aesthetic vision. Maximalist designs need elaborate code with extensive animations and effects. Minimalist or refined designs need restraint, precision, and careful attention to spacing, typography, and subtle details. Elegance comes from executing the vision well.

Remember: Claude is capable of extraordinary creative work. Don't hold back, show what can truly be created when thinking outside the box and committing fully to a distinctive vision.

---

## Web Interface Guidelines (baseline compliance)

**Source of truth:** [Vercel Web Interface Guidelines](https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md) — refetch when auditing; rules below are the Mishri Kitchen checklist derived from that doc.

Aby prioritizes **distinctive visuals**, but shipping UI must still satisfy these **accessibility, focus, motion, and interaction** baselines. When aesthetics conflict (e.g. hiding outlines), replace with an equally visible **`:focus-visible`** treatment.

### Accessibility

- Icon-only controls: **`aria-label`** (or **`aria-labelledby`**) describing the action.
- Form controls: visible **`<label htmlFor>`** (or label wrapping control) or **`aria-label`**; never rely on placeholder alone.
- Prefer **semantic HTML** (`main`, `nav`, `header`, `footer`, `section`, headings `h1`–`h6`, `button`, `a`) before ARIA.
- **Actions** → `<button type="button|submit">`; **navigation** → `<Link>` / `<a href>` — not `div`/`span` with click-only navigation.
- **Images:** meaningful **`alt`**; decorative → **`alt=""`** and/or **`aria-hidden`** on decorative wrappers.
- **Decorative icons** (next to visible text): often **`aria-hidden="true"`** on the SVG/icon.
- Async feedback (toasts, inline validation): **`aria-live="polite"`** (or `assertive` when urgent).
- **Heading order** must reflect outline; one logical `h1` per page where applicable.
- **Skip link** to main content where it improves keyboard UX.
- **Anchor targets / in-page headings:** **`scroll-margin-top`** so fixed nav does not obscure targets.

### Focus & keyboard

- Every interactive element has a **visible focus** style; use **`focus-visible`** (Tailwind: `focus-visible:ring-*`, etc.).
- Never **`outline-none` / `outline: none`** without a **focus-visible** replacement.
- **Compound controls:** consider **`:focus-within`** for grouped focus styling.
- Custom widgets need keyboard equivalents where applicable (`onKeyDown` for roving tabindex patterns, Escape to dismiss, etc.).

### Forms (when added later)

- **`autocomplete`** and meaningful **`name`**; correct **`type`** / **`inputMode`**.
- Do not block paste; **clickable labels**; **`spellCheck={false}`** on emails/codes where appropriate.
- Placeholders end with **…** and show example pattern; errors **inline**; focus first error on submit.

### Animation & motion

- Respect **`prefers-reduced-motion`** (`motion-safe:` / `motion-reduce:` in Tailwind, or `@media (prefers-reduced-motion: reduce)`).
- Prefer animating **`transform`** and **`opacity`** only; avoid **`transition: all`** — list properties explicitly.
- Motion should be **interruptible** when user changes state.

### Typography & content (microcopy)

- Use **…** (ellipsis) not three periods in UI strings; **loading states** end with **…** (`Loading…`).
- Headings: consider **`text-pretty`** / **`text-balance`** where it reduces widows (supported browsers).
- **`font-variant-numeric: tabular-nums`** for comparable numbers in tables/stats.
- Long text: **`truncate`**, **`line-clamp-*`**, or **`break-words`**; flex children that truncate need **`min-w-0`**.

### Images & performance

- **`<Image>` / `<img>`:** provide **`width`/`height`** (or explicit aspect box) to limit layout shift; Next `Image` handles much of this.
- Below-fold images: **`loading="lazy"`**; above-fold: **`priority`** / high fetch priority where appropriate.
- Avoid **layout reads in render** (`getBoundingClientRect`, etc.); batch read/write in effects.

### Navigation, touch & layout

- Stateful UI (filters, tabs): prefer **URL-reflected state** when it aids sharing/deeplinks (e.g. query params).
- **`touch-action: manipulation`** where tap delay is an issue; set **`-webkit-tap-highlight-color`** intentionally if removing default.
- **Modals / full-screen sheets:** **`overscroll-behavior: contain`**; consider **`inert`** on background when modal open (pattern-dependent).
- **Safe areas:** `env(safe-area-inset-*)` on fixed chrome (nav bars, sticky CTAs) — already required for this app’s shell.
- Avoid **`user-scalable=no`** / **`maximum-scale=1`** in viewport meta.

### Hydration (Next.js)

- Controlled inputs need **`onChange`**; otherwise use **`defaultValue`** for uncontrolled.
- Time-dependent copy: guard **server vs client** mismatch; **`suppressHydrationWarning`** only when unavoidable.

### Anti-patterns to flag in review

`outline-none` without focus replacement · `transition: all` · icon buttons without **`aria-label`** · inputs without labels · **`onClick` + router push** on non-button/non-link · images without dimensions · blocking paste · disabling zoom · **`autoFocus`** without strong justification (especially mobile) · hardcoded date/number formats instead of **`Intl`**.

### Review output convention

When checking files against this list, group by file and use terse **`file:line — issue`** lines (VS Code–friendly). Mark **`✓ pass`** when a file has no issues.
