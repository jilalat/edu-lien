import { SignJWT, jwtVerify } from 'jose';
import { db } from './db';
import { cookies } from 'next/headers';
import bcrypt from 'bcrypt';

const secretKey = new TextEncoder().encode(
  process.env.JWT_SECRET_KEY || 'your-secret-key'
);

// ✅ Secure Sign-In with Hashed Password Check
export async function signIn(email: string, password: string) {
  const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);

  if (!user) {
    throw new Error('Invalid email or password');
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    throw new Error('Invalid email or password');
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

// ✅ Secure Sign-Up with Hashed Password Storage
export async function signUp(
  email: string,
  password: string,
  role: string = 'student'
) {
  const existingUser = db
    .prepare('SELECT * FROM users WHERE email = ?')
    .get(email);
  if (existingUser) {
    throw new Error('Email already in use');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const userId = crypto.randomUUID();
  db.prepare(
    'INSERT INTO users (id, email, password, role) VALUES (?, ?, ?, ?)'
  ).run(userId, email, hashedPassword, role);

  return signIn(email, password);
}

// ✅ Verify Authentication
export async function verifyAuth() {
  const token = cookies().get('token')?.value;
  if (!token) throw new Error('No token found');

  try {
    const verified = await jwtVerify(token, secretKey);
    return verified.payload as { userId: string; role: string };
  } catch {
    throw new Error('Invalid token');
  }
}

// ✅ Logout Function (Clears Token)
export function signOut() {
  cookies().delete('token');
}
