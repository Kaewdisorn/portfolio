import type { DictionaryFooter } from "@/types/locale";
import Container from "./Container";

interface FooterProps {
  footer: DictionaryFooter;
}

export default function Footer({ footer }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface-2)] py-6 text-sm font-medium text-[var(--color-text-muted)]">
      <Container>
        <div className="flex items-center justify-center text-center">
          <span>{`© ${year}. ${footer.copyright}`}</span>
        </div>
      </Container>
    </footer>
  );
}
