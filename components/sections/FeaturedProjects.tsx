import Link from "next/link";
import type { Locale } from "@/types/locale";
import type { DictionaryHome } from "@/types/locale";
import type { ProjectMeta } from "@/types/project";
import { localePath } from "@/lib/locale";

interface FeaturedProjectsProps {
  locale: Locale;
  home: DictionaryHome;
  projects: ProjectMeta[];
}

export default function FeaturedProjects({
  locale,
  home,
  projects,
}: FeaturedProjectsProps) {
  if (projects.length === 0) return null;

  return (
    <section className="border-b border-[var(--color-border)] bg-[rgb(255_255_255_/_0.025)] py-16 sm:py-20">
      <div className="mx-auto w-full max-w-[var(--max-w-layout)] px-5 sm:px-8">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-[58ch]">
            <p className="eyebrow mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Featured
            </p>
            <h2
              className="font-bold leading-tight text-[var(--color-text)]"
              style={{ fontSize: "var(--text-title)" }}
            >
              {home.featuredTitle}
            </h2>
          </div>
          <Link
            href={localePath(locale, "/projects")}
            className="inline-flex min-h-10 items-center justify-center rounded-md border border-[var(--color-border-strong)] bg-[var(--color-surface-2)] px-4 text-sm font-bold text-[var(--color-text)] backdrop-blur-xl transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] sm:shrink-0"
          >
            {home.cta}
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.slice(0, 2).map((project) => (
            <Link
              key={project.slug}
              href={localePath(locale, `/projects/${project.slug}`)}
              className="group flex min-h-full flex-col rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-2)] p-5 shadow-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:bg-[var(--color-surface-3)] hover:shadow-[0_20px_50px_rgb(63_140_255_/_0.18)] sm:p-6"
            >
              <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-2">
                <span
                  className={
                    project.type === "personal"
                      ? "rounded-full border border-[var(--color-warm)]/30 bg-[var(--color-warm-subtle)] px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-warm)]"
                      : "rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent-subtle)] px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]"
                  }
                >
                  {project.role}
                </span>
                <span className="font-mono text-xs font-semibold text-[var(--color-text-faint)]">
                  {project.period}
                </span>
              </div>

              <h3 className="text-xl font-bold leading-snug text-[var(--color-text)] transition-colors group-hover:text-[var(--color-accent)] sm:text-2xl">
                {project.title}
              </h3>

              <p className="mt-4 grow text-sm font-medium leading-7 text-[var(--color-text-muted)]">
                {project.summary}
              </p>

              {project.stack.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface-3)] px-2.5 py-1 text-xs font-semibold text-[var(--color-text)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
