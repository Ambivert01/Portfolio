"use client";

import { useState } from "react";
import { siteConfig } from "@/content/site-config";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function FeedbackWidget() {
  const [text, setText] = useState("");

  return (
    <section className="mx-auto max-w-content px-6 py-16">
      <RevealOnScroll>
        <h2 className="mb-4 font-display text-2xl font-medium md:text-3xl">Feedback</h2>
        <p className="mb-4 max-w-lg text-sm text-fg-muted">
          Spot something broken or have a suggestion? Opens your email client — no data stored on this site.
        </p>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Your feedback..."
          rows={4}
          className="focus-ring w-full max-w-lg rounded-md border border-border bg-bg-elevated p-3 text-sm text-fg placeholder:text-fg-subtle"
        />
        <div className="mt-3">
          <Magnetic>
            <Button href={`mailto:${siteConfig.email}?subject=Site%20Feedback&body=${encodeURIComponent(text)}`}>
              Send feedback
            </Button>
          </Magnetic>
        </div>
      </RevealOnScroll>
    </section>
  );
}
