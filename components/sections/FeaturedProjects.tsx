import Link from "next/link";
import type { Locale } from "@/types/locale";
import type { DictionaryHome } from "@/types/locale";
import type { ProjectMeta } from "@/types/project";
import { localePath } from "@/lib/locale";
import ProjectCard from "@/components/ui/ProjectCard";

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
    <section className="relative py-16 sm:py-24 border-t border-[var(--color-border)]">
      {/* Section background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div
          className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
          style={{ background: "rgb(99 102 241 / 0.06)" }}
        />
      </div>

      <div className="mx-auto w-full max-w-[var(--max-w-layout)] px-5 sm:px-8">

        {/* Section header */}
        <div className="mb-14">
          <p className="mb-3 font-mono text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Featured
          </p>
          <div className="flex items-end justify-between gap-4">
            <h2
              className="font-bold tracking-tight text-[var(--color-text)]"
              style={{ fontSize: "var(--text-title)" }}
            >
              {home.featuredTitle}
            </h2>
            <Link
              href={localePath(locale, "/projects")}
              className="shrink-0 hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
            >
              {home.cta}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.slice(0, 2).map((project) => (
            <ProjectCard key={project.slug} project={project} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}
