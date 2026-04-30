import type { Dictionary } from "@/types/locale";

const en: Dictionary = {
  nav: {
    home: "Home",
    projects: "Projects",
    about: "About",
  },
  home: {
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
      "I'm a backend engineer with 5+ years of experience building real-time systems, distributed infrastructure, and performance-critical services. My focus is on systems that are not just correct, but operationally trustworthy at scale.",
    focusTitle: "Technical Focus",
    focus: [
      "Real-time data pipelines and event streaming",
      "High-availability distributed system design",
      "Database performance optimization and query tuning",
      "Kubernetes-based container infrastructure",
      "Observability design and SLO engineering",
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
