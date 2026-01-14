# Me-API Playground

A simple web app that displays profile information and allows searching projects by skill, backed by Supabase.

## Setup

1. **Create a Supabase project:**
   - Go to [supabase.com](https://supabase.com) and create a new project
   - Note down your project URL and anon key from the project settings

2. **Configure environment variables:**
   - Copy `.env` file and update the values:
     ```
     SUPABASE_URL=your_actual_supabase_url
     SUPABASE_ANON_KEY=your_actual_anon_key
     ```

3. **Set up database tables:**
   - In your Supabase dashboard, go to the SQL Editor
   - Run the following SQL to create the tables:

   ```sql
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

   -- Insert sample profile data
   INSERT INTO profile (name, email, education, github, linkedin, portfolio)
   VALUES ('Your Name', 'your.email@example.com', 'Your Education', 'https://github.com/yourusername', 'https://linkedin.com/in/yourprofile', 'https://yourportfolio.com');

   -- Create projects table
   CREATE TABLE projects (
     id SERIAL PRIMARY KEY,
     title TEXT NOT NULL,
     description TEXT,
     skill TEXT NOT NULL,
     links TEXT[]
   );

   -- Insert sample projects
   INSERT INTO projects (title, description, skill, links)
   VALUES
     ('Project 1', 'Description of project 1', 'JavaScript', ARRAY['https://github.com/user/project1']),
     ('Project 2', 'Description of project 2', 'Node.js', ARRAY['https://github.com/user/project2']),
     ('Project 3', 'Description of project 3', 'React', ARRAY['https://github.com/user/project3']);
   ```

4. **Install dependencies:**
   ```bash
   npm install
   ```

5. **Run locally:**
   ```bash
   npm run dev
   ```

6. **Deploy to Vercel:**
   - Push to GitHub
   - Connect to Vercel
   - Set environment variables in Vercel dashboard

## API Endpoints

- `GET /api/health` - Health check
- `GET /api/profile` - Get profile information
- `GET /api/projects?skill=<skill>` - Search projects by skill</content>
<parameter name="filePath">c:\Users\bodas\OneDrive\Desktop\api-final\README.md