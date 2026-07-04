import { leadership } from "@/content/leadership";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function LeadershipSection() {
  return (
    <section className="mx-auto max-w-content px-6 py-16">
      <h2 className="mb-8 font-display text-2xl font-medium md:text-3xl">Leadership & Community</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {leadership.map((l, i) => (
          <RevealOnScroll key={l.org + l.role} delay={i * 0.08}>
            <Card>
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{l.role} — {l.org}</h3>
                <Badge tone="neutral">{l.type}</Badge>
              </div>
              <p className="mt-1 font-mono text-xs text-fg-subtle">{l.period}</p>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">{l.description}</p>
            </Card>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
