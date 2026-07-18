import { openSource } from "@/content/openSource";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const realContributions = openSource.filter((o) => !o.repo.startsWith("["));

export function OpenSourceSection() {
  return (
    <section className="mx-auto max-w-content px-6 py-16">
      <h2 className="mb-8 font-display text-2xl font-medium md:text-3xl">Open Source</h2>

      {realContributions.length === 0 ? (
        <RevealOnScroll>
          <Card glass className="flex flex-col items-center gap-3 py-12 text-center">
            <p className="text-2xl">🔧</p>
            <p className="font-medium">Open source contributions coming soon</p>
            <p className="max-w-sm text-sm text-fg-muted">
              Currently focused on building projects. OSS contributions will be listed here as they happen.
            </p>
          </Card>
        </RevealOnScroll>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {realContributions.map((o, i) => (
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
      )}
    </section>
  );
}
