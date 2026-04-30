import type { Locale } from "./locale";

export interface ProjectSeo {
  title?: string;
  description?: string;
}

export interface ProjectMeta {
  slug: string;
  locale: Locale;
  title: string;
  summary: string;
  role: string;
  period: string;
  stack: string[];
  featured: boolean;
  order: number;
  seo?: ProjectSeo;
}

export interface ProjectContent extends ProjectMeta {
  problem: string;
  architecture: string;
  decisions: string;
  challenges: string;
  impact: string;
}
