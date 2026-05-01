import type { DictionaryFooter } from "@/types/locale";
import Container from "./Container";

interface FooterProps {
  footer: DictionaryFooter;
}

export default function Footer({ footer }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[rgb(10_22_40_/_0.72)] py-6 text-sm font-medium text-[var(--color-text-muted)] backdrop-blur-xl">
      <Container>
        <div className="flex items-center justify-center text-center">
          <span>{`© ${year}. ${footer.copyright}`}</span>
        </div>
      </Container>
    </footer>
  );
}
