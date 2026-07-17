import { life } from "@/content/life";
import { Badge } from "@/components/ui/Badge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function LifeSection() {
  return (
    <section className="mx-auto max-w-content px-6 py-20">
      <RevealOnScroll>
        <p className="font-mono text-xs uppercase tracking-widest text-accent">Beyond the screen</p>
        <h2 className="mt-2 font-display text-2xl font-medium text-fg md:text-3xl">Life outside code</h2>
      </RevealOnScroll>

      {/* Values + Hobbies — stacked cards, full equal width */}
      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
        <RevealOnScroll delay={0.08}>
          <div className="rounded-xl border border-border/60 bg-bg-elevated/60 p-6 backdrop-blur-sm">
            <p className="font-mono text-xs uppercase tracking-widest text-accent2">Values</p>
            <div className="mt-4 flex flex-col gap-2">
              {life.values.map((v) => (
                <div key={v} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="text-sm leading-relaxed text-fg-muted">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.12}>
          <div className="rounded-xl border border-border/60 bg-bg-elevated/60 p-6 backdrop-blur-sm">
            <p className="font-mono text-xs uppercase tracking-widest text-accent2">Hobbies</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {life.hobbies.map((h) => (
                <Badge key={h} tone="neutral">{h}</Badge>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* Quote — full width */}
      <RevealOnScroll delay={0.16}>
        <div className="mt-5 rounded-xl border border-accent/20 bg-accent/5 px-8 py-6 backdrop-blur-sm">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">Guiding quote</p>
          <p className="mt-3 text-base italic leading-relaxed text-fg">
            &ldquo;{life.quote.text}&rdquo;
          </p>
          <p className="mt-2 font-mono text-xs text-fg-subtle">— {life.quote.author}</p>
        </div>
      </RevealOnScroll>

      {/* Favorites + Setup — side by side */}
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <RevealOnScroll delay={0.2}>
          <div className="rounded-xl border border-border/60 bg-bg-elevated/60 p-6 backdrop-blur-sm">
            <p className="font-mono text-xs uppercase tracking-widest text-accent2">Favorites</p>
            <ul className="mt-4 flex flex-col divide-y divide-border/40">
              {life.favorites.map((f) => (
                <li key={f.category} className="flex flex-col gap-0.5 py-3 first:pt-0 last:pb-0">
                  <span className="font-mono text-xs text-fg-subtle">{f.category}</span>
                  <span className="text-sm text-fg">{f.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.24}>
          <div className="rounded-xl border border-border/60 bg-bg-elevated/60 p-6 backdrop-blur-sm">
            <p className="font-mono text-xs uppercase tracking-widest text-accent2">Setup</p>
            <ul className="mt-4 flex flex-col divide-y divide-border/40">
              {life.setup.map((s) => (
                <li key={s.category} className="flex flex-col gap-0.5 py-3 first:pt-0 last:pb-0">
                  <span className="font-mono text-xs text-fg-subtle">{s.category}</span>
                  <span className="text-sm text-fg">{s.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
