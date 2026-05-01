import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/getDictionary";
import { isValidLocale } from "@/lib/locale";

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

  return (
    <main id="main-content">
      <article className="py-14 sm:py-20">
        <div className="mx-auto w-full max-w-[var(--max-w-layout)] px-5 sm:px-8">
          <header className="mb-12 max-w-[52ch]">
            <h1 className="mb-4 text-3xl font-bold leading-tight text-[var(--color-text)] sm:text-4xl">
              {about.pageTitle}
            </h1>
            <p className="text-base font-medium leading-8 text-[var(--color-text-muted)]">
              {about.intro}
            </p>
          </header>

          <div className="grid gap-5 md:grid-cols-2">
            <section
              aria-labelledby="focus-heading"
              className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-2)] p-5 shadow-sm sm:p-6"
            >
              <h2
                id="focus-heading"
                className="mb-5 text-sm font-mono font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]"
              >
                {about.focusTitle}
              </h2>
              <ul className="space-y-2" role="list">
                {about.focus.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm font-medium leading-7 text-[var(--color-text)]"
                  >
                    <span
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section
              aria-labelledby="values-heading"
              className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-2)] p-5 shadow-sm sm:p-6"
            >
              <h2
                id="values-heading"
                className="mb-5 text-sm font-mono font-bold uppercase tracking-[0.14em] text-[var(--color-warm)]"
              >
                {about.valuesTitle}
              </h2>
              <ul className="space-y-3" role="list">
                {about.values.map((item) => (
                  <li
                    key={item}
                    className="border-l-2 border-[var(--color-border-strong)] pl-4 text-sm font-medium leading-7 text-[var(--color-text-muted)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}

