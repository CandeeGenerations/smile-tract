# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js application called "Smile Tract" - a presentation/slide deck application built with React and Spectacle. The application displays a religious tract as an interactive slideshow with swipeable slides.

## Technology Stack

- **Framework**: Next.js 16.x (Pages Router)
- **React**: 19.2.x
- **Presentation Library**: Spectacle 10.x (slide deck framework)
- **Icons**: Heroicons
- **Styling**: CSS (base.css in src/styles)
- **TypeScript**: Strict mode enabled
- **Deployment**: Netlify (via @netlify/plugin-nextjs)

## Development Commands

### Setup

```bash
# Install dependencies (PNPM only - enforced by preinstall hook)
pnpm install

# Development server (runs on http://localhost:3000)
pnpm run dev

# Production build
pnpm run build

# Start production server
pnpm run start
```

### Code Quality

```bash
# Run ESLint
pnpm run eslint

# Run Prettier (check and fix)
pnpm run prettier

# Fix both ESLint and Prettier
pnpm run fix

# Prettier CI check (no write)
pnpm run prettier:ci
```

## Architecture

### Directory Structure

```
src/
├── pages/
│   ├── _app.tsx          # Next.js App wrapper with global styles and metadata
│   ├── _document.tsx     # Custom HTML document structure
│   ├── index.tsx         # Homepage that renders MainDeck
│   └── _decks/
│       └── MainDeck.tsx  # Main presentation deck with all slides
└── styles/
    └── base.css          # Global styles
```

### Path Aliases

- `@/*` maps to `./src/*` (configured in tsconfig.json)

### Key Architectural Patterns

1. **Presentation-Based Architecture**: The entire application is built around Spectacle's `<Deck>` and `<Slide>` components, creating a swipeable presentation experience.

2. **Single-Deck Pattern**: The main content lives in `MainDeck.tsx`, which contains all slides for the tract presentation. Each slide is a `<Slide>` component within the `<Deck>`.

3. **Custom Page Size**: The deck is configured with portrait orientation (`7.68in x 13.66in`) suitable for mobile viewing.

4. **Navigation**: Slides use arrow icons from Heroicons for visual navigation cues. The last slide includes a "Read from the beginning" link that resets to the first slide.

## Code Quality Tools

### Git Hooks (Husky)

- **pre-commit**: Runs `lint-staged` which executes:
  - Prettier formatting on all supported files
  - ESLint with auto-fix on TypeScript/TSX files
  - `sort-package-json` on package.json
- **commit-msg**: Validates commit messages using Commitlint (conventional commits format)

### Linting

- ESLint configured with TypeScript support
- Uses recommended configs from `@eslint/js` and `typescript-eslint`
- Target files: `src/**/*.{ts,tsx}`

### Formatting

- Prettier with `@trivago/prettier-plugin-sort-imports`
- Configured to handle JS, MD, TS, TSX, CSS, SASS, LESS, YML, YAML, JSON, Vue

## CI/CD

### GitHub Actions (validate-branch.yaml)

Runs on push/PR to main branch:

1. **Prettier check**: `pnpm run prettier:ci`
2. **ESLint**: `pnpm run eslint`

## Environment Requirements

- **Node.js**: >=22.0.0 (specified in .nvmrc and package.json engines)
- **Package Manager**: PNPM >=10.0.0 (enforced by preinstall script)
- **Corepack**: Required for PNPM version management

## Planning and Documentation

- **Plans Directory**: When creating plan markdown files for feature updates or changes, place them in the `plans/` folder at the project root

## Working with Slides

When modifying the presentation:

- All slide content is in `src/pages/_decks/MainDeck.tsx`
- Each `<Slide>` component represents one screen in the presentation
- The theme uses black text on white background (`#000` on `#fff`)
- Navigation arrows are rendered using `<ArrowLongRightIcon>` and `<ArrowLongLeftIcon>` from Heroicons
- Slide navigation is handled by Spectacle's URL-based system (slideIndex/stepIndex query params)

## Next.js Configuration

The application uses:

- React Strict Mode enabled
- Experimental settings: `workerThreads: false`, `cpus: 1`
- Pages Router (not App Router)
