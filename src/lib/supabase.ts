import "server-only";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.warn(
    "[yardscale] Supabase not configured. Growth call submissions will not be stored in the database.",
  );
}

export function getSupabaseClient() {
  if (!supabaseUrl || !supabaseKey) {
    return null;
  }

  return createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false },
  });
}

export type GrowthCallRecord = {
  id?: string;
  created_at?: string;
  name: string;
  email: string;
  phone?: string | null;
  business?: string | null;
  website?: string | null;
  growth_problem: string;
  preferred_date?: string | null;
  preferred_time?: string | null;
  status?: string;
};
