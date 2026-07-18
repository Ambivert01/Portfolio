import { StatBlock } from "@/components/ui/StatBlock";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { projects } from "@/content/projects";
import { achievements } from "@/content/achievements";
import { publications } from "@/content/research";

const projectCount = projects.length + "+";
const hackathonFinals = achievements.filter((a) =>
  a.title.toLowerCase().includes("finalist") || a.title.toLowerCase().includes("final")
).length;
const ongoingResearch = publications.filter((p) => p.status === "ongoing").length;
const yearsBuilding = new Date().getFullYear() - 2024 || 1;

const stats = [
  { value: projectCount, label: "Projects Shipped" },
  { value: String(hackathonFinals), label: "Hackathon Finals" },
  { value: `${yearsBuilding}+`, label: "Years Building" },
  { value: String(ongoingResearch), label: "Ongoing Research" },
];

export function StatsBar() {
  return (
    <section className="mx-auto max-w-content px-6 py-10">
      <RevealOnScroll>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s) => (
            <StatBlock key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
}
