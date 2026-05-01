import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/getDictionary";
import { isValidLocale } from "@/lib/locale";
import { siteConfig } from "@/config/site";

export async function generateMetadata(
  props: PageProps<"/[locale]/contact">,
): Promise<Metadata> {
  const { locale } = await props.params;
  if (!isValidLocale(locale)) return {};
  const dict = await getDictionary(locale);
  const url = `https://portfolio.example.com/${locale}/contact`;
  return {
    title: dict.contactPage.pageTitle,
    description: dict.contactPage.pageDescription,
    alternates: {
      canonical: url,
      languages: {
        ko: "https://portfolio.example.com/ko/contact",
        en: "https://portfolio.example.com/en/contact",
      },
    },
  };
}

export default async function ContactPage(
  props: PageProps<"/[locale]/contact">,
) {
  const { locale } = await props.params;
  if (!isValidLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const contact = dict.contactPage;

  const channels = [
    {
      key: "github",
      title: contact.github.title,
      description: contact.github.description,
      actionLabel: contact.github.actionLabel,
      href: siteConfig.githubUrl,
      external: true,
      accentClass: "bg-[var(--color-accent-subtle)] text-[var(--color-accent)]",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
      meta: siteConfig.githubUrl.replace("https://", ""),
    },
    {
      key: "email",
      title: contact.email.title,
      description: contact.email.description,
      actionLabel: contact.email.actionLabel,
      href: `mailto:${siteConfig.email}`,
      external: false,
      accentClass: "bg-[var(--color-warm-subtle)] text-[var(--color-warm)]",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
      meta: siteConfig.email,
    },
  ] as const;

  return (
    <main id="main-content">
      <section className="relative overflow-hidden border-b border-[var(--color-border)] bg-[rgb(255_255_255_/_0.025)] py-14 sm:py-20">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-40 opacity-70"
          style={{
            background:
              "linear-gradient(120deg, var(--color-accent-glow), transparent 42%, var(--color-violet-subtle) 72%, transparent)",
          }}
          aria-hidden="true"
        />
        <div className="mx-auto w-full max-w-[var(--max-w-layout)] px-5 sm:px-8">
          <div className="max-w-[62ch]">
            <p className="eyebrow mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              {contact.eyebrow}
            </p>
            <h1 className="mb-5 text-3xl font-bold leading-tight text-[var(--color-text)] sm:text-5xl">
              {contact.pageTitle}
            </h1>
            <p className="max-w-[58ch] text-base font-medium leading-8 text-[var(--color-text-muted)] sm:text-lg">
              {contact.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-18">
        <div className="mx-auto w-full max-w-[var(--max-w-layout)] px-5 sm:px-8">
          <div className="mb-8 max-w-[56ch]">
            <h2 className="text-2xl font-bold text-[var(--color-text)] sm:text-3xl">
              {contact.channelsTitle}
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {channels.map((channel) => (
              <section
                key={channel.key}
                className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-2)] p-6 shadow-[0_20px_50px_rgb(0_0_0_/_0.18)] backdrop-blur-xl transition hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-3)] sm:p-7"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${channel.accentClass}`}>
                    {channel.icon}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--color-text)]">
                      {channel.title}
                    </h3>
                    <p className="text-sm font-medium text-[var(--color-text-faint)]">
                      {channel.meta}
                    </p>
                  </div>
                </div>

                <p className="mb-6 text-sm font-medium leading-7 text-[var(--color-text-muted)] sm:text-base">
                  {channel.description}
                </p>

                <Link
                  href={channel.href}
                  {...(channel.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="inline-flex min-h-11 items-center justify-center rounded-md border border-[var(--color-border-strong)] bg-[var(--color-surface-3)] px-5 text-sm font-bold text-[var(--color-text)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                >
                  {channel.actionLabel}
                </Link>
              </section>
            ))}
          </div>

          <section className="mt-8 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-2)] p-6 shadow-sm backdrop-blur-xl sm:p-7">
            <p className="eyebrow mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[var(--color-accent)]">
              Note
            </p>
            <h2 className="text-xl font-bold text-[var(--color-text)] sm:text-2xl">
              {contact.noteTitle}
            </h2>
            <p className="mt-3 max-w-[62ch] text-sm font-medium leading-7 text-[var(--color-text-muted)] sm:text-base">
              {contact.noteBody}
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
