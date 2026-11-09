-- YardScale Digital — lead storage for the website funnel.
--
-- Two tables: newsletter subscribers and applications (coaching, partnership,
-- contact). Both are written only by the site's server (service role key).
-- RLS is enabled with no policies, so the public/anon key can read nothing.
--
-- Review incoming applications in the Supabase Table Editor:
--   applications → filter status = 'new' → set status as you work through them
--   (new → reviewing → call → accepted / declined).

create table if not exists public.subscribers (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email text not null unique,
  name text,
  -- Which form on the site captured them (e.g. home_subscribe, academy_signin).
  origin text,
  -- Best-guess traffic platform at signup: youtube, tiktok, x, direct...
  platform text,
  attribution jsonb,
  status text not null default 'subscribed'
);

create table if not exists public.applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  kind text not null check (kind in ('coaching', 'partnership', 'contact')),
  name text not null,
  email text not null,
  stage text,
  -- Every answer from the form, keyed by field name.
  answers jsonb not null default '{}'::jsonb,
  platform text,
  attribution jsonb,
  status text not null default 'new',
  notes text
);

create index if not exists idx_applications_kind_status on public.applications (kind, status);
create index if not exists idx_applications_created_at on public.applications (created_at desc);
create index if not exists idx_subscribers_created_at on public.subscribers (created_at desc);

alter table public.subscribers enable row level security;
alter table public.applications enable row level security;
