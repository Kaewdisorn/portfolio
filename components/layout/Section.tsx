import { type ReactNode } from "react";
import clsx from "clsx";
import Container from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  /** When true, wraps content in a Container. Defaults to true. */
  contained?: boolean;
  as?: "section" | "div" | "article" | "aside";
}

/**
 * Consistent vertical-padding section wrapper.
 * Optionally applies the Container max-width.
 */
export default function Section({
  children,
  className,
  contained = true,
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag className={clsx("py-16 sm:py-20", className)}>
      {contained ? <Container>{children}</Container> : children}
    </Tag>
  );
}
