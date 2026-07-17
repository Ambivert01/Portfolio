import { talks, speakingStyle } from "@/content/speaking";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function SpeakingSection() {
  return (
    <section className="mx-auto max-w-content px-6 py-20">
      <RevealOnScroll>
        <p className="font-mono text-xs uppercase tracking-widest text-accent">On stage</p>
        <h2 className="mt-2 font-display text-2xl font-medium text-fg md:text-3xl">Speaking</h2>
      </RevealOnScroll>

      {/* Style card — full width */}
      <RevealOnScroll delay={0.08}>
        <div className="mt-10 rounded-xl border border-accent/20 bg-accent/5 p-6 backdrop-blur-sm">
          <p className="text-base font-medium leading-snug text-fg">{speakingStyle.headline}</p>
          <ul className="mt-5 flex flex-col gap-3">
            {speakingStyle.traits.map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span className="text-sm leading-relaxed text-fg-muted">{t}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 border-t border-accent/10 pt-4 text-xs italic text-fg-subtle">
            {speakingStyle.note}
          </p>
        </div>
      </RevealOnScroll>

      {/* Talks list — only shown when entries exist */}
      {talks.length > 0 && (
        <div className="mt-6 flex flex-col gap-4">
          {talks.map((t, i) => (
            <RevealOnScroll key={t.title} delay={i * 0.08}>
              <Card className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-fg">{t.title}</h3>
                  <p className="mt-0.5 font-mono text-xs text-fg-subtle">{t.event} · {t.year}</p>
                </div>
                <div className="flex shrink-0 items-center gap-3">
                  <Badge tone="neutral">{t.type}</Badge>
                  <a href={t.link} className="focus-ring text-xs font-medium text-accent hover:underline">
                    Watch →
                  </a>
                </div>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      )}
    </section>
  );
}
