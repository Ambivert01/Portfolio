import { about } from "@/content/about";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function AboutSection() {
  return (
    <section className="mx-auto max-w-content px-6 py-16">
      <RevealOnScroll>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h2 className="font-mono text-xs uppercase tracking-wider text-fg-subtle">Mission</h2>
            <p className="mt-3 font-display text-xl leading-snug">{about.mission}</p>
          </div>
          <div className="md:col-span-2">
            <h2 className="font-mono text-xs uppercase tracking-wider text-fg-subtle">Story</h2>
            <p className="mt-3 text-base leading-relaxed text-fg-muted">{about.story}</p>
            <h2 className="mt-6 font-mono text-xs uppercase tracking-wider text-fg-subtle">Philosophy</h2>
            <p className="mt-3 text-base leading-relaxed text-fg-muted">{about.philosophy}</p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
