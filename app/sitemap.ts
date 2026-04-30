import type { MetadataRoute } from "next";
import { locales } from "@/types/locale";
import { getProjectSlugs } from "@/lib/content";

const BASE = "https://portfolio.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    entries.push({
      url: `${BASE}/${locale}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          ko: `${BASE}/ko`,
          en: `${BASE}/en`,
        },
      },
    });

    entries.push({
      url: `${BASE}/${locale}/projects`,
      lastModified: new Date(),
    });

    entries.push({
      url: `${BASE}/${locale}/about`,
      lastModified: new Date(),
    });

    const slugs = getProjectSlugs(locale);
    for (const slug of slugs) {
      entries.push({
        url: `${BASE}/${locale}/projects/${slug}`,
        lastModified: new Date(),
        alternates: {
          languages: {
            ko: `${BASE}/ko/projects/${slug}`,
            en: `${BASE}/en/projects/${slug}`,
          },
        },
      });
    }
  }

  return entries;
}
