# Nethub Dukel Enterprise

Modern React + Vite company website for Nethub Dukel Enterprise, featuring:

- Landing page with service, process, showcase preview, and contact sections
- Dedicated Governance page with leadership profiles and team directory
- Dedicated Showcase page listing active company projects
- AI advisor integration powered by Gemini

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind utility classes (via CDN in `index.html`)
- `@google/genai`

## Project Routes

The app uses path-based rendering in `App.tsx`:

- `/` → main landing page
- `/governance` → governance and team directory page
- `/showcase` → dedicated project showcase page

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Environment Variables

Create `.env.local` in the project root:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment

This is an SPA, so direct route access (for example `/governance`) requires fallback routing.

- `public/_redirects` is configured with:
	- `/* /index.html 200`
- This supports route fallback for both Netlify and Cloudflare Pages.

### Netlify

- Build command: `npm run build`
- Publish directory: `dist`

### Cloudflare Pages

- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`

## Key Files

- `App.tsx` - root page rendering + route switching
- `components/GovernancePage.tsx` - governance, leadership, and teams UI
- `components/ShowcasePage.tsx` - dedicated projects page
- `components/Navbar.tsx` - top navigation
- `constants.tsx` - navigation, services, process, projects, and tech stack data
- `services/geminiService.ts` - Gemini AI integration
- `public/_redirects` - SPA fallback routing for deployment

## Scripts

- `npm run dev` - start local dev server
- `npm run build` - create production build in `dist`
- `npm run preview` - preview production build locally

