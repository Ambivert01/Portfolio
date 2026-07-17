import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function FeaturedWork() {
  const featured = projects
    .filter((p) => p.featured)
    .slice(0, 3);

  return (
    <section className="mx-auto max-w-content px-6 py-16">
      <RevealOnScroll>
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-2xl font-medium md:text-3xl">Featured work</h2>
          <Button href="/work" variant="ghost">All projects →</Button>
        </div>
      </RevealOnScroll>
      <div className="flex flex-col gap-6">
        {featured.map((p) => (
          <div key={p.slug} className="relative">
            <ProjectCard project={p} />
          </div>
        ))}

      </div>

    </section>
  );
}
