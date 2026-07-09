import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { MermaidDiagram } from "@/components/ui/MermaidDiagram";
import { Grid3X3, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return { title: project ? `${project.name} — Architecture` : "Architecture" };
}

const statusTone = { active: "active", shipped: "amber", beta: "neutral", archived: "neutral" } as const;

export default async function ProjectArchitecturePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  const architectures = project.docs?.architectures ?? [];

  return (
    <article className="mx-auto max-w-content px-6 py-20">
      <Link
        href={`/work/${project.slug}`}
        className="focus-ring inline-flex items-center gap-1.5 text-sm text-fg-subtle transition-colors hover:text-fg"
      >
        <ArrowLeft size={14} /> Back to project
      </Link>

      <div className="mt-8 border-b border-border pb-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex-1">
            <Badge tone={statusTone[project.status]}>{project.status}</Badge>
            <h1 className="mt-3 font-display text-4xl font-medium md:text-5xl">Architecture</h1>
            <p className="mt-3 max-w-2xl text-lg text-fg-muted">Architecture diagrams and workflows for {project.name}.</p>
          </div>
        </div>
      </div>

      {architectures.length > 0 ? (
        <div className="mt-14 flex flex-col gap-10">
          <section>
            <SectionLabel icon={<Grid3X3 size={13} />}>Architecture Diagrams</SectionLabel>
            <div className="mt-8 flex flex-col gap-8">
              {architectures.map((d, idx) => (
                <div key={idx}>
                  {d.title && (
                    <p className="mb-3 font-mono text-xs uppercase tracking-widest text-fg-subtle">{d.title}</p>
                  )}
                  <MermaidDiagram chart={d.mermaid} />
                </div>
              ))}
            </div>
          </section>
        </div>
      ) : (
        <div className="mt-14 rounded-xl border border-border bg-bg-elevated/40 p-6 text-fg-muted">
          No architecture diagrams available for this project.
        </div>
      )}
    </article>
  );
}

function SectionLabel({ children, icon }: { children: React.ReactNode; icon?: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px flex-1 bg-border" />
      <h2 className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-fg-subtle">
        {icon}{children}
      </h2>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}

