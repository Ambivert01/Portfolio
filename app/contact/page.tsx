import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { SignalIndicator } from "@/components/ui/SignalIndicator";
import { FAQSection } from "@/components/sections/FAQSection";
import { FeedbackWidget } from "@/components/sections/FeedbackWidget";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <section className="mx-auto max-w-content px-6 py-20">
        <RevealOnScroll>
          <SignalIndicator tone="green" label={siteConfig.availability} />
          <h1 className="mt-6 font-display text-4xl font-medium">Get in touch</h1>
          <p className="mt-3 max-w-lg text-fg-muted">
            Email opens your mail client. Based in {siteConfig.location} — usually respond within 24 hours.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Magnetic><Button href={`mailto:${siteConfig.email}`}>{siteConfig.email}</Button></Magnetic>
            <Magnetic strength={0.2}><Button href={siteConfig.bookingUrl} variant="secondary">Book a call</Button></Magnetic>
            <Magnetic strength={0.2}><Button href={siteConfig.social.github} variant="secondary">GitHub</Button></Magnetic>
            <Magnetic strength={0.2}><Button href={siteConfig.social.linkedin} variant="secondary">LinkedIn</Button></Magnetic>
            <Magnetic strength={0.2}><Button href={siteConfig.social.instagram} variant="secondary">Instagram</Button></Magnetic>
          </div>
        </RevealOnScroll>
      </section>
      <NewsletterSection />
      <FeedbackWidget />
      <FAQSection />
    </>
  );
}
