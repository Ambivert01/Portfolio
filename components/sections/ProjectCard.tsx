import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { StatBlock } from "@/components/ui/StatBlock";
import { TiltCard } from "@/components/ui/TiltCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { Project } from "@/content/projects";
import Link from "next/link";

const statusTone = { active: "active", shipped: "amber", archived: "neutral" } as const;

export function ProjectCard({ project }: { project: Project }) {
  return (
    <RevealOnScroll>
      <TiltCard>
        <Card className="flex flex-col gap-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <Link href={`/work/${project.slug}`} className="focus-ring">
            <h3 className="font-display text-2xl font-medium hover:text-accent transition-colors">{project.name}</h3>
          </Link>
          <p className="mt-2 max-w-lg text-sm leading-relaxed text-fg-muted">{project.oneLiner}</p>
        </div>
        <Badge tone={statusTone[project.status]}>{project.status}</Badge>
      </div>

      <p className="border-l-2 border-accent/30 pl-4 text-sm leading-relaxed text-fg-subtle">
        {project.problem}
      </p>

      {project.metrics.length > 0 && (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {project.metrics.map((m) => (
            <StatBlock key={m.label} label={m.label} value={m.value} />
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <Badge key={s} tone="neutral">
            {s}
          </Badge>
        ))}
      </div>

      <div className="flex gap-4 pt-1 text-sm">
        <Link href={`/work/${project.slug}`} className="focus-ring text-accent hover:text-accent2 transition-colors hover:underline">
          Case study →
        </Link>
        {project.links.map((l) => (
          <a key={l.label} href={l.href} className="focus-ring text-accent hover:text-accent2 transition-colors hover:underline">
            {l.label} →
          </a>
        ))}
      </div>
    </Card>
      </TiltCard>
    </RevealOnScroll>
  );
}
