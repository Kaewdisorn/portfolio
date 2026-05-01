export const locales = ["ko", "en"] as const;
export const defaultLocale = "ko" as const;

export type Locale = (typeof locales)[number];

// ─── UI string dictionary ────────────────────────────────────────────────────

export interface DictionaryNav {
  home: string;
  projects: string;
  about: string;
  contact: string;
}

export interface DictionaryHome {
  eyebrow: string;
  availableBadge: string;
  headline: string;
  subheadline: string;
  cta: string;
  ctaSecondary: string;
  featuredTitle: string;
  skillsTitle: string;
  contactTitle: string;
  contactBody: string;
}

export interface DictionaryProjects {
  pageTitle: string;
  pageDescription: string;
  eyebrow: string;
  readMore: string;
  companyLabel: string;
  personalLabel: string;
  companySectionTitle: string;
  personalSectionTitle: string;
}

export interface DictionaryProject {
  overviewHeading: string;
  problemHeading: string;
  roleHeading: string;
  architectureHeading: string;
  decisionsHeading: string;
  challengesHeading: string;
  impactHeading: string;
  breadcrumbProjects: string;
  repoLabel: string;
}

export interface DictionaryAboutStat {
  value: string;
  label: string;
  detail: string;
}

export interface DictionaryAboutDomain {
  title: string;
  body: string;
}

export interface DictionaryAboutExperience {
  period: string;
  title: string;
  body: string;
}

export interface DictionaryAboutPrinciple {
  title: string;
  body: string;
}

export interface DictionaryAbout {
  pageTitle: string;
  pageDescription: string;
  eyebrow: string;
  intro: string;
  summaryTitle: string;
  summary: string[];
  snapshotTitle: string;
  stats: DictionaryAboutStat[];
  domainsTitle: string;
  domains: DictionaryAboutDomain[];
  experienceTitle: string;
  experience: DictionaryAboutExperience[];
  principlesTitle: string;
  principles: DictionaryAboutPrinciple[];
  ctaTitle: string;
  ctaBody: string;
  primaryCta: string;
  secondaryCta: string;
}

export interface DictionaryContactChannel {
  title: string;
  description: string;
  actionLabel: string;
}

export interface DictionaryContact {
  pageTitle: string;
  pageDescription: string;
  eyebrow: string;
  intro: string;
  channelsTitle: string;
  github: DictionaryContactChannel;
  email: DictionaryContactChannel;
  noteTitle: string;
  noteBody: string;
}

export interface DictionaryFooter {
  copyright: string;
  sourceCode: string;
}

export interface Dictionary {
  nav: DictionaryNav;
  home: DictionaryHome;
  projects: DictionaryProjects;
  project: DictionaryProject;
  about: DictionaryAbout;
  contactPage: DictionaryContact;
  footer: DictionaryFooter;
  notFound: string;
}
