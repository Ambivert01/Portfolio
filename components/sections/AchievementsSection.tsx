import { achievements } from "@/content/achievements";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function AchievementsSection() {
  return (
    <section className="mx-auto max-w-content px-6 py-16">
      <h2 className="mb-8 font-display text-2xl font-medium md:text-3xl">Achievements</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {achievements.map((a, i) => (
          <RevealOnScroll key={a.title} delay={i * 0.08}>
            <Card>
              <Badge tone="amber">{a.year}</Badge>
              <h3 className="mt-3 font-medium">{a.title}</h3>
              <p className="mt-1 text-xs text-fg-subtle">{a.org}</p>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">{a.description}</p>
            </Card>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
