import { codingProfiles } from "@/content/codingProfiles";
import { Card } from "@/components/ui/Card";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function CodingProfilesSection() {
  return (
    <section className="mx-auto max-w-content px-6 py-16">
      <h2 className="mb-8 font-display text-2xl font-medium md:text-3xl">Coding profiles</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {codingProfiles.map((p, i) => (
          <RevealOnScroll key={p.platform} delay={i * 0.06}>
            <a href={p.url} className="focus-ring block">
              <Card className="h-full">
                <p className="font-mono text-xs uppercase tracking-wider text-fg-subtle">{p.platform}</p>
                <p className="mt-2 text-sm text-fg">{p.handle}</p>
                <p className="mt-1 text-xs text-fg-muted">{p.stat}</p>
              </Card>
            </a>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
