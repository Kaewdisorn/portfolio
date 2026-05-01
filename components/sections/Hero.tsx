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
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "linear-gradient(135deg, rgb(63 140 255 / 0.2), transparent 34%, rgb(124 109 242 / 0.15) 68%, transparent)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto grid w-full max-w-[var(--max-w-layout)] gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
        <div className="max-w-[60ch]">
          <p className="eyebrow mb-5 inline-flex rounded-full border border-[var(--color-accent)]/50 bg-[var(--color-accent-subtle)] px-3 py-1 text-[var(--text-label)] font-bold uppercase tracking-[0.18em] text-[var(--color-accent)] shadow-[0_0_28px_var(--color-accent-glow)]">
            {home.eyebrow}
          </p>

          <h1
            className="font-bold leading-[1.04] text-[var(--color-text)]"
            style={{ fontSize: "var(--text-display)" }}
          >
            {headline.map((line, i) => (
              <span key={i} className="block">
                {i === headline.length - 1 ? (
                  <span className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-violet)] bg-clip-text text-transparent">
                    {line}
                  </span>
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
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-violet)] px-5 py-2.5 text-sm font-bold text-white shadow-[0_14px_32px_rgb(63_140_255_/_0.34)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgb(63_140_255_/_0.42)]"
            >
              {home.cta}
            </Link>
            <Link
              href={localePath(locale, "/contact")}
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-[var(--color-border-strong)] bg-[var(--color-surface-2)] px-5 py-2.5 text-sm font-bold text-[var(--color-text)] shadow-sm backdrop-blur-xl transition hover:border-[var(--color-accent)] hover:bg-[var(--color-surface-3)] hover:text-[var(--color-accent)]"
            >
              {home.ctaSecondary}
            </Link>
          </div>
        </div>

        <div className="relative rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-2)] p-4 shadow-[0_24px_80px_rgb(0_0_0_/_0.3)] backdrop-blur-xl lg:p-5">
          <div className="mb-4 flex items-center justify-between gap-4 border-b border-[var(--color-border)] pb-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-text-faint)]">
                {home.consoleEyebrow}
              </p>
              <p className="mt-1 font-heading text-xl font-bold text-[var(--color-text)]">
                {home.consoleTitle}
              </p>
            </div>
            <span className="rounded-full border border-[var(--color-success)]/35 bg-[var(--color-success-subtle)] px-3 py-1 text-xs font-bold text-[var(--color-success)]">
              {home.consoleStatus}
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {home.consoleMetrics.map(({ label, body, value }) => (
              <div
                key={label}
                className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface-3)] p-4"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-warm)]">
                    {label}
                  </span>
                  <span className="font-mono text-xs font-bold text-[var(--color-text)]">
                    {value}%
                  </span>
                </div>
                <div className="mb-3 h-2 overflow-hidden rounded-full bg-[var(--color-surface)]">
                  <span
                    className="block h-full rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-violet)]"
                    style={{ width: `${value}%` }}
                    aria-hidden="true"
                  />
                </div>
                <p className="text-sm font-medium leading-6 text-[var(--color-text-muted)]">
                  {body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-md border border-[var(--color-border)] bg-[linear-gradient(135deg,rgb(63_140_255_/_0.2),rgb(124_109_242_/_0.16))] p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-bold text-[var(--color-text)]">
                  {home.consoleFocusTitle}
                </p>
                <p className="mt-1 text-sm font-medium text-[var(--color-text-muted)]">
                  {home.consoleFocusBody}
                </p>
              </div>
              <span className="rounded-full bg-[rgb(255_255_255_/_0.12)] px-3 py-1 font-mono text-xs font-bold text-[var(--color-text)]">
                {home.consoleVersion}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
