# YardScale Digital — working notes

The homepage is the sales funnel. Section order in `src/app/page.tsx` is the
conversion sequence, not an arbitrary layout — do not reorder sections without a
conversion reason. Supporting pages exist to deepen trust and must route back to
"Find your growth bottleneck" or "Book a growth call" rather than competing with
the homepage.

## Rules

- **Never fabricate.** No invented clients, testimonials, revenue figures,
  conversion rates, results, logos, awards, certifications, partnerships,
  guarantees or team members. Content files use placeholder states for anything
  that does not exist yet (`status: "placeholder"` in `work.ts`, empty `href` in
  `socials`). Preserve that pattern.
- **Diagnostic language stays hypothetical.** "Likely bottleneck", "potential
  issue", "possible growth path" — never a professional diagnosis.
- **Copy is direct.** No "passionate about", "next level", "unlock your
  potential", "revolutionize". State what is broken, what needs building, and
  why it matters.
- **Content lives in `src/content/`**, not in components.
- **No stock photography or illustration.** Diagrams are hand-built SVG/CSS.

## Gotchas

- Tailwind v4 resolves colour tokens into `text-*` utilities. A colour named
  `base` would make `text-base` set a colour instead of a font size, so the
  surface token is `--color-surface`. Avoid naming colour tokens after
  Tailwind's font-size, font-weight or tracking scales.
- Base CTA styles set `inline-flex`, so passing `hidden` via `className` will
  not win the display conflict. Wrap the CTA in a hidden container instead.
- `[data-reveal]` starts visible; the hidden state is applied only after JS sets
  `data-motion="on"` on `<html>`. Keep it that way so no-JS visitors and
  crawlers see full content.

## Checks before pushing

```bash
npm run lint && npm run typecheck && npm run build
```
