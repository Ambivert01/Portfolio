import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { Badge } from "@/components/ui/Badge";
import { StatBlock } from "@/components/ui/StatBlock";
import { Card } from "@/components/ui/Card";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return { title: project?.name ?? "Project" };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <article className="mx-auto max-w-content px-6 py-20">
      <Badge tone={project.status === "active" ? "active" : "amber"}>{project.status}</Badge>
      <h1 className="mt-4 font-display text-4xl font-medium md:text-5xl">{project.name}</h1>
      <p className="mt-4 max-w-2xl text-lg text-fg-muted">{project.oneLiner}</p>

      <ImagePlaceholder
        label={project.heroImage || `${project.name} — hero image`}
        aspect="aspect-video"
        className="mt-8 w-full"
      />

      <section className="mt-12">
        <h2 className="font-mono text-xs uppercase tracking-wider text-fg-subtle">Problem</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-fg-muted">{project.problem}</p>
      </section>

      {project.architecture && (
        <section className="mt-10">
          <h2 className="font-mono text-xs uppercase tracking-wider text-fg-subtle">Architecture</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-fg-muted">{project.architecture}</p>
        </section>
      )}

      {project.metrics.length > 0 && (
        <section className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          {project.metrics.map((m) => (
            <StatBlock key={m.label} label={m.label} value={m.value} />
          ))}
        </section>
      )}

      <section className="mt-10">
        <h2 className="font-mono text-xs uppercase tracking-wider text-fg-subtle">Stack</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <Badge key={s} tone="neutral">{s}</Badge>
          ))}
        </div>
      </section>

      {project.lessonsLearned && project.lessonsLearned.length > 0 && (
        <section className="mt-10">
          <h2 className="font-mono text-xs uppercase tracking-wider text-fg-subtle">Lessons learned</h2>
          <ul className="mt-3 flex flex-col gap-2">
            {project.lessonsLearned.map((l) => (
              <li key={l} className="border-l-2 border-border pl-4 text-sm leading-relaxed text-fg-muted">
                {l}
              </li>
            ))}
          </ul>
        </section>
      )}

      {project.roadmap && project.roadmap.length > 0 && (
        <section className="mt-10">
          <h2 className="font-mono text-xs uppercase tracking-wider text-fg-subtle">Roadmap</h2>
          <ul className="mt-3 flex flex-col gap-2">
            {project.roadmap.map((r) => (
              <li key={r} className="flex items-center gap-2 text-sm text-fg-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {r}
              </li>
            ))}
          </ul>
        </section>
      )}

      {project.gallery && project.gallery.length > 0 && (
        <section className="mt-10">
          <h2 className="font-mono text-xs uppercase tracking-wider text-fg-subtle">Gallery</h2>
          <div className="mt-3 grid grid-cols-3 gap-3">
            {project.gallery.map((g, i) => (
              <ImagePlaceholder key={i} label={g || `Screenshot ${i + 1}`} aspect="aspect-square" />
            ))}
          </div>
        </section>
      )}

      {project.videoUrl && (
        <section className="mt-10">
          <h2 className="font-mono text-xs uppercase tracking-wider text-fg-subtle">Demo</h2>
          <Card className="mt-3 aspect-video">
            <iframe src={project.videoUrl} className="h-full w-full" title={`${project.name} demo`} />
          </Card>
        </section>
      )}

      <div className="mt-12 flex gap-4">
        {project.links.map((l) => (
          <a key={l.label} href={l.href} className="focus-ring text-sm text-accent hover:underline">
            {l.label} →
          </a>
        ))}
      </div>
    </article>
  );
}
