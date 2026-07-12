"use client";

import { forwardRef, useEffect, useImperativeHandle, useRef, useId } from "react";

export type MermaidDiagramHandle = {
  zoomIn: () => void;
  zoomOut: () => void;
  resetZoom: () => void;
};

export const MermaidDiagram = forwardRef<MermaidDiagramHandle, { chart: string }>(function MermaidDiagram(
  { chart },
  refHandle,
) {
  const ref = useRef<HTMLDivElement>(null);

  const scaleRef = useRef(1);
  const panRef = useRef({ x: 0, y: 0 });

  const applyTransform = () => {
    const root = ref.current;
    if (!root) return;
    const svg = root.querySelector("svg") as SVGSVGElement | null;
    if (!svg) return;

    const { x, y } = panRef.current;
    const scale = scaleRef.current;

    svg.dataset.panX = String(x);
    svg.dataset.panY = String(y);
    svg.dataset.scale = String(scale);

    svg.style.transformOrigin = "0 0";
    svg.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
  };

  const zoomAtPoint = (clientX: number, clientY: number, nextScale: number) => {
    const root = ref.current;
    if (!root) return;
    const svg = root.querySelector("svg") as SVGSVGElement | null;
    if (!svg) return;

    const container = root.getBoundingClientRect();
    const px = clientX - container.left;
    const py = clientY - container.top;

    const prevScale = scaleRef.current;
    if (prevScale === nextScale) return;

    const { x: panX0, y: panY0 } = panRef.current;

    // Keep the point under cursor stable:
    // world coordinates before zoom:
    const worldX = (px - panX0) / prevScale;
    const worldY = (py - panY0) / prevScale;

    // after zoom, adjust pan so that world point maps to same screen px/py
    const nextPanX = px - worldX * nextScale;
    const nextPanY = py - worldY * nextScale;

    scaleRef.current = nextScale;
    panRef.current = { x: nextPanX, y: nextPanY };
    applyTransform();
  };



  const id = useId().replace(/:/g, "");


  useEffect(() => {
    let cancelled = false;
    async function render() {
      const mermaid = (await import("mermaid")).default;

      // Match app themes by reading the global `.light` class on <html>.
      const isLight = document.documentElement.classList.contains("light");

      const themeVariables = isLight
        ? {
            background: "transparent",
            primaryColor: "#4f46e5", // indigo
            primaryBorderColor: "#4f46e5",
            primaryTextColor: "#1f2937",
            lineColor: "#7c3aed",
            secondaryColor: "#0891b2",
            tertiaryColor: "#e5e7eb",
            edgeLabelBackground: "#f3f4f6",
            fontFamily: "ui-monospace, monospace",
            fontSize: "13px",
          }
        : {
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
          };

      mermaid.initialize({
        startOnLoad: false,
        theme: isLight ? "base" : "dark",
        themeVariables,
        flowchart: { curve: "basis", padding: 20 },
        sequence: { actorMargin: 60 },
      });
      try {
        const { svg } = await mermaid.render(`m${id}`, chart.trim());
        if (!cancelled && ref.current) {
          // Reset transforms before inserting new diagram
          scaleRef.current = 1;
          panRef.current = { x: 0, y: 0 };

          ref.current.innerHTML = svg;

          // Ensure the inserted SVG applies our transform state
          requestAnimationFrame(() => {
            if (!cancelled) applyTransform();
          });
        }
      } catch {

        if (!cancelled && ref.current)
          ref.current.innerHTML = `<p class="text-xs text-fg-subtle p-4">Diagram unavailable</p>`;
      }
    }
    render();
    return () => { cancelled = true; };
  }, [chart, id]);

  useImperativeHandle(refHandle, () => ({
    zoomIn: () => {
      const root = ref.current;
      const container = root?.getBoundingClientRect();
      const centerX = container ? container.left + container.width / 2 : 0;
      const centerY = container ? container.top + container.height / 2 : 0;
      const nextScale = Math.min(4, scaleRef.current * 1.2);
      zoomAtPoint(centerX, centerY, nextScale);
    },
    zoomOut: () => {
      const root = ref.current;
      const container = root?.getBoundingClientRect();
      const centerX = container ? container.left + container.width / 2 : 0;
      const centerY = container ? container.top + container.height / 2 : 0;
      const nextScale = Math.max(0.5, scaleRef.current / 1.2);
      zoomAtPoint(centerX, centerY, nextScale);
    },
    resetZoom: () => {
      scaleRef.current = 1;
      panRef.current = { x: 0, y: 0 };
      applyTransform();
    },
  }));

  return (
    <div className="rounded-xl border border-border bg-bg-inset p-4">
      {/* drag-pan only (no wheel zoom) */}
      <div
        className="relative w-full overflow-hidden"
        onPointerDown={(e) => {
          const svg = (ref.current?.querySelector("svg") ?? null) as SVGSVGElement | null;
          if (!svg) return;

          (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);

          const startX = e.clientX;
          const startY = e.clientY;
          const panX0 = panRef.current.x;
          const panY0 = panRef.current.y;

          const onMove = (ev: PointerEvent) => {
            const dx = ev.clientX - startX;
            const dy = ev.clientY - startY;
            panRef.current = { x: panX0 + dx, y: panY0 + dy };
            applyTransform();
          };

          const onUp = () => {
            window.removeEventListener("pointermove", onMove);
            window.removeEventListener("pointerup", onUp);
          };

          window.addEventListener("pointermove", onMove);
          window.addEventListener("pointerup", onUp);
        }}
      >
        <div
          ref={ref}
          className="flex min-h-[120px] items-center justify-center [&_svg]:mx-auto [&_svg]:max-w-full [&_svg]:max-h-[520px]"
          style={{ touchAction: "pan-y" }}
        >
          {/* SVG injected here */}
        </div>
      </div>
    </div>
  );
});




