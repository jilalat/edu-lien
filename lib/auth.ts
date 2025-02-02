import { SignJWT, jwtVerify } from 'jose';
import { db } from './db';
import { cookies } from 'next/headers';

const secretKey = new TextEncoder().encode(
  process.env.JWT_SECRET_KEY || 'your-secret-key'
);

export async function signIn(email: string, password: string) {
  const user = db
    .prepare('SELECT * FROM users WHERE email = ? AND password = ?')
    .get(email, password);

  if (!user) {
    throw new Error('Invalid credentials');
  }

  const token = await new SignJWT({ userId: user.id, role: user.role })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('24h')
    .sign(secretKey);

  cookies().set('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 86400, // 24 hours
  });

  return { userId: user.id, role: user.role };
}

export async function verifyAuth() {
  const token = cookies().get('token')?.value;

  if (!token) {
    throw new Error('No token found');
  }

  try {
    const verified = await jwtVerify(token, secretKey);
    return verified.payload as { userId: string; role: string };
  } catch {
    throw new Error('Invalid token');
  }
}
