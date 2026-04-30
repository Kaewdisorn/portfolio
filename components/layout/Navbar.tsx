import Link from "next/link";
import { localePath } from "@/lib/locale";
import type { Locale } from "@/types/locale";
import type { DictionaryNav } from "@/types/locale";
import Container from "./Container";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";

interface NavbarProps {
  locale: Locale;
  nav: DictionaryNav;
}

export default function Navbar({ locale, nav }: NavbarProps) {
  const links: { href: string; label: string }[] = [
    { href: localePath(locale, "/"), label: nav.home },
    { href: localePath(locale, "/projects"), label: nav.projects },
    { href: localePath(locale, "/about"), label: nav.about },
    { href: localePath(locale, "/contact"), label: nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[var(--color-surface)]/95 backdrop-blur-md">
      <Container>
        <nav
          aria-label="Main navigation"
          className="flex h-14 items-center justify-between gap-6"
        >
          {/* Logo / site name */}
          <Link
            href={localePath(locale, "/")}
            className="flex items-center gap-2 text-sm font-semibold tracking-tight text-[var(--color-text)]"
          >
            <span
              className="flex h-6 w-6 items-center justify-center rounded bg-[var(--color-accent)] text-[10px] font-bold text-white"
              aria-hidden="true"
            >
              P
            </span>
            Portfolio
          </Link>

          {/* Desktop page links — active state via usePathname */}
          <NavLinks links={links} />

          <div className="flex items-center gap-2">
            {/* Language switcher */}
            <LanguageSwitcher locale={locale} />

            {/* Mobile menu button + dropdown */}
            <MobileMenu links={links} />
          </div>
        </nav>
      </Container>
    </header>
  );
}

