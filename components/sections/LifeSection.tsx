import { life } from "@/content/life";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function LifeSection() {
  return (
    <section className="mx-auto max-w-content px-6 py-16">
      <RevealOnScroll>
        <h2 className="mb-8 font-display text-2xl font-medium md:text-3xl">Life outside code</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-fg-subtle">Values</h3>
            <div className="mt-3 flex flex-wrap gap-2">{life.values.map((v) => <Badge key={v} tone="neutral">{v}</Badge>)}</div>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-fg-subtle">Hobbies</h3>
            <div className="mt-3 flex flex-wrap gap-2">{life.hobbies.map((h) => <Badge key={h} tone="neutral">{h}</Badge>)}</div>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-fg-subtle">Guiding quote</h3>
            <p className="mt-3 text-sm italic leading-relaxed text-fg-muted">&ldquo;{life.quote.text}&rdquo;</p>
            <p className="mt-1 text-xs text-fg-subtle">— {life.quote.author}</p>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card>
            <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-fg-subtle">Favorites</h3>
            <ul className="flex flex-col gap-2 text-sm">
              {life.favorites.map((f) => (
                <li key={f.category} className="flex justify-between text-fg-muted">
                  <span className="text-fg-subtle">{f.category}</span><span>{f.value}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-fg-subtle">Setup</h3>
            <ul className="flex flex-col gap-2 text-sm">
              {life.setup.map((s) => (
                <li key={s.category} className="flex justify-between text-fg-muted">
                  <span className="text-fg-subtle">{s.category}</span><span>{s.value}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </RevealOnScroll>
    </section>
  );
}
