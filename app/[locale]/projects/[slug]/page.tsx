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
      <article className="py-10 sm:py-16">
        <div className="mx-auto w-full max-w-[var(--max-w-layout)] px-5 sm:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)]" role="list">
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
          <header className="mb-10 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-2)] p-5 shadow-[0_24px_70px_rgb(0_0_0_/_0.22)] backdrop-blur-xl sm:p-8">
            <div className="mb-3 flex flex-wrap items-center gap-3 text-xs font-semibold text-[var(--color-text-muted)]">
              <span>{project.role}</span>
              <span aria-hidden="true">/</span>
              <span>{project.period}</span>
            </div>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-[var(--color-text)] [overflow-wrap:anywhere] sm:text-4xl">
              {project.title}
            </h1>
            <p className="mb-5 max-w-[52ch] text-base font-medium leading-8 text-[var(--color-text-muted)] [overflow-wrap:anywhere]">
              {project.summary}
            </p>
            {project.stack.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface-3)] px-2.5 py-1 font-sans text-xs font-semibold text-[var(--color-text)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
            {project.repoUrl && (
              <div className="mt-5">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-[var(--color-border-strong)] bg-[var(--color-surface-3)] px-3 py-1.5 text-xs font-bold text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                >
                  <svg aria-hidden="true" viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                  {dict.project.repoLabel}
                </a>
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
