"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { switchLocale } from "@/lib/locale";
import type { Locale } from "@/types/locale";

interface LanguageSwitcherProps {
  locale: Locale;
}

const labels: Record<Locale, string> = { ko: "KO", en: "EN" };
const opposite: Record<Locale, Locale> = { ko: "en", en: "ko" };

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const target = opposite[locale];
  const href = switchLocale(pathname, target);

  return (
    <Link
      href={href}
      aria-label={`Switch to ${target === "ko" ? "Korean" : "English"}`}
      className="rounded px-2 py-1 text-sm font-medium text-[var(--color-text-muted)] ring-1 ring-[var(--color-border)] transition-colors hover:text-[var(--color-text)] hover:ring-[var(--color-text-muted)]"
    >
      {labels[target]}
    </Link>
  );
}
