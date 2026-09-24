"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { achievements } from "@/content/achievements";
import { Badge } from "@/components/ui/Badge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function AchievementsSection() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section className="mx-auto max-w-content px-6 py-20">
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => (
          <RevealOnScroll key={a.title} delay={i * 0.08}>
            <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-border/60 bg-bg-elevated transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/8">

              {/* Image peek */}
              {a.image && (
                <button
                  onClick={() => setLightbox(a.image!)}
                  className="relative h-40 w-full overflow-hidden bg-bg focus:outline-none"
                  aria-label={`View certificate for ${a.title}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={a.image}
                    alt={a.title}
                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-elevated via-bg-elevated/20 to-transparent" />
                  <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      View Certificate
                    </span>
                  </span>
                </button>
              )}

              {/* Text content */}
              <div className="flex flex-1 flex-col p-5">
                <Badge tone="amber">{a.year}</Badge>
                <h3 className="mt-4 text-sm font-semibold leading-snug text-fg">{a.title}</h3>
                <p className="mt-1 font-mono text-xs font-medium text-accent2">{a.org}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-fg-muted">{a.description}</p>
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
