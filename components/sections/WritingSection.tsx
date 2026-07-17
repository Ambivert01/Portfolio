import { articles } from "@/content/writing";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function WritingSection() {
  if (articles.length === 0) {
    return (
      <section className="mx-auto max-w-content px-6 py-20">
        <div className="rounded-xl border border-border/60 bg-bg-elevated/60 p-8 text-center backdrop-blur-sm">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">Coming soon</p>
          <p className="mt-3 text-sm text-fg-muted">Articles and write-ups are on the way. Check back soon.</p>
        </div>
      </section>
    );
  }
  return (
    <section className="mx-auto max-w-content px-6 py-20">
      <div className="flex flex-col gap-4">
        {articles.map((a, i) => (
          <RevealOnScroll key={`${a.title}-${i}`} delay={i * 0.08}>
            <Card className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-fg">{a.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-fg-muted">{a.summary}</p>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <Badge tone="neutral">{a.platform}</Badge>
                <span className="font-mono text-xs text-fg-subtle">{a.year}</span>
                <a href={a.link} className="focus-ring text-xs font-medium text-accent hover:underline">
                  Read →
                </a>
              </div>
            </Card>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
