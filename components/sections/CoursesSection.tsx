import { courses } from "@/content/courses";
import { Badge } from "@/components/ui/Badge";

export function CoursesSection() {
  return (
    <div>
      <h3 className="font-mono text-xs uppercase tracking-wider text-fg-subtle">Courses & Bootcamps</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {courses.map((c) => (
          <Badge key={c.name} tone="neutral">{c.name} · {c.provider} · {c.year}</Badge>
        ))}
      </div>
    </div>
  );
}
