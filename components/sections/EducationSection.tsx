import { education, testScores } from "@/content/education";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function EducationSection() {
  return (
    <section className="mx-auto max-w-content px-6 py-20">
      <RevealOnScroll>
        <p className="font-mono text-xs uppercase tracking-widest text-accent">Background</p>
        <h2 className="mt-2 font-display text-2xl font-medium text-fg md:text-3xl">Education</h2>
      </RevealOnScroll>
      <div className="mt-10 flex flex-col gap-4">
        {education.map((e, i) => (
          <RevealOnScroll key={e.institution} delay={i * 0.08}>
            <Card>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-fg">{e.institution}</h3>
                  <p className="mt-1 text-sm text-fg-muted">{e.degree}</p>
                </div>
                <div className="flex shrink-0 items-center gap-3">
                  <span className="font-mono text-xs text-fg-subtle">{e.period}</span>
                  {e.score && <Badge tone="neutral">{e.score}</Badge>}
                </div>
              </div>
              {e.notes && (
                <p className="mt-3 border-t border-border/40 pt-3 text-xs leading-relaxed text-fg-subtle">
                  {e.notes}
                </p>
              )}
            </Card>
          </RevealOnScroll>
        ))}
      </div>
      {testScores.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {testScores.map((t) => (
            <Badge key={t.test} tone="amber">{t.test}: {t.score} ({t.year})</Badge>
          ))}
        </div>
      )}
    </section>
  );
}
