import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { StatBlock } from "@/components/ui/StatBlock";
import { TiltCard } from "@/components/ui/TiltCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { Project } from "@/content/projects";
import Link from "next/link";
import { Github, ExternalLink, ArrowRight } from "lucide-react";

const statusTone = { active: "active", shipped: "amber", beta: "neutral", archived: "neutral" } as const;

// Ensure statusTone indexing is always safe.
const getStatusTone = (status: Project["status"]) => statusTone[status];

export function ProjectCard({ project }: { project: Project }) {
  return (
    <RevealOnScroll>
      <TiltCard>
        <Card className="flex flex-col gap-5">
          {/* header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <Link href={`/work/${project.slug}`} className="focus-ring">
                  <h3 className="font-display text-2xl font-medium transition-colors hover:text-accent">
                    {project.name}
                  </h3>
                </Link>
                <div className="flex flex-col gap-1">
                  <Badge tone={getStatusTone(project.status)}>{project.status}</Badge>
                </div>

              </div>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-fg-muted">{project.oneLiner}</p>
            </div>
            {/* icon links */}
            <div className="flex shrink-0 items-center gap-2">
              {project.github && project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex items-center gap-1.5 rounded-full border border-border bg-bg-elevated px-3 py-1.5 text-xs font-medium text-fg-muted transition-colors hover:border-accent/50 hover:text-fg"
                  aria-label="GitHub"
                >
                  <Github size={13} />
                  GitHub
                </a>
              )}
              {project.liveUrl && project.liveUrl !== "#" && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex items-center gap-1.5 rounded-full border border-border bg-bg-elevated px-3 py-1.5 text-xs font-medium text-fg-muted transition-colors hover:border-accent/50 hover:text-fg"
                  aria-label="Live preview"
                >
                  <ExternalLink size={13} />
                  Live
                </a>
              )}
            </div>
          </div>

          {/* problem */}
          <p className="border-l-2 border-accent/30 pl-4 text-sm leading-relaxed text-fg-subtle">
            {project.problem}
          </p>

          {/* metrics */}
          {project.metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {project.metrics.map((m) => (
                <StatBlock key={m.label} label={m.label} value={m.value} />
              ))}
            </div>
          )}

          {/* stack */}
          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <Badge key={s} tone="neutral">{s}</Badge>
            ))}
          </div>

          {/* footer */}
          {project.docs && (
            <div className="flex items-center gap-1 pt-1">
              <Link
                href={`/work/${project.slug}`}
                className="focus-ring inline-flex items-center gap-1.5 text-sm text-accent transition-colors hover:text-accent2"
              >
                View project <ArrowRight size={14} />
              </Link>
            </div>
          )}
        </Card>
      </TiltCard>
    </RevealOnScroll>
  );
}
