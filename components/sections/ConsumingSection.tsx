import { consuming } from "@/content/consuming";
import { Badge } from "@/components/ui/Badge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function ConsumingSection() {
  return (
    <section className="mx-auto max-w-content px-6 py-16">
      <RevealOnScroll>
        <h2 className="mb-8 font-display text-2xl font-medium md:text-3xl">Currently consuming</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-fg-subtle">Wishlist</h3>
            <div className="mt-3 flex flex-wrap gap-2">{consuming.wishlist.map((w) => <Badge key={w} tone="neutral">{w}</Badge>)}</div>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-fg-subtle">Books</h3>
            <ul className="mt-3 flex flex-col gap-1 text-sm text-fg-muted">
              {consuming.books.map((b, i) => (
                <li key={i} className="flex justify-between">
                  <span>{b.title}</span>
<Badge tone={b.status === "reading" ? "amber" : "active"}>{b.status}</Badge>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
