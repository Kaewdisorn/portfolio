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
    <section className="py-16 sm:py-20 border-t border-[var(--color-border)]">
      <div className="mx-auto w-full max-w-[var(--max-w-layout)] px-5 sm:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="mb-1.5 text-[var(--text-label)] font-mono uppercase tracking-widest text-[var(--color-accent)]">
              Featured
            </p>
            <h2 className="text-xl font-semibold text-[var(--color-text)]">
              {home.featuredTitle}
            </h2>
          </div>
          <Link
            href={localePath(locale, "/projects")}
            className="shrink-0 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)] hidden sm:flex items-center gap-1"
          >
            {home.cta}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.slice(0, 2).map((project) => (
            <ProjectCard key={project.slug} project={project} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}
