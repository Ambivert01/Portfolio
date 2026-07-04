import { openSource } from "@/content/openSource";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function OpenSourceSection() {
  return (
    <section className="mx-auto max-w-content px-6 py-16">
      <h2 className="mb-8 font-display text-2xl font-medium md:text-3xl">Open Source</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {openSource.map((o, i) => (
          <RevealOnScroll key={o.repo} delay={i * 0.08}>
            <a href={o.link} className="focus-ring block">
              <Card className="h-full">
                <div className="flex items-center justify-between">
                  <h3 className="font-mono text-sm">{o.repo}</h3>
                  <Badge tone="amber">{o.role}</Badge>
                </div>
                <p className="mt-2 text-sm text-fg-muted">{o.description}</p>
                <p className="mt-2 text-xs text-fg-subtle">★ {o.stars}</p>
              </Card>
            </a>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
