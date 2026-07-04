import type { Metadata } from "next";
import { changelog } from "@/content/changelog";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = { title: "Changelog" };

export default function ChangelogPage() {
  return (
    <section className="mx-auto max-w-content px-6 py-20">
      <h1 className="font-display text-4xl font-medium">Changelog</h1>
      <div className="mt-10 flex flex-col gap-8">
        {changelog.map((c) => (
          <div key={c.version} className="border-l-2 border-border pl-4">
            <div className="flex items-center gap-3">
              <Badge tone="amber">{c.version}</Badge>
              <span className="font-mono text-xs text-fg-subtle">{c.date}</span>
            </div>
            <ul className="mt-3 flex flex-col gap-1">
              {c.changes.map((ch) => (
                <li key={ch} className="text-sm text-fg-muted">— {ch}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
