import type { Locale } from "@/types/locale";
import type { DictionaryHome } from "@/types/locale";
import type { ProjectMeta } from "@/types/project";
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
        <h2 className="mb-8 text-xl font-semibold text-[var(--color-text)]">
          {home.featuredTitle}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.slice(0, 2).map((project) => (
            <ProjectCard key={project.slug} project={project} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}
