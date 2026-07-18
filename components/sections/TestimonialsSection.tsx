import { testimonials } from "@/content/testimonials";
import { Card } from "@/components/ui/Card";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const isPlaceholder = (t: (typeof testimonials)[0]) => t.name.startsWith("[");
const realTestimonials = testimonials.filter((t) => !isPlaceholder(t));

export function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-content px-6 py-16">
      <h2 className="mb-8 font-display text-2xl font-medium md:text-3xl">What people say</h2>

      {realTestimonials.length === 0 ? (
        <RevealOnScroll>
          <Card glass className="flex flex-col items-center gap-3 py-12 text-center">
            <p className="text-2xl">💬</p>
            <p className="font-medium">Testimonials coming soon</p>
            <p className="max-w-sm text-sm text-fg-muted">
              Currently collecting feedback from collaborators and mentors. Check back soon.
            </p>
          </Card>
        </RevealOnScroll>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {realTestimonials.map((t, i) => (
            <RevealOnScroll key={i} delay={i * 0.1}>
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
      )}
    </section>
  );
}
