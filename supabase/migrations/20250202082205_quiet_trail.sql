/*
  # Initial Schema Setup for EduLien

  1. New Tables
    - countries
      - id (uuid, primary key)
      - name (text)
      - code (text)
      - created_at (timestamp)
      
    - schools
      - id (uuid, primary key)
      - name (text)
      - country_id (uuid, foreign key)
      - created_at (timestamp)
      
    - teachers
      - id (uuid, primary key)
      - user_id (uuid, foreign key)
      - school_id (uuid, foreign key)
      - subject (text)
      - created_at (timestamp)
      
    - parents
      - id (uuid, primary key)
      - user_id (uuid, foreign key)
      - created_at (timestamp)
      
    - students
      - id (uuid, primary key)
      - user_id (uuid, foreign key)
      - school_id (uuid, foreign key)
      - parent_id (uuid, foreign key)
      - grade (text)
      - created_at (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create countries table
CREATE TABLE IF NOT EXISTS countries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  code text NOT NULL UNIQUE,
  created_at timestamptz DEFAULT now()
);

-- Create schools table
CREATE TABLE IF NOT EXISTS schools (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  country_id uuid REFERENCES countries(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now()
);

-- Create auth.users extension if not exists
CREATE TABLE IF NOT EXISTS auth.users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE,
  role text DEFAULT 'student',
  created_at timestamptz DEFAULT now()
);

-- Create teachers table
CREATE TABLE IF NOT EXISTS teachers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  school_id uuid REFERENCES schools(id) ON DELETE CASCADE,
  subject text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create parents table
CREATE TABLE IF NOT EXISTS parents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now()
);

-- Create students table
CREATE TABLE IF NOT EXISTS students (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  school_id uuid REFERENCES schools(id) ON DELETE CASCADE,
  parent_id uuid REFERENCES parents(id) ON DELETE CASCADE,
  grade text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE countries ENABLE ROW LEVEL SECURITY;
ALTER TABLE schools ENABLE ROW LEVEL SECURITY;
ALTER TABLE teachers ENABLE ROW LEVEL SECURITY;
ALTER TABLE parents ENABLE ROW LEVEL SECURITY;
ALTER TABLE students ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public read access to countries" ON countries
  FOR SELECT USING (true);

CREATE POLICY "Allow public read access to schools" ON schools
  FOR SELECT USING (true);

CREATE POLICY "Teachers can read their own data" ON teachers
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Parents can read their own data" ON parents
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Students can read their own data" ON students
  FOR SELECT USING (auth.uid() = user_id);