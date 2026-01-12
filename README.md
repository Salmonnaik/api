# Me-API Playground

A production-ready backend API with a minimal frontend demonstrating API usage, built for internship assessment Track A.

## Project Overview

This project provides a simple API playground featuring:

- Health check endpoint
- Profile retrieval from database
- Project search by skill
- Minimal frontend to demonstrate API usage

## Architecture

- **Backend**: Node.js serverless functions on Vercel
- **Database**: Supabase (PostgreSQL)
- **Frontend**: Vanilla HTML/CSS/JS with Tailwind CSS
- **Deployment**: Vercel for both backend and frontend

## Tech Stack

- Node.js (ES Modules)
- Vercel Serverless Functions
- Supabase
- HTML, Tailwind CSS, Vanilla JavaScript

## API Endpoints

### Health Check

`GET /api/health`

"https://api-playground-sigma.vercel.app/api/health"

- Returns: `{ "status": "ok" }`

### Get Profile

`GET /api/profile`

"https://api-playground-sigma.vercel.app/api/profile"

- Fetches profile data from Supabase
- Returns JSON object with profile information

### Search Projects by Skill

`GET /api/projects?skill=<skill>`

"https://api-playground-sigma.vercel.app/api/projects?skill=Node"

- Performs case-insensitive search on projects by skill
- Returns array of matching projects

## Database Schema

### Profile Table

- id (SERIAL PRIMARY KEY)
- name (TEXT)
- email (TEXT)
- education (TEXT)
- github (TEXT)
- linkedin (TEXT)
- portfolio (TEXT)

### Projects Table

- id (SERIAL PRIMARY KEY)
- title (TEXT)
- description (TEXT)
- skill (TEXT)
- links (TEXT[])

## Setup Steps

1. Clone this repository
2. Install dependencies: `npm install`
3. Set up Supabase:
   - Create a new Supabase project
   - Run the SQL in `schema.sql` in Supabase SQL editor
   - Note your SUPABASE_URL and SUPABASE_KEY
4. Deploy to Vercel:
   - Connect your GitHub repo to Vercel
   - Set environment variables: SUPABASE_URL and SUPABASE_KEY
   - Deploy

## Live URLs

- Frontend: [Your Vercel URL]
- API Base: [Your Vercel URL]/api

## Resume Link

[Your Resume Link]

## Testing Checklist

- [ ] Health endpoint returns 200 with {status: "ok"}
- [ ] Profile endpoint returns profile data
- [ ] Projects endpoint returns array for valid skill
- [ ] Projects endpoint returns 400 for missing skill
- [ ] Frontend loads profile on page load
- [ ] Frontend searches projects correctly
- [ ] Error states display properly
- [ ] All links are valid and working
- [ ] No console errors in browser
