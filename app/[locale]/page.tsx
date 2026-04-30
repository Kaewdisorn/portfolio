import type { Metadata } from "next";
import { getDictionary } from "@/lib/getDictionary";
import { getFeaturedProjects } from "@/lib/content";
import { isValidLocale } from "@/lib/locale";
import { notFound } from "next/navigation";
import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import SkillsSnapshot from "@/components/sections/SkillsSnapshot";
import ContactSection from "@/components/sections/ContactSection";

export async function generateMetadata(
  props: PageProps<"/[locale]">,
): Promise<Metadata> {
  const { locale } = await props.params;
  if (!isValidLocale(locale)) return {};
  const dict = await getDictionary(locale);
  const title =
    locale === "ko"
      ? "백엔드 엔지니어 포트폴리오"
      : "Backend Engineer Portfolio";
  const description = dict.home.subheadline;
  const url = `https://portfolio.example.com/${locale}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        ko: "https://portfolio.example.com/ko",
        en: "https://portfolio.example.com/en",
      },
    },
  };
}

export default async function HomePage(props: PageProps<"/[locale]">) {
  const { locale } = await props.params;
  if (!isValidLocale(locale)) notFound();

  const [dict, featured] = await Promise.all([
    getDictionary(locale),
    getFeaturedProjects(locale),
  ]);

  return (
    <main id="main-content">
      <Hero locale={locale} home={dict.home} />
      <FeaturedProjects locale={locale} home={dict.home} projects={featured} />
      <SkillsSnapshot home={dict.home} />
      <ContactSection home={dict.home} />
    </main>
  );
}
