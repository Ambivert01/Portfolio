import { skillGroups } from "@/content/skills";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function Stack() {
  return (
    <section className="mx-auto max-w-content px-6 py-16">
      <h2 className="mb-8 font-display text-2xl font-medium md:text-3xl">Stack</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {skillGroups.map((g, i) => (
          <RevealOnScroll key={g.group} delay={i * 0.08}>
            <Card glass>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-fg-subtle">{g.group}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => <Badge key={item} tone="neutral">{item}</Badge>)}
              </div>
            </Card>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
