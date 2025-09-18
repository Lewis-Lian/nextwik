# Copilot Instructions for nextwiki

## Project Overview
- **Framework:** Next.js (App Router, React Server Components)
- **Docs Engine:** [Fumadocs](https://fumadocs.vercel.app) (MDX-based, highly composable)
- **Purpose:** Build beautiful, flexible documentation sites with interactive components, full-text search, and custom theming.

## Key Architecture & Patterns
- **Content Source:**
  - All docs content is in `content/docs/` (MDX, meta.json, nested folders).
  - `lib/source.ts` uses `fumadocs-core/source` to expose docs as a typed API for the app.
  - `source.config.ts` customizes schemas for frontmatter/meta (see Fumadocs docs for Zod schema usage).
- **App Structure:**
  - `app/(home)`: Landing and marketing pages.
  - `app/docs`: Documentation UI and routing.
  - `app/api/search/route.ts`: Search API, powered by Fumadocs search utilities.
  - `components/`: UI and doc-specific components (e.g., `code-block.tsx`, `feedback.tsx`).
- **UI System:**
  - Uses [fumadocs-ui](https://fumadocs.vercel.app/docs/ui) and [shadcn/ui](https://ui.shadcn.com/) for design system and interactive blocks.
  - Tailwind CSS for styling (`global.css`, custom themes in `/public/themes/`).
- **Feedback & GitHub Integration:**
  - User feedback is handled in `components/feedback.tsx` and sent to GitHub Discussions via `lib/github.ts`.

## Developer Workflows
- **Start Dev Server:**
  - `npm run dev` (or `pnpm dev`, `yarn dev`)
  - App runs at http://localhost:3000
- **Build for Production:**
  - `npm run build` (Next.js static export)
- **Content Editing:**
  - Add/edit MDX files in `content/docs/`.
  - Update `meta.json` for navigation/metadata.
- **Customizing Docs:**
  - Edit `source.config.ts` for schema, MDX options.
  - Use `lib/layout.shared.tsx` for shared layout logic.
- **Search Integration:**
  - Extend `app/api/search/route.ts` for custom search logic (see Fumadocs search/server docs).

## Project Conventions
- **MDX:**
  - Use frontmatter for title/description.
  - Components can be embedded in MDX (see `content/docs/test.mdx`).
- **TypeScript:**
  - All code is TypeScript-first.
  - Prefer explicit types and interfaces, especially for exported functions/components.
- **Imports:**
  - Use `@/` alias for root imports (configured in `tsconfig.json`).
- **Design:**
  - Use Fumadocs UI components for consistency.
  - Theme via Tailwind and Fumadocs presets.

## External Integrations
- **Fumadocs:**
  - Core for content loading, search, and UI blocks.
- **GitHub:**
  - Feedback and contributor info pulled via GitHub API.
- **Orama/Algolia:**
  - Optional: Integrate for advanced search (see `/docs/headless/search/algolia`).

## Examples
- See `content/docs/test.mdx` for MDX with embedded components.
- See `lib/source.ts` and `source.config.ts` for content source setup.
- See `app/api/search/route.ts` for search API pattern.

---
For more, see [README.md](../README.md) and [Fumadocs docs](https://fumadocs.vercel.app).
