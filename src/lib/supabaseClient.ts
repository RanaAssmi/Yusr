import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
  { auth: { persistSession: true, autoRefreshToken: true } }
);
VITE_SUPABASE_URL: https://ekmnyixxbqpdkzyaclsg.supabase.co
VITE_SUPABASE_ANON_KEY: sb_publishable_BiUfauDvCCkrcvYKMmyZzQ_0T9SUVCV
