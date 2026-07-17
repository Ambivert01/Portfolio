import { certifications } from "@/content/certifications";
import { Card } from "@/components/ui/Card";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function CertificationsSection() {
  if (certifications.length === 0) return null;
  return (
    <section className="mx-auto max-w-content px-6 py-20">
      <RevealOnScroll>
        <p className="font-mono text-xs uppercase tracking-widest text-accent">Credentials</p>
        <h2 className="mt-2 font-display text-2xl font-medium text-fg md:text-3xl">Certifications</h2>
      </RevealOnScroll>
      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
        {certifications.map((c, i) => (
          <RevealOnScroll key={c.name} delay={i * 0.08}>
            <Card className="flex h-full items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-fg">{c.name}</h3>
                <p className="mt-1 text-xs text-fg-subtle">{c.issuer} · {c.year}</p>
              </div>
              <a href={c.credentialUrl} className="focus-ring shrink-0 text-xs font-medium text-accent hover:underline">
                Verify →
              </a>
            </Card>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
