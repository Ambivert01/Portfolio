"use client";

import React, { useRef } from "react";
import { Grid3X3 } from "lucide-react";
import { MermaidDiagram, type MermaidDiagramHandle } from "@/components/ui/MermaidDiagram";
import { ZoomIn, ZoomOut } from "lucide-react";

export default function DiagramWithControls({
  title,
  mermaid,
}: {
  title?: string;
  mermaid: string;
}) {
  const mermaidRef = useRef<MermaidDiagramHandle | null>(null);

  return (
    <div>
      {title && (
        <p className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-fg-subtle">
          <Grid3X3 size={12} className="text-fg-subtle" />
          {title}
        </p>
      )}

      <div className="relative">
        <div className="absolute left-3 top-3 z-10 flex items-center gap-2 rounded-full border border-border bg-bg-elevated/70 px-2 py-1 text-xs text-fg-muted shadow">
          <button
            type="button"
            aria-label="Zoom in"
            onClick={() => mermaidRef.current?.zoomIn()}
            className="inline-flex items-center justify-center"
          >
            <ZoomIn size={12} />
          </button>
          <span className="font-mono">Zoom</span>
          <button
            type="button"
            aria-label="Zoom out"
            onClick={() => mermaidRef.current?.zoomOut()}
            className="inline-flex items-center justify-center"
          >
            <ZoomOut size={12} className="opacity-80" />
          </button>
        </div>

        <MermaidDiagram ref={mermaidRef} chart={mermaid} />
      </div>
    </div>
  );
}

