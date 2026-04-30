import { type Locale, locales } from "@/types/locale";

export function isValidLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/**
 * Prepend a locale prefix to a path.
 *
 * localePath("ko", "/projects/foo") → "/ko/projects/foo"
 * localePath("en", "/")            → "/en/"
 */
export function localePath(locale: Locale, path: string): string {
  return `/${locale}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Replace the leading locale segment of a path with a different locale.
 *
 * switchLocale("/ko/projects/mobility", "en") → "/en/projects/mobility"
 * switchLocale("/ko", "en")                   → "/en"
 * switchLocale("/en", "ko")                   → "/ko"
 *
 * If the path does not start with a known locale, the target locale is
 * prepended instead of replacing.
 */
export function switchLocale(currentPath: string, targetLocale: Locale): string {
  for (const l of locales) {
    if (currentPath === `/${l}`) return `/${targetLocale}`;
    if (currentPath.startsWith(`/${l}/`)) {
      return `/${targetLocale}${currentPath.slice(l.length + 1)}`;
    }
  }
  // No locale prefix found — just prepend the target locale.
  return localePath(targetLocale, currentPath);
}
