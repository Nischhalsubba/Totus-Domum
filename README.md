<div align="center">

<img width="1200" height="475" alt="Totus Domum project banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />

# 🏡 Totus Domum

### AI Studio–generated React application refined for modern frontend deployment

**A Vite + React + TypeScript app using Tailwind CSS, Framer Motion, and Lucide icons — configured for local development, production builds, and GitHub Pages deployment.**

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=111111)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Motion-Framer%20Motion-111111?style=for-the-badge)
![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)

</div>

---

## ✨ Overview

**Totus Domum** is a React application created from an AI Studio workflow and prepared as a modern Vite frontend project. The repository includes everything needed to run the app locally, build it for production, preview the build, and deploy it to GitHub Pages.

The project uses a clean frontend stack:

- React for the UI
- TypeScript for safer development
- Vite for fast build/dev workflow
- Tailwind CSS for utility-first styling
- Framer Motion for animation
- Lucide React for iconography
- GitHub Pages deployment through `gh-pages`

---

## 🧭 Table of Contents

- [Project Context](#-project-context)
- [Designer’s Perspective](#-designers-perspective)
- [Tech Stack](#-tech-stack)
- [Scripts](#-scripts)
- [Environment Setup](#-environment-setup)
- [Run Locally](#-run-locally)
- [Build & Preview](#-build--preview)
- [Deployment](#-deployment)
- [Suggested Repository Structure](#-suggested-repository-structure)
- [Design & UX Notes](#-design--ux-notes)
- [Quality Checklist](#-quality-checklist)
- [Roadmap](#-roadmap)

---

## 🧩 Project Context

The original generated README points to an AI Studio app and includes Gemini API setup instructions. This means the project may include or may be intended to include AI-assisted functionality.

AI Studio link from the original project documentation:

```text
https://ai.studio/apps/drive/1s1mKcprGOLJtt2H5L9gPB3zvbM8Aa8bq
```

Because AI Studio projects can evolve quickly, this README documents the actual repository setup and avoids making claims that are not visible from the codebase metadata.

---

## 🎨 Designer’s Perspective

This repository is useful as a design-to-code exploration: a generated app that can be refined into a cleaner, more intentional product interface.

When working on this app, the key design goals should be:

- make the core purpose obvious from the first screen
- keep AI-generated UI patterns consistent
- replace placeholder copy with product-specific language
- use Framer Motion subtly, not excessively
- keep Tailwind classes organized and readable
- make the GitHub Pages deployment feel production-ready
- add screenshots and feature documentation once the app flow is finalized

A good README for this repo should not only say “run npm install.” It should explain the stack, deployment path, environment variables, and the product-design work needed to move from generated prototype to polished frontend.

---

## 🛠 Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| UI | React `18.2.0` | Component-based frontend |
| Language | TypeScript `5.x` | Type safety and maintainability |
| Build Tool | Vite `5.x` | Fast development and production builds |
| Styling | Tailwind CSS `3.4.x` | Utility-first responsive design |
| Motion | Framer Motion | Animated UI transitions and interaction polish |
| Icons | Lucide React | Clean icon system |
| Deployment | GitHub Pages + `gh-pages` | Static deployment workflow |

---

## 📜 Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Runs TypeScript build check and Vite production build |
| `npm run preview` | Previews the production build locally |
| `npm run predeploy` | Builds the app before deployment |
| `npm run deploy` | Deploys the `dist` folder to GitHub Pages |

---

## 🔐 Environment Setup

The original AI Studio setup references a Gemini API key.

Create a local environment file:

```bash
touch .env.local
```

Add your Gemini API key if the app uses Gemini-powered features:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

> Do not commit real API keys to GitHub. Keep `.env.local` private and use hosting environment variables for production if AI features are connected.

---

## 🚀 Run Locally

### Prerequisites

- Node.js `18+`
- npm

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```text
http://localhost:5173/
```

---

## 🏗 Build & Preview

### Production build

```bash
npm run build
```

### Preview production output

```bash
npm run preview
```

The production build is generated in:

```text
dist/
```

---

## 🌐 Deployment

The repository is configured with this homepage:

```text
https://nischhalsubba.github.io/Totus-Domum/
```

Deploy to GitHub Pages:

```bash
npm run deploy
```

This runs the configured deployment workflow using `gh-pages -d dist`.

---

## 📁 Suggested Repository Structure

A typical Vite + React + TypeScript project structure:

```text
.
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── components/
│   ├── assets/
│   └── styles/
└── README.md
```

> The exact source structure may vary depending on how the AI Studio export was generated and refined.

---

## 🎯 Design & UX Notes

### Recommended polish direction

- Add a clear product description in the hero.
- Add screenshots to this README.
- Add a “Features” section after core functionality is finalized.
- Audit mobile responsiveness.
- Keep animations lightweight and purposeful.
- Add loading and empty states if the app depends on AI responses.
- Add friendly error states for missing/invalid API keys.

### Motion guidance

Framer Motion should support flow and feedback. Avoid motion that feels decorative without helping the user understand the app.

---

## ✅ Quality Checklist

### Technical QA

- [ ] `npm install` works.
- [ ] `npm run dev` works.
- [ ] `npm run build` succeeds.
- [ ] `npm run preview` works.
- [ ] `npm run deploy` publishes to GitHub Pages.
- [ ] No API keys are committed.
- [ ] GitHub Pages base path works correctly.

### Design QA

- [ ] First screen explains the app clearly.
- [ ] UI is consistent across pages/components.
- [ ] Mobile layout is usable.
- [ ] Animations do not distract.
- [ ] Icons are used consistently.
- [ ] Empty/loading/error states are designed.

---

## 🗺 Roadmap

- Add screenshots or GIF previews.
- Document the actual app features after finalizing the product flow.
- Add `.env.example` for safe API setup.
- Add clearer AI usage documentation if Gemini features are active.
- Add accessibility review.
- Add SEO metadata for static deployment.
- Add GitHub Pages troubleshooting notes.

---

<div align="center">

Built and maintained by **Nischhal Raj Subba**.

</div>
