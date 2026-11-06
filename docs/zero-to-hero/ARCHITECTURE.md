# Zero to Hero dashboard: architecture

## Phase 0: which repository?

Four repositories were connected to the session.

| Repo | What it is | Verdict |
|---|---|---|
| `yardscale-Digital-funnel` | **Next.js 16 / React 19 / Tailwind v4** site: growth-agency funnel, education library, Growth Operator System, Supabase + Resend integrations, Vercel deploy. | **Chosen.** This is the live-style YardScale site and the only one with a framework, routes, auth patterns and a DB integration to build inside. |
| `YardScale-Digital` | A static `index.html` landing page for Netlify (Google Calendar booking). | Not chosen. No framework, no server, no storage. Cannot host a private, persistent dashboard without bolting on a second system. |
| `agriloopmain` | Agriloop's Next.js application. | Not touched (explicit requirement). |
| `Zero-to-revenue-` | An unrelated Python "system" repo. | Not touched. |

The funnel repo's `AGENTS.md` rules were followed: content lives in `src/content/`, no fabricated proof, design tokens reused, no stock imagery.

### Things found that you should know

1. **The existing `/growth-system` "login" is a free signup.** It issues a session to anyone who types a name and email. It was deliberately **not** reused to protect the dashboard.
2. **The linked Supabase project is named "YardScale-Digital" but contains Agriloop's production schema** (User, FarmProfile, Listing, Order and about 45 other tables). The dashboard's migration was written but **not applied** there, to respect the Agriloop boundary. See "Persistence".
3. `middleware.ts` still works but is deprecated in Next 16 (renamed `proxy`). It was extended in place, not renamed.

## What was built

Route: **`/dashboard`** inside the existing site. No new application, no new framework, **no new dependencies**.

```
src/content/campaign/        the plan: 56 episodes, 168 clips, hooks, CTAs (typed, in code)
  types.ts meta.ts index.ts  expanded from a compact authoring format
  episodes/ch1..ch7.ts       compact seeds, one file per chapter
  episodes/depth-{a,b,c}.ts  richer instructions layered over thin clips
src/lib/campaign/
  config.ts                  edge-safe: cookie name, passcode, secret, timezone
  auth.ts                    server-only: passcode check, session, requireOwner()
  store.ts                   server-only: Supabase / file / none record store
  shared.ts client.ts data.ts  types + helpers, fetch hooks, server loaders
src/app/dashboard/
  login/page.tsx             sign in (outside the gated group)
  api/session/route.ts       login/logout (form POST, 303)
  api/records/route.ts       GET list · PATCH merge · DELETE   (the only write path)
  (app)/layout.tsx           authoritative server-side gate + persistence banner
  (app)/page.tsx             overview      /calendar   /episode/[n]
  (app)/performance|leads|notes|guide
src/components/dashboard/    DashShell, StatusSelect, Editable, ScriptEditor,
                             EpisodeWorkspace, CalendarList, PerformanceManager,
                             LeadsManager, NotesManager, ui
supabase/migrations/20261106_create_campaign_records.sql
scripts/check-campaign.ts    validates 56/168/unique hooks/CTA rules
scripts/export-campaign.ts   regenerates docs/zero-to-hero/CALENDAR.md + TIKTOK-BRIEFS.md
```

Edits to existing files: `middleware.ts` (adds a `/dashboard` branch; the `/growth-system` logic is unchanged), `SiteChrome.tsx` (hides marketing header/footer under `/dashboard`), `robots.ts` (disallow `/dashboard`), `.gitignore`, `.env.example`, `README.md`.

## Content model: plan in code, edits in the database

- **Seed content** (the plan) is typed TypeScript. It can be improved in code without touching saved work.
- **Everything you change** is stored per record and layered on top:
  - `episode/{n}`: statuses (4 independent pieces), scripts (4), published URLs (4), checklist ticks, brief **overrides** keyed by path (e.g. `c2.hooks`), and the day's lesson.
  - `metrics/{n}`: the nine performance fields + note. `settings/campaign`: your real YouTube / TikTok totals.
  - `lead/{id}`, `note/{id}`.
- A brief field shows the planned text unless an override exists; **Reset to plan** deletes the override.
- Default status is **Brief ready** (the briefs exist), not "Planned".

## Persistence

One generic table, `yardscale_campaign_records(collection, id, data jsonb, updated_at)`, RLS on with no policies (service-role only). Adding a feature needs a new collection name, not a migration.

| Store | When | Durable |
|---|---|---|
| Supabase | `DASHBOARD_SUPABASE_URL` + `DASHBOARD_SUPABASE_SERVICE_KEY` set (falls back to `NEXT_PUBLIC_SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY`) | Yes |
| File (`.data/campaign.json`) | Local development, or `DASHBOARD_STORE=file` | Dev only. Vercel's filesystem is ephemeral. |
| None | Production with nothing configured | No. Reads are empty; **writes fail with a visible error and the UI reverts**. A banner explains. |

**Recommended:** create a separate free Supabase project for YardScale and set the `DASHBOARD_SUPABASE_*` variables, then run the migration there. Using the existing project works technically but puts campaign data in Agriloop's database.

## Security model

- **Single owner, fails closed.** `DASHBOARD_PASSCODE` (≥ 8 chars; use a long one). Unset → the login page shows "locked" and no passcode works.
- Signed HttpOnly cookie, `SameSite=Lax`, `Secure` in production, path `/dashboard`, 14 days. Signing key = `DASHBOARD_SESSION_SECRET` if set, else derived from the passcode (no built-in default; changing the passcode signs everyone out). Constant-time passcode comparison.
- Three layers: edge `middleware` redirect/401, the `(app)` layout server check, and every API handler re-checks.
- Writes require `Content-Type: application/json` and a same-origin `Origin`; collection names are whitelisted; ids match `^[A-Za-z0-9_-]{1,64}$`; records capped at 200 KB; `__proto__`/`constructor` keys are ignored in merges.
- Dashboard pages are `noindex` and disallowed in `robots.txt`.
- **Known limit:** there is no lockout, only a 600 ms delay on wrong guesses (serverless instances don't share memory). Use a long passcode.

## Environment variables

| Variable | Required | Purpose |
|---|---|---|
| `DASHBOARD_PASSCODE` | **Yes** | Sign-in passcode (≥ 8 chars) |
| `DASHBOARD_SESSION_SECRET` | No | Explicit cookie-signing secret |
| `DASHBOARD_SUPABASE_URL`, `DASHBOARD_SUPABASE_SERVICE_KEY` | For durable saves | Dedicated project (preferred) |
| `DASHBOARD_STORE` | No | `file` or `supabase` to force a backend |
| `DASHBOARD_TIMEZONE` | No | IANA zone for "today" (default `America/Jamaica`) |

## Deploying

Vercel is git-linked to the repo. Set `DASHBOARD_PASSCODE` and the Supabase variables in the Vercel project, run the migration on the chosen Supabase project, then deploy the branch. **Nothing in this work has been deployed or run against Supabase.** See QA-REPORT.md.

## Adding to it later (no rebuild)

- New record type → add the name to `COLLECTIONS` in `store.ts` and `store-types.ts`.
- New dashboard page → add a folder under `(app)/`, a link in `DashShell.tsx`.
- Change the plan → edit `src/content/campaign/episodes/*`; run `scripts/check-campaign.ts`.
- Your own edits to briefs and scripts are never overwritten by plan changes.
