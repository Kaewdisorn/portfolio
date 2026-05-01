"use client";

import { useEffect, useRef, useId } from "react";

interface MermaidChartProps {
  chart: string;
}

export default function MermaidChart({ chart }: MermaidChartProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rawId = useId();
  // useId may return strings like ":r0:" — sanitize to a valid HTML id
  const id = `mermaid-${rawId.replace(/[^a-zA-Z0-9-]/g, "")}`;

  useEffect(() => {
    let cancelled = false;

    import("mermaid").then(({ default: mermaid }) => {
      if (cancelled) return;
      mermaid.initialize({
        startOnLoad: false,
        theme: "base",
        themeVariables: {
          background: "#0a1628",
          primaryColor: "#122642",
          primaryTextColor: "#f8fbff",
          primaryBorderColor: "#3f8cff",
          lineColor: "#71829b",
          secondaryColor: "#182b48",
          tertiaryColor: "#0f1d32",
          fontFamily: "inherit",
        },
        fontFamily: "inherit",
      });
      mermaid.render(id, chart).then(({ svg }) => {
        if (!cancelled && ref.current) {
          ref.current.innerHTML = svg;
          const svgEl = ref.current.querySelector("svg");
          if (svgEl) {
            svgEl.setAttribute("width", "100%");
            svgEl.style.height = "auto";
            svgEl.style.maxWidth = "100%";
          }
        }
      });
    });

    return () => {
      cancelled = true;
    };
  }, [chart, id]);

  return (
    <div
      ref={ref}
      aria-label="Architecture diagram"
      className="my-6 overflow-x-auto rounded-md border border-[var(--color-border)] bg-[var(--color-surface-2)] p-4 text-center shadow-sm backdrop-blur-xl"
    />
  );
}
