# Engineering Portfolio Website Instructions

## Purpose

Build a professional multi-page engineering portfolio website for a mid-to-senior backend engineer with strong experience in real-time systems, distributed systems, infrastructure, and performance optimization.

This portfolio must present engineering thinking clearly. Favor architecture, trade-offs, measurable impact, and decision-making over decorative visuals or generic self-promotion.

## Product Goals

- Showcase how complex systems were designed, operated, and improved.
- Emphasize architecture, scalability, resilience, and performance.
- Make project case studies feel credible to technical hiring managers and engineering leaders.
- Keep the UI content-first, restrained, and professional.
- Ensure all core content is complete in both Korean and English.

## Tech Constraints

- Use Next.js with App Router.
- Use TypeScript with strict typing.
- Use Tailwind CSS for styling.
- Target deployment on Vercel.
- Store portfolio content in MDX or structured data.
- Avoid heavy UI libraries unless there is a clear product or accessibility reason.
- Avoid `any`, implicit loose typing, and hardcoded copy inside UI components.

## Site Architecture

This site is multi-page, not a single-page landing page.

Required pages:

- Home
- Projects list
- Project detail / case study

Optional pages:

- About
- Resume

Preferred route structure:

- `app/[locale]/page.tsx`
- `app/[locale]/projects/page.tsx`
- `app/[locale]/projects/[slug]/page.tsx`
- `app/[locale]/about/page.tsx`
- `app/[locale]/resume/page.tsx`

Use shared layouts and reusable page-level sections, but do not over-abstract simple content blocks.

## Internationalization

Internationalization is a core requirement, not an enhancement.

### Locales

- Primary language: Korean
- Secondary language: English
- Supported locales: `ko`, `en`
- Default experience should prioritize Korean

### URL Strategy

Use locale-based routing:

- `/ko`
- `/en`

Every major page and project detail page must exist in both locales.

### Language Switcher

Always provide a visible language switcher, typically in the top-right area of the header.

Requirements:

- Preserve the current page when switching locales.
- Example: `/ko/projects/mobility` must switch to `/en/projects/mobility`.
- Do not send users back to the home page when changing language.
- Do not implement language switching with fragile string replacement spread across components. Centralize locale-aware path handling.

### Content Model

Do not hardcode user-facing strings inside components.

Preferred approaches:

1. MDX per locale, such as:
   - `content/ko/projects/<slug>.mdx`
   - `content/en/projects/<slug>.mdx`
2. Structured content files per locale, such as JSON, YAML, or TypeScript data modules.

Use one consistent approach across the project.

### Writing Strategy Per Locale

Do not translate word-for-word.

- Korean copy should feel professional, concise, and slightly formal.
- English copy should feel technical, direct, and natural.
- Both versions must communicate the same substance, impact, and reasoning.
- Never allow one locale to omit sections that exist in the other.

When generating bilingual content, preserve meaning, proof points, and technical credibility across both languages.

## Content Strategy

This portfolio should read like a strong engineering case-study site, not a resume pasted into a web page.

Always prioritize:

- why a decision was made
- what constraints mattered
- what trade-offs were accepted
- what outcome changed
- how impact was measured

Avoid shallow statements such as:

- "Built API with Node.js"
- "Improved performance"
- "Worked on microservices"

Prefer statements like:

- what bottleneck existed
- what design options were considered
- why a specific architecture was selected
- what measurable result followed

## Writing Rules

Write like a senior engineer explaining important work to another engineer.

Guidelines:

- Be concrete, not inflated.
- Explain trade-offs, not just outcomes.
- Use measurable impact whenever possible.
- Avoid buzzwords unless they are supported by implementation details.
- Keep paragraphs compact and readable.
- Favor structured sections, short lists, and scannable headings.
- Make project descriptions understandable to both engineering managers and senior individual contributors.

## Page Requirements

### Home

The home page should establish professional credibility quickly.

Include:

- Strong headline
- Short introduction
- Up to 2 featured projects
- Skills or expertise snapshot
- Contact section

The home page should not become a dense wall of content. It should guide readers toward project case studies.

### Projects Page

The projects page must be highly scannable.

Each item should include:

- Title
- Short summary
- Core domain or system type
- Impact or measurable result

Project cards should be concise and aligned consistently.

### Project Detail Page

Every project detail page must behave like a technical case study.

Required sections:

1. Overview
2. Problem
3. My Role
4. Architecture
5. Key Decisions
6. Challenges and Solutions
7. Impact

Preferred additional sections when useful:

- Constraints
- Alternatives Considered
- Performance Results
- Reliability or Operations Notes
- What I Would Improve Next

Each case study should make the reader understand both the system and the engineer's judgment.

## Design Direction

The visual style must be minimalist, clean, and professional.

Use a design language inspired by technical documentation, engineering blogs, and mature product marketing pages with restraint.

### Layout Principles

- Strong typographic hierarchy
- Clear section separation
- Generous whitespace
- Consistent grid and spacing system
- Comfortable reading width for long-form case study content
- Stable mobile and desktop behavior

Prefer a readable max-width layout instead of overly wide content.

### Typography

- Prioritize readability over personality.
- Use highly legible font choices such as Inter or a comparable neutral sans-serif.
- Create clear distinction between headline, section heading, eyebrow label, and body text.
- Keep line lengths controlled for long-form content.

### Color System

- Use a neutral base.
- Limit the palette to 2 or 3 core colors.
- Use accents sparingly.
- Prefer subtle borders, muted surfaces, and restrained contrast changes over bright decorative effects.

### Motion

- Keep animation minimal.
- Use motion only when it improves comprehension or polish.
- Avoid flashy transitions, parallax, or animated hero gimmicks.

### Components

Component styling should be calm and consistent.

Use:

- clean cards
- subtle borders or soft shadows
- consistent radius choices
- disciplined spacing
- precise alignment

Optional terminal-style accents may be used lightly for:

- code blocks
- system labels
- architecture metadata

Do not let terminal styling dominate the interface.

## Frontend Implementation Guidance

Favor simple, maintainable composition.

Guidelines:

- Use focused functional components.
- Keep presentational components reusable and composable.
- Keep page components responsible for layout and composition.
- Keep content loading and transformation logic separate from UI rendering where practical.
- Avoid premature abstraction.
- Prefer server components by default and use client components only where interactivity is needed.
- Use semantic HTML and accessible patterns.
- Ensure keyboard accessibility for navigation and language switching.

Suggested structure:

- `app/[locale]/...` for routes
- `components/` for shared UI
- `content/` for MDX or structured content
- `lib/` for content loading, locale helpers, metadata builders, and utility functions
- `types/` for shared TypeScript types

## Content and Data Modeling

Model projects as structured case studies rather than loose blog posts.

Each project entry should support fields such as:

- `slug`
- `locale`
- `title`
- `summary`
- `role`
- `period`
- `stack`
- `problem`
- `architecture`
- `decisions`
- `challenges`
- `impact`
- `featured`
- `order`
- `seo`

If using MDX, use frontmatter for metadata and typed helpers to validate content shape.

## Diagrams and Architecture Assets

Architecture communication is important.

Use Mermaid diagrams or static images when they clarify a system.

Rules:

- Keep diagrams simple.
- Prefer explanatory diagrams over decorative diagrams.
- Show system boundaries, data flow, and major components.
- Avoid clutter, tiny labels, and unnecessary infrastructure detail.

## Performance and SEO

Follow Next.js best practices.

Requirements:

- Generate proper metadata per locale.
- Use descriptive titles and summaries for each page and project.
- Optimize images.
- Avoid unnecessary client-side JavaScript.
- Prefer static generation or cached server rendering where appropriate for content pages.
- Keep layout shifts low.
- Ensure locale pages are indexable and internally linked clearly.

## What to Avoid

- Heavy UI frameworks for simple marketing-style pages
- Excessive animation
- Generic portfolio clichés
- Resume dump content without explanation
- Poor bilingual consistency
- Word-for-word translations
- Overly decorative dashboards or fake terminal hero sections
- Components that mix content, layout, and locale logic in one place

## Copilot Output Expectations

When generating code, content structures, or UI for this project, always:

- respect the bilingual `ko` and `en` route model
- preserve the same content coverage in both locales
- generate maintainable TypeScript-first code
- produce clean Tailwind styling with restrained visual design
- prioritize engineering storytelling over generic marketing copy
- include architecture, decisions, and impact when generating project content
- avoid placeholder buzzwords and vague claims

## Example Requests

Examples of good tasks for this repository:

- Create a bilingual project detail page with architecture and key decisions sections.
- Generate a language switcher for Next.js App Router that preserves the current route.
- Create an MDX content structure for Korean and English project case studies.
- Build a minimal responsive project card with title, summary, and impact.
- Add locale-aware metadata generation for project detail pages.

## Decision Standard

When multiple implementation options are possible, prefer the option that best supports:

- bilingual maintainability
- content clarity
- long-term readability
- low visual noise
- strong technical storytelling
- simple deployment on Vercel

If a feature does not improve clarity, credibility, accessibility, or maintainability, it probably should not be added.
