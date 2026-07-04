import { visionBoard } from "@/content/vision";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const statusTone = { idea: "neutral", building: "amber", shipped: "active" } as const;

export function VisionSection() {
  return (
    <section className="mx-auto max-w-content px-6 py-16">
      <h2 className="mb-8 font-display text-2xl font-medium md:text-3xl">Vision board</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {visionBoard.map((v, i) => (
          <RevealOnScroll key={v.title} delay={i * 0.08}>
            <Card>
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{v.title}</h3>
                <Badge tone={statusTone[v.status]}>{v.status}</Badge>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">{v.description}</p>
            </Card>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
