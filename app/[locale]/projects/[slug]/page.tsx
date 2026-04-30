import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getDictionary } from "@/lib/getDictionary";
import { getProject, getProjectSlugs } from "@/lib/content";
import { isValidLocale, localePath } from "@/lib/locale";
import { locales } from "@/types/locale";
import MdxContent from "@/components/ui/MdxContent";

export async function generateStaticParams(): Promise<
  { locale: string; slug: string }[]
> {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    const slugs = getProjectSlugs(locale);
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export async function generateMetadata(
  props: PageProps<"/[locale]/projects/[slug]">,
): Promise<Metadata> {
  const { locale, slug } = await props.params;
  if (!isValidLocale(locale)) return {};
  try {
    const project = await getProject(slug, locale);
    const url = `https://portfolio.example.com/${locale}/projects/${slug}`;
    return {
      title: project.seo.title,
      description: project.seo.description,
      alternates: {
        canonical: url,
        languages: {
          ko: `https://portfolio.example.com/ko/projects/${slug}`,
          en: `https://portfolio.example.com/en/projects/${slug}`,
        },
      },
    };
  } catch {
    return {};
  }
}

export default async function ProjectDetailPage(
  props: PageProps<"/[locale]/projects/[slug]">,
) {
  const { locale, slug } = await props.params;
  if (!isValidLocale(locale)) notFound();

  const [dict, project] = await Promise.all([
    getDictionary(locale),
    getProject(slug, locale).catch(() => null),
  ]);

  if (!project) notFound();

  return (
    <main id="main-content">
      <article className="py-12 sm:py-16">
        <div className="mx-auto w-full max-w-[var(--max-w-layout)] px-5 sm:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]" role="list">
              <li>
                <Link
                  href={localePath(locale, "/projects")}
                  className="hover:text-[var(--color-accent)] transition-colors"
                >
                  {dict.project.breadcrumbProjects}
                </Link>
              </li>
              <li aria-hidden="true">
                <span>/</span>
              </li>
              <li className="text-[var(--color-text)]" aria-current="page">
                {project.title}
              </li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-10 pb-8 border-b border-[var(--color-border)]">
            <div className="mb-3 flex flex-wrap items-center gap-3 text-xs font-mono text-[var(--color-text-muted)]">
              <span>{project.role}</span>
              <span aria-hidden="true">·</span>
              <span>{project.period}</span>
            </div>
            <h1 className="mb-4 text-3xl font-semibold leading-tight text-[var(--color-text)] sm:text-4xl">
              {project.title}
            </h1>
            <p className="mb-5 max-w-[52ch] text-base text-[var(--color-text-muted)] leading-relaxed">
              {project.summary}
            </p>
            {project.stack.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-[var(--color-border-strong)] bg-[var(--color-surface-3)] px-2.5 py-1 font-sans text-xs text-[var(--color-text)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* MDX body */}
          <MdxContent source={project.content} />
        </div>
      </article>
    </main>
  );
}
