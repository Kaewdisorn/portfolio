export const locales = ["ko", "en"] as const;
export const defaultLocale = "ko" as const;

export type Locale = (typeof locales)[number];

// ─── UI string dictionary ────────────────────────────────────────────────────

export interface DictionaryNav {
  home: string;
  projects: string;
  about: string;
}

export interface DictionaryHome {
  headline: string;
  subheadline: string;
  cta: string;
  featuredTitle: string;
  skillsTitle: string;
  contactTitle: string;
  contactBody: string;
}

export interface DictionaryProjects {
  pageTitle: string;
  pageDescription: string;
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
}

export interface DictionaryAbout {
  pageTitle: string;
  pageDescription: string;
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
  footer: DictionaryFooter;
  notFound: string;
}
