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
      className="group relative block rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-accent)]/50 hover:shadow-lg"
      style={{ ["--tw-shadow" as string]: "0 8px 24px var(--color-accent-glow)" }}
    >
      {/* Subtle top accent bar that appears on hover */}
      <span
        className="absolute inset-x-0 top-0 h-px rounded-t-xl bg-[var(--color-accent)] opacity-0 transition-opacity group-hover:opacity-100"
        aria-hidden="true"
      />

      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="text-[var(--text-label)] font-mono text-[var(--color-text-faint)] uppercase tracking-wide">
          {project.role}
        </span>
        <span className="text-[var(--color-border)]" aria-hidden="true">·</span>
        <span className="text-[var(--text-label)] font-mono text-[var(--color-text-faint)]">
          {project.period}
        </span>
      </div>

      <Heading className="mb-2 text-lg font-semibold leading-snug text-[var(--color-text)] transition-colors group-hover:text-[var(--color-accent)]">
        {project.title}
      </Heading>

      <p className="mb-5 text-sm text-[var(--color-text-muted)] leading-relaxed">
        {project.summary}
      </p>

      <div className="flex items-end justify-between gap-4">
        {project.stack.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="rounded-md px-2 py-0.5 text-xs font-mono bg-[var(--color-surface-2)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Arrow indicator */}
        <span
          className="shrink-0 text-[var(--color-accent)] opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5"
          aria-hidden="true"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
