-- Create growth_calls table for storing Growth Call request submissions
create table if not exists growth_calls (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  email text not null,
  phone text,
  business text,
  website text,
  growth_problem text not null,
  preferred_date date,
  preferred_time text,
  status text default 'new'::text not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create index on email for faster lookups
create index if not exists idx_growth_calls_email on growth_calls(email);

-- Create index on status for filtering
create index if not exists idx_growth_calls_status on growth_calls(status);

-- Create index on created_at for sorting
create index if not exists idx_growth_calls_created_at on growth_calls(created_at desc);

-- Enable RLS (Row Level Security)
alter table growth_calls enable row level security;

-- RLS Policy: Public can only INSERT (submit new requests)
create policy "public_insert_growth_calls" on growth_calls
  for insert
  with check (true);

-- RLS Policy: Public cannot SELECT (prevent reading other submissions)
-- This means the API needs service role key to read/update/delete
