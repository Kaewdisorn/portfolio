import { siteConfig } from "@/config/site";
import type { DictionaryHome } from "@/types/locale";

interface ContactSectionProps {
  home: DictionaryHome;
}

const LINKS = [
  {
    label: "GitHub",
    href: siteConfig.githubUrl,
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    external: true,
  },
  {
    label: "Email",
    href: "mailto:hello@example.com",
    external: false,
  },
] as const;

export default function ContactSection({ home }: ContactSectionProps) {
  return (
    <section className="py-16 sm:py-20 border-t border-[var(--color-border)]">
      <div className="mx-auto w-full max-w-[var(--max-w-layout)] px-5 sm:px-8">
        <div className="max-w-[48ch]">
          <h2 className="mb-3 text-xl font-semibold text-[var(--color-text)]">
            {home.contactTitle}
          </h2>
          <p className="mb-6 text-sm text-[var(--color-text-muted)] leading-relaxed">
            {home.contactBody}
          </p>
          <div className="flex flex-wrap gap-3">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="inline-flex items-center gap-1.5 rounded-md border border-[var(--color-border)] px-4 py-2 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                {link.label}
                {link.external && (
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                    <path d="M1 10L10 1M10 1H4M10 1v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
