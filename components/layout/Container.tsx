import { type ReactNode } from "react";
import clsx from "clsx";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Centered max-width wrapper used on every page.
 * Max width matches the --max-w-layout token (1100px).
 */
export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={clsx(
        "mx-auto w-full max-w-[var(--max-w-layout)] px-5 sm:px-8",
        className,
      )}
    >
      {children}
    </div>
  );
}
