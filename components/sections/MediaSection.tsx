import { mediaDownloads } from "@/content/media";
import { Card } from "@/components/ui/Card";
import { Download } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function MediaSection() {
  return (
    <section className="mx-auto max-w-content px-6 py-16">
      <h2 className="mb-8 font-display text-2xl font-medium md:text-3xl">Media & Downloads</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {mediaDownloads.map((m, i) => (
          <RevealOnScroll key={m.label} delay={i * 0.08}>
            <a href={m.href} className="focus-ring block">
              <Card className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{m.label}</h3>
                  <p className="mt-1 text-xs text-fg-subtle">{m.description}</p>
                </div>
                <Download size={16} className="text-fg-subtle" />
              </Card>
            </a>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
