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
      {/* Background radial glow blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div
          className="absolute right-0 top-0 h-[640px] w-[640px] -translate-y-1/4 translate-x-1/4 rounded-full blur-[120px]"
          style={{ background: "rgb(99 102 241 / 0.12)" }}
        />
        <div
          className="absolute bottom-0 left-0 h-[400px] w-[400px] translate-y-1/4 -translate-x-1/4 rounded-full blur-[100px]"
          style={{ background: "rgb(99 102 241 / 0.07)" }}
        />
        {/* Scattered particle dots */}
        {[
          "top-[12%] left-[8%]", "top-[28%] left-[18%]", "top-[55%] left-[5%]",
          "top-[80%] left-[22%]", "top-[18%] right-[30%]", "top-[42%] right-[22%]",
          "top-[70%] right-[12%]", "top-[8%] right-[8%]", "top-[60%] left-[40%]",
          "top-[90%] right-[35%]",
        ].map((pos, i) => (
          <span
            key={i}
            className={`absolute ${pos} h-1 w-1 rounded-full`}
            style={{ background: "rgb(99 102 241 / 0.35)" }}
          />
        ))}
        {/* Decorative ring circles */}
        <span
          className="absolute left-[12%] top-[45%] h-40 w-40 rounded-full border"
          style={{ borderColor: "rgb(99 102 241 / 0.1)" }}
        />
        <span
          className="absolute right-[20%] bottom-[10%] h-24 w-24 rounded-full border"
          style={{ borderColor: "rgb(99 102 241 / 0.08)" }}
        />
      </div>

      <div className="mx-auto w-full max-w-[var(--max-w-layout)] px-5 sm:px-8">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:justify-between">

          {/* ── Left column: text ── */}
          <div className="w-full max-w-[52ch] lg:max-w-[44ch]">
            {/* Available badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium"
              style={{
                borderColor: "var(--color-border-strong)",
                background: "var(--color-surface-2)",
                color: "var(--color-text-muted)",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                  style={{ background: "rgb(74 222 128)" }} />
                <span className="relative inline-flex h-2 w-2 rounded-full"
                  style={{ background: "rgb(74 222 128)" }} />
              </span>
              {home.availableBadge}
            </div>

            {/* Headline */}
            <h1
              className="mb-6 font-bold leading-[1.12] tracking-tight"
              style={{ fontSize: "var(--text-display)", color: "var(--color-text)" }}
            >
              {headline.map((line, i) => (
                <span key={i} className="block">
                  {i === headline.length - 1 ? (
                    <span
                      className="bg-clip-text"
                      style={{
                        backgroundImage: "linear-gradient(135deg, var(--color-accent) 0%, #a78bfa 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {line}
                    </span>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </h1>

            {/* Subheadline */}
            <p
              className="mb-10 max-w-[44ch] text-base leading-relaxed sm:text-lg"
              style={{ color: "var(--color-text-muted)" }}
            >
              {home.subheadline}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={localePath(locale, "/projects")}
                className="group inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-[1.03] hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                style={{
                  background: "linear-gradient(135deg, var(--color-accent) 0%, #7c3aed 100%)",
                  boxShadow: "0 4px 24px rgb(99 102 241 / 0.35)",
                }}
              >
                {home.cta}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5">
                  <path d="M1 7h12M8 3l5 4-5 4" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>

              <Link
                href={localePath(locale, "/#contact")}
                className="inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-semibold transition-all hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                style={{
                  borderColor: "var(--color-border-strong)",
                  color: "var(--color-text)",
                  background: "var(--color-surface-2)",
                }}
              >
                {home.ctaSecondary}
              </Link>
            </div>
          </div>

          {/* ── Right column: avatar ── */}
          <div className="relative hidden shrink-0 lg:flex lg:items-center lg:justify-center">
            {/* Outer glow ring */}
            <div
              className="absolute h-[340px] w-[340px] rounded-full blur-2xl"
              style={{ background: "rgb(99 102 241 / 0.18)" }}
              aria-hidden="true"
            />

            {/* Avatar circle */}
            <div
              className="relative z-10 flex h-72 w-72 items-center justify-center overflow-hidden rounded-full border-2"
              style={{
                borderColor: "rgb(99 102 241 / 0.4)",
                background: "linear-gradient(145deg, var(--color-surface-3) 0%, var(--color-surface-2) 100%)",
                boxShadow: "0 0 0 8px rgb(99 102 241 / 0.07), 0 24px 64px rgb(0 0 0 / 0.5)",
              }}
            >
              {/* Initials placeholder — replace with <Image> when a profile photo is available */}
              <div className="flex flex-col items-center gap-2 select-none" aria-hidden="true">
                <span
                  className="text-6xl font-bold tracking-tight"
                  style={{
                    backgroundImage: "linear-gradient(135deg, var(--color-accent) 0%, #a78bfa 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  BE
                </span>
                <span className="text-xs font-mono uppercase tracking-widest"
                  style={{ color: "var(--color-text-faint)" }}>
                  Backend Eng.
                </span>
              </div>
            </div>

            {/* Floating icon — code */}
            <div
              className="absolute -right-4 top-6 z-20 flex h-11 w-11 items-center justify-center rounded-xl border text-xs font-bold shadow-lg"
              style={{
                borderColor: "var(--color-border-strong)",
                background: "var(--color-surface-3)",
                color: "var(--color-accent)",
                boxShadow: "0 8px 24px rgb(0 0 0 / 0.4)",
              }}
              aria-hidden="true"
            >
              {"</>"}
            </div>

            {/* Floating icon — chip */}
            <div
              className="absolute -left-4 bottom-10 z-20 flex h-11 w-11 items-center justify-center rounded-full border shadow-lg"
              style={{
                borderColor: "var(--color-border-strong)",
                background: "var(--color-surface-3)",
                color: "var(--color-accent)",
                boxShadow: "0 8px 24px rgb(0 0 0 / 0.4)",
              }}
              aria-hidden="true"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="7" y="7" width="10" height="10" rx="1" />
                <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
