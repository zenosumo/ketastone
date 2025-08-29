# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15.5.2 project using the App Router architecture with TypeScript and Tailwind CSS. The project is set up with shadcn/ui components and uses Turbo for faster development builds.

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production with Turbopack  
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code linting

## Architecture

### Core Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS 4.0 with CSS variables
- **UI Components**: shadcn/ui with "new-york" style and "stone" base color
- **Icons**: Lucide React
- **Fonts**: Geist Sans and Geist Mono from Google Fonts

### Directory Structure
- `src/app/` - Next.js App Router pages and layouts
- `src/lib/` - Utility functions and shared libraries
- `@/components` - React components (shadcn/ui components go in `@/components/ui`)
- `@/lib` - Library utilities
- `@/hooks` - Custom React hooks

### Key Configuration
- **TypeScript**: Configured with strict mode and path aliases (`@/*` maps to `./src/*`)
- **ESLint**: Uses Next.js core-web-vitals and TypeScript presets
- **shadcn/ui**: Configured with CSS variables, Lucide icons, and component aliases
- **Tailwind**: Uses PostCSS 4.0 configuration

### Utility Functions
- `cn()` function in `src/lib/utils.ts` combines clsx and tailwind-merge for className management

## shadcn/ui Integration

The project is fully configured for shadcn/ui components:
- Components are installed to `@/components/ui`
- Uses CSS variables for theming with "stone" base color
- Lucide React for icons
- All aliases are pre-configured in `components.json`