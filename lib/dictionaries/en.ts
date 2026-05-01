import type { Dictionary } from "@/types/locale";

const en: Dictionary = {
  nav: {
    home: "Home",
    projects: "Projects",
    about: "About",
    contact: "Contact",
  },
  home: {
    eyebrow: "Product Engineer · Real-time Systems",
    availableBadge: "Available for New Opportunities",
    headline: "Building scalable\nproducts with\nreal-time data",
    subheadline:
      "Focused on distributed systems and real-time pipelines, building and operating scalable systems in production.",
    cta: "View Projects",
    ctaSecondary: "Contact Me",
    featuredTitle: "Featured Projects",
    skillsTitle: "Technical Expertise",
    contactTitle: "Get in Touch",
    contactBody:
      "Open to new opportunities and technical conversations. Feel free to reach out.",
  },
  projects: {
    pageTitle: "Projects",
    pageDescription:
      "Production projects delivered in company environments, focused on system design, operational constraints, and measurable impact.",
    eyebrow: "Projects & Case studies",
    readMore: "View project details",
    companyLabel: "Company",
    personalLabel: "Personal",
    companySectionTitle: "Company Projects",
    personalSectionTitle: "Personal Projects",
  },
  project: {
    overviewHeading: "Overview",
    problemHeading: "Problem",
    roleHeading: "My Role",
    architectureHeading: "Architecture",
    decisionsHeading: "Key Decisions",
    challengesHeading: "Challenges and Solutions",
    impactHeading: "Impact",
    breadcrumbProjects: "Projects",
    repoLabel: "View on GitHub",
  },
  about: {
    pageTitle: "About",
    pageDescription:
      "How I work across real-time systems, platform design, and execution infrastructure",
    eyebrow: "About",
    intro:
      "Backend and platform engineer with 5+ years of hands-on production work across real-time data pipelines, location-based products, operational platforms, and more recently AI execution infrastructure. Much of that work has meant end-to-end ownership in small teams: aligning frontend, backend, data, caching, proxies, CI/CD, and cloud operations so systems are not only shipped, but reliably run.",
    summaryTitle: "What I Have Been Solving",
    summary: [
      "I have built and operated systems where latency, correctness, and operational durability matter at the same time: GPS ingestion, WebSocket fan-out, map-based lookup, matching, and navigation workflows.",
      "I have also worked on product structure itself, including React-to-Flutter Web migration, Node.js REST API design, and data-flow cleanup for internal operational platforms that needed to scale more cleanly over time.",
      "In personal work, I keep exploring the same pattern at a different layer: unifying complex interaction models behind a coherent domain model, whether for scheduling software or an AI execution engine with shared contracts and cost tracking.",
    ],
    snapshotTitle: "Snapshot",
    stats: [
      {
        value: "5+ years",
        label: "Production engineering",
        detail:
          "Real-time systems, operational products, and cross-layer implementation from backend through infrastructure",
      },
      {
        value: "Backend -> Infra",
        label: "End-to-end ownership",
        detail:
          "APIs, data models, Redis, PostgreSQL, proxy layers, CI/CD, and Azure operations connected as one system",
      },
      {
        value: "Real-time + AI",
        label: "Primary problem space",
        detail:
          "Location and streaming systems, plus recent gRPC-based AI execution infrastructure",
      },
    ],
    domainsTitle: "Core Experience Areas",
    domains: [
      {
        title: "Real-time and location-based systems",
        body: "I have built systems around GPS ingestion, WebSocket-based monitoring, Redis queues and Pub/Sub, map-based lookup, and navigation flows where responsiveness and reliability matter together.",
      },
      {
        title: "Operational products and domain structure",
        body: "In ERP and back-office style products, I focus on clarifying screen responsibilities, REST API contracts, and data flow so the product can keep evolving without becoming harder to operate.",
      },
      {
        title: "Platform and execution infrastructure",
        body: "More recently I have been designing AI execution foundations around NestJS gRPC services, provider abstraction, structured validation, cost tracking, and shared service contracts.",
      },
    ],
    experienceTitle: "Experience Through Projects",
    experience: [
      {
        period: "2026.03 – Present",
        title: "Nomi AI System",
        body: "Designing a layered AI system with a memory-driven assistant, a future agent workforce, and an execution backbone with shared protobuf contracts, structured logging, and cost tracking.",
      },
      {
        period: "2025.11 – 2025.12",
        title: "CalBot",
        body: "Built a personal scheduling product where a web calendar, REST API, and Discord bot all operate on the same scheduling domain.",
      },
      {
        period: "2024.01 – 2025.10",
        title: "Real-time Mobility Tracking Platform",
        body: "Built and operated a live vehicle tracking platform with per-second GPS ingestion, Redis-based queueing and fan-out, browser monitoring, and downloadable reporting.",
      },
      {
        period: "2022.06 – 2023.12",
        title: "Map-Based Member Management, Matching, and Navigation System",
        body: "Unified three related products under one shared architecture for location lookup, matching, navigation, and operational reporting.",
      },
      {
        period: "2022.01 – 2022.05",
        title: "Corporate Taxi Company ERP Platform",
        body: "Migrated an operational frontend from React.js to Flutter Web and restructured the Node.js REST API and business logic for driver, vehicle, and settlement workflows.",
      },
    ],
    principlesTitle: "How I Work",
    principles: [
      {
        title: "I optimize for systems that can be operated",
        body: "Deployment is only the start. I design with failure boundaries, observability, deployment flow, and change impact in mind from the beginning.",
      },
      {
        title: "I control complexity through separation of responsibility",
        body: "Real-time ingestion, storage, fan-out, ETA logic, reporting, and AI execution do not behave the same way. I prefer clear boundaries over one oversized runtime.",
      },
      {
        title: "I prefer measurable improvement",
        body: "Compression, serialization, caching, and data-flow changes should be justified by clearer response, lower transfer volume, or reduced operational cost rather than taste alone.",
      },
      {
        title: "I keep system boundaries clear even in small teams",
        body: "Small teams often push everything into one place for speed, but explicit ownership and contracts usually make the team faster over the full life of the product.",
      },
    ],
    ctaTitle: "The Detailed Work Is in the Projects",
    ctaBody:
      "Each project page explains the problem, architecture, key decisions, trade-offs, and outcomes in more concrete case-study form.",
    primaryCta: "View Projects",
    secondaryCta: "Contact Me",
  },
  footer: {
    copyright: "© 2025. All rights reserved.",
    sourceCode: "Source Code",
  },
  notFound: "Page not found.",
};

export default en;
