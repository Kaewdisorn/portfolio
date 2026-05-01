import Link from "next/link";
import type { ProjectMeta } from "@/types/project";
import type { Locale } from "@/types/locale";
import { localePath } from "@/lib/locale";

interface ProjectCardProps {
  project: ProjectMeta;
  locale: Locale;
  headingLevel?: 2 | 3;
  readMoreLabel?: string;
  companyLabel?: string;
  personalLabel?: string;
}

export default function ProjectCard({
  project,
  locale,
  headingLevel = 3,
  readMoreLabel,
  companyLabel,
  personalLabel,
}: ProjectCardProps) {
  const href = localePath(locale, `/projects/${project.slug}`);
  const Heading = `h${headingLevel}` as "h2" | "h3";

  return (
    <Link
      href={href}
      className="group relative flex min-h-full flex-col overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-2)] p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:shadow-[0_18px_45px_rgb(70_55_35_/_0.12)] sm:p-6"
    >
      <span
        className="absolute inset-x-0 top-0 h-1 opacity-80 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "var(--color-accent)" }}
        aria-hidden="true"
      />

      <div className="relative mb-5 flex flex-wrap items-center gap-2.5">
        {project.type === "company" && companyLabel && (
          <span className="rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent-subtle)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--color-accent)]">
            {companyLabel}
          </span>
        )}
        {project.type === "personal" && personalLabel && (
          <span className="rounded-full border border-[var(--color-warm)]/30 bg-[var(--color-warm-subtle)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--color-warm)]">
            {personalLabel}
          </span>
        )}
        <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-text)]">
          {project.role}
        </span>
        <span className="h-3.5 w-px bg-[var(--color-border-strong)]" aria-hidden="true" />
        <span className="text-xs font-mono text-[var(--color-text-faint)]">{project.period}</span>
      </div>

      <Heading className="relative mb-3 text-xl font-bold leading-snug text-[var(--color-text)] transition-colors group-hover:text-[var(--color-accent)]">
        {project.title}
      </Heading>

      <p className="relative mb-6 grow text-sm font-medium leading-7 text-[var(--color-text-muted)]">
        {project.summary}
      </p>

      {/* Stack tags */}
      {project.stack.length > 0 && (
        <div className="relative mb-5 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-1 text-xs font-semibold text-[var(--color-text)]"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* CTA divider — only shown when readMoreLabel is provided */}
      {readMoreLabel && (
        <div className="relative mt-auto flex items-center justify-between gap-4 border-t border-[var(--color-border)] pt-4">
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-text-faint)] transition-colors duration-200 group-hover:text-[var(--color-accent)]">
            {readMoreLabel}
          </span>
          <span className="flex items-center gap-1.5 text-xs font-medium text-[var(--color-text-faint)] transition-colors duration-200 group-hover:text-[var(--color-accent)]">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      )}
    </Link>
  );
}
