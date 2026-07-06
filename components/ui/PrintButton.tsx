"use client";
import { Download } from "lucide-react";

export function PrintButton({ pdfPath }: { pdfPath?: string }) {
  if (pdfPath) {
    return (
      <a
        href={pdfPath}
        download
        className="focus-ring inline-flex items-center gap-1.5 rounded-sm border border-border bg-bg-elevated px-3 py-1.5 text-sm text-fg-muted transition-colors hover:border-accent/40 hover:text-fg"
      >
        <Download size={14} /> Export PDF
      </a>
    );
  }
  return (
    <button
      onClick={() => window.print()}
      className="focus-ring inline-flex items-center gap-1.5 rounded-sm border border-border bg-bg-elevated px-3 py-1.5 text-sm text-fg-muted transition-colors hover:border-accent/40 hover:text-fg"
    >
      <Download size={14} /> Export PDF
    </button>
  );
}
