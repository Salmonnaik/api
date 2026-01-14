import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY

let supabase = null;

if (supabaseUrl && supabaseAnonKey && supabaseUrl !== 'your_supabase_project_url' && supabaseAnonKey !== 'your_supabase_anon_key') {
  supabase = createClient(supabaseUrl, supabaseAnonKey)
}

export { supabase }