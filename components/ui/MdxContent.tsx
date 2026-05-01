import { MDXRemote } from "next-mdx-remote/rsc";
import { isValidElement, type ComponentPropsWithoutRef, type ReactElement } from "react";
import MermaidChart from "@/components/ui/MermaidChart";

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
        className="mb-4 mt-10 scroll-mt-20 text-2xl font-bold leading-tight text-[var(--color-text)] [overflow-wrap:anywhere]"
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
        className="mb-3 mt-8 scroll-mt-20 text-lg font-bold text-[var(--color-text)] [overflow-wrap:anywhere]"
        {...props}
      />
    );
  },
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p
      className="mb-4 text-base font-medium leading-8 text-[var(--color-text-muted)] [overflow-wrap:anywhere]"
      {...props}
    />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul
      className="mb-4 list-disc space-y-2 pl-5 text-base font-medium leading-8 text-[var(--color-text-muted)] [overflow-wrap:anywhere]"
      {...props}
    />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol
      className="mb-4 list-decimal space-y-2 pl-5 text-base font-medium leading-8 text-[var(--color-text-muted)] [overflow-wrap:anywhere]"
      {...props}
    />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => (
    <li className="pl-1 [overflow-wrap:anywhere]" {...props} />
  ),
  code: (props: ComponentPropsWithoutRef<"code">) => (
    <code
      className="rounded border border-[var(--color-border)] bg-[var(--color-surface-3)] px-1.5 py-0.5 font-mono text-sm text-[var(--color-text)]"
      {...props}
    />
  ),
  pre: (props: ComponentPropsWithoutRef<"pre">) => {
    // Detect mermaid fenced code block and render as diagram
    const child = props.children;
    if (isValidElement(child)) {
      const codeEl = child as ReactElement<{ className?: string; children?: string }>;
      if (
        typeof codeEl.props?.className === "string" &&
        codeEl.props.className.includes("language-mermaid") &&
        typeof codeEl.props?.children === "string"
      ) {
        return <MermaidChart chart={codeEl.props.children.trim()} />;
      }
    }
    return (
      <pre
        className="mb-4 overflow-x-auto rounded-md border border-[var(--color-border)] bg-[var(--color-surface-2)] p-4 font-mono text-sm leading-7 text-[var(--color-text)]"
        {...props}
      />
    );
  },
  a: (props: ComponentPropsWithoutRef<"a">) => {
    const isExternal =
      typeof props.href === "string" && props.href.startsWith("http");
    return (
      <a
        className="font-semibold text-[var(--color-accent)] underline underline-offset-2 hover:text-[var(--color-accent-hover)]"
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
    <div className="w-full max-w-[var(--max-w-reading)] overflow-x-hidden [overflow-wrap:anywhere]">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
