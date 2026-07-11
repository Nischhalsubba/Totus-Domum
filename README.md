<div align="center">

<img src="./docs/assets/totus-domum-repository-thumbnail.svg" width="100%" alt="Totus Domum luxury home management website repository thumbnail" />

# Totus Domum

### The invisible art of living

A premium editorial landing page for a Malta-focused luxury home-management and lifestyle-support concept.

![React](https://img.shields.io/badge/React-18.2-61DAFB?style=flat-square&logo=react&logoColor=111111)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)
![Motion](https://img.shields.io/badge/Motion-Framer-111111?style=flat-square)

[Live site](https://nischhalsubba.github.io/Totus-Domum/) · [Engineering case study](./docs/PRODUCT_AND_ENGINEERING_CASE_STUDY.md)

![Stars](https://img.shields.io/github/stars/Nischhalsubba/Totus-Domum?style=flat-square)
![Forks](https://img.shields.io/github/forks/Nischhalsubba/Totus-Domum?style=flat-square)
![Issues](https://img.shields.io/github/issues/Nischhalsubba/Totus-Domum?style=flat-square)
![Last commit](https://img.shields.io/github/last-commit/Nischhalsubba/Totus-Domum?style=flat-square)

</div>

## Product

Totus Domum presents discreet residence management, lifestyle support, and property-search services for affluent residents in Malta. The interface uses an editorial luxury system built around deep black, warm alabaster, muted gold, serif typography, generous spacing, and controlled motion.

## Experience highlights

- full-screen parallax hero with the positioning line **The Invisible Art of Living**
- timed preloader and custom cursor
- animated navigation and scroll guidance
- horizontally scrolling service cards
- residence management, lifestyle support, and property-search content
- parallax feature story with a glass-like editorial panel
- animated watermark section based on the client concept
- contact area with floating labels and service selection
- responsive Tailwind layout and GitHub Pages deployment

## Architecture

```text
index.tsx
  └── App.tsx
      ├── Preloader
      ├── CustomCursor
      ├── Navigation
      ├── Hero
      ├── IntroSection
      ├── Services
      ├── FeatureSection
      ├── WatermarkSection
      ├── ContactForm
      └── Footer
```

The app is intentionally component-driven. `App.tsx` owns the loading state and section order, `constants.ts` stores the service data, Tailwind defines the brand system, and Framer Motion provides entrance, scroll, hover, and parallax behavior.

## Current implementation status

| Area | Status |
|---|---|
| Editorial landing page | Implemented |
| Responsive section layout | Implemented |
| Motion and parallax | Implemented |
| Service presentation | Implemented |
| GitHub Pages scripts | Configured |
| Contact form submission | Visual only |
| Form validation | Not implemented |
| CMS or admin system | Not implemented |
| Automated tests | Not present |
| Local browser screenshot | Not captured in this pass |

The repository thumbnail is a branded design asset derived from the source design system. It is not presented as a runtime screenshot. A real screenshot should replace or supplement it after the deployed site is manually verified.

## Technology

| Layer | Technology |
|---|---|
| UI | React 18 |
| Language | TypeScript |
| Build | Vite 5 |
| Styling | Tailwind CSS 3.4 |
| Motion | Framer Motion 11 |
| Icons | Lucide React |
| Hosting | GitHub Pages via `gh-pages` |

## Run locally

```bash
npm install
npm run dev
```

Production verification:

```bash
npm run check
npm run preview
```

The package requires Node.js 22 or newer and npm 10 or newer.

## Deployment

```bash
npm run deploy
```

The deployment script builds the application and publishes `dist/` to GitHub Pages.

## Important limitations

- The contact form button uses `type="button"`; it does not submit data.
- The service cards and primary calls to action are presentation elements unless handlers are added.
- The app depends on externally hosted Unsplash and Picsum images.
- The preloader delays access to content for about 2.8 seconds on every mount.
- The custom cursor must be tested carefully for touch devices and accessibility.
- A browser launch could not be performed from the current execution environment because outbound GitHub cloning was unavailable.

## Documentation

- [Product and engineering case study](./docs/PRODUCT_AND_ENGINEERING_CASE_STUDY.md)
- [Repository instructions](./AGENTS.md)
- [Repository thumbnail](./docs/assets/totus-domum-repository-thumbnail.svg)

## Author

Designed and maintained by [Nischhal Raj Subba](https://github.com/Nischhalsubba).
