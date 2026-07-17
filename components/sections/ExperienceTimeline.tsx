import { experience } from "@/content/experience";
import { SignalIndicator } from "@/components/ui/SignalIndicator";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function ExperienceTimeline() {
  return (
    <section className="mx-auto max-w-content px-6 py-20">
      <div className="flex flex-col gap-4">
        {experience.map((e, i) => (
          <RevealOnScroll key={i} delay={i * 0.08}>
            <div className="rounded-xl border border-border/60 bg-bg-elevated/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/8">
              {/* top row: period + active badge */}
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-xs text-fg-subtle">{e.period}</span>
                {e.current && <SignalIndicator tone="green" label="ACTIVE" />}
              </div>
              {/* role + org */}
              <div className="mt-3">
                <h3 className="text-sm font-semibold text-fg">{e.role}</h3>
                <p className="mt-0.5 text-xs font-medium text-accent2">{e.org}</p>
              </div>
              {/* summary */}
              <p className="mt-3 text-sm leading-relaxed text-fg-muted">{e.summary}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
