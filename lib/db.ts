import Database from 'better-sqlite3';
import bcrypt from 'bcryptjs';

const db = new Database('edulink.db');

// Enable foreign keys
db.exec('PRAGMA foreign_keys = ON');

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT NOT NULL CHECK (role IN ('student', 'teacher', 'parent', 'school')) DEFAULT 'student',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
`);

// Helper functions
export async function createUser(email: string, password: string, role: string) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const userId = crypto.randomUUID();

  try {
    db.prepare(
      'INSERT INTO users (id, email, password, role) VALUES (?, ?, ?, ?)'
    ).run(userId, email, hashedPassword, role);
    return userId;
  } catch (error) {
    if (error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
      throw new Error('Email already exists');
    }
    throw error;
  }
}

export async function validateUser(email: string, password: string) {
  const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
  
  if (!user) {
    return null;
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return null;
  }

  return {
    id: user.id,
    email: user.email,
    role: user.role
  };
}

export { db };