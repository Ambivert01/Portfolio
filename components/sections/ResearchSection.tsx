import { publications } from "@/content/research";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const statusTone = {
  published: "active",
  ongoing: "amber",
  submitted: "neutral",
} as const;

const statusLabel = {
  published: "Published",
  ongoing: "In Progress",
  submitted: "Under Review",
};

export function ResearchSection() {
  return (
    <section className="mx-auto max-w-content px-6 py-20">
      <div className="flex flex-col gap-5">
        {publications.map((p, i) => (
          <RevealOnScroll key={p.title} delay={i * 0.08}>
            <Card className="flex h-full flex-col">
              {/* top row: status badge */}
              <div className="flex items-center gap-4">
                <Badge tone={statusTone[p.status]}>{statusLabel[p.status]}</Badge>
              </div>

              {/* title */}
              <h3 className="mt-4 text-sm font-semibold leading-snug text-fg">{p.title}</h3>

              {/* venue + role */}
              <p className="mt-1 font-mono text-xs text-accent2">
                {p.venue} · {p.role}
              </p>

              {/* summary */}
              <p className="mt-3 flex-1 text-sm leading-relaxed text-fg-muted">{p.summary}</p>

              {/* link — only if available and published */}
              {p.link && (
                <a
                  href={p.link}
                  className="focus-ring mt-4 self-start text-xs font-medium text-accent hover:underline"
                >
                  Read →
                </a>
              )}
            </Card>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
