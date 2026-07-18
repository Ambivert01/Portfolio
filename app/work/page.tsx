"use client";

import { useState } from "react";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const statuses = ["all", "active", "beta", "shipped", "archived"] as const;
type Filter = (typeof statuses)[number];

const statusLabels: Record<Filter, string> = {
  all: "All",
  active: "Active",
  beta: "Beta",
  shipped: "Shipped",
  archived: "Archived",
};

export default function WorkPage() {
  const [filter, setFilter] = useState<Filter>("all");

  const available = statuses.filter(
    (s) => s === "all" || projects.some((p) => p.status === s)
  );

  const filtered = filter === "all" ? projects : projects.filter((p) => p.status === filter);

  return (
    <section className="mx-auto max-w-content px-6 py-20">
      <RevealOnScroll>
        <h1 className="font-display text-4xl font-medium">Work</h1>
        <p className="mt-3 max-w-lg text-fg-muted">
          Systems shipped, with the constraints and decisions behind them.
        </p>
      </RevealOnScroll>

      <div className="mt-8 flex flex-wrap gap-2">
        {available.map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`focus-ring rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
              filter === s
                ? "border-accent bg-accent/10 text-accent"
                : "border-border text-fg-muted hover:border-accent/50 hover:text-fg"
            }`}
          >
            {statusLabels[s]}
            {s !== "all" && (
              <span className="ml-1.5 text-fg-subtle">
                {projects.filter((p) => p.status === s).length}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-6">
        {filtered.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
