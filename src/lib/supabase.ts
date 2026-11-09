import "server-only";

import { createClient } from "@supabase/supabase-js";

/**
 * Server-side Supabase client (service role). Returns null when the
 * environment is not configured, and every caller treats that as "skip
 * database storage" — the forms keep working either way.
 */
export function getSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;

  return createClient(url, key, { auth: { persistSession: false } });
}
