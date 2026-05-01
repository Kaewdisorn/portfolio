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
    <section className="relative overflow-hidden border-b border-[var(--color-border)]">
      <div className="mx-auto grid w-full max-w-[var(--max-w-layout)] gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
        <div className="max-w-[60ch]">
          <p className="mb-5 inline-flex rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface-2)] px-3 py-1 text-[var(--text-label)] font-bold uppercase tracking-[0.18em] text-[var(--color-accent)] shadow-sm">
            Backend Engineer
          </p>

          <h1
            className="font-bold leading-[1.04] text-[var(--color-text)]"
            style={{ fontSize: "var(--text-display)" }}
          >
            {headline.map((line, i) => (
              <span key={i} className="block">
                {i === headline.length - 1 ? (
                  <span className="text-[var(--color-accent)]">{line}</span>
                ) : (
                  line
                )}
              </span>
            ))}
          </h1>

          <p className="mt-6 max-w-[52ch] text-base font-medium leading-8 text-[var(--color-text-muted)] sm:text-lg">
            {home.subheadline}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={localePath(locale, "/projects")}
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-[var(--color-accent)] px-5 py-2.5 text-sm font-bold text-white shadow-[0_12px_28px_rgb(15_118_110_/_0.22)] transition hover:bg-[var(--color-accent-hover)]"
            >
              {home.cta}
            </Link>
            <Link
              href={localePath(locale, "/contact")}
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-[var(--color-border-strong)] bg-[var(--color-surface-2)] px-5 py-2.5 text-sm font-bold text-[var(--color-text)] shadow-sm transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              {home.ctaSecondary}
            </Link>
          </div>
        </div>

        <div className="grid gap-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-2)] p-5 shadow-[0_22px_60px_rgb(70_55_35_/_0.12)] sm:grid-cols-2 lg:p-6">
          {[
            ["API", "Reliable services, clear contracts"],
            ["Data", "Indexes, caches, and storage"],
            ["Scale", "Rate limits and resilient queues"],
            ["Ops", "Deployment-ready systems"],
          ].map(([label, body]) => (
            <div
              key={label}
              className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
            >
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-warm)]">
                {label}
              </span>
              <p className="mt-3 text-sm font-medium leading-6 text-[var(--color-text-muted)]">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
