"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { switchLocale } from "@/lib/locale";
import type { Locale } from "@/types/locale";

interface LanguageSwitcherProps {
  locale: Locale;
}

const opposite: Record<Locale, Locale> = { ko: "en", en: "ko" };

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const target = opposite[locale];
  const href = switchLocale(pathname, target);
  const isKo = locale === "ko";

  return (
    <Link
      href={href}
      aria-label={`Switch to ${target === "ko" ? "Korean" : "English"}`}
      className="group relative inline-flex h-9 w-[4.5rem] items-center rounded-full border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
      style={{
        borderColor: "var(--color-border-strong)",
        background: "var(--color-surface-3)",
      }}
    >
      {/* Sliding thumb */}
      <span
        className="absolute h-7 w-7 rounded-full shadow-sm transition-all duration-200"
        style={{
          background: "linear-gradient(135deg, var(--color-accent) 0%, #7c3aed 100%)",
          left: isKo ? "4px" : "calc(100% - 32px)",
        }}
      />
      {/* KO label */}
      <span
        className="absolute left-0 w-1/2 text-center text-xs font-bold transition-colors duration-150 select-none"
        style={{ color: isKo ? "#fff" : "var(--color-text-muted)", zIndex: 1 }}
        aria-hidden="true"
      >
        KO
      </span>
      {/* EN label */}
      <span
        className="absolute right-0 w-1/2 text-center text-xs font-bold transition-colors duration-150 select-none"
        style={{ color: !isKo ? "#fff" : "var(--color-text-muted)", zIndex: 1 }}
        aria-hidden="true"
      >
        EN
      </span>
    </Link>
  );
}
