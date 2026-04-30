import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Locale } from "@/types/locale";
import type {
  Project,
  ProjectMeta,
  ProjectType,
  Decision,
  Challenge,
  ProjectSeo,
} from "@/types/project";

export interface ProjectWithContent extends Project {
  /** Raw MDX body (everything after the frontmatter fence). */
  content: string;
}

// ─── Paths ───────────────────────────────────────────────────────────────────

function projectsDir(locale: Locale): string {
  return path.join(process.cwd(), "content", locale, "projects");
}

// ─── Frontmatter validation ──────────────────────────────────────────────────

function requireString(
  data: Record<string, unknown>,
  key: string,
  slug: string,
): string {
  const value = data[key];
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(
      `[content] Project "${slug}": missing or empty required field "${key}"`,
    );
  }
  return value;
}

function requireStringArray(
  data: Record<string, unknown>,
  key: string,
  slug: string,
): string[] {
  const value = data[key];
  if (!Array.isArray(value) || value.some((v) => typeof v !== "string")) {
    throw new Error(
      `[content] Project "${slug}": field "${key}" must be a non-empty string array`,
    );
  }
  return value as string[];
}

function requireBoolean(
  data: Record<string, unknown>,
  key: string,
  slug: string,
): boolean {
  const value = data[key];
  if (typeof value !== "boolean") {
    throw new Error(
      `[content] Project "${slug}": field "${key}" must be a boolean`,
    );
  }
  return value;
}

function requireNumber(
  data: Record<string, unknown>,
  key: string,
  slug: string,
): number {
  const value = data[key];
  if (typeof value !== "number") {
    throw new Error(
      `[content] Project "${slug}": field "${key}" must be a number`,
    );
  }
  return value;
}

function requireSeo(data: Record<string, unknown>, slug: string): ProjectSeo {
  const seo = data["seo"];
  if (typeof seo !== "object" || seo === null) {
    throw new Error(`[content] Project "${slug}": missing "seo" object`);
  }
  const s = seo as Record<string, unknown>;
  if (typeof s["title"] !== "string" || typeof s["description"] !== "string") {
    throw new Error(
      `[content] Project "${slug}": "seo.title" and "seo.description" must be strings`,
    );
  }
  return { title: s["title"], description: s["description"] };
}

function requireDecisions(
  data: Record<string, unknown>,
  slug: string,
): Decision[] {
  const decisions = data["decisions"];
  if (!Array.isArray(decisions)) {
    throw new Error(
      `[content] Project "${slug}": "decisions" must be an array`,
    );
  }
  return decisions.map((d: unknown, i) => {
    if (typeof d !== "object" || d === null) {
      throw new Error(
        `[content] Project "${slug}": decisions[${i}] must be an object`,
      );
    }
    const obj = d as Record<string, unknown>;
    if (typeof obj["title"] !== "string" || typeof obj["body"] !== "string") {
      throw new Error(
        `[content] Project "${slug}": decisions[${i}] must have string "title" and "body"`,
      );
    }
    return { title: obj["title"], body: obj["body"] };
  });
}

function requireProjectType(
  data: Record<string, unknown>,
  slug: string,
): ProjectType {
  const value = data["type"];
  if (value !== "company" && value !== "personal") {
    throw new Error(
      `[content] Project "${slug}": field "type" must be "company" or "personal"`,
    );
  }
  return value;
}

function requireChallenges(
  data: Record<string, unknown>,
  slug: string,
): Challenge[] {
  const challenges = data["challenges"];
  if (!Array.isArray(challenges)) {
    throw new Error(
      `[content] Project "${slug}": "challenges" must be an array`,
    );
  }
  return challenges.map((c: unknown, i) => {
    if (typeof c !== "object" || c === null) {
      throw new Error(
        `[content] Project "${slug}": challenges[${i}] must be an object`,
      );
    }
    const obj = c as Record<string, unknown>;
    if (typeof obj["title"] !== "string" || typeof obj["body"] !== "string") {
      throw new Error(
        `[content] Project "${slug}": challenges[${i}] must have string "title" and "body"`,
      );
    }
    return { title: obj["title"], body: obj["body"] };
  });
}

function parseFrontmatter(
  data: Record<string, unknown>,
  slug: string,
  locale: Locale,
): Project {
  return {
    slug,
    locale,
    title: requireString(data, "title", slug),
    summary: requireString(data, "summary", slug),
    role: requireString(data, "role", slug),
    period: requireString(data, "period", slug),
    stack: requireStringArray(data, "stack", slug),
    type: requireProjectType(data, slug),
    featured: requireBoolean(data, "featured", slug),
    order: requireNumber(data, "order", slug),
    seo: requireSeo(data, slug),
    problem: requireString(data, "problem", slug),
    architecture: requireString(data, "architecture", slug),
    decisions: requireDecisions(data, slug),
    challenges: requireChallenges(data, slug),
    impact: requireStringArray(data, "impact", slug),
  };
}

// ─── Public API ──────────────────────────────────────────────────────────────

export function getProjectSlugs(locale: Locale): string[] {
  const dir = projectsDir(locale);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export async function getProject(
  slug: string,
  locale: Locale,
): Promise<ProjectWithContent> {
  const filePath = path.join(projectsDir(locale), `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    throw new Error(`[content] Project not found: "${slug}" (${locale})`);
  }
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const project = parseFrontmatter(
    data as Record<string, unknown>,
    slug,
    locale,
  );
  return { ...project, content };
}

export async function getAllProjects(locale: Locale): Promise<ProjectMeta[]> {
  const slugs = getProjectSlugs(locale);
  const projects = await Promise.all(
    slugs.map(async (slug) => {
      const p = await getProject(slug, locale);
      // Return only the metadata fields — omit the body content.
      const meta: ProjectMeta = {
        slug: p.slug,
        locale: p.locale,
        title: p.title,
        summary: p.summary,
        role: p.role,
        period: p.period,
        stack: p.stack,
        type: p.type,
        featured: p.featured,
        order: p.order,
        seo: p.seo,
      };
      return meta;
    }),
  );
  return projects.sort((a, b) => a.order - b.order);
}

export async function getFeaturedProjects(
  locale: Locale,
): Promise<ProjectMeta[]> {
  const all = await getAllProjects(locale);
  return all.filter((p) => p.featured);
}
