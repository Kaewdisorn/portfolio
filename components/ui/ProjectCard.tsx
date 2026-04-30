import Link from "next/link";
import type { ProjectMeta } from "@/types/project";
import type { Locale } from "@/types/locale";
import { localePath } from "@/lib/locale";

interface ProjectCardProps {
  project: ProjectMeta;
  locale: Locale;
  headingLevel?: 2 | 3;
}

export default function ProjectCard({ project, locale, headingLevel = 3 }: ProjectCardProps) {
  const href = localePath(locale, `/projects/${project.slug}`);
  const Heading = `h${headingLevel}` as "h2" | "h3";

  return (
    <Link
      href={href}
      className="group block rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-accent)] hover:shadow-sm"
    >
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="text-[var(--text-label)] font-mono text-[var(--color-text-muted)] uppercase tracking-wide">
          {project.role}
        </span>
        <span className="text-[var(--color-border)]">·</span>
        <span className="text-[var(--text-label)] font-mono text-[var(--color-text-muted)]">
          {project.period}
        </span>
      </div>

      <Heading className="mb-2 text-lg font-semibold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors leading-snug">
        {project.title}
      </Heading>

      <p className="mb-4 text-sm text-[var(--color-text-muted)] leading-relaxed">
        {project.summary}
      </p>

      {project.stack.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded px-2 py-0.5 text-xs font-mono bg-[var(--color-surface-2)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
