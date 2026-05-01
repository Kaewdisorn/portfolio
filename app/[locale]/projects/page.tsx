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

  const companyProjects = projects.filter((p) => p.type === "company");
  const personalProjects = projects.filter((p) => p.type === "personal");

  return (
    <main id="main-content">
      <div className="border-b border-[var(--color-border)] bg-[var(--color-surface-2)] py-14 sm:py-20">
        <div className="mx-auto w-full max-w-[var(--max-w-layout)] px-5 sm:px-8">
          <div className="max-w-[56ch]">
            <p className="eyebrow mb-4 font-mono text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              {dict.projects.eyebrow}
            </p>
            <h1
              className="font-bold leading-tight text-[var(--color-text)]"
              style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
            >
              {dict.projects.pageTitle}
            </h1>
          </div>
        </div>
      </div>

      {/* Projects grouped by type */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto w-full max-w-[var(--max-w-layout)] px-5 sm:px-8">
          {projects.length === 0 ? (
            <p className="text-sm text-[var(--color-text-muted)]">
              {dict.notFound}
            </p>
          ) : (
            <div className="space-y-14">
              {companyProjects.length > 0 && (
                <div>
                  <div className="mb-6 flex items-center gap-3">
                    <span className="h-5 w-1 rounded-full bg-[var(--color-accent)]" aria-hidden="true" />
                    <h2 className="eyebrow text-sm font-bold uppercase tracking-[0.14em] text-[var(--color-text)]">
                      {dict.projects.companySectionTitle}
                    </h2>
                  </div>
                  <ul className="grid gap-5 sm:grid-cols-2 lg:gap-6" role="list">
                    {companyProjects.map((project) => (
                      <li key={project.slug}>
                        <ProjectCard
                          project={project}
                          locale={locale}
                          headingLevel={3}
                          readMoreLabel={dict.projects.readMore}
                          companyLabel={dict.projects.companyLabel}
                          personalLabel={dict.projects.personalLabel}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {personalProjects.length > 0 && (
                <div>
                  <div className="mb-6 flex items-center gap-3">
                    <span className="h-5 w-1 rounded-full bg-[var(--color-warm)]" aria-hidden="true" />
                    <h2 className="eyebrow text-sm font-bold uppercase tracking-[0.14em] text-[var(--color-text)]">
                      {dict.projects.personalSectionTitle}
                    </h2>
                  </div>
                  <ul className="grid gap-5 sm:grid-cols-2 lg:gap-6" role="list">
                    {personalProjects.map((project) => (
                      <li key={project.slug}>
                        <ProjectCard
                          project={project}
                          locale={locale}
                          headingLevel={3}
                          readMoreLabel={dict.projects.readMore}
                          companyLabel={dict.projects.companyLabel}
                          personalLabel={dict.projects.personalLabel}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
