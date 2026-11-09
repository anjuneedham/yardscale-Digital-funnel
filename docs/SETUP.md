# Setup and handover

## What is live vs. waiting

| Piece | State |
| --- | --- |
| Site, 7 pages, Academy, forms, SEO, sitemap | Built. Builds clean. |
| Supabase lead storage | **Needs migration applied** (`supabase/migrations/20261109_create_leads.sql`) + 2 env vars on Vercel |
| Resend email | `RESEND_API_KEY` already on Vercel production. Needs `RESEND_FROM_EMAIL` (verified domain) + `LEAD_NOTIFICATION_EMAIL` |
| Hero video | Placeholder until `NEXT_PUBLIC_HERO_VIDEO_URL` or `heroVideo.url` is set |
| Skool / Discord | Not created. Set `NEXT_PUBLIC_SKOOL_URL` / `NEXT_PUBLIC_DISCORD_URL` |
| Coaching / partnership pricing | Intentionally empty. `offers` in `src/content/site.ts` |
| Social links | Empty. `socials` in `src/content/site.ts` |
| Payments | None built. Use Skool / a hosted payment link |
| Analytics | Vercel Analytics component present; custom funnel events sent to `window.dataLayer` and `window.va` |

None of the integrations have been tested end to end with real credentials.

## Where to change things

| Want to change | File |
| --- | --- |
| Hero video, CTA labels/links, community links, prices, socials, nav | `src/content/site.ts` |
| Homepage copy | `src/content/home.ts` |
| Latest videos / build updates | `src/content/feed.ts` (add an entry) |
| Products, screenshots, case studies, testimonials | `src/content/proof.ts` |
| Coaching / partnership / community copy | `src/content/coaching.ts`, `partnerships.ts`, `community.ts` |
| Form questions | `src/lib/forms.ts` |
| Course lessons | `src/content/academy/zero-to-saas/modules-*.ts` |
| Add a new course | new folder in `src/content/academy/`, add to `courses` in `index.ts` |

## Reviewing applications

Supabase → Table Editor → `applications` (filter `kind`, `status`). Subscribers are in `subscribers`. Update `status` as you work through them. Each application also emails `LEAD_NOTIFICATION_EMAIL`.

## Discord and Skool

Structures are in `src/content/community.ts` and rendered on `/community`. Create the spaces by hand using that layout, then paste the invite URLs.

## Course content needing Andrew's review

All 13 modules are marked "working draft" (`reviewed: false`). Each module's `reviewNotes` lists the first-hand examples and decisions only Andrew can supply. Nothing in them is presented as personal experience, except the AgriLoop examples (modules 3 and 5), which come from the AgriLoop overview doc in Drive and should be confirmed.
