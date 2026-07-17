import { visionBoard } from "@/content/vision";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const statusTone = { idea: "neutral", building: "amber", shipped: "active" } as const;
const statusLabel = { idea: "Idea", building: "In Progress", shipped: "Shipped" };

export function VisionSection() {
  return (
    <section className="mx-auto max-w-content px-6 py-20">
      <RevealOnScroll>
        <p className="font-mono text-xs uppercase tracking-widest text-accent">What&apos;s next</p>
        <h2 className="mt-2 font-display text-2xl font-medium text-fg md:text-3xl">Vision Board</h2>
      </RevealOnScroll>
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visionBoard.map((v, i) => (
          <RevealOnScroll key={v.title} delay={i * 0.08}>
            <Card className="flex h-full flex-col">
              <Badge tone={statusTone[v.status]}>{statusLabel[v.status]}</Badge>
              <h3 className="mt-4 text-sm font-semibold leading-snug text-fg">{v.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-fg-muted">{v.description}</p>
            </Card>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
