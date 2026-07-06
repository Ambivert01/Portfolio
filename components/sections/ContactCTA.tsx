import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function ContactCTA() {
  return (
    <section className="mx-auto max-w-content px-6 py-24">
      <div className="track-rule mb-16" />
      <RevealOnScroll>
        <div className="flex flex-col items-center text-center">
          <span className="mb-4 font-mono text-xs uppercase tracking-widest text-fg-subtle">
            Let&apos;s work together
          </span>
          <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl lg:text-6xl">
            Building something that needs{" "}
            <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
              this kind of engineering?
            </span>
          </h2>
          <p className="mt-6 max-w-lg text-fg-muted">
            I&apos;m open to select opportunities — infrastructure-critical systems, AI pipelines, and production-grade backends.
          </p>
          <div className="mt-10">
            <Button href="/contact" className="px-8 py-3 text-base">
              Get in touch
            </Button>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
