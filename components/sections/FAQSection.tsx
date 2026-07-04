"use client";

import { useState } from "react";
import { faqs } from "@/content/faq";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-content px-6 py-16">
      <RevealOnScroll>
        <h2 className="mb-8 font-display text-2xl font-medium md:text-3xl">FAQ</h2>
        <div className="flex flex-col divide-y divide-border border-t border-b border-border">
          {faqs.map((f, i) => {
            const open = openIdx === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpenIdx(open ? null : i)}
                  className="focus-ring flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={open}
                >
                  <span className="font-medium">{f.q}</span>
                  <ChevronDown size={18} className={cn("shrink-0 text-fg-subtle transition-transform duration-200", open && "rotate-180")} />
                </button>
                {open && <p className="pb-5 text-sm leading-relaxed text-fg-muted">{f.a}</p>}
              </div>
            );
          })}
        </div>
      </RevealOnScroll>
    </section>
  );
}
