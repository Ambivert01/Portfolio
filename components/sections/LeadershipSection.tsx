import { leadership } from "@/content/leadership";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const typeTone = {
  leadership: "amber",
  mentorship: "active",
  volunteering: "neutral",
  community: "neutral",
} as const;

export function LeadershipSection() {
  return (
    <section className="mx-auto max-w-content px-6 py-20">
      <RevealOnScroll>
        <p className="font-mono text-xs uppercase tracking-widest text-accent">Involvement</p>
        <h2 className="mt-2 font-display text-2xl font-medium text-fg md:text-3xl">Leadership & Community</h2>
      </RevealOnScroll>
      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
        {leadership.map((l, i) => (
          <RevealOnScroll key={l.org + l.role} delay={i * 0.08}>
            <Card className="flex h-full flex-col">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-sm font-semibold leading-snug text-fg">{l.role}</h3>
                <Badge tone={typeTone[l.type]}>{l.type}</Badge>
              </div>
              <p className="mt-1 text-xs font-medium text-accent2">{l.org}</p>
              <p className="mt-1 font-mono text-xs text-fg-subtle">{l.period}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-fg-muted">{l.description}</p>
            </Card>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
