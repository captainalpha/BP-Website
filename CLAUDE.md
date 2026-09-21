# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Marketing + jobs website for BPAAS Solutions, built on Next.js 15 (React 19). It uses MongoDB (Mongoose) for a jobs/applicant/user backend and a small JWT-based admin dashboard.

## Commands

```bash
npm run dev      # dev server with Turbopack (http://localhost:3000)
npm run build    # production build
npm run start    # serve production build
npm run lint     # next lint (ESLint 9 flat config)
ANALYZE=true npm run build   # build with @next/bundle-analyzer report
```

There is no test runner configured. `package-lock.json` is authoritative — `yarn.lock` was removed; use npm.

## Architecture

### Two routers coexist — this is the single most important thing to understand

The app is mid-migration from the **Pages Router** to the **App Router**. Both are live and both serve routes:

- `src/app/**` — the **App Router**, TypeScript (`.tsx`), the current/target architecture. New work goes here. Public pages live under the `(main)` route group; the admin area under `auth/`; server logic under `api/` and `actions/`.
- `pages/**` — the **legacy Pages Router**, plain `.js`. Still ships routes (e.g. `pages/solutions/*`, `pages/services/*`, `pages/about-us.js`) plus legacy API routes (`pages/api/contact.js`, `pages/api/sendgrid.js`).
- `components/**` (repo root) — legacy `.js` components used by the Pages Router.
- `src/components/**` — current `.tsx` components used by the App Router.

Recent commit history ("Fix Next.js route conflicts") reflects that a route defined in *both* routers collides at build time. When adding or moving a page, make sure the same path isn't already served by the other router.

Path alias: `@/*` → `./src/*` (so `@/components`, `@/lib`, `@/utils` all resolve into `src/`, **not** the root-level `components/`).

### Duplicate config files

Several configs exist in both `.js` and `.ts` form: `next.config.js` + `next.config.ts`, `tailwind.config.js` + `tailwind.config.ts`. When changing build/config behavior, confirm which file Next actually loads before editing (Next resolves one config file, not both) and prefer keeping them consistent. `next.config.ts` is the richer one (bundle analyzer, ImageKit `remotePatterns` for `ik.imagekit.io`, `optimizePackageImports` for `react-icons`). Note ESLint is set to not block builds (`eslint.ignoreDuringBuilds` / `ignoreDuringBuilds: true`).

### App Router server layer (`src/app`)

- `api/*/route.ts` — REST-style route handlers (jobs, users, email sending, schedule-call). Dynamic segments under `api/user/[id]`, `api/job/[id]`.
- `actions/*` — `"use server"` server actions (`login`, `logout`) that call the API endpoints.
- Email is sent via SendGrid (`@sendgrid/mail`) and/or Nodemailer; SMTP creds come from `.env`.

### Data & auth

- `src/lib/db/index.ts` — Mongoose connection singleton (reuses `mongoose.connection.readyState`), always uses dbName `bpaas`. Connection string is selected by `NEXT_PUBLIC_CONFIG` (`LOCAL` → `MONGODB_URI_LOCAL`, `PROD` → `MONGODB_URI_PROD`).
- `src/lib/db/models/*` — Mongoose models: `job`, `applicant`, `user`.
- Auth is JWT via `jose` (HS256), signed/verified in `src/app/api/user/login/auth-helpers.ts`, stored in an httpOnly `accessToken` cookie. Passwords hashed with `bcryptjs`. The admin dashboard lives at `src/app/auth/dashboard/{jobs,user}`.

### Config-driven navigation & endpoints

- `src/utils/constants/index.ts` — `Routes` enum is the source of truth for public URLs; `src/utils/types/enums.ts` — `RouteNames` (auth routes), `CookieKeys`, etc.
- `src/utils/constants/endpoints.ts` — API base URL switches on `NEXT_PUBLIC_CONFIG` between `NEXT_PUBLIC_BASE_URL_LOCAL` and `NEXT_PUBLIC_BASE_URL_PROD`; exports `JOB`, `LOGIN`, `USER`.
- `NEXT_PUBLIC_CONFIG` (`LOCAL` | `PROD`) is the central switch controlling both DB and API base URL.

### Providers & middleware

- `src/providers/index.tsx` wraps the app in `ThemeProvider` → `AppProvider` (also `TokenProvider`, `Helper`). Root layout (`src/app/layout.tsx`) mounts providers plus `next/font` (Geist/Manrope/Inter), `NextTopLoader`, `react-toastify`, ImageKit provider, and Analytics.
- `src/middleware.ts` injects an `x-pathname` request header on all non-asset routes (so server components can read the current path); it does **not** do auth gating.

### UI stack

Tailwind CSS v4 (`@tailwindcss/postcss`), Framer Motion / `motion`, GSAP, Three.js via `@react-three/fiber` + `drei`, `ogl`, Vanta, and Lottie for the heavy animated marketing sections. Images are served through ImageKit (`@imagekit/next`).

## Notes

- `.env` currently holds real SMTP credentials in plaintext and is tracked oddly — treat it as sensitive and do not echo its values.
