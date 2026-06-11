# Gyumin Archive

[![CI](https://github.com/lukemin-dev/gyumin-archive/actions/workflows/ci.yml/badge.svg)](https://github.com/lukemin-dev/gyumin-archive/actions/workflows/ci.yml)

Cloud, backend, and automation-focused portfolio for Gyumin Lee.

This site organizes projects, internships, activities, courses, and notes around the problems each experience solved. The goal is to show not only finished outputs, but also the reasoning behind the work: what was repeated, what was automated, what was measured, and what can be explained clearly in an interview.

## Highlights

- Project case studies for backend APIs, automation tools, and operational workflows
- Internship and activity records with concrete responsibilities and results
- Resume and portfolio pages built with Next.js App Router
- Minimal, text-first UI designed for quick scanning by reviewers

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Editing Content on GitHub

You can add content without running the project locally:

- Add notes in `content/notes`
- Add projects in `content/projects`
- Add activities in `content/activities`

Use the `_README.md` template inside each folder, then commit the new `.md` file on GitHub. Vercel will redeploy the site automatically.

## Verification

```bash
npm run lint
npm run build
```

## Structure

```text
src/app/          App Router pages and metadata
src/components/   Shared UI components
content/          Markdown files that can be edited from GitHub
src/data/         Portfolio content data
src/types/        Shared TypeScript types
public/           Static assets
```

## Deployment

The project is intended for deployment on Vercel.
