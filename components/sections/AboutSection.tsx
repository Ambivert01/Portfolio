import { about } from "@/content/about";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function AboutSection() {
  return (
    <section className="mx-auto max-w-content px-6 py-12">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

        {/* Left col — Mission, same height as right */}
        <RevealOnScroll delay={0.08}>
          <div className="flex h-full flex-col rounded-xl border border-accent/20 bg-accent/5 p-6 backdrop-blur-sm">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">Mission</p>
            <p className="mt-4 flex-1 text-base font-medium leading-relaxed text-fg">{about.mission}</p>
          </div>
        </RevealOnScroll>

        {/* Right 2 cols — Story + Philosophy stacked */}
        <div className="flex flex-col gap-6 md:col-span-2">
          <RevealOnScroll delay={0.12}>
            <div className="rounded-xl border border-border/60 bg-bg-elevated/60 p-6 backdrop-blur-sm">
              <p className="font-mono text-xs uppercase tracking-widest text-accent2">Story</p>
              <p className="mt-3 text-sm leading-relaxed text-fg-muted">{about.story}</p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.18}>
            <div className="rounded-xl border border-border/60 bg-bg-elevated/60 p-6 backdrop-blur-sm">
              <p className="font-mono text-xs uppercase tracking-widest text-accent2">Philosophy</p>
              <p className="mt-3 text-sm leading-relaxed text-fg-muted">{about.philosophy}</p>
            </div>
          </RevealOnScroll>
        </div>

      </div>
    </section>
  );
}
