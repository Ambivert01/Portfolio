

import { now } from "@/content/achievements";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function Now() {
  return (
    <section className="mx-auto max-w-content px-6 py-10">
      <div className="track-rule mb-8" />
      <RevealOnScroll>
        <div className="flex flex-col gap-4 font-mono text-sm text-fg-muted md:flex-row md:gap-10">
          <span className="text-fg-subtle">NOW /</span>

          <span className="whitespace-nowrap">
            learning <span className="text-fg">{now.learning}</span>
          </span>
          <span className="text-fg-subtle">·</span>

          <span className="whitespace-nowrap">
            location <span className="text-fg">{now.location}</span>
          </span>
          <span className="text-fg-subtle">·</span>

          <span className="whitespace-nowrap">
            position <span className="text-fg">{now.position}</span>
          </span>

          <span className="ml-auto text-fg-subtle whitespace-nowrap">updated {now.updatedAt}</span>
        </div>
      </RevealOnScroll>
    </section>
  );
}

