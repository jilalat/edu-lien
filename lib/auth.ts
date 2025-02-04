import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const supabase = createClientComponentClient();

export async function signIn(email: string, password: string) {
  const { data: { user }, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    throw error;
  }

  if (!user) {
    throw new Error('User not found');
  }

  const { data: userData, error: userError } = await supabase
    .from('users')
    .select('role')
    .eq('id', user.id)
    .single();

  if (userError) {
    throw userError;
  }

  return {
    userId: user.id,
    role: userData.role
  };
}

export async function verifyAuth() {
  const { data: { session }, error } = await supabase.auth.getSession();

  if (error || !session) {
    throw new Error('Unauthorized');
  }

  const { data: userData, error: userError } = await supabase
    .from('users')
    .select('role')
    .eq('id', session.user.id)
    .single();

  if (userError) {
    throw userError;
  }

  return {
    userId: session.user.id,
    email: session.user.email,
    role: userData.role
  };
}

export async function signOut() {
  await supabase.auth.signOut();
}