import { siteConfig } from "@/content/site-config";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function ContactCTA() {
  return (
    <section className="mx-auto max-w-content px-6 py-20">
      <div className="track-rule mb-10" />
      <RevealOnScroll>
        <h2 className="max-w-xl font-display text-3xl font-medium leading-tight md:text-4xl">
          Building something that needs this kind of engineering?
        </h2>
        <div className="mt-8 flex flex-wrap gap-3">
          <Magnetic>
            <Button href={`mailto:${siteConfig.email}`}>Get in touch</Button>
          </Magnetic>
          <Magnetic strength={0.2}>
            <Button href={siteConfig.social.linkedin} variant="secondary">LinkedIn</Button>
          </Magnetic>
        </div>
      </RevealOnScroll>
    </section>
  );
}
