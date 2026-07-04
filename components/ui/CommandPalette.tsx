"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

const commands = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Research", href: "/research" },
  { label: "Writing", href: "/writing" },
  { label: "Achievements", href: "/achievements" },
  { label: "Stack", href: "/stack" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
  { label: "Changelog", href: "/changelog" },
  { label: "Privacy", href: "/legal/privacy" },
  { label: "License", href: "/legal/license" },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const filtered = commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()));

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-bg/70 pt-[15vh] backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-md rounded-md border border-border bg-bg-elevated shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-border px-4 py-3">
          <Search size={16} className="text-fg-subtle" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Jump to..."
            className="w-full bg-transparent text-sm text-fg outline-none placeholder:text-fg-subtle"
          />
          <kbd className="rounded-sm border border-border px-1.5 py-0.5 font-mono text-[10px] text-fg-subtle">
            ESC
          </kbd>
        </div>
        <div className="max-h-72 overflow-y-auto p-2">
          {filtered.map((c) => (
            <button
              key={c.href}
              onClick={() => {
                router.push(c.href);
                setOpen(false);
                setQuery("");
              }}
              className="focus-ring block w-full rounded-sm px-3 py-2 text-left text-sm text-fg-muted hover:bg-bg-inset hover:text-fg"
            >
              {c.label}
            </button>
          ))}
          {filtered.length === 0 && (
            <p className="px-3 py-2 text-sm text-fg-subtle">No matches.</p>
          )}
        </div>
      </div>
    </div>
  );
}
