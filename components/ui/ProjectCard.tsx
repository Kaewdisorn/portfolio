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
      <div className="relative mb-5 flex items-center gap-2.5">
        <span
          className="h-2.5 w-2.5 shrink-0 rounded-full"
          style={{ background: "linear-gradient(135deg, var(--color-accent) 0%, #a78bfa 100%)" }}
          aria-hidden="true"
        />
        <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
          {project.role}
        </span>
        <span className="flex-1 border-t border-[var(--color-accent)]/20" aria-hidden="true" />
        <span className="text-xs font-mono text-[var(--color-text-faint)]">{project.period}</span>
      </div>

      <Heading className="relative mb-3 text-xl font-bold leading-snug text-[var(--color-text)] transition-colors group-hover:text-[var(--color-accent)]">
        {project.title}
      </Heading>

      <p className="relative mb-6 grow text-sm text-[var(--color-text-muted)] leading-relaxed">
        {project.summary}
      </p>

      <div className="relative flex items-end justify-between gap-4">
        {project.stack.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="rounded-md px-2.5 py-1 text-xs font-mono bg-[var(--color-surface-3)] text-[var(--color-text)] border border-[var(--color-border-strong)]"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        <span
          className="shrink-0 text-[var(--color-accent)] opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5"
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
