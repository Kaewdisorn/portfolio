import Link from "next/link";
import { localePath } from "@/lib/locale";
import type { Locale } from "@/types/locale";
import type { DictionaryNav } from "@/types/locale";
import Container from "./Container";
import LanguageSwitcher from "./LanguageSwitcher";

interface NavbarProps {
  locale: Locale;
  nav: DictionaryNav;
}

export default function Navbar({ locale, nav }: NavbarProps) {
  const links: { href: string; label: string }[] = [
    { href: localePath(locale, "/"), label: nav.home },
    { href: localePath(locale, "/projects"), label: nav.projects },
    { href: localePath(locale, "/about"), label: nav.about },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[var(--color-surface)]/90 backdrop-blur-sm">
      <Container>
        <nav
          aria-label="Main navigation"
          className="flex h-14 items-center justify-between gap-6"
        >
          {/* Logo / site name */}
          <Link
            href={localePath(locale, "/")}
            className="text-sm font-semibold tracking-tight text-[var(--color-text)]"
          >
            Portfolio
          </Link>

          {/* Page links */}
          <ul className="flex items-center gap-1" role="list">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="rounded px-3 py-1.5 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Language switcher */}
          <LanguageSwitcher locale={locale} />
        </nav>
      </Container>
    </header>
  );
}
