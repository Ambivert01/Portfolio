"use client";

import { useEffect, useRef, useId } from "react";

export function MermaidDiagram({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const id = useId().replace(/:/g, "");

  useEffect(() => {
    let cancelled = false;
    async function render() {
      const mermaid = (await import("mermaid")).default;
      mermaid.initialize({
        startOnLoad: false,
        theme: "dark",
        themeVariables: {
          background: "transparent",
          primaryColor: "#7c3aed22",
          primaryBorderColor: "#7c3aed88",
          primaryTextColor: "#c4b5fd",
          lineColor: "#7c3aed99",
          secondaryColor: "#0e7490",
          tertiaryColor: "#1e293b",
          edgeLabelBackground: "#0f172a",
          fontFamily: "ui-monospace, monospace",
          fontSize: "13px",
        },
        flowchart: { curve: "basis", padding: 20 },
        sequence: { actorMargin: 60 },
      });
      try {
        const { svg } = await mermaid.render(`m${id}`, chart.trim());
        if (!cancelled && ref.current) ref.current.innerHTML = svg;
      } catch {
        if (!cancelled && ref.current)
          ref.current.innerHTML = `<p class="text-xs text-fg-subtle p-4">Diagram unavailable</p>`;
      }
    }
    render();
    return () => { cancelled = true; };
  }, [chart, id]);

  return (
    <div className="overflow-x-auto rounded-xl border border-border bg-bg-inset p-4">
      <div ref={ref} className="flex min-h-[120px] items-center justify-center [&_svg]:mx-auto [&_svg]:max-w-full" />
    </div>
  );
}
