"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { certifications } from "@/content/certifications";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function CertificationsSection() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  if (certifications.length === 0) return null;

  return (
    <section className="mx-auto max-w-content px-6 py-20">
      <RevealOnScroll>
        <p className="font-mono text-xs uppercase tracking-widest text-accent">Credentials</p>
        <h2 className="mt-2 font-display text-2xl font-medium text-fg md:text-3xl">Certifications</h2>
      </RevealOnScroll>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => (
          <RevealOnScroll key={c.name} delay={i * 0.08}>
            <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-border/60 bg-bg-elevated transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/8">

              {/* Image peek — bottom half visible, click to open lightbox */}
              {c.image && (
                <button
                  onClick={() => setLightbox(c.image!)}
                  className="relative h-32 w-full overflow-hidden bg-bg focus:outline-none"
                  aria-label={`View ${c.name} certificate`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.image}
                    alt={c.name}
                    className="absolute bottom-0 left-0 w-full object-cover object-bottom transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-bg-elevated/80 to-transparent" />
                  <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      View Certificate
                    </span>
                  </span>
                </button>
              )}

              {/* Text content */}
              <div className="flex flex-1 flex-col justify-between gap-3 p-5">
                <div>
                  <h3 className="text-sm font-semibold leading-snug text-fg">{c.name}</h3>
                  <p className="mt-1 font-mono text-xs font-medium text-accent2">{c.issuer} · {c.year}</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-h-[90vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lightbox}
              alt="Certificate"
              className="max-h-[85vh] max-w-[85vw] rounded-xl object-contain shadow-2xl"
            />
          </div>
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
          >
            <X size={18} />
          </button>
        </div>
      )}
    </section>
  );
}
