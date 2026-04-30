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
    <section className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-[var(--max-w-layout)] px-5 sm:px-8">
        <div className="max-w-[52ch]">
          <h1 className="mb-5 font-semibold leading-tight tracking-tight text-[var(--color-text)]" style={{ fontSize: "var(--text-display)" }}>
            {headline.map((line, i) => (
              <span key={i}>
                {line}
                {i < headline.length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p className="mb-8 text-base text-[var(--color-text-muted)] leading-relaxed sm:text-lg">
            {home.subheadline}
          </p>
          <Link
            href={localePath(locale, "/projects")}
            className="inline-flex items-center gap-2 rounded-md bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--color-accent-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
          >
            {home.cta}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 7h12M8 3l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
