import { publications } from "@/content/research";
import { Card } from "@/components/ui/Card";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function ResearchSection() {
  return (
    <section className="mx-auto max-w-content px-6 py-16">
      <h2 className="mb-8 font-display text-2xl font-medium md:text-3xl">Research & Publications</h2>
      <div className="flex flex-col gap-4">
        {publications.map((p, i) => (
          <RevealOnScroll key={p.title} delay={i * 0.08}>
            <Card>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-medium">{p.title}</h3>
                  <p className="mt-1 text-xs font-mono text-fg-subtle">{p.venue} · {p.year} · {p.role}</p>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{p.summary}</p>
                </div>
                <a href={p.link} className="focus-ring shrink-0 text-sm text-accent hover:underline">Read →</a>
              </div>
            </Card>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
