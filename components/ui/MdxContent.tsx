import { MDXRemote } from "next-mdx-remote/rsc";
import type { ComponentPropsWithoutRef } from "react";

const components = {
  h2: (props: ComponentPropsWithoutRef<"h2">) => {
    const id =
      typeof props.children === "string"
        ? props.children
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]/g, "")
        : undefined;
    return (
      <h2
        id={id}
        className="mt-10 mb-4 text-xl font-semibold text-[var(--color-text)] scroll-mt-20"
        {...props}
      />
    );
  },
  h3: (props: ComponentPropsWithoutRef<"h3">) => {
    const id =
      typeof props.children === "string"
        ? props.children
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]/g, "")
        : undefined;
    return (
      <h3
        id={id}
        className="mt-8 mb-3 text-base font-semibold text-[var(--color-text)] scroll-mt-20"
        {...props}
      />
    );
  },
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p
      className="mb-4 text-sm leading-relaxed text-[var(--color-text-muted)]"
      {...props}
    />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul
      className="mb-4 list-disc pl-5 space-y-1.5 text-sm text-[var(--color-text-muted)] leading-relaxed"
      {...props}
    />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol
      className="mb-4 list-decimal pl-5 space-y-1.5 text-sm text-[var(--color-text-muted)] leading-relaxed"
      {...props}
    />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => (
    <li className="pl-1" {...props} />
  ),
  code: (props: ComponentPropsWithoutRef<"code">) => (
    <code
      className="rounded px-1.5 py-0.5 text-xs font-mono bg-[var(--color-surface-2)] text-[var(--color-text)] border border-[var(--color-border)]"
      {...props}
    />
  ),
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre
      className="mb-4 overflow-x-auto rounded-md border border-[var(--color-border)] bg-[var(--color-surface-2)] p-4 text-xs font-mono leading-relaxed text-[var(--color-text)]"
      {...props}
    />
  ),
  a: (props: ComponentPropsWithoutRef<"a">) => {
    const isExternal =
      typeof props.href === "string" && props.href.startsWith("http");
    return (
      <a
        className="text-[var(--color-accent)] underline underline-offset-2 hover:text-[var(--color-accent-hover)]"
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        {...props}
      />
    );
  },
};

interface MdxContentProps {
  source: string;
}

export default function MdxContent({ source }: MdxContentProps) {
  return (
    <div className="max-w-[var(--max-w-reading)]">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
