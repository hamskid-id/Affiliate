# AFFILIATE App

A Next.js 15 TypeScript application with Tailwind CSS, Shadcn UI components, React Query, and small utility providers and stores — meant as a starting point for building IFRS-related UIs.

Key features

- Next.js 15 App Router (TypeScript)
- Tailwind CSS (v4) + PostCSS
- Radix UI primitives and Lucide icons
- React Query (TanStack) + React Query Devtools
- Zustand for lightweight state
- React Hook Form + Zod for forms and validation

## Repository layout (Source level)

This project keeps most application source files under `src/`. Key folders are:

- `src/app/` — Next.js App Router pages and layouts (top-level `layout.tsx`, route groups like `(auth)` and `(dashboard)`).
- `src/components/` — Reusable UI components. Subfolders organize areas (e.g. `auth/`, `dashboard/`, `shared/`, `ui/`).
- `src/api/` — API clients and auth helpers (for example `client.ts`, `cookie-auth.ts`, `auth-service.ts`).
- `src/hooks/` — Custom React hooks and query helpers (e.g. `use-queries.ts`, `use-avatar.ts`).
- `src/lib/` — Small utilities and React Query setup (e.g. `react-query.ts`, `utils.ts`).
- `src/providers/` — App-level providers (e.g. `QueryProvider.tsx`).
- `src/schema/` — Zod schemas for form validation (e.g. `sign-in.ts`, `signup.ts`).
- `src/stores/` — State stores (Zustand or context providers).
- `src/types/` — Shared TypeScript types used across the app.
- `public/` — Static assets served by Next.js (e.g. `assets/`).

There are also configuration and tooling files at the repo root (for example `package.json`, `tsconfig.json`, Tailwind/PostCSS and lint configs, and Husky hooks under `list/_`).

## Requirements

- Node.js 20+ (recommended)
- npm, yarn or pnpm
- Recommended editor: VS Code (with TypeScript and Tailwind CSS extensions)

## Quick start (development)

1. Install dependencies

```powershell
npm install
```

2. Run the development server

```powershell
npm run dev
```

Open `http://localhost:3000` in your browser. The project uses Next's Turbopack for local development per the `dev` script.

## Build & production

Build the application for production:

```powershell
npm run build
```

Start the production server (after building):

```powershell
npm run start
```

## Available scripts

Listed from `package.json`:

- `dev` — `next dev --turbopack`
- `build` — `next build --turbopack`
- `start` — `next start`
- `lint` — `next lint`
- `lint-staged` — `lint-staged` (used by pre-commit)
- `format` — `prettier --check .`
- `format:fix` — `npx prettier --write --list-different .`
- `prepare` — `husky || true`

If you use `yarn`/`pnpm`, run equivalent commands (`yarn dev`, `pnpm dev`, etc.).

## Environment variables

Create a `.env.local` at the project root for local development. Example variables (adjust to your needs):

```
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
JWT_SECRET=your_jwt_secret_here
```

Do not commit secrets. Use your hosting platform's environment configuration for production keys.

## Auth and API patterns

- Inspect `api/client.ts` for an Axios instance and interceptors.
- `api/cookie-auth.ts` contains utility functions to read and write cookies for auth tokens (server + client aware).
- `stores/auth-store.ts` contains a small Zustand store for auth state.

When updating cookie or token names, update all references in `api/` and `stores/`.

## Linting, formatting & commit hooks

- Prettier is configured for formatting checks and fixes (`format`, `format:fix`).
- Commitlint and Husky are configured to enforce conventional commit messages and run pre-commit hooks. See `.husky/` and `commitlint.config.ts`.

## Testing

No unit or e2e tests are included by default. Recommended next steps:

- Add unit tests with Jest + React Testing Library
- Add end-to-end tests with Playwright or Cypress

## Deployment

This repo is ready for Vercel deployment. Connect the repository to Vercel and add the required environment variables. Alternatively, you can containerize the app or self-host using Node.

## Contributing

- Follow existing code style and TypeScript usage.
- Run `npm run format:fix` before committing.
- Commit messages should follow conventional commits (commitlint will validate).

## Troubleshooting

- If you see dev server errors, try removing `.next/` and re-running `npm run dev`.
- If types are stale, restart your editor's TS server.
