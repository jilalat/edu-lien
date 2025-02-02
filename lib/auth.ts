import { SignJWT, jwtVerify } from 'jose';
import { validateUser } from './db';
import { cookies } from 'next/headers';

const secretKey = new TextEncoder().encode(
  process.env.JWT_SECRET_KEY || 'your-secret-key'
);

const TOKEN_EXPIRY = '24h';

export async function signIn(email: string, password: string) {
  const user = await validateUser(email, password);

  if (!user) {
    throw new Error('Invalid credentials');
  }

  const token = await new SignJWT({ 
    userId: user.id, 
    email: user.email,
    role: user.role 
  })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime(TOKEN_EXPIRY)
    .setIssuedAt()
    .sign(secretKey);

  cookies().set('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 24 * 60 * 60 // 24 hours
  });

  return {
    userId: user.id,
    role: user.role
  };
}

export async function verifyAuth() {
  const token = cookies().get('token')?.value;

  if (!token) {
    throw new Error('Unauthorized');
  }

  try {
    const verified = await jwtVerify(token, secretKey);
    return verified.payload as {
      userId: string;
      email: string;
      role: string;
    };
  } catch (error) {
    throw new Error('Invalid token');
  }
}

export async function signOut() {
  cookies().delete('token');
}