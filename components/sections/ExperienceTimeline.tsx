import { experience } from "@/content/experience";
import { SignalIndicator } from "@/components/ui/SignalIndicator";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function ExperienceTimeline() {
  return (
    <section className="mx-auto max-w-content px-6 py-16">
      <h2 className="mb-8 font-display text-2xl font-medium md:text-3xl">Experience</h2>
      <div className="flex flex-col">
        {experience.map((e, i) => (
          <RevealOnScroll key={e.org} delay={i * 0.08}>
            <div className="flex gap-6 border-t border-border py-6 first:border-t-0">
              <div className="w-28 shrink-0 pt-1 font-mono text-xs text-fg-subtle">{e.period}</div>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h3 className="font-medium">{e.role} — {e.org}</h3>
                  {e.current && <SignalIndicator tone="green" label="ACTIVE" />}
                </div>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-fg-muted">{e.summary}</p>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
