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
    <section className="relative py-16 sm:py-24 border-t border-[var(--color-border)]">
      {/* Section background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div
          className="absolute left-1/2 top-1/3 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px]"
          style={{ background: "rgb(99 102 241 / 0.07)" }}
        />
      </div>

      <div className="mx-auto w-full max-w-[var(--max-w-layout)] px-5 sm:px-8">

        {/* Section header */}
        <div className="mb-12">
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

        {/* Featured cards — horizontal editorial layout */}
        <div className="flex flex-col gap-5">
          {projects.slice(0, 2).map((project, i) => (
            <Link
              key={project.slug}
              href={localePath(locale, `/projects/${project.slug}`)}
              className="group relative overflow-hidden rounded-2xl border border-[var(--color-border-strong)] bg-[var(--color-surface-2)] px-8 py-8 transition-all duration-300 hover:border-[var(--color-accent)] hover:shadow-[0_0_48px_rgb(99_102_241_/_0.18)]"
            >
              {/* Left gradient border */}
              <span
                className="absolute inset-y-0 left-0 w-[3px] rounded-l-2xl opacity-50 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: "linear-gradient(180deg, var(--color-accent) 0%, #a78bfa 100%)" }}
                aria-hidden="true"
              />

              {/* Inner glow */}
              <span
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: "radial-gradient(ellipse at 0% 50%, rgb(99 102 241 / 0.08) 0%, transparent 60%)" }}
                aria-hidden="true"
              />

              {/* Large faint ordinal number — top right */}
              <span
                className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 select-none font-bold leading-none"
                style={{
                  fontSize: "clamp(6rem, 12vw, 9rem)",
                  color: "rgb(99 102 241 / 0.05)",
                  fontVariantNumeric: "tabular-nums",
                }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Arrow — absolute bottom right, clear of the number */}
              <span
                className="absolute bottom-6 right-8 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface-3)] text-[var(--color-text-muted)] transition-all duration-200 group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent-subtle)] group-hover:text-[var(--color-accent)] group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>

              <div className="relative flex flex-col gap-5">
                {/* Main content */}
                <div className="flex-1 min-w-0">
                  {/* Meta row */}
                  <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
                      {project.role}
                    </span>
                    <span className="h-3.5 w-px bg-[var(--color-border-strong)]" aria-hidden="true" />
                    <span className="font-mono text-xs text-[var(--color-text-faint)]">
                      {project.period}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-2xl font-bold leading-snug tracking-tight text-[var(--color-text)] transition-colors group-hover:text-[var(--color-accent)]">
                    {project.title}
                  </h3>

                  {/* Summary */}
                  <p className="mb-5 max-w-2xl text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {project.summary}
                  </p>

                  {/* Stack tags */}
                  {project.stack.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.slice(0, 6).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-[var(--color-border-strong)] bg-[var(--color-surface-3)] px-2.5 py-1 font-mono text-xs text-[var(--color-text)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
