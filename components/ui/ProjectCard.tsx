import Link from "next/link";
import type { ProjectMeta } from "@/types/project";
import type { Locale } from "@/types/locale";
import { localePath } from "@/lib/locale";

interface ProjectCardProps {
  project: ProjectMeta;
  locale: Locale;
  headingLevel?: 2 | 3;
  readMoreLabel?: string;
  productionLabel?: string;
}

export default function ProjectCard({
  project,
  locale,
  headingLevel = 3,
  readMoreLabel,
  productionLabel,
}: ProjectCardProps) {
  const href = localePath(locale, `/projects/${project.slug}`);
  const Heading = `h${headingLevel}` as "h2" | "h3";

  return (
    <Link
      href={href}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-surface-2)] p-6 transition-all duration-300 hover:border-[var(--color-accent)] hover:shadow-[0_0_32px_rgb(99_102_241_/_0.2)]"
    >
      {/* Gradient top accent border */}
      <span
        className="absolute inset-x-0 top-0 h-[2px] rounded-t-xl opacity-60 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "linear-gradient(90deg, var(--color-accent) 0%, #a78bfa 100%)" }}
        aria-hidden="true"
      />

      {/* Faint inner glow on hover */}
      <span
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgb(99 102 241 / 0.07) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      {/* Label row */}
      <div className="relative mb-5 flex flex-wrap items-center gap-2.5">
        {productionLabel && (
          <span className="rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface-3)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
            {productionLabel}
          </span>
        )}
        <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text)]/88">
          {project.role}
        </span>
        <span className="h-3.5 w-px bg-[var(--color-border-strong)]" aria-hidden="true" />
        <span className="text-xs font-mono text-[var(--color-text-faint)]">{project.period}</span>
      </div>

      <Heading className="relative mb-3 text-xl font-bold leading-snug text-[var(--color-text)] transition-colors group-hover:text-[var(--color-accent)]">
        {project.title}
      </Heading>

      <p className="relative mb-6 grow text-sm text-[var(--color-text-muted)] leading-relaxed">
        {project.summary}
      </p>

      {/* Stack tags */}
      {project.stack.length > 0 && (
        <div className="relative mb-5 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded-md px-2.5 py-1 text-xs font-sans bg-[var(--color-surface-3)] text-[var(--color-text)] border border-[var(--color-border-strong)]"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* CTA divider — only shown when readMoreLabel is provided */}
      {readMoreLabel && (
        <div className="relative mt-auto flex items-center justify-between gap-4 border-t border-[var(--color-border)] pt-4">
          <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--color-text-faint)] transition-colors duration-200 group-hover:text-[var(--color-accent)]">
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
