# The Growth Operator System — Architecture

A modular product section built **inside** the existing YardScale Digital
website. It adds a public course sales page, a real authentication + entitlement
layer, and a protected member area (dashboard, phases, lessons) without changing
how the rest of the site works.

This document is written so another developer — or Claude Sonnet — can extend the
course (new phases, lessons, assets, real payments) without re-reading the whole
application.

---

## 1. Existing YardScale architecture (relevant parts)

| Aspect | What it is |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19, TypeScript (strict) |
| Styling | Tailwind CSS v4; design tokens + `@utility` classes in `src/app/globals.css` |
| Path alias | `@/*` → `./src/*` |
| Content | Typed modules in `src/content/` (no CMS) |
| Layout | `src/app/layout.tsx` wraps every route in header + `<main>` + footer |
| Auth / DB | **None existed.** No database, no payment provider, no auth. |
| Deploy | Vercel, git-linked; every push to the tracked branch deploys |

The only change to existing files:

- `src/content/site.ts` — added a "Growth System" nav item and a footer link.
- `src/app/layout.tsx` — the marketing header/footer are now rendered through
  `SiteChrome`, which hides them **only** on the member app routes so the course
  app can use its own shell. Every existing page renders exactly as before.

Nothing else in the existing site was modified. Existing pages, forms, SEO,
analytics and the lead-magnet email flow are untouched.

---

## 2. New section architecture

```
src/
  app/
    growth-system/
      page.tsx                     Public sales page (SEO, static)
      login/page.tsx               Public member login
      api/
        session/route.ts          Login / logout (issues signed cookie)
        progress/route.ts         Records lesson completion (auth required)
      (protected)/                Route group — everything here is gated
        layout.tsx                Server-side access gate + AppShell
        dashboard/page.tsx        Growth Operator Dashboard
        [phase]/page.tsx          Phase overview (dynamic: phase-1 … phase-9)
        [phase]/[lesson]/page.tsx Lesson (dynamic)
  components/
    growth-system/
      SystemMap.tsx               The 9-stage framework spine (sales + dashboard)
      AppShell.tsx                Member-area application shell (distinct nav)
      LessonBlocks.tsx            Renders typed lesson content blocks
      LessonCompleteButton.tsx    Client toggle → progress API → refresh
    layout/SiteChrome.tsx         Hides marketing chrome on app routes
  content/
    growth-system/
      types.ts                    Course/Phase/Lesson/Asset schema
      course.ts                   Sales-page copy + framework map (derived)
      phases/
        index.ts                  Phase registry + lookup helpers
        phase-1.ts                Full Phase 1 content
  lib/
    growth-system/
      config.ts                   Course id, cookie names, env seams
      session.ts                  HMAC sign/verify (edge + node safe)
      access.ts                   Server-side session + entitlement API
      progress.ts                 Server-side progress persistence (cookie)
      progress-utils.ts           Pure progress math (client + server safe)
middleware.ts                     Edge gate for /growth-system/* protected paths
```

---

## 3. Route structure

| Route | Access | Notes |
| --- | --- | --- |
| `/growth-system` | Public | Sales page. Statically rendered, SEO-ready. |
| `/growth-system/login` | Public | Member login form. `noindex`. |
| `/growth-system/dashboard` | Protected | Growth Operator Dashboard. |
| `/growth-system/phase-1` … `phase-9` | Protected | Dynamic `[phase]`. Available phases show lessons; upcoming phases show a locked state. |
| `/growth-system/phase-1/<lesson-slug>` | Protected | Dynamic `[phase]/[lesson]`. |
| `/growth-system/api/session` | Public POST | Login (valid access code) / logout. |
| `/growth-system/api/progress` | Protected POST | Records completion; requires a session. |

Phases and lessons are **dynamic routes driven by the content registry** —
adding a phase or lesson creates its routes automatically. No route files are
added per phase.

---

## 4. Component structure

- **SystemMap** — the signature nine-stage visual. Neutral on the sales page;
  state-coloured and linked on the dashboard (`complete` / `current` /
  `available` / `locked`). Pure presentational server component.
- **AppShell** — the member-area chrome (top bar, member name, sign out, back to
  site). Deliberately distinct from the marketing header.
- **LessonBlocks** — renders a lesson's `blocks[]` by type (text, heading, list,
  framework, example, callout, quote). Add a block type here + in `types.ts`.
- **LessonCompleteButton** — the only interactive course component. Posts to the
  progress API, then calls `router.refresh()` so server state re-renders.

---

## 5. Content structure

All course content is **data** in `src/content/growth-system/`. Components never
hard-code copy. See `types.ts` for the schema. `course.ts` holds sales-page copy
and derives the framework map from the phase registry so they can never drift.

---

## 6. Authentication architecture

There was no auth system, so a small, **provider-agnostic** one was built:

1. **Login** (`api/session`, POST `intent=login`): validates an email + access
   code. On success it issues a signed, httpOnly session cookie (`gos_session`).
2. **Session token** (`lib/growth-system/session.ts`): HMAC-SHA256 signed JSON,
   using the Web Crypto API so the identical code runs in Edge middleware, Node
   route handlers and Server Components. Payload = `{ email, name, courseId,
   tier, iat, exp }`.
3. **Server-side reads** (`lib/growth-system/access.ts`): `getSession()` verifies
   the cookie; `requireCourseAccess()` redirects to login when there is no valid,
   entitled session.

The access code is a **placeholder for real enrollment**. It is the single seam
where a real auth provider (Supabase, Clerk, Auth.js, magic links, etc.) plugs
in — replace the login validation and keep the same cookie/session shape.

---

## 7. Paywall / access (entitlement) architecture

Access control is **server-side and layered**, never client-only:

- **Middleware** (`middleware.ts`) — first line: redirects unauthenticated
  visitors away from protected `/growth-system/*` paths before they render.
- **Protected layout** (`(protected)/layout.tsx`) — authoritative gate: calls
  `requireCourseAccess()` in a Server Component. Paid content is never sent to an
  unentitled browser.
- **Entitlement seam** — `resolveEntitlement(session)` in `access.ts` is the one
  function to change to connect billing. Today a valid session = entitled. To add
  Stripe: look the member up by `session.email` (or a user id) and return
  `{ status: "active", tier }` only for an active purchase / subscription /
  lifetime grant. **No caller changes.**

The `AccessTier` type (`"one-time" | "subscription" | "lifetime"`) already models
one-time purchase, recurring subscription, lifetime access and future tiers, so
those can be supported without rebuilding the course.

---

## 8. Progress architecture

- **Storage**: `lib/growth-system/progress.ts` persists a `ProgressMap`
  (`phaseSlug → lessonSlug → boolean`) in a signed, httpOnly cookie. This keeps
  preview deployments fully functional with no database.
- **Math**: `lib/growth-system/progress-utils.ts` is pure and import-safe on
  client or server — percent complete, current phase, next action, etc.
- **Writes**: `api/progress` (auth required) validates the lesson exists, then
  updates the store. `LessonCompleteButton` calls it and refreshes.
- **To productionise**: reimplement the three functions in `progress.ts` against
  a database keyed on the member id. Nothing else changes.

---

## 9. How to add a new phase

1. Create `src/content/growth-system/phases/phase-N.ts` exporting a full `Phase`
   (copy `phase-1.ts` as the template). Set `status: "available"`.
2. In `phases/index.ts`, import it and replace the `upcoming(...)` stub for that
   phase number.
3. Done. Its routes (`/growth-system/phase-N` and each lesson) and its dashboard
   state work automatically. Run `npm run build` to verify.

---

## 10. How to add a new lesson

1. Add a `Lesson` object to the phase's `lessons[]` array (correct `number` and a
   unique `slug`).
2. Its route `/growth-system/<phase>/<lesson-slug>`, the phase list, progress and
   next-action all update automatically.

---

## 11. How Claude Sonnet should safely modify the course

- **Content only?** Edit files under `src/content/growth-system/`. You do not
  need to touch components or routes to add/edit phases, lessons, exercises,
  assets or copy.
- **New content block type?** Add the variant to `LessonBlock` in `types.ts`
  **and** a matching `case` in `LessonBlocks.tsx`.
- **Never** weaken the gate: keep `requireCourseAccess()` in the protected layout
  and keep the middleware matcher. Do not move protected content into the public
  sales page or a public API.
- **Never** commit secrets. Access/session secrets come from env vars.
- Always run `npm run lint && npm run typecheck && npm run build` before pushing.

---

## 12. Environment variables

All optional in preview (safe dev fallbacks), all should be set for production:

| Variable | Purpose | Fallback |
| --- | --- | --- |
| `GROWTH_SYSTEM_SESSION_SECRET` | Signs session + progress cookies | dev-only string (insecure) |
| `GROWTH_SYSTEM_ACCESS_CODE` | Placeholder enrollment code | `GROWTH-OPERATOR` |

When `GROWTH_SYSTEM_ACCESS_CODE` is unset, the login page shows the preview code
so reviewers can log in. Setting it (and, later, a real provider) hides that hint
automatically.

**Before charging money:** set a strong `GROWTH_SYSTEM_SESSION_SECRET`, replace
the access-code check with a real payment/enrollment lookup (the seam in
`access.ts`), and move progress to a database.

---

## 13. Deployment workflow

- Branch: `feature/growth-operator-system` (do not develop on production).
- Vercel deploys this branch as an independent **Preview** for review.
- Pre-push checklist: `npm run lint && npm run typecheck && npm run build`.
- Merge to the production branch only after preview review.
