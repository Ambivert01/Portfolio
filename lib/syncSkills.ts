import { skillGroups } from "@/content/skills";
import { skillCategoryMap } from "@/content/skill-category-map";
import { projects } from "@/content/projects";

// Strips version suffixes: "React 18" → "React", "Node.js 20" → "Node.js", "NestJS 10" → "NestJS"
function normalize(tech: string): string {
  return tech.replace(/\s+\d+(\.\d+)*$/, "").trim();
}

export function getSyncedSkillGroups(): { group: string; items: string[] }[] {
  // Collect all unique normalized techs from every project stack
  const allProjectTechs = new Set(
    projects.flatMap((p) => p.stack.map(normalize))
  );

  // Clone skillGroups deeply so we don't mutate the source
  const groups = skillGroups.map((g) => ({ group: g.group, items: [...g.items] }));
  const groupIndex = Object.fromEntries(groups.map((g, i) => [g.group, i]));

  for (const tech of allProjectTechs) {
    const targetGroup = skillCategoryMap[tech];
    if (!targetGroup) continue; // not in map → intentionally excluded

    const idx = groupIndex[targetGroup];
    if (idx === undefined) continue; // group doesn't exist in skillGroups

    if (!groups[idx].items.includes(tech)) {
      groups[idx].items.push(tech);
    }
  }

  return groups;
}
