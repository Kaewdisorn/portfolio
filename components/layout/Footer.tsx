import Link from "next/link";
import type { DictionaryFooter } from "@/types/locale";
import Container from "./Container";
import { siteConfig } from "@/config/site";

interface FooterProps {
  footer: DictionaryFooter;
}

export default function Footer({ footer }: FooterProps) {
  return (
    <footer className="border-t border-[var(--color-border)] py-8 text-sm text-[var(--color-text-muted)]">
      <Container>
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <span>{footer.copyright}</span>
          <Link
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--color-text)]"
          >
            {footer.sourceCode}
          </Link>
        </div>
      </Container>
    </footer>
  );
}
