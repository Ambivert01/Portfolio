import { press } from "@/content/press";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function PressSection() {
  if (press.length === 0) return null;
  return (
    <section className="mx-auto max-w-content px-6 py-16">
      <RevealOnScroll>
        <h2 className="mb-8 font-display text-2xl font-medium md:text-3xl">Press</h2>
        <div className="flex flex-col divide-y divide-border border-t border-b border-border">
          {press.map((p) => (
            <a key={p.title} href={p.link} className="focus-ring flex items-center justify-between py-4 hover:text-accent">
              <span className="text-sm">{p.title}</span>
              <span className="font-mono text-xs text-fg-subtle">{p.outlet} · {p.year}</span>
            </a>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
}
