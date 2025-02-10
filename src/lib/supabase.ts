import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});

export async function getUserRole(userId: string) {
  const { data, error } = await supabase
    .from('users')
    .select('role')
    .eq('id', userId)
    .single();

  if (error) {
    console.error('Error fetching user role:', error);
    throw error;
  }

  return data?.role;
}

export async function getUserProfile(userId: string, role: string) {
  const table = role === 'teacher' ? 'teachers' :
                role === 'parent' ? 'parents' :
                role === 'student' ? 'students' :
                null;

  if (!table) {
    throw new Error('Invalid user role');
  }

  const { data, error } = await supabase
    .from(table)
    .select('*')
    .eq('user_id', userId)
    .single();

  if (error) {
    console.error(`Error fetching ${role} profile:`, error);
    throw error;
  }

  return data;
}