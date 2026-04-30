# Portfolio Website — Build Checklist

> Follow this checklist in order. Each task is small and self-contained.
> ⚠️ marks steps that are critical to get right early — mistakes here cascade downstream.

---

## 1. Project Setup

### 1.1 Initialize Project

- [x] Run `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*"`
- [x] Confirm `tsconfig.json` has `"strict": true`
- [x] ~~Confirm `tailwind.config.ts` is generated~~ — Tailwind v4: config lives in `app/globals.css` via `@theme inline`, no `tailwind.config.ts`
- [x] Remove boilerplate: cleared `app/page.tsx`, `app/globals.css` defaults, deleted public SVGs, deleted `README.md`

### 1.2 Install Dependencies

- [x] `npm install next-mdx-remote gray-matter` — MDX content loading
- [x] `npm install clsx` — conditional classNames utility
- [x] Confirmed: Next.js 16.2.4, React 19.2.4, TypeScript (devDep)

### 1.3 Configure TypeScript

- [x] `"moduleResolution": "bundler"` — confirmed in `tsconfig.json`
- [x] `"paths": { "@/*": ["./*"] }` — confirmed
- [x] Added `"noUncheckedIndexedAccess": true`

### 1.4 Configure Tailwind

- [x] Set Inter as `--font-sans` via `@theme inline` in `app/globals.css`
- [x] ~~content paths~~ — Tailwind v4 auto-detects; no manual content config needed
- [x] Defined color tokens: `--color-surface`, `--color-accent` (indigo), `--color-surface-2`, `--color-border`, `--color-text`, `--color-text-muted`
- [x] Defined `--max-w-reading: 68ch` and `--max-w-layout: 1100px`

### 1.5 Configure ESLint

- [x] `eslint-config-next` confirmed present
- [x] Added `@typescript-eslint/no-explicit-any: error` rule to `eslint.config.mjs`
- [x] `npm run lint` — passes with zero errors

---

## 2. Folder Structure

⚠️ Set this up before writing any components. Changing it later is painful.

- [x] Create `app/[locale]/` — all locale-scoped routes live here
- [x] Create `components/` — shared UI components
- [x] Create `content/ko/projects/` — Korean MDX files
- [x] Create `content/en/projects/` — English MDX files
- [x] Create `lib/` — content loaders, locale helpers, metadata builders
- [x] Create `types/` — shared TypeScript interfaces
- [x] Create `public/images/projects/` — project screenshots and diagrams

Final structure should look like:

```
app/
  [locale]/
    layout.tsx
    page.tsx
    projects/
      page.tsx
      [slug]/
        page.tsx
    about/
      page.tsx
components/
  layout/
  ui/
  sections/
content/
  ko/projects/
  en/projects/
lib/
  content.ts
  locale.ts
  metadata.ts
types/
  project.ts
  locale.ts
```

> **Copilot prompt:** "Generate the full folder scaffold for a Next.js App Router project with locale routing at `app/[locale]/`, shared components, MDX content per locale, and lib/types directories. Show `mkdir` commands."

---

## 3. Core Architecture

### 3.1 ⚠️ Locale Routing Setup

- [ ] Create `middleware.ts` at the project root to redirect `/` → `/ko`
- [ ] In middleware, detect `Accept-Language` header and redirect to `/ko` or `/en` accordingly
- [ ] Validate redirect does not loop on already-localed paths
- [ ] Test: visiting `localhost:3000/` redirects to `localhost:3000/ko`
- [ ] Test: visiting `localhost:3000/en` stays on `/en`

```ts
// middleware.ts skeleton
import { NextRequest, NextResponse } from "next/server";

const locales = ["ko", "en"] as const;
const defaultLocale = "ko";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = locales.some((l) => pathname.startsWith(`/${l}`));
  if (!hasLocale) {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}`, request.url),
    );
  }
}

export const config = { matcher: ["/((?!_next|favicon.ico|images).*)"] };
```

- [ ] Create `types/locale.ts` — export `Locale = 'ko' | 'en'` and `locales` array

### 3.2 Root Layout

- [ ] Create `app/layout.tsx` — minimal root layout, set `lang` attribute dynamically from locale param
- [ ] Add Inter font via `next/font/google`
- [ ] Import `globals.css`

### 3.3 Locale Layout

- [ ] Create `app/[locale]/layout.tsx` — receives `params: { locale: Locale }`
- [ ] Validate `locale` param against the `locales` array; call `notFound()` for invalid locales
- [ ] Render `<Navbar>` and `<Footer>` inside this layout
- [ ] Pass `locale` as a prop to `Navbar` for language switcher

### 3.4 Type Definitions

- [ ] Create `types/project.ts` — define `Project` interface:
  ```ts
  interface Project {
    slug: string;
    locale: Locale;
    title: string;
    summary: string;
    role: string;
    period: string;
    stack: string[];
    problem: string;
    architecture: string;
    decisions: Decision[];
    challenges: Challenge[];
    impact: string[];
    featured: boolean;
    order: number;
    seo: { title: string; description: string };
  }
  ```
- [ ] Export `Decision` and `Challenge` sub-types from the same file

> **Copilot prompt:** "Generate strict TypeScript types for a portfolio project model with fields: slug, locale, title, summary, role, period, stack, featured, order, seo, and structured sub-types for decisions, challenges, and impact. No `any`."

---

## 4. Internationalization

### 4.1 ⚠️ Locale-Aware Path Helper

- [ ] Create `lib/locale.ts`
- [ ] Export `function localePath(locale: Locale, path: string): string` — prepends `/${locale}`
- [ ] Export `function switchLocale(currentPath: string, targetLocale: Locale): string` — replaces the leading locale segment without breaking the rest of the path
- [ ] Write unit tests or at least inline test cases for `switchLocale`
  - `/ko/projects/mobility` → `/en/projects/mobility`
  - `/en` → `/ko`
  - `/ko` → `/en`

### 4.2 Dictionary / UI Strings

- [ ] Create `lib/dictionaries/ko.ts` and `lib/dictionaries/en.ts`
- [ ] Define a shared `Dictionary` interface in `types/locale.ts`
- [ ] Include keys for: nav labels, page titles, section headings, CTA labels, footer text, 404 message
- [ ] Create `lib/getDictionary.ts` — returns the correct dictionary object given a `Locale`
- [ ] Use this dictionary everywhere — no hardcoded strings in components

> **Copilot prompt:** "Generate a type-safe dictionary system for a Next.js i18n app with locales `ko` and `en`. Create a `Dictionary` interface, two locale files, and a `getDictionary(locale)` function. All keys must be present in both files."

### 4.3 ⚠️ Language Switcher Logic

- [ ] In `Navbar`, receive `locale` and `currentPathname` as props
- [ ] Use `switchLocale()` from `lib/locale.ts` to compute the alternate URL
- [ ] Render a `<Link>` to the alternate URL — do NOT use `router.push` with string replacement
- [ ] Test: switching language from `/ko/projects/foo` goes to `/en/projects/foo`
- [ ] Test: switching from `/ko` goes to `/en`

---

## 5. Content System

### 5.1 MDX Setup

- [ ] Create `lib/content.ts`
- [ ] Implement `getProjectSlugs(locale: Locale): string[]` — reads filenames from `content/{locale}/projects/`
- [ ] Implement `getProject(slug: string, locale: Locale): Promise<ProjectWithContent>` — reads MDX, parses frontmatter with `gray-matter`, returns typed object
- [ ] Implement `getAllProjects(locale: Locale): Promise<Project[]>` — returns all project metadata (no body)
- [ ] Implement `getFeaturedProjects(locale: Locale): Promise<Project[]>` — returns `featured: true` projects sorted by `order`
- [ ] Validate frontmatter shape with a runtime check — throw a descriptive error if required fields are missing
- [ ] Confirm all functions return `Project` type (no implicit `any`)

> **Copilot prompt:** "Generate `lib/content.ts` for a Next.js App Router project. It reads MDX files from `content/{locale}/projects/{slug}.mdx`, parses frontmatter with `gray-matter`, and returns typed `Project` objects. Include `getProject`, `getAllProjects`, `getFeaturedProjects`, and `getProjectSlugs`. No `any`. Throw on missing required fields."

### 5.2 Sample Content — Korean

- [ ] Create `content/ko/projects/sample-project.mdx`
- [ ] Fill frontmatter: slug, title, summary, role, period, stack, featured, order, seo
- [ ] Write body sections: `## 개요`, `## 문제`, `## 역할`, `## 아키텍처`, `## 핵심 결정`, `## 도전과 해결`, `## 성과`
- [ ] Content must be substantive — no lorem ipsum; describe a real or plausible backend system

### 5.3 Sample Content — English

- [ ] Create `content/en/projects/sample-project.mdx`
- [ ] Match frontmatter slug exactly to Korean version
- [ ] Write the same sections in English: `## Overview`, `## Problem`, `## My Role`, `## Architecture`, `## Key Decisions`, `## Challenges and Solutions`, `## Impact`
- [ ] Verify: same number of sections, same factual claims, no content gaps between locales

> **Copilot prompt:** "Write a bilingual MDX case study for a backend engineering portfolio. Topic: a real-time event streaming system. Korean version in `content/ko/projects/realtime-platform.mdx`, English in `content/en/projects/realtime-platform.mdx`. Include: problem statement, architecture decisions, trade-offs, measurable impact. Frontmatter must match the `Project` TypeScript type."

---

## 6. Design System

### 6.1 Global Styles

- [ ] In `app/globals.css`, set base `font-family` to Inter via CSS variable
- [ ] Define root CSS variables for color tokens: `--color-surface`, `--color-accent`, `--color-muted`, `--color-text`, `--color-border`
- [ ] Set `box-sizing: border-box` and remove default margins on `body`
- [ ] Set `scroll-behavior: smooth`

### 6.2 Typography Scale

- [ ] Define Tailwind typography classes in `tailwind.config.ts`:
  - `text-display` — hero headings
  - `text-title` — page/section headings
  - `text-body` — body text, comfortable line-height
  - `text-label` — small uppercase eyebrow labels
  - `text-mono` — code and system metadata
- [ ] Set `max-w-prose` or custom `max-w-reading` for long-form content blocks

### 6.3 Spacing and Layout

- [ ] Define `container` defaults in Tailwind config: centered, max-width ~1100px, horizontal padding
- [ ] Create `components/layout/Section.tsx` — consistent section wrapper with vertical padding
- [ ] Create `components/layout/Container.tsx` — centered max-width wrapper

### 6.4 Color Palette

- [ ] Define in Tailwind config:
  - `neutral-50` through `neutral-900` as the base scale
  - One accent color (e.g., indigo or slate-blue)
  - Muted surface for cards and code blocks
- [ ] Confirm: no more than 3 non-neutral colors in the entire UI

---

## 7. Core Components

### 7.1 Navbar

- [ ] Create `components/layout/Navbar.tsx`
- [ ] Props: `locale: Locale`, `currentPath: string`
- [ ] Render logo/name (text-based, no heavy image)
- [ ] Render nav links: Home, Projects, About — using `localePath(locale, '/projects')`
- [ ] Render `LanguageSwitcher` component (sub-component or inline)
- [ ] Language switcher: shows current locale, links to alternate locale path
- [ ] Mobile: hamburger or collapsible menu
- [ ] Keyboard accessible: all nav items focusable
- [ ] Test: active link state on current route

### 7.2 Footer

- [ ] Create `components/layout/Footer.tsx`
- [ ] Props: `locale: Locale`, `dict: Dictionary`
- [ ] Include: copyright, GitHub link, locale-appropriate text
- [ ] Keep minimal — no decorative bloat

### 7.3 Project Card

- [ ] Create `components/ui/ProjectCard.tsx`
- [ ] Props: `project: Project`, `locale: Locale`
- [ ] Render: title, summary, stack tags, impact snippet
- [ ] Link wraps entire card — `<Link href={localePath(locale, /projects/${project.slug})}>`
- [ ] Hover state: subtle border or shadow change only — no animations
- [ ] Stack tags: small pills, neutral background
- [ ] No `any` prop types

### 7.4 Section Components

- [ ] Create `components/sections/Hero.tsx` — headline, subheading, CTA
- [ ] Create `components/sections/FeaturedProjects.tsx` — renders up to 2 `ProjectCard`s
- [ ] Create `components/sections/SkillsSnapshot.tsx` — grouped list of expertise areas
- [ ] Create `components/sections/ContactSection.tsx` — email, GitHub, LinkedIn links

---

## 8. Pages

### 8.1 Home Page

- [ ] Create `app/[locale]/page.tsx`
- [ ] Fetch `getFeaturedProjects(locale)` as a server component
- [ ] Fetch `getDictionary(locale)` for UI strings
- [ ] Compose: `<Hero>` + `<FeaturedProjects>` + `<SkillsSnapshot>` + `<ContactSection>`
- [ ] No `'use client'` — this page is fully static
- [ ] Generate `metadata` with `generateMetadata({ params })` using locale-specific title/description

### 8.2 Projects List Page

- [ ] Create `app/[locale]/projects/page.tsx`
- [ ] Fetch `getAllProjects(locale)`, sort by `order`
- [ ] Render a scannable list of `<ProjectCard>` components
- [ ] Page heading + short description (locale-aware)
- [ ] Generate `metadata` per locale
- [ ] No client components needed

### 8.3 ⚠️ Project Detail Page

- [ ] Create `app/[locale]/projects/[slug]/page.tsx`
- [ ] Implement `generateStaticParams()` — returns all `{ locale, slug }` combinations
- [ ] Fetch `getProject(slug, locale)` — call `notFound()` if missing
- [ ] Render all required sections using the MDX body via `next-mdx-remote`
- [ ] Section structure:
  - [ ] `## Overview` / `## 개요`
  - [ ] `## Problem` / `## 문제`
  - [ ] `## My Role` / `## 역할`
  - [ ] `## Architecture` / `## 아키텍처`
  - [ ] `## Key Decisions` / `## 핵심 결정`
  - [ ] `## Challenges and Solutions` / `## 도전과 해결`
  - [ ] `## Impact` / `## 성과`
- [ ] Create `components/ui/MdxContent.tsx` — renders MDX with custom component overrides (headings, code blocks, lists)
- [ ] Style `<pre>` and `<code>` blocks: monospace, muted background, subtle border
- [ ] Add breadcrumb: `Projects → {title}`
- [ ] Add locale-switching link at top or in breadcrumb
- [ ] Generate `metadata` using project `seo.title` and `seo.description`

> **Copilot prompt:** "Generate `app/[locale]/projects/[slug]/page.tsx` for a Next.js App Router portfolio. It must: call `generateStaticParams` with all locale+slug combos, fetch project content via `getProject(slug, locale)`, call `notFound()` for missing slugs, render MDX body, and generate locale-aware metadata. Use server components only."

### 8.4 About Page

- [ ] Create `app/[locale]/about/page.tsx`
- [ ] Content: background, engineering focus areas, what you value in system design
- [ ] Keep it short — no full resume dump
- [ ] Store content in `lib/dictionaries` or a dedicated content file, not hardcoded in component

---

## 9. MDX Rendering

- [ ] Create `components/ui/MdxContent.tsx` — wraps `next-mdx-remote` with custom components
- [ ] Override `h2` — styled as section heading, includes anchor ID
- [ ] Override `h3` — styled as sub-heading
- [ ] Override `code` (inline) — monospace, small background
- [ ] Override `pre` — terminal-style code block, muted surface, subtle border
- [ ] Override `ul` / `ol` — consistent spacing, readable line-height
- [ ] Override `a` — opens external links in new tab with `rel="noopener noreferrer"`
- [ ] Test: all overrides render correctly with the sample MDX content

> **Copilot prompt:** "Generate a `MdxContent` React component for Next.js that uses `next-mdx-remote/rsc` and provides custom renderers for h2, h3, p, ul, ol, pre, code, and a. Style with Tailwind. Headings should have anchor IDs. External links open in new tab. No `any`."

---

## 10. Mermaid Diagrams (Optional but Recommended)

- [ ] Install `remark-mermaid` or use a static image approach for architecture diagrams
- [ ] If using static images: store in `public/images/projects/{slug}/architecture.png`
- [ ] If using Mermaid: confirm it renders on the client without SSR errors
- [ ] Add at least one architecture diagram to the sample project case study

---

## 11. Performance & SEO

### 11.1 Metadata

- [ ] Implement `generateMetadata` in `app/[locale]/layout.tsx` — base title template
- [ ] Implement `generateMetadata` in `app/[locale]/page.tsx` — home page title/description per locale
- [ ] Implement `generateMetadata` in `app/[locale]/projects/page.tsx`
- [ ] Implement `generateMetadata` in `app/[locale]/projects/[slug]/page.tsx` — use `project.seo`
- [ ] Add `alternates.canonical` pointing to current locale URL
- [ ] Add `alternates.languages` with `ko` and `en` URLs for each page (hreflang)

### 11.2 Image Optimization

- [ ] Use `next/image` for all images — no raw `<img>` tags
- [ ] Set explicit `width` and `height` or use `fill` with a sized container
- [ ] Add meaningful `alt` text to every image
- [ ] Use `priority` prop for above-the-fold images (hero/OG)

### 11.3 Static Generation

- [ ] Confirm all content pages (`[locale]/page.tsx`, `[locale]/projects/page.tsx`, `[locale]/projects/[slug]/page.tsx`) have no `dynamic = 'force-dynamic'`
- [ ] Run `npm run build` — confirm all pages are statically generated (shown as `○` in build output)
- [ ] Confirm no `console.error` during build

### 11.4 Lighthouse

- [ ] Run Lighthouse in Chrome DevTools on `/ko` and `/en/projects/{slug}`
- [ ] Target: Performance ≥ 90, Accessibility ≥ 90, SEO ≥ 90
- [ ] Fix any Lighthouse-flagged issues before deployment

---

## 12. Accessibility

- [ ] All interactive elements are keyboard-focusable with visible focus ring
- [ ] `<html lang>` attribute is set correctly per locale (`ko` or `en`)
- [ ] All images have descriptive `alt` text
- [ ] Color contrast meets WCAG AA (4.5:1 for body text)
- [ ] Navigation landmark: `<nav>` wraps the Navbar links
- [ ] Main content is inside `<main>`
- [ ] Footer inside `<footer>`
- [ ] No `tabindex` values greater than 0

---

## 13. Responsive Design

- [ ] Navbar collapses cleanly on mobile (< 768px)
- [ ] Project cards stack vertically on mobile
- [ ] Hero headline font size scales down on mobile
- [ ] Project detail prose content has comfortable mobile padding
- [ ] No horizontal overflow on any viewport
- [ ] Test on: 375px (iPhone SE), 768px (tablet), 1280px (desktop)

---

## 14. Final Polish

- [ ] Consistent spacing: review all pages for margin/padding inconsistencies
- [ ] Consistent heading hierarchy: no skipped heading levels
- [ ] Consistent link styles across all pages
- [ ] No orphaned `TODO` comments or debug `console.log` statements
- [ ] All placeholder content replaced with real content
- [ ] Both `/ko` and `/en` versions of every page have full content — no empty sections
- [ ] Verify language switcher works on every page, including `/projects/[slug]`

---

## 15. Deployment

### 15.1 Vercel Setup

- [ ] Push repository to GitHub
- [ ] Connect GitHub repo to Vercel (Import Project)
- [ ] Set Framework Preset to `Next.js` (auto-detected)
- [ ] Confirm build command: `next build`
- [ ] Confirm output directory: `.next`
- [ ] Trigger first deploy — confirm it succeeds

### 15.2 Post-Deploy Checks

- [ ] Visit deployed URL — confirm redirect from `/` to `/ko`
- [ ] Test language switcher on production URL
- [ ] Test `/en/projects/{slug}` — confirm static page loads
- [ ] Check browser console — no errors
- [ ] Run Lighthouse on production URL

### 15.3 Domain (Optional)

- [ ] Add custom domain in Vercel project settings
- [ ] Update DNS records at your registrar
- [ ] Confirm HTTPS is active (auto via Vercel)
- [ ] Confirm `www` redirect is configured

---

## Appendix: Copilot Prompt Reference

| Task                 | Prompt                                                                                                                                                                                                                                                         |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Folder scaffold      | "Generate folder scaffold for Next.js App Router with locale routing, MDX content per locale, and lib/types directories. Show mkdir commands."                                                                                                                 |
| Type definitions     | "Generate strict TypeScript types for a portfolio project model with slug, locale, title, summary, role, period, stack, decisions, challenges, impact, featured, order, seo. No `any`."                                                                        |
| content.ts loader    | "Generate `lib/content.ts` that reads MDX from `content/{locale}/projects/*.mdx`, parses frontmatter with gray-matter, returns typed Project objects. Include getProject, getAllProjects, getFeaturedProjects, getProjectSlugs."                               |
| Dictionary system    | "Generate a type-safe i18n dictionary system for locales `ko` and `en`. Include a shared Dictionary interface and getDictionary(locale) function."                                                                                                             |
| Locale switcher      | "Generate a Next.js language switcher component that preserves the current page path when switching between /ko and /en routes. No string replacement hacks."                                                                                                  |
| Project detail page  | "Generate `app/[locale]/projects/[slug]/page.tsx` with generateStaticParams, server-side content fetching, notFound handling, and locale-aware metadata."                                                                                                      |
| MDX renderer         | "Generate a MdxContent component using next-mdx-remote/rsc with custom Tailwind-styled renderers for headings, code, lists, and links. No `any`."                                                                                                              |
| Bilingual case study | "Write a bilingual MDX portfolio case study for a real-time backend system. Korean in `content/ko/projects/`, English in `content/en/projects/`. Include problem, architecture, trade-offs, measurable impact. Match the Project TypeScript type frontmatter." |
| generateMetadata     | "Generate locale-aware generateMetadata functions for a Next.js App Router portfolio. Include hreflang alternates for ko and en on each page."                                                                                                                 |
