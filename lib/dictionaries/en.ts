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
