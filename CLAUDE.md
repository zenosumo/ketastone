# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15.5.2 project using the App Router architecture with TypeScript and Tailwind CSS. The project is set up with shadcn/ui components and uses Turbo for faster development builds.

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production with Turbopack
- `npm run lint` - Run ESLint for code linting
- `npm start` - Start production server
- `npm test` - Run Jest test suite
- `npm test:watch` - Run tests in watch mode

## Project Purpose

A platform designed to host a foundational agent/chatbot memory-aware diet and fitness as a coach for multiple personas. The webapp initially runs an assessment (goals, health flags, cultural/seasonal food prefs, constraints) to pick diet style and macro targets, then adapts plans via daily nudges or weekly reviews. Tracks weight, body-fat, adherence, calories, and training; suggests seasonal, regional food menus; handles relapses with corrective prompts. Enforces safety rails and GDPR, logs rationale to memories, and maintains a transparent refusal policy. Roadmap: bioimpedance scales, food diary, wearables, and richer analytics.
Comprehenisive business marketing analysis, use `/context/business-marketing.md` to have better understanding of business functionalality.

## Architecture

This is a Next.js 15 project AI Agent/Chatbot expert in nutrition and diet powered by LLM OpenAI ChatGPT
When imlementing new features take in consideration how we intend to implement use this file `/context/architecture.md`

### Core Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS 4.0 with CSS variables
- **UI Components**: shadcn/ui with "new-york" style and "stone" base color
- **Icons**: Lucide React icons throughout
- **Fonts**: Geist Sans and Geist Mono from Google Fonts
- **Tooling**: ESLint with TypeScript, React, and Prettier rules
- **Build**: Turbopack for faster builds and development
- **Theme**: Dark mode support with next-themes
- **Animation**: Framer Motion for animations

### Directory Structure

- `src/app/` - Next.js App Router pages and layouts
- `src/lib/` - Utility functions and shared libraries
- `@/components` - React components (shadcn/ui components go in `@/components/ui`)
- `@/lib` - Library utilities
- `@/hooks` - Custom React hooks

### Key Configuration

- **TypeScript**: Configured with strict mode and path aliases (`@/*` maps to `./src/*`)
- **ESLint**: Uses Next.js core-web-vitals and TypeScript presets
- **Tailwind**: Uses PostCSS 4.0 configuration
- **ShadCN**: Components.json configured for potential ShadCN components

### Utility Functions

- `cn()` function in `src/lib/utils.ts` combines clsx and tailwind-merge for className management

## shadcn/ui Integration

The project is fully configured for shadcn/ui components:

- Components are installed to `@/components/ui`
- Uses CSS variables for theming with "stone" base color
- Lucide React for icons
- All aliases are pre-configured in `components.json`

## Visual Development & Testing

### Design System

The project follows S-Tier SaaS design standards inspired by Stripe, Airbnb, and Linear. All UI development must adhere to:

- **Design Principles**: `/context/design-principles.md` - Comprehensive checklist for world-class UI
- **Component Library**: shadcn/ui with custom Tailwind configuration

### Quick Visual Check

**IMMEDIATELY after implementing any front-end change:**

1. **Identify what changed** - Review the modified components/pages
2. **Navigate to affected pages** - Use `mcp__playwright__browser_navigate` to visit each changed view
3. **Verify design compliance** - Compare against `/context/design-principles.md`
4. **Validate feature implementation** - Ensure the change fulfills the user's specific request
5. **Check acceptance criteria** - Review any provided context files or requirements
6. **Capture evidence** - Take full page screenshot at desktop viewport (1440px) of each changed view
7. **Check for errors** - Run `mcp__playwright__browser_console_messages` ⚠️

This verification ensures changes meet design standards and user requirements.

### Playwright MCP Integration

#### Essential Commands for UI Testing

```javascript
// Navigation & Screenshots
mcp__playwright__browser_navigate(url); // Navigate to page
mcp__playwright__browser_take_screenshot(); // Capture visual evidence
mcp__playwright__browser_resize(width, height); // Test responsiveness

// Interaction Testing
mcp__playwright__browser_click(element); // Test clicks
mcp__playwright__browser_type(element, text); // Test input
mcp__playwright__browser_hover(element); // Test hover states

// Validation
mcp__playwright__browser_console_messages(); // Check for errors
mcp__playwright__browser_snapshot(); // Accessibility check
mcp__playwright__browser_wait_for(text / element); // Ensure loading
```

### Design Compliance Checklist

When implementing UI features, verify:

- [ ] **Visual Hierarchy**: Clear focus flow, appropriate spacing
- [ ] **Consistency**: Uses design tokens, follows patterns
- [ ] **Responsiveness**: Works on mobile (375px), tablet (768px), desktop (1440px)
- [ ] **Accessibility**: Keyboard navigable, proper contrast, semantic HTML
- [ ] **Performance**: Fast load times, smooth animations (150-300ms)
- [ ] **Error Handling**: Clear error states, helpful messages
- [ ] **Polish**: Micro-interactions, loading states, empty states

## When to Use Automated Visual Testing

### Use Quick Visual Check for:

- Every front-end change, no matter how small
- After implementing new components or features
- When modifying existing UI elements
- After fixing visual bugs
- Before committing UI changes

### Use Comprehensive Design Review for:

- Major feature implementations
- Before creating pull requests with UI changes
- When refactoring component architecture
- After significant design system updates
- When accessibility compliance is critical

### Skip Visual Testing for:

- Backend-only changes (API, database)
- Configuration file updates
- Documentation changes
- Test file modifications
- Non-visual utility functions
