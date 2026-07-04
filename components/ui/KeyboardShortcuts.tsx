"use client";

import { useEffect, useState } from "react";

const shortcuts = [
  { keys: "⌘ / Ctrl + K", action: "Open command palette" },
  { keys: "Esc", action: "Close any open dialog" },
  { keys: "Tab", action: "Navigate focusable elements" },
  { keys: "?", action: "Toggle this shortcuts panel" },
];

export function KeyboardShortcuts() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const target = e.target as HTMLElement;
      if (e.key === "?" && !["INPUT", "TEXTAREA"].includes(target.tagName)) {
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-bg/70 backdrop-blur-sm" onClick={() => setOpen(false)}>
      <div className="w-full max-w-sm rounded-md border border-border bg-bg-elevated p-6" onClick={(e) => e.stopPropagation()}>
        <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-fg-subtle">Keyboard shortcuts</h3>
        <ul className="flex flex-col gap-3">
          {shortcuts.map((s) => (
            <li key={s.keys} className="flex items-center justify-between text-sm">
              <span className="text-fg-muted">{s.action}</span>
              <kbd className="rounded-sm border border-border px-2 py-0.5 font-mono text-xs text-fg-subtle">{s.keys}</kbd>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
