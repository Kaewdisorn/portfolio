"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface NavLinksProps {
  links: { href: string; label: string }[];
}

export default function NavLinks({ links }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <ul className="hidden sm:flex items-center gap-1" role="list">
      {links.map(({ href, label }) => {
        // Active: exact match for home, prefix match for others
        const isActive =
          href.endsWith("/")
            ? pathname === href || pathname === href.slice(0, -1)
            : pathname === href || pathname.startsWith(href + "/");

        return (
          <li key={href}>
            <Link
              href={href}
              aria-current={isActive ? "page" : undefined}
              className={clsx(
                "relative rounded px-3 py-1.5 text-sm transition-colors",
                isActive
                  ? "text-[var(--color-text)] font-medium after:absolute after:bottom-[-1px] after:left-3 after:right-3 after:h-px after:bg-[var(--color-accent)] after:content-['']"
                  : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]",
              )}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
