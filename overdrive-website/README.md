# OverDrive Website

Frontend marketing/landing website for the OverDrive project, built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

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
    Navbar.tsx
    Footer.tsx
    PageTransitions.tsx
  public/
  wiki/
    Home.md
    How-to-Contribute.md
    User-Guide.md
```

## UX and Animation Notes

- `Navbar.tsx`
  - Fixed at top, transparent + blur background.
  - Becomes hidden while scrolling down (after threshold), reappears on up scroll.
  - Forced visible near page bottom to avoid footer overlap issues.
  - Mobile menu uses height/opacity/translate transition classes.

- `app/page.tsx` (Home)
  - Intro overlay is displayed on first mount.
  - Intro dismiss is delayed (`1100ms`) and synchronized with a frame callback.
  - Main hero content is blurred/hidden until intro ends, then fades in.

- `PageTransitions.tsx`
  - Route-level fade in on navigation.
  - Home route skips initial fade to avoid stacking with intro overlay.

## Conventions

- Keep existing visual style unchanged unless explicitly requested.
- Prefer small refactors with no behavioral change for cleanup tasks.
- Add comments only for non-obvious logic (scroll behavior, timing, transitions).
- Reuse centralized constants for repeated links/styles when possible.

## Wiki Pages

- [Home](./wiki/Home.md)
- [How to Contribute](./wiki/How-to-Contribute.md)
- [User Guide](./wiki/User-Guide.md)
