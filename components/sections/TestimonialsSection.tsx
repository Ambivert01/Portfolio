import { testimonials } from "@/content/testimonials";
import { Card } from "@/components/ui/Card";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-content px-6 py-16">
      <h2 className="mb-8 font-display text-2xl font-medium md:text-3xl">What people say</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <RevealOnScroll key={t.name} delay={i * 0.1}>
            <Card glass className="flex h-full flex-col gap-4">
              <p className="text-sm leading-relaxed text-fg-muted">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-bg-inset font-mono text-xs text-fg-muted">
                  {t.avatarInitials}
                </div>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-fg-subtle">{t.title}</p>
                </div>
              </div>
            </Card>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
