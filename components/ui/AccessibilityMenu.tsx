"use client";

import { useEffect, useState } from "react";
import { Accessibility } from "lucide-react";

export function AccessibilityMenu() {
  const [open, setOpen] = useState(false);
  const [fontScale, setFontScale] = useState(100);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontScale}%`;
  }, [fontScale]);

  useEffect(() => {
    document.documentElement.classList.toggle("reduce-motion", reduceMotion);
  }, [reduceMotion]);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Accessibility settings"
        className="focus-ring flex h-8 w-8 items-center justify-center rounded-sm text-fg-muted hover:text-fg"
      >
        <Accessibility size={16} />
      </button>
      {open && (
        <div className="absolute right-0 top-10 z-50 w-56 rounded-md border border-border bg-bg-elevated p-4 shadow-xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-fg-subtle">Accessibility</p>
          <div className="flex items-center justify-between text-sm">
            <span>Text size</span>
            <div className="flex gap-1">
              <button
                onClick={() => setFontScale((s) => Math.max(85, s - 10))}
                className="focus-ring rounded-sm border border-border px-2 text-xs"
                aria-label="Decrease text size"
              >
                A-
              </button>
              <button
                onClick={() => setFontScale(100)}
                className="focus-ring rounded-sm border border-border px-2 text-xs"
                aria-label="Reset text size"
              >
                A
              </button>
              <button
                onClick={() => setFontScale((s) => Math.min(130, s + 10))}
                className="focus-ring rounded-sm border border-border px-2 text-xs"
                aria-label="Increase text size"
              >
                A+
              </button>
            </div>
          </div>
          <label className="mt-4 flex items-center justify-between text-sm">
            <span>Reduce motion</span>
            <input
              type="checkbox"
              checked={reduceMotion}
              onChange={(e) => setReduceMotion(e.target.checked)}
              className="h-4 w-4 accent-current"
            />
          </label>
        </div>
      )}
    </div>
  );
}
