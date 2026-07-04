"use client";

import { useState } from "react";
import { siteConfig } from "@/content/site-config";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function NewsletterSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="mx-auto max-w-content px-6 py-16">
      <RevealOnScroll>
        <h2 className="mb-2 font-display text-2xl font-medium md:text-3xl">Stay updated</h2>
        <p className="mb-4 max-w-lg text-sm text-fg-muted">
          No mailing list backend yet — this sends me your email directly so I can add you manually.
        </p>
        <div className="flex max-w-md gap-2">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="you@email.com"
            className="focus-ring flex-1 rounded-sm border border-border bg-bg-elevated px-3 py-2 text-sm text-fg placeholder:text-fg-subtle"
          />
          <Magnetic strength={0.2}>
            <Button href={`mailto:${siteConfig.email}?subject=Subscribe&body=${encodeURIComponent(email)}`}>
              Notify me
            </Button>
          </Magnetic>
        </div>
      </RevealOnScroll>
    </section>
  );
}
