import { spokenLanguages } from "@/content/languages";
import { Badge } from "@/components/ui/Badge";

export function LanguagesSection() {
  return (
    <div>
      <h3 className="font-mono text-xs uppercase tracking-wider text-fg-subtle">Languages</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {spokenLanguages.map((l) => (
          <Badge key={l.name} tone="neutral">{l.name} — {l.level}</Badge>
        ))}
      </div>
    </div>
  );
}
