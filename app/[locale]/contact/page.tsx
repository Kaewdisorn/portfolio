import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/getDictionary";
import { isValidLocale } from "@/lib/locale";
import ContactSection from "@/components/sections/ContactSection";

export async function generateMetadata(
  props: PageProps<"/[locale]/contact">,
): Promise<Metadata> {
  const { locale } = await props.params;
  if (!isValidLocale(locale)) return {};
  const dict = await getDictionary(locale);
  const url = `https://portfolio.example.com/${locale}/contact`;
  return {
    title: dict.home.contactTitle,
    description: dict.home.contactBody,
    alternates: {
      canonical: url,
      languages: {
        ko: "https://portfolio.example.com/ko/contact",
        en: "https://portfolio.example.com/en/contact",
      },
    },
  };
}

export default async function ContactPage(
  props: PageProps<"/[locale]/contact">,
) {
  const { locale } = await props.params;
  if (!isValidLocale(locale)) notFound();

  const dict = await getDictionary(locale);

  return (
    <main id="main-content" className="py-6 sm:py-10">
      <ContactSection home={dict.home} />
    </main>
  );
}
