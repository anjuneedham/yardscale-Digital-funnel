# Supabase Setup for Growth Call Submissions

This document explains how to set up Supabase to store Growth Call request submissions.

## Overview

The Growth Call form (`/book` page, `GrowthRequestForm` component) now submits to Supabase in addition to webhooks. This keeps a permanent record of all requests in your database.

## Prerequisites

1. A Supabase account (free tier is sufficient)
2. A Supabase project created
3. Access to the project settings

## Setup Steps

### 1. Create the Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/log in
2. Create a new project (or use an existing one)
3. Save your project URL and keys for later

### 2. Create the growth_calls Table

You have two options:

#### Option A: Using the Supabase Dashboard (Manual)

1. Go to your Supabase project dashboard
2. Click "SQL Editor" in the left sidebar
3. Click "New Query"
4. Copy the SQL from `supabase/migrations/20260914_create_growth_calls.sql`
5. Paste it into the SQL editor
6. Click "Run"

#### Option B: Using Supabase CLI (Automated)

```bash
# Install Supabase CLI if you haven't already
npm install -g supabase

# Log in to Supabase
supabase login

# Link your local project to the remote Supabase project
supabase link --project-ref YOUR_PROJECT_ID

# Run migrations
supabase db push
```

### 3. Configure Environment Variables

Add these to your `.env.local` file (or Vercel environment settings):

```
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc... (your service role key)
```

Where to find these:

- **NEXT_PUBLIC_SUPABASE_URL**: Dashboard > Project Settings > API (URL section)
- **SUPABASE_SERVICE_ROLE_KEY**: Dashboard > Project Settings > API (scroll down to "Service Role")

⚠️ **IMPORTANT:** Never expose `SUPABASE_SERVICE_ROLE_KEY` to the client/browser. Use it only on the server (environment variables starting with `SUPABASE_` without `NEXT_PUBLIC_` prefix are server-only).

### 4. Verify Row Level Security (RLS)

The migration enables RLS automatically:

- ✅ **Public can INSERT** (submit new requests)
- ❌ **Public cannot SELECT** (read other submissions)
- ✅ **Service role (server) can do anything**

This prevents visitors from reading other people's Growth Call submissions.

You can verify RLS is enabled:

1. Dashboard > SQL Editor
2. Run: `select tablename from pg_tables where tablename = 'growth_calls' and schemaname = 'public';`
3. You should see the table listed

## Data Structure

Each Growth Call submission stores:

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| id | UUID | Yes | Auto-generated |
| created_at | Timestamp | Yes | Auto-generated |
| name | Text | Yes | Requester name |
| email | Text | Yes | Requester email |
| phone | Text | No | Phone number |
| business | Text | No | Business name |
| website | Text | No | Business website |
| growth_problem | Text | Yes | The main growth challenge |
| preferred_date | Date | No | Preferred call date |
| preferred_time | Text | No | Preferred call time |
| status | Text | Yes | Default: "new" |
| updated_at | Timestamp | Yes | Auto-updated |

## Testing

### 1. Test in Development

1. Run `npm run dev`
2. Go to http://localhost:3000/book
3. Fill out and submit the form
4. Check your Supabase dashboard to see the new record

### 2. Test in Production (Vercel)

1. Add environment variables to Vercel:
   - Go to Vercel dashboard > Project Settings > Environment Variables
   - Add `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`
2. Deploy your changes
3. Test the form at your live URL
4. Verify the record appears in Supabase

## Viewing Submissions

### In Supabase Dashboard

1. Dashboard > Table Editor
2. Select "growth_calls"
3. View all submissions

### Filtering by Status

Use the "Filter" button to find submissions by status (new, contacted, scheduled, etc.)

### Exporting Data

1. Click the three dots (⋯) next to the table name
2. Choose "Export to CSV" or download as needed

## Webhooks Still Work

Growth Call submissions **also** go to your configured webhooks:

- `GROWTH_REQUEST_WEBHOOK_URL` (preferred)
- `FORM_WEBHOOK_URL` (fallback)

This means you can have:
- Supabase for permanent storage
- Webhooks to Zapier/Make/Slack for notifications
- Both at the same time

## Troubleshooting

### "Supabase not configured" warning in logs

This means `NEXT_PUBLIC_SUPABASE_URL` or `SUPABASE_SERVICE_ROLE_KEY` are missing. Submissions will still work but won't be stored. Check your `.env.local` or Vercel environment variables.

### "Failed to insert growth call into Supabase" error

1. Verify the API keys are correct
2. Check that the `growth_calls` table exists (run the migration)
3. Check Supabase project status (is it paused?)
4. Look at Supabase logs in the dashboard

### RLS policy blocking inserts

If the migration failed and RLS was enabled without the INSERT policy, inserts will fail. Run the migration again or manually add the policy:

```sql
create policy "public_insert_growth_calls" on growth_calls
  for insert
  with check (true);
```

## Future Enhancements

Once Supabase is working, you can:

- Add automated email responses (Resend integration)
- Create dashboards to view submissions
- Add status tracking (new → contacted → scheduled)
- Set up background jobs to send reminders
- Integrate with calendar systems (Cal.com, Calendly, etc.)

See `docs/RESEND_SETUP.md` for email automation setup.
