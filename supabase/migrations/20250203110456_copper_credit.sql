/*
  # Add initial accounts

  1. New Data
    - Add Morocco country
    - Add Ibn Sina School
    - Add school admin account
    - Add teacher account
    - Add parent account
    - Add student account
  
  2. Relationships
    - Link school admin to school
    - Link teacher to school
    - Link student to school and parent
*/

-- Insert country
INSERT INTO countries (id, name, code)
VALUES ('c1b6e565-713f-4974-8639-5e4b5d7f9302', 'Morocco', 'MA')
ON CONFLICT (code) DO NOTHING;

-- Insert school
INSERT INTO schools (id, name, country_id)
VALUES (
  'a1b2c3d4-e5f6-4a5b-8c7d-9e0f1a2b3c4d',
  'Ibn Sina School',
  'c1b6e565-713f-4974-8639-5e4b5d7f9302'
)
ON CONFLICT (id) DO NOTHING;

-- Insert school admin user
INSERT INTO auth.users (id, email, role)
VALUES (
  'school1-0000-4000-a000-000000000001',
  'admin@ibnsina.edu.ma',
  'school'
)
ON CONFLICT (email) DO NOTHING;

-- Insert teacher user
INSERT INTO auth.users (id, email, role)
VALUES (
  'teacher1-0000-4000-a000-000000000001',
  'teacher.math@ibnsina.edu.ma',
  'teacher'
)
ON CONFLICT (email) DO NOTHING;

-- Insert teacher profile
INSERT INTO teachers (id, user_id, school_id, subject)
VALUES (
  'teacher1-prof-4000-a000-000000000001',
  'teacher1-0000-4000-a000-000000000001',
  'a1b2c3d4-e5f6-4a5b-8c7d-9e0f1a2b3c4d',
  'Mathematics'
)
ON CONFLICT (id) DO NOTHING;

-- Insert parent user
INSERT INTO auth.users (id, email, role)
VALUES (
  'parent1-0000-4000-a000-000000000001',
  'parent@example.com',
  'parent'
)
ON CONFLICT (email) DO NOTHING;

-- Insert parent profile
INSERT INTO parents (id, user_id)
VALUES (
  'parent1-prof-4000-a000-000000000001',
  'parent1-0000-4000-a000-000000000001'
)
ON CONFLICT (id) DO NOTHING;

-- Insert student user
INSERT INTO auth.users (id, email, role)
VALUES (
  'student1-0000-4000-a000-000000000001',
  'student@ibnsina.edu.ma',
  'student'
)
ON CONFLICT (email) DO NOTHING;

-- Insert student profile
INSERT INTO students (id, user_id, school_id, parent_id, grade)
VALUES (
  'student1-prof-4000-a000-000000000001',
  'student1-0000-4000-a000-000000000001',
  'a1b2c3d4-e5f6-4a5b-8c7d-9e0f1a2b3c4d',
  'parent1-prof-4000-a000-000000000001',
  '10th Grade'
)
ON CONFLICT (id) DO NOTHING;