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
      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[var(--max-w-layout)] px-5 sm:px-8">
          <header className="mb-12 max-w-[52ch]">
            <h1 className="mb-3 text-3xl font-semibold text-[var(--color-text)]">
              {dict.projects.pageTitle}
            </h1>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              {dict.projects.pageDescription}
            </p>
          </header>

          {projects.length === 0 ? (
            <p className="text-sm text-[var(--color-text-muted)]">
              {dict.notFound}
            </p>
          ) : (
            <ul className="grid gap-4 sm:grid-cols-2" role="list">
              {projects.map((project) => (
                <li key={project.slug}>
                  <ProjectCard project={project} locale={locale} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}
