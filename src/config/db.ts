import { createClient } from "@supabase/supabase-js"
import { Database } from "@/types/supabase"
import { env } from "@/config/env"

export const db = createClient<Database>(env.SUPABASE_URL, env.SUPABASE_ANON_KEY, {
  auth: { persistSession: false },
})
