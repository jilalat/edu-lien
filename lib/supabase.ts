import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  }
});

export async function getUserRole(userId: string) {
  const { data, error } = await supabase
    .from('auth.users')
    .select('role')
    .eq('id', userId)
    .single();

  if (error) throw error;
  return data?.role;
}

export async function getUserProfile(userId: string, role: string) {
  const table = role === 'teacher' ? 'teachers' :
                role === 'parent' ? 'parents' :
                'students';

  const { data, error } = await supabase
    .from(table)
    .select('*')
    .eq('user_id', userId)
    .single();

  if (error) throw error;
  return data;
}