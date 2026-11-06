-- Zero to Hero campaign dashboard: one generic record store.
-- A record is (collection, id) -> JSON document, so new dashboard features
-- need no further migrations.
--
-- NOTE: do NOT run this against the Agriloop production database. The Supabase
-- project currently named "YardScale-Digital" contains Agriloop's tables.
-- Create a separate (free-tier) project for YardScale, or accept the
-- namespacing and run it there deliberately. See docs/zero-to-hero/ARCHITECTURE.md.

create table if not exists yardscale_campaign_records (
  collection text not null,
  id text not null,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default timezone('utc'::text, now()),
  primary key (collection, id)
);

-- Locked to the service-role key: RLS on, deliberately no policies.
alter table yardscale_campaign_records enable row level security;
