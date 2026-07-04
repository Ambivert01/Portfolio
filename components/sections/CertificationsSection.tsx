import { certifications } from "@/content/certifications";
import { Card } from "@/components/ui/Card";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function CertificationsSection() {
  return (
    <section className="mx-auto max-w-content px-6 py-16">
      <h2 className="mb-8 font-display text-2xl font-medium md:text-3xl">Certifications</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {certifications.map((c, i) => (
          <RevealOnScroll key={c.name} delay={i * 0.08}>
            <Card className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">{c.name}</h3>
                <p className="text-xs text-fg-subtle">{c.issuer} · {c.year}</p>
              </div>
              <a href={c.credentialUrl} className="focus-ring text-sm text-accent hover:underline">Verify →</a>
            </Card>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
