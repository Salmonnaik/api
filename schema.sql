-- Create profile table
CREATE TABLE profile (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  education TEXT,
  github TEXT,
  linkedin TEXT,
  portfolio TEXT
);

-- Create projects table
CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  skill TEXT NOT NULL,
  links TEXT[]
);

-- Seed data (Replace with real personal data)
INSERT INTO profile (name, email, education, github, linkedin, portfolio) 
VALUES ('Your Name', 'your.email@example.com', 'Your Education', 'https://github.com/yourusername', 'https://linkedin.com/in/yourprofile', 'https://yourportfolio.com');

INSERT INTO projects (title, description, skill, links) 
VALUES 
('Project Title 1', 'Project description 1', 'Node', ARRAY['https://project1.com']),
('Project Title 2', 'Project description 2', 'React', ARRAY['https://project2.com']);