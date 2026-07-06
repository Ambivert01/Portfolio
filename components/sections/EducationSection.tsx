import { education, testScores } from "@/content/education";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function EducationSection() {
  return (
    <section className="mx-auto max-w-content px-6 py-16">
      <h2 className="mb-8 font-display text-2xl font-medium md:text-3xl">Education</h2>
      <div className="flex flex-col gap-4">
        {education.map((e, i) => (
          <RevealOnScroll key={e.institution} delay={i * 0.08}>
            <Card className="flex flex-col gap-3">
              <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="font-medium">{e.institution}</h3>
                  <p className="text-sm text-fg-muted">{e.degree}</p>
                </div>
                <div className="flex shrink-0 items-center gap-3 font-mono text-xs text-fg-subtle">
                  <span>{e.period}</span>
                  {e.score && <Badge tone="neutral">{e.score}</Badge>}
                </div>
              </div>
              {e.notes && <p className="text-xs leading-relaxed text-fg-subtle">{e.notes}</p>}
            </Card>
          </RevealOnScroll>
        ))}
      </div>
      {testScores.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {testScores.map((t) => <Badge key={t.test} tone="amber">{t.test}: {t.score} ({t.year})</Badge>)}
        </div>
      )}
    </section>
  );
}
