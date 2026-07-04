import { talks } from "@/content/speaking";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function SpeakingSection() {
  return (
    <section className="mx-auto max-w-content px-6 py-16">
      <h2 className="mb-8 font-display text-2xl font-medium md:text-3xl">Speaking</h2>
      <div className="flex flex-col gap-4">
        {talks.map((t, i) => (
          <RevealOnScroll key={t.title} delay={i * 0.08}>
            <Card className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">{t.title}</h3>
                <p className="text-xs text-fg-subtle">{t.event} · {t.year}</p>
              </div>
              <div className="flex items-center gap-3">
                <Badge tone="neutral">{t.type}</Badge>
                <a href={t.link} className="focus-ring text-sm text-accent hover:underline">Watch →</a>
              </div>
            </Card>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
