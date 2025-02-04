-- Insert test users
INSERT INTO users (id, email, role)
VALUES 
  ('teacher1-0000-4000-a000-000000000001', 'teacher@example.com', 'teacher'),
  ('parent1-0000-4000-a000-000000000001', 'parent@example.com', 'parent'),
  ('student1-0000-4000-a000-000000000001', 'student@example.com', 'student')
ON CONFLICT (email) DO NOTHING;

-- Insert teacher profile
INSERT INTO teachers (id, user_id, subject)
VALUES (
  'teacher1-prof-4000-a000-000000000001',
  'teacher1-0000-4000-a000-000000000001',
  'Mathematics'
)
ON CONFLICT (id) DO NOTHING;

-- Insert parent profile
INSERT INTO parents (id, user_id)
VALUES (
  'parent1-prof-4000-a000-000000000001',
  'parent1-0000-4000-a000-000000000001'
)
ON CONFLICT (id) DO NOTHING;

-- Insert student profile
INSERT INTO students (id, user_id, parent_id, grade)
VALUES (
  'student1-prof-4000-a000-000000000001',
  'student1-0000-4000-a000-000000000001',
  'parent1-prof-4000-a000-000000000001',
  '10th Grade'
)
ON CONFLICT (id) DO NOTHING;