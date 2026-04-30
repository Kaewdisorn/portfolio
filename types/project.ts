import type { Locale } from "./locale";

export interface ProjectSeo {
  title: string;
  description: string;
}

export interface Decision {
  title: string;
  body: string;
}

export interface Challenge {
  title: string;
  body: string;
}

export type ProjectType = "company" | "personal";

/** Metadata-only shape — used for project listing pages. */
export interface ProjectMeta {
  slug: string;
  locale: Locale;
  title: string;
  summary: string;
  role: string;
  period: string;
  stack: string[];
  type: ProjectType;
  featured: boolean;
  order: number;
  seo: ProjectSeo;
}

/** Full project shape including structured content fields from frontmatter. */
export interface Project extends ProjectMeta {
  problem: string;
  architecture: string;
  decisions: Decision[];
  challenges: Challenge[];
  impact: string[];
}
