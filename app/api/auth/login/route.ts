import { NextResponse } from 'next/server';
import { SignJWT } from 'jose';
import { z } from 'zod';
import { cookies } from 'next/headers';
import { supabase } from '@/lib/supabase';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  rememberMe: z.boolean().optional()
});

const secretKey = new TextEncoder().encode(
  process.env.JWT_SECRET_KEY || 'your-secret-key'
);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, rememberMe } = loginSchema.parse(body);
    
    const { data: { user }, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error || !user) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Get user role from the database
    const { data: userData, error: userError } = await supabase
      .from('auth.users')
      .select('role')
      .eq('id', user.id)
      .single();

    if (userError || !userData) {
      return NextResponse.json(
        { error: 'User role not found' },
        { status: 404 }
      );
    }

    const token = await new SignJWT({ 
      userId: user.id,
      email: user.email,
      role: userData.role
    })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime(rememberMe ? '30d' : '24h')
      .setIssuedAt()
      .sign(secretKey);

    cookies().set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: rememberMe ? 30 * 24 * 60 * 60 : 24 * 60 * 60 // 30 days or 24 hours
    });

    return NextResponse.json({
      userId: user.id,
      role: userData.role
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input data' },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Invalid credentials' },
      { status: 401 }
    );
  }
}