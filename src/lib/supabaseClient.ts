import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
  { auth: { persistSession: true, autoRefreshToken: true } }
);
VITE_SUPABASE_URL= https;//ekmnyixxbqpdkzyaclsg.supabase.co
VITE_SUPABASE_ANON_KEY =eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVrbW55aXh4YnFwZGt6eWFjbHNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE2ODgzOTQsImV4cCI6MjA4NzI2NDM5NH0.GGA38ja1mht_BtRVNbeBEFXSddzxNXcJMZIjSaK3kP0
