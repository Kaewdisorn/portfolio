import type { Metadata } from "next";
import { getDictionary } from "@/lib/getDictionary";
import { getAllProjects } from "@/lib/content";
import { isValidLocale } from "@/lib/locale";
import { notFound } from "next/navigation";
import ProjectCard from "@/components/ui/ProjectCard";

export async function generateMetadata(
  props: PageProps<"/[locale]/projects">,
): Promise<Metadata> {
  const { locale } = await props.params;
  if (!isValidLocale(locale)) return {};
  const dict = await getDictionary(locale);
  const url = `https://portfolio.example.com/${locale}/projects`;
  return {
    title: dict.projects.pageTitle,
    description: dict.projects.pageDescription,
    alternates: {
      canonical: url,
      languages: {
        ko: "https://portfolio.example.com/ko/projects",
        en: "https://portfolio.example.com/en/projects",
      },
    },
  };
}

export default async function ProjectsPage(
  props: PageProps<"/[locale]/projects">,
) {
  const { locale } = await props.params;
  if (!isValidLocale(locale)) notFound();

  const [dict, projects] = await Promise.all([
    getDictionary(locale),
    getAllProjects(locale),
  ]);

  return (
    <main id="main-content">
      {/* Page hero header */}
      <div className="relative overflow-hidden border-b border-[var(--color-border)] py-16 sm:py-24">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
          <div
            className="absolute left-1/4 top-0 h-[400px] w-[700px] -translate-y-1/2 rounded-full blur-[120px]"
            style={{ background: "rgb(99 102 241 / 0.08)" }}
          />
        </div>

        <div className="mx-auto w-full max-w-[var(--max-w-layout)] px-5 sm:px-8">
          <div className="max-w-[56ch]">
            <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              {dict.projects.eyebrow}
            </p>
            <h1
              className="font-bold tracking-tight text-[var(--color-text)]"
              style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
            >
              {dict.projects.pageTitle}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-text-muted)]">
              {dict.projects.pageDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Projects grid */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto w-full max-w-[var(--max-w-layout)] px-5 sm:px-8">
          {projects.length === 0 ? (
            <p className="text-sm text-[var(--color-text-muted)]">
              {dict.notFound}
            </p>
          ) : (
            <ul className="grid gap-6 sm:grid-cols-2" role="list">
              {projects.map((project) => (
                <li key={project.slug}>
                  <ProjectCard
                    project={project}
                    locale={locale}
                    headingLevel={2}
                    readMoreLabel={dict.projects.readMore}
                    productionLabel={dict.projects.productionLabel}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}
