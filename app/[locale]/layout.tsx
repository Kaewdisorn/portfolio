import { notFound } from "next/navigation";
import { locales } from "@/types/locale";
import type { Locale } from "@/types/locale";

export default async function LocaleLayout(props: LayoutProps<"/[locale]">) {
  const { locale } = await props.params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return (
    <div className="flex min-h-full flex-col">
      {/* <Navbar locale={locale} /> — added in step 7 */}
      <main className="flex-1">{props.children}</main>
      {/* <Footer locale={locale} /> — added in step 7 */}
    </div>
  );
}
