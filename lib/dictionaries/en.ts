import type { Dictionary } from "@/types/locale";

const en: Dictionary = {
  nav: {
    home: "Home",
    projects: "Projects",
    about: "About",
  },
  home: {
    eyebrow: "Backend Engineer",
    headline: "Designing and operating\nbackend systems",
    subheadline:
      "Backend engineer specializing in real-time systems, distributed architecture, and infrastructure performance.",
    cta: "View Projects",
    featuredTitle: "Featured Projects",
    skillsTitle: "Technical Expertise",
    contactTitle: "Get in Touch",
    contactBody:
      "Open to new opportunities and technical conversations. Feel free to reach out.",
  },
  projects: {
    pageTitle: "Projects",
    pageDescription:
      "Technical case studies focused on architecture decisions, trade-offs, and measurable outcomes.",
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
  },
  about: {
    pageTitle: "About",
    pageDescription: "Engineering philosophy and technical interests",
    intro:
      "Senior backend and platform engineer with 5+ years of production experience in real-time systems, distributed architecture, and infrastructure performance. Most of my work has involved end-to-end ownership across backend, infrastructure, and data layers — designing, shipping, and operating systems under real load across GCP, Azure, and on-premise environments.",
    focusTitle: "Technical Focus",
    focus: [
      "Real-time GPS and WebSocket-based data streaming pipelines",
      "High-availability distributed service architecture",
      "Geospatial data processing with PostgreSQL and PostGIS",
      "CI/CD automation and containerized multi-cloud infrastructure",
      "Performance optimization through serialization, compression, and caching",
    ],
    valuesTitle: "Engineering Philosophy",
    values: [
      "Simplicity first: complexity is only justified when it solves a real problem.",
      "Measurement-driven decisions: performance improvements start with profiling, not guesses.",
      "Design for operations: systems are built to be run, not just deployed.",
      "Explicit trade-offs: every design choice has alternatives that were considered and rejected.",
    ],
  },
  footer: {
    copyright: "© 2025. All rights reserved.",
    sourceCode: "Source Code",
  },
  notFound: "Page not found.",
};

export default en;
