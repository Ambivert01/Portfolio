import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <section className="mx-auto max-w-content px-6 py-20">
      <RevealOnScroll>
        <h1 className="font-display text-4xl font-medium">Work</h1>
        <p className="mt-3 max-w-lg text-fg-muted">
          Systems shipped, with the constraints and decisions behind them.
        </p>
      </RevealOnScroll>
      <div className="mt-12 flex flex-col gap-6">
        {projects.map((p) => <ProjectCard key={p.slug} project={p} />)}
      </div>
    </section>
  );
}
