import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale } from "@/types/locale";
import type { Locale } from "@/types/locale";

/**
 * Parse the Accept-Language header and return the best matching supported locale.
 * Falls back to the default locale if no match is found.
 */
function getPreferredLocale(request: NextRequest): Locale {
  const acceptLanguage = request.headers.get("accept-language") ?? "";
  for (const part of acceptLanguage.split(",")) {
    const lang = (part.split(";")[0] ?? "").trim().toLowerCase();
    const match = locales.find((l) => lang.startsWith(l));
    if (match) return match;
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname already has a supported locale prefix.
  const pathnameLocale = locales.find(
    (l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`,
  );

  if (pathnameLocale) {
    // Forward the detected locale to the root layout via a request header so
    // it can set the correct <html lang> attribute.
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-locale", pathnameLocale);
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  // No locale prefix — redirect to the user's preferred (or default) locale.
  const locale = getPreferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next.js internals, static assets, and Vercel system paths.
  matcher: ["/((?!_next|_vercel|favicon\\.ico|images|robots\\.txt).*)"],
};
