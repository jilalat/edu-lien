import Database from 'better-sqlite3';

const db = new Database('edulink.db');

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'student',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS countries (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    code TEXT UNIQUE NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS schools (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    country_id TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (country_id) REFERENCES countries(id)
  );

  CREATE TABLE IF NOT EXISTS teachers (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    school_id TEXT NOT NULL,
    subject TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (school_id) REFERENCES schools(id)
  );

  CREATE TABLE IF NOT EXISTS parents (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
  );

  CREATE TABLE IF NOT EXISTS students (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    school_id TEXT NOT NULL,
    parent_id TEXT NOT NULL,
    grade TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (school_id) REFERENCES schools(id),
    FOREIGN KEY (parent_id) REFERENCES parents(id)
  );
`);

export { db };