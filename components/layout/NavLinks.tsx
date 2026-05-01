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
                "relative rounded-md px-4 py-2 text-[0.9375rem] font-semibold transition-colors",
                isActive
                  ? "bg-[var(--color-accent-subtle)] text-[var(--color-accent)] shadow-[inset_0_0_0_1px_rgb(63_140_255_/_0.18)]"
                  : "text-[var(--color-text-muted)] hover:bg-[var(--color-surface-3)] hover:text-[var(--color-text)]",
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
