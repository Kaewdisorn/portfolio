import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/getDictionary";
import { isValidLocale, localePath } from "@/lib/locale";

export async function generateMetadata(
  props: PageProps<"/[locale]/about">,
): Promise<Metadata> {
  const { locale } = await props.params;
  if (!isValidLocale(locale)) return {};
  const dict = await getDictionary(locale);
  const url = `https://portfolio.example.com/${locale}/about`;
  return {
    title: dict.about.pageTitle,
    description: dict.about.pageDescription,
    alternates: {
      canonical: url,
      languages: {
        ko: "https://portfolio.example.com/ko/about",
        en: "https://portfolio.example.com/en/about",
      },
    },
  };
}

export default async function AboutPage(props: PageProps<"/[locale]/about">) {
  const { locale } = await props.params;
  if (!isValidLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const about = dict.about;
  const linkPrimary = localePath(locale, "/projects");
  const linkSecondary = localePath(locale, "/contact");

  return (
    <main id="main-content">
      <article>
        <section className="relative overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-surface-2)] py-14 sm:py-20">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-40 opacity-70"
            style={{
              background:
                "radial-gradient(circle at top left, var(--color-accent-glow), transparent 42%), radial-gradient(circle at top right, rgb(180 83 9 / 0.12), transparent 36%)",
            }}
            aria-hidden="true"
          />
          <div className="mx-auto w-full max-w-[var(--max-w-layout)] px-5 sm:px-8">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(400px,0.9fr)] lg:items-start xl:grid-cols-[minmax(0,1.15fr)_minmax(440px,0.95fr)]">
              <header className="relative max-w-[66ch]">
                <p className="eyebrow mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                  {about.eyebrow}
                </p>
                <h1 className="mb-5 text-3xl font-bold leading-tight text-[var(--color-text)] sm:text-5xl">
                  {about.pageTitle}
                </h1>
                <p className="max-w-[60ch] text-base font-medium leading-8 text-[var(--color-text-muted)] sm:text-lg">
                  {about.intro}
                </p>

                <section aria-labelledby="summary-heading" className="mt-10 max-w-[62ch]">
                  <h2
                    id="summary-heading"
                    className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-[var(--color-text-faint)]"
                  >
                    {about.summaryTitle}
                  </h2>
                  <div className="space-y-4">
                    {about.summary.map((item) => (
                      <p
                        key={item}
                        className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-4 text-sm font-medium leading-7 text-[var(--color-text)] shadow-sm"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </section>
              </header>

              <aside className="relative rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[0_24px_60px_rgb(40_28_16_/_0.08)] sm:p-6 lg:p-7">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <h2 className="text-base font-bold text-[var(--color-text)]">
                    {about.snapshotTitle}
                  </h2>
                  <span className="rounded-full bg-[var(--color-accent-subtle)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                    Portfolio
                  </span>
                </div>
                <div className="space-y-4">
                  {about.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-2)] p-4"
                    >
                      <p className="text-2xl font-bold tracking-tight text-[var(--color-text)]">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-sm font-bold text-[var(--color-accent)]">
                        {stat.label}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[var(--color-text-muted)]">
                        {stat.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>

        <div className="mx-auto w-full max-w-[var(--max-w-layout)] px-5 sm:px-8">
          <section className="py-14 sm:py-18" aria-labelledby="domains-heading">
            <div className="mb-8 max-w-[56ch]">
              <h2 id="domains-heading" className="text-2xl font-bold text-[var(--color-text)] sm:text-3xl">
                {about.domainsTitle}
              </h2>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {about.domains.map((item, index) => (
                <section
                  key={item.title}
                  className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-2)] p-5 shadow-sm sm:p-6"
                >
                  <span
                    className={
                      index === 1
                        ? "mb-4 inline-flex h-2.5 w-12 rounded-full bg-[var(--color-warm)]"
                        : "mb-4 inline-flex h-2.5 w-12 rounded-full bg-[var(--color-accent)]"
                    }
                    aria-hidden="true"
                  />
                  <h3 className="mb-3 text-xl font-bold text-[var(--color-text)]">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium leading-7 text-[var(--color-text-muted)]">
                    {item.body}
                  </p>
                </section>
              ))}
            </div>
          </section>

          <section className="border-t border-[var(--color-border)] py-14 sm:py-18" aria-labelledby="experience-heading">
            <div className="mb-8 max-w-[56ch]">
              <h2 id="experience-heading" className="text-2xl font-bold text-[var(--color-text)] sm:text-3xl">
                {about.experienceTitle}
              </h2>
            </div>
            <div className="space-y-6 sm:space-y-7">
              {about.experience.map((item) => (
                <section
                  key={`${item.period}-${item.title}`}
                  className="grid grid-cols-[1.5rem_minmax(0,1fr)] gap-x-4 sm:grid-cols-[9rem_2rem_minmax(0,1fr)] sm:gap-x-6"
                >
                  <div className="hidden sm:block pt-1">
                    <p className="text-sm font-semibold tracking-[0.01em] text-[var(--color-text)]">
                      {item.period}
                    </p>
                  </div>
                  <div className="relative flex justify-center sm:justify-center">
                    <span className="absolute bottom-[-1.75rem] left-1/2 top-0 w-px -translate-x-1/2 bg-[var(--color-border)] last:hidden" aria-hidden="true" />
                    <span className="relative top-2 inline-flex h-3 w-3 rounded-full border-2 border-[var(--color-surface)] bg-[var(--color-accent)] shadow-[0_0_0_4px_var(--color-accent-subtle)]" aria-hidden="true" />
                  </div>
                  <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-sm sm:p-6">
                    <p className="mb-3 text-sm font-semibold tracking-[0.01em] text-[var(--color-text)] sm:hidden">
                      {item.period}
                    </p>
                    <h3 className="text-lg font-bold text-[var(--color-text)] sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm font-medium leading-7 text-[var(--color-text-muted)]">
                      {item.body}
                    </p>
                  </div>
                </section>
              ))}
            </div>
          </section>

          <section className="border-t border-[var(--color-border)] py-14 sm:py-18" aria-labelledby="principles-heading">
            <div className="mb-8 max-w-[56ch]">
              <h2 id="principles-heading" className="text-2xl font-bold text-[var(--color-text)] sm:text-3xl">
                {about.principlesTitle}
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {about.principles.map((item, index) => (
                <section
                  key={item.title}
                  className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-2)] p-5 shadow-sm sm:p-6"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span
                      className={
                        index % 2 === 0
                          ? "inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-accent-subtle)] text-sm font-bold text-[var(--color-accent)]"
                          : "inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-warm-subtle)] text-sm font-bold text-[var(--color-warm)]"
                      }
                    >
                      0{index + 1}
                    </span>
                    <h3 className="text-lg font-bold text-[var(--color-text)]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm font-medium leading-7 text-[var(--color-text-muted)]">
                    {item.body}
                  </p>
                </section>
              ))}
            </div>
          </section>

          <section className="py-14 sm:py-18">
            <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface-2)] p-6 shadow-[0_24px_60px_rgb(40_28_16_/_0.08)] sm:p-8">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
                <div className="max-w-[56ch]">
                  <p className="eyebrow mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                    Next Step
                  </p>
                  <h2 className="text-2xl font-bold text-[var(--color-text)] sm:text-3xl">
                    {about.ctaTitle}
                  </h2>
                  <p className="mt-4 text-sm font-medium leading-7 text-[var(--color-text-muted)] sm:text-base">
                    {about.ctaBody}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <Link
                    href={linkPrimary}
                    className="inline-flex min-h-11 items-center justify-center rounded-md bg-[var(--color-accent)] px-5 text-sm font-bold text-white transition hover:bg-[var(--color-accent-hover)]"
                  >
                    {about.primaryCta}
                  </Link>
                  <Link
                    href={linkSecondary}
                    className="inline-flex min-h-11 items-center justify-center rounded-md border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-5 text-sm font-bold text-[var(--color-text)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                  >
                    {about.secondaryCta}
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}

