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
      <article className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[var(--max-w-layout)] px-5 sm:px-8">
          <header className="mb-12 max-w-[52ch]">
            <h1 className="mb-3 text-3xl font-semibold text-[var(--color-text)]">
              {about.pageTitle}
            </h1>
            <p className="text-base text-[var(--color-text-muted)] leading-relaxed">
              {about.intro}
            </p>
          </header>

          <div className="grid gap-12 sm:grid-cols-2">
            <section aria-labelledby="focus-heading">
              <h2
                id="focus-heading"
                className="mb-5 text-sm font-mono uppercase tracking-wide text-[var(--color-text-muted)]"
              >
                {about.focusTitle}
              </h2>
              <ul className="space-y-2" role="list">
                {about.focus.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-[var(--color-text)] leading-relaxed"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="values-heading">
              <h2
                id="values-heading"
                className="mb-5 text-sm font-mono uppercase tracking-wide text-[var(--color-text-muted)]"
              >
                {about.valuesTitle}
              </h2>
              <ul className="space-y-3" role="list">
                {about.values.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-[var(--color-text-muted)] leading-relaxed border-l-2 border-[var(--color-border)] pl-4"
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

