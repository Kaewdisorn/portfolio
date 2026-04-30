import { type Locale, locales } from "@/types/locale";

export function isValidLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
