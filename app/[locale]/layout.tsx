import { notFound } from "next/navigation";
import { locales } from "@/types/locale";
import type { Locale } from "@/types/locale";
import { getDictionary } from "@/lib/getDictionary";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default async function LocaleLayout(props: LayoutProps<"/[locale]">) {
  const { locale } = await props.params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const dict = await getDictionary(locale as Locale);

  return (
    <div className="flex min-h-full flex-col">
      <Navbar locale={locale as Locale} nav={dict.nav} />
      <main className="flex-1">{props.children}</main>
      <Footer locale={locale as Locale} footer={dict.footer} />
    </div>
  );
}
