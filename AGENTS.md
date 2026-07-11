# Repository Instructions

## Setup

Totus Domum is a Vite, React, TypeScript, Tailwind CSS, and Framer Motion landing page.

```bash
npm install
npm run dev
```

Use Node.js 22 or newer and npm 10 or newer, matching `package.json`.

## Commands

| Task | Command |
|---|---|
| Start development server | `npm run dev` |
| Type-check | `npm run typecheck` |
| Build production bundle | `npm run build` |
| Run the repository check | `npm run check` |
| Preview production output | `npm run preview` |
| Deploy to GitHub Pages | `npm run deploy` |

## Key files

- `index.tsx`: mounts the React application.
- `App.tsx`: controls the preloader and page-section order.
- `components/`: section and interaction components.
- `constants.ts`: service content and client request note.
- `index.css`: global CSS and brand-level behavior.
- `tailwind.config.js`: typography and brand color tokens.
- `vite.config.ts`: Vite and deployment-base configuration.
- `docs/PRODUCT_AND_ENGINEERING_CASE_STUDY.md`: product and architecture reference.

## Coding conventions

- Keep components focused on one section or interaction.
- Preserve the editorial black, alabaster, and muted-gold visual system unless intentionally redesigning it.
- Use semantic HTML before adding decorative wrappers.
- Keep Framer Motion transitions purposeful and respect reduced-motion preferences.
- Store repeatable content in data objects rather than duplicating markup.
- Avoid adding a backend assumption to the contact form without implementing submission, validation, privacy handling, and error states.
- Treat external image URLs as replaceable content dependencies.

## Testing and verification

Before committing:

1. Run `npm run check`.
2. Run `npm run preview` and inspect the production build.
3. Test desktop, tablet, and mobile widths.
4. Verify keyboard navigation and focus visibility.
5. Test with `prefers-reduced-motion` enabled.
6. Confirm the GitHub Pages base path works.
7. Confirm no credentials or API keys are committed.

## Do not

- Do not describe the contact form as functional until a submission service exists.
- Do not present the generated repository thumbnail as a browser screenshot.
- Do not remove the GitHub Pages base path without changing deployment strategy.
- Do not make the 2.8-second preloader longer.
- Do not depend on hover-only behavior for essential actions.
- Do not commit `dist/`, secrets, or local environment files unless the deployment workflow explicitly requires them.
