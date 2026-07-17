import { achievements } from "@/content/achievements";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function AchievementsSection() {
  return (
    <section className="mx-auto max-w-content px-6 py-20">
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => (
          <RevealOnScroll key={a.title} delay={i * 0.08}>
            <Card className="flex h-full flex-col">
              <Badge tone="amber">{a.year}</Badge>
              <h3 className="mt-4 text-sm font-semibold leading-snug text-fg">{a.title}</h3>
              <p className="mt-1 font-mono text-xs font-medium text-accent2">{a.org}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-fg-muted">{a.description}</p>
            </Card>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
