import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://cycuhijpwznrxrqlqjwq.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5Y3VoaWpwd3pucnhybHFqbHdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEyMzE0MDAsImV4cCI6MjA3NjgwNzQwMH0.KnZ_BdlgtoM-V-raABVHhzLk_2iebKR9sGMnX68bOXE';
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5Y3VoaWpwd3pucnhybHFqbHdxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MTIzMTQwMCwiZXhwIjoyMDc2ODA3NDAwfQ.UfyHTbM3u95oE4B5sQbPTky7_wN2armQ08zl5LwamlU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

