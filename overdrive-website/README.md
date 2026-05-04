# OverDrive Website

Frontend marketing/landing website for the OverDrive project, built with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, and React Three Fiber.

## Prerequisites

- Node.js 20+
- npm 10+

## Quick Start

```bash
npm install
npm run dev
```

App runs on `http://localhost:3000`.

## Scripts

```bash
npm run dev    # start dev server
npm run build  # production build
npm run start  # run production server
npm run lint   # run ESLint
```

## Project Structure

```text
overdrive-website/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    Hero/
      Hero.tsx
    Navbar/
      Navbar.tsx
      navbar.css
    Footer/
      Footer.tsx
      footer.css
    PageTransitions.tsx
  public/
    models/
      bmw_m_hybrid_v8.glb
  package.json
  tsconfig.json
  next.config.ts
  postcss.config.mjs
  eslint.config.mjs
```

## Key Features

- `components/Hero/Hero.tsx`
  - Client-side 3D hero using `@react-three/fiber` and `@react-three/drei`.
  - Scroll-driven model animation: rotates the car 45° and then zooms into the scene.
  - Mouse-following light and a preloaded glTF car model for smooth performance.

- `app/page.tsx`
  - Home page includes an introductory overlay on first load.
  - Main landing content fades in after the intro overlay dismisses.
  - Page sections are built as reusable content blocks for vision, problem, and solution.

- `components/PageTransitions.tsx`
  - Route-level fade animations for navigation.
  - The home page uses a simplified entry animation to avoid overlap with the intro overlay.

## Notes

- The active homepage uses a full-screen fixed background canvas, so `Hero` is rendered behind interactive page sections.
- The 3D model asset is located in `public/models/bmw_m_hybrid_v8.glb` and is preloaded with `useGLTF.preload`.
- If you see a Next.js workspace root warning during build, run commands from this folder and keep the lockfile at the project root.

## Conventions

- Preserve current visual styling unless a change is specifically requested.
- Favor small, behavior-preserving refactors for cleanup.
- Add comments only for non-trivial animation or scroll logic.
- Keep reusable styles and layout decisions centralized when possible.
