export default async function LocaleLayout(
  props: LayoutProps<"/[locale]">,
) {
  return <>{props.children}</>;
}
