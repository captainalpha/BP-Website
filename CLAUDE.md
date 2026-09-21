# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Current state: MAINTENANCE MODE

This branch is intentionally a **minimal maintenance-mode site**, not the full product. It serves a single "Under Maintenance" page for every route so the domain shows a branded holding page while the real site is offline.

- Next.js 15 (App Router), plain JavaScript, **no TypeScript, no database, no API routes** — deliberately tiny so it builds reliably on any Node version (the old site was Next 12 and would not build on modern Node).
- `app/layout.js` — root layout + metadata (`robots: noindex`).
- `app/maintenance.js` — the shared maintenance UI (brand logo, message, contact email `enquiry@bpaassolutions.com`).
- `app/page.js` — renders the maintenance page at `/`.
- `app/[...slug]/page.js` — catch-all so **every other path** (e.g. `/about-us`, `/services/...`) also shows the maintenance page.
- `app/globals.css` — all styling (brand orange `#ED974C`, blue `#639FCB`). No Tailwind/PostCSS.
- `public/logo.svg` — BPAAS logo, referenced via a plain `<img>` (not `next/image`) to keep the build dependency-free.

## Commands

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (verified on Node 26)
npm run start    # serve production build
```

Only `package-lock.json` (npm) — do not add `yarn.lock`, or Vercel switches package managers and re-resolves the tree.

## The real site (how to restore it)

The full marketing + jobs application (Next 15 App Router, React 19, MongoDB/Mongoose, JWT admin dashboard, SendGrid/Nodemailer email, Tailwind v4, Three.js/GSAP/Lottie marketing sections) lives in **git history**, not in this working tree. To bring it back:

- The last good full-app commit is **`dd732b4`** ("Update Next.js security version") — its `package.json`/`src/` are the real app.
- Commit `2626b8f` restored that manifest and fixed the Vercel build (deleted the stale `next.config.js` that shadowed `next.config.ts`, removed `yarn.lock`, added `typescript.ignoreBuildErrors` to work around a Next 15.5.24 `src/`-dir `validator.ts` bug).
- To restore, check out `src/`, `next.config.ts`, `tsconfig.json`, `postcss.config.js`, and the full `package.json` from `dd732b4`/`2626b8f`, then re-verify `npm run build`.

## Notes

- `.env` holds SMTP credentials in plaintext and is tracked — treat as sensitive; the maintenance page itself uses none of it.
