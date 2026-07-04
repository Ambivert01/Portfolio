import { experience } from "@/content/experience";
import { education } from "@/content/education";
import { achievements } from "@/content/achievements";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

type Event = { period: string; label: string; kind: "work" | "education" | "achievement" };

export function JourneyTimeline() {
  const events: Event[] = [
    ...experience.map((e) => ({ period: e.period, label: `${e.role} — ${e.org}`, kind: "work" as const })),
    ...education.map((e) => ({ period: e.period, label: `${e.degree} — ${e.institution}`, kind: "education" as const })),
    ...achievements.map((a) => ({ period: a.year, label: a.title, kind: "achievement" as const })),
  ];
  const dotTone = { work: "bg-accent", education: "bg-signal-green", achievement: "bg-accent2" };

  return (
    <section className="mx-auto max-w-content px-6 py-16">
      <h2 className="mb-8 font-display text-2xl font-medium md:text-3xl">Journey</h2>
      <div className="relative flex flex-col gap-6 border-l border-border pl-6">
        {events.map((e, i) => (
          <RevealOnScroll key={i} delay={i * 0.05} y={12}>
            <div className="relative">
              <span className={`absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full ${dotTone[e.kind]}`} />
              <p className="font-mono text-xs text-fg-subtle">{e.period}</p>
              <p className="mt-1 text-sm text-fg">{e.label}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
