# YardScale Digital

The official website for YardScale Digital, a growth operator agency.

The homepage is not a brochure — it is the primary sales funnel. Traffic arrives
from social platforms, gets reframed around the idea of a growth bottleneck,
identifies its own likely bottleneck, sees the system that solves it, and is
qualified into a growth call. Supporting pages deepen trust and always route
back to the same two calls to action.

```
Social / content traffic
        ↓
Homepage  →  hook → problem → reframe → diagnostic → growth path
              → philosophy → capabilities → qualification → process
              → proof → content → free resource → final CTA
        ↓
Find your growth bottleneck  /  Book a growth call
```

## Stack

- **Next.js 16** (App Router, React 19, TypeScript)
- **Tailwind CSS v4** — design tokens live in `src/app/globals.css`
- No UI library, no animation library, no stock imagery. Every diagram is
  hand-built SVG/CSS.

## Getting started

```bash
npm install
cp .env.example .env.local   # optional — the site runs without it
npm run dev
```

| Script | Purpose |
| --- | --- |
| `npm run dev` | Local development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript, no emit |

## Editing content

Nearly all copy lives in `src/content/` as typed modules, so content changes
never require touching a component.

| File | What it controls |
| --- | --- |
| `site.ts` | Brand details, navigation, CTA labels, booking URL, social channels |
| `bottlenecks.ts` | The homepage diagnostic — options, readings, and the path each maps to |
| `growth-paths.ts` | The six growth paths: sequence + what YardScale may build |
| `capabilities.ts` | What we build, and the four answers each capability gives on `/what-we-build` |
| `process.ts` | Diagnose / Architect / Build / Launch & Improve |
| `work.ts` | Case studies |
| `build-room.ts` | Social content published in the Build Room |
| `resources.ts` | Lead magnets and planned resources |
| `qualification.ts` | The ten qualification questions and the recommendation logic |

### Adding a case study

Case studies are truthful by construction. `src/content/work.ts` entries default
to `status: "placeholder"` and render as reserved slots. To publish one, set
`status: "published"` and fill in `client`, `problem`, `approach`, `built`,
`outcome` and `year`. Leave `outcome` empty until there is a real, substantiable
result — the card simply omits the row.

The same rule applies everywhere: no invented clients, testimonials, revenue
figures, conversion rates, awards, partnerships or engagement numbers exist in
this codebase, and nothing should be added that cannot be substantiated.

### Adding Build Room content

Add entries to `contentItems` in `src/content/build-room.ts`. Each needs a real
`href`. There is deliberately no field for view counts or engagement metrics.

### Turning on a social channel

Set the `href` on the relevant entry in `socials` (`src/content/site.ts`). Live
channels appear in the footer, link out from the Build Room, and are added to
the `sameAs` array in the Organization structured data. Channels without an
`href` render as "Soon" and are excluded from structured data.

## Integrations

Everything external is configured through environment variables — see
`.env.example`. Nothing is hard-coded to a specific vendor.

### Booking

Set `NEXT_PUBLIC_BOOKING_URL` to any embeddable scheduler. Every "Book a growth
call" CTA then points at it, and `/book` embeds it. Unset, `/book` falls back to
the on-site growth request form.

### CRM / email delivery

The three form endpoints (`/api/lead`, `/api/qualification`,
`/api/growth-request`) validate input server-side, then forward a JSON payload
to the webhook configured for that submission type — or to `FORM_WEBHOOK_URL` as
a fallback. Point it at Zapier, Make, HubSpot, ConvertKit, Airtable, Slack or a
custom endpoint. With nothing configured, submissions still succeed and are
written to the server log, so the site works before the integration exists.

Each payload includes the visitor's attribution (see below), so a lead can be
traced back to the platform that produced it.

### Analytics

`src/lib/analytics.ts` pushes funnel events to `window.dataLayer` (compatible
with GTM and GA4) and to any handler registered via `registerAnalyticsSink`. No
vendor script is included. Tracked events cover the whole funnel: hero CTA
clicks, diagnostic selections, growth path views, each qualification step, lead
magnet signups, growth requests and booking clicks.

### UTM attribution

`src/lib/attribution.ts` captures `utm_source`, `utm_medium`, `utm_campaign`,
`utm_content` and `utm_term` on first paint, stores first-touch and last-touch
in `localStorage`, derives the platform (youtube, x, linkedin, facebook, tiktok,
instagram, or the referring domain), then strips the parameters from the visible
URL so they never appear in shared links. Attribution rides along with every
form submission and analytics event, which makes it possible to see which
platform sends traffic, leads, growth calls and ultimately customers.

## SEO

Per-page metadata via `src/lib/seo.ts`, canonical URLs, Open Graph and X cards,
a generated share image (`src/app/opengraph-image.tsx`), `sitemap.xml`,
`robots.txt`, and structured data (`ProfessionalService`, `WebSite`,
`BreadcrumbList`, `FAQPage`, `ItemList` of services). Headings follow a single
`h1` per page with a semantic hierarchy beneath it.

## Accessibility

Audited with axe-core (WCAG 2.1 A/AA) across every page, the qualification
dialog and the mobile navigation — zero violations. The qualification modal uses
the native `<dialog>` element for focus trapping and Escape handling. All colour
tokens meet 4.5:1 against every surface. Scroll animations are suppressed under
`prefers-reduced-motion`, and content renders fully without JavaScript.

## Project structure

```
src/
  app/            Routes, API endpoints, sitemap, robots, share image
  components/
    home/         Homepage funnel sections, in funnel order
    funnel/       Qualification flow, dialog and provider
    forms/        Lead magnet and growth request forms
    visuals/      Growth system diagram, flow diagrams
    layout/       Header, footer, page hero, closing CTA
    ui/           Section, CTA and reveal primitives
  content/        All editable copy and configuration
  lib/            Attribution, analytics, SEO, validation, form forwarding
```
