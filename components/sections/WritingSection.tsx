import { articles } from "@/content/writing";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function WritingSection() {
  return (
    <section className="mx-auto max-w-content px-6 py-16">
      <h2 className="mb-8 font-display text-2xl font-medium md:text-3xl">Writing</h2>
      <div className="flex flex-col gap-4">
        {articles.map((a, i) => (
          <RevealOnScroll key={a.title} delay={i * 0.08}>
            <Card className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">{a.title}</h3>
                <p className="mt-1 text-xs text-fg-subtle">{a.summary}</p>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <Badge tone="neutral">{a.platform}</Badge>
                <a href={a.link} className="focus-ring text-sm text-accent hover:underline">Read →</a>
              </div>
            </Card>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
