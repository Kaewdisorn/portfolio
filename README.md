# Portfolio

Personal engineering portfolio website — a product-focused backend engineer specializing in real-time systems, distributed architecture, and infrastructure performance.

## Overview

A multi-page, bilingual (Korean / English) portfolio built to showcase engineering case studies, architecture decisions, and measurable impact — not a resume dump.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Content**: MDX with frontmatter (via `next-mdx-remote`)
- **Diagrams**: Mermaid
- **Deployment**: Vercel

## Structure

```
app/[locale]/               # Locale-aware routes (ko, en)
  page.tsx                  # Home
  projects/page.tsx         # Projects list
  projects/[slug]/page.tsx  # Case study detail
  about/page.tsx            # About
components/                 # Shared UI components
content/[locale]/projects/  # MDX case study files per locale
lib/                        # Content loading, locale helpers, metadata
types/                      # Shared TypeScript types
```

## Features

- **Bilingual routing**: `/ko` and `/en` with locale-preserving language switcher
- **Engineering case studies**: each project covers problem, architecture, key decisions, and impact
- **Static generation**: content pages pre-rendered at build time
- **SEO**: locale-aware metadata per page

## Live

[kaewdisorn.vercel.app](https://kds-portfolio.vercel.app/)
