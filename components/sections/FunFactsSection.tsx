import { funFacts } from "@/content/funfacts";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function FunFactsSection() {
  return (
    <section className="mx-auto max-w-content px-6 py-16">
      <RevealOnScroll>
        <h2 className="mb-8 font-display text-2xl font-medium md:text-3xl">Fun facts</h2>
        <ul className="flex flex-col gap-3">
          {funFacts.map((f, i) => (
            <li key={i} className="flex gap-3 text-sm text-fg-muted">
              <span className="font-mono text-fg-subtle">{String(i + 1).padStart(2, "0")}</span>
              {f}
            </li>
          ))}
        </ul>
      </RevealOnScroll>
    </section>
  );
}
