# Wanderlust Explorer

Multipage travel-experience explorer built with Next.js, React, TypeScript, and a local dataset of 100 experiences.

## Diseño y Referencias (Design References)

Before implementing the UI, I reviewed these real discovery products:

1. **[GetYourGuide](https://www.getyourguide.com/)** — reference for the prominent search area, destination discovery sections, activity cards, ratings, prices, and save/favorite affordances.
2. **[Airbnb Experiences](https://www.airbnb.com/experiences)** — reference for editorial discovery, photography-led cards, and a clean, spacious travel marketplace layout.
3. **[Viator](https://www.viator.com/)** — reference for organizing a large catalog through search, destination/category browsing, and concise experience metadata.

The final interface combines these patterns with a quieter editorial visual direction: serif headlines, warm neutral backgrounds, orange accents, large photography, and compact filter controls.

## Features

- `/` hero landing page with a link to the explorer.
- `/experiences` searchable catalog with category and destination filters.
- Query parameters are shareable: `/experiences?search=vela&category=Adventure&destination=Croatia`.
- `/experiences/[id]` dynamic detail page backed by the local dataset.
- `/favorites` saved experiences using a top-level React state provider for the MVP.
- `/profile` simulated user profile with a live saved-favorites count from that provider.
- **Spanish routes**: `/experiencias`, `/experiencias/[id]`, `/favoritas`, `/perfil` — bilingual support mirroring all English routes.

## Project Structure

The app follows a modular architecture with dedicated files for concerns:

- **`src/hooks/useExperiencesFilter.ts`** — custom hook that encapsulates all filtering logic: URL query param sync, regex search, category/destination filters.
- **`src/components/SearchBar.tsx`** — reusable search input component.
- **`src/components/FilterGroup.tsx`** — reusable category + destination dropdowns.
- **`src/app/components.tsx`** — shared components: `Navigation` (with active link styling via `usePathname`), `FavoritesProvider` (React Context + `useState`), `ExperienceCard`, `FavoriteButton`, `FavoriteExperienceList`.
- **`src/data/experiences.ts`** — local dataset of 100 typed experiences.

## Getting Started

This project was initialized with `create-next-app` using TypeScript, Tailwind CSS, and the App Router. The generated setup includes `src/app`, `tsconfig.json`, `postcss.config.mjs`, and the Next.js App Router conventions.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
