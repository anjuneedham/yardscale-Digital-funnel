import "server-only";

import { createClient } from "@supabase/supabase-js";

/**
 * Server-side Supabase client. Returns null when the environment is not
 * configured, and every caller treats that as "skip database storage".
 *
 * Key choice: SUPABASE_SERVICE_ROLE_KEY is used when set. Otherwise the
 * publishable key is used, which can only INSERT into `subscribers` and
 * `applications` (see supabase/migrations). That is deliberate while this
 * site shares a Supabase project with AgriLoop: the marketing site should not
 * hold a key that can read another product's data.
 */
export function getSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) return null;

  return createClient(url, key, { auth: { persistSession: false } });
}
