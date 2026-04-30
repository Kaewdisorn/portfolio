import Link from "next/link";
import type { Locale } from "@/types/locale";
import type { DictionaryHome } from "@/types/locale";
import { localePath } from "@/lib/locale";

interface HeroProps {
  locale: Locale;
  home: DictionaryHome;
}

export default function Hero({ locale, home }: HeroProps) {
  const headline = home.headline.split("\n");

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Subtle background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div
          className="absolute -right-40 -top-32 h-[560px] w-[560px] rounded-full blur-3xl"
          style={{ background: "var(--color-accent-subtle)" }}
        />
        <div
          className="absolute -bottom-20 -left-32 h-[360px] w-[360px] rounded-full blur-3xl"
          style={{ background: "var(--color-accent-subtle)", opacity: 0.6 }}
        />
      </div>

      <div className="mx-auto w-full max-w-[var(--max-w-layout)] px-5 sm:px-8">
        <div className="w-full max-w-[52ch]">
          {/* Eyebrow label */}
          <p className="mb-5 flex items-center gap-2.5 text-[var(--text-label)] font-mono uppercase tracking-widest text-[var(--color-accent)]">
            <span className="h-px w-5 bg-[var(--color-accent)]" aria-hidden="true" />
            {home.eyebrow}
          </p>

          <h1
            className="mb-6 font-semibold leading-[1.15] tracking-tight text-[var(--color-text)]"
            style={{ fontSize: "var(--text-display)" }}
          >
            {headline.map((line, i) => (
              <span key={i}>
                {line}
                {i < headline.length - 1 && <br />}
              </span>
            ))}
          </h1>

          <p className="mb-10 max-w-[44ch] text-base text-[var(--color-text-muted)] leading-relaxed sm:text-lg">
            {home.subheadline}
          </p>

          <Link
            href={localePath(locale, "/projects")}
            className="group inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-[var(--color-accent-hover)] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            style={{ ["--tw-shadow-color" as string]: "var(--color-accent-glow)" }}
          >
            {home.cta}
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.5"
            >
              <path
                d="M1 7h12M8 3l5 4-5 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
