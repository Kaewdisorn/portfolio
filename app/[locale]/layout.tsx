import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/types/locale";
import type { Locale } from "@/types/locale";
import { getDictionary } from "@/lib/getDictionary";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LangSetter from "@/components/layout/LangSetter";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(
  props: LayoutProps<"/[locale]">,
): Promise<Metadata> {
  const { locale } = await props.params;
  if (!locales.includes(locale as Locale)) return {};
  const isKo = locale === "ko";
  return {
    title: {
      default: isKo ? "프로덕트 엔지니어 포트폴리오" : "Product Engineer Portfolio",
      template: isKo ? "%s | 포트폴리오" : "%s | Portfolio",
    },
  };
}

export default async function LocaleLayout(props: LayoutProps<"/[locale]">) {
  const { locale } = await props.params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const dict = await getDictionary(locale as Locale);

  return (
    <>
      <LangSetter lang={locale} />
      <div className="flex min-h-full flex-col">
        <Navbar locale={locale as Locale} nav={dict.nav} />
        <div className="flex-1">{props.children}</div>
        <Footer footer={dict.footer} />
      </div>
    </>
  );
}
