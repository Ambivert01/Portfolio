import { courses } from "@/content/courses";

export function CoursesSection() {
  const completed = courses.filter((c) => c.status === "completed");
  const ongoing = courses.filter((c) => c.status === "ongoing");

  return (
    <div>
      <h3 className="font-mono text-xs uppercase tracking-wider text-fg-subtle">
        Courses &amp; Learning
      </h3>

      {ongoing.length > 0 && (
        <div className="mt-4">
          <p className="mb-2 text-xs text-fg-subtle">Currently studying</p>
          <div className="flex flex-col gap-2">
            {ongoing.map((c) => (
              <CourseRow key={c.name + c.instructor} course={c} />
            ))}
          </div>
        </div>
      )}

      {completed.length > 0 && (
        <div className="mt-4">
          <p className="mb-2 text-xs text-fg-subtle">Completed</p>
          <div className="flex flex-col gap-2">
            {completed.map((c) => (
              <CourseRow key={c.name + c.instructor} course={c} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function CourseRow({ course }: { course: (typeof courses)[number] }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-lg border border-border bg-bg-elevated/40 px-4 py-3">
      <div className="min-w-0">
        <p className="truncate text-sm font-medium text-fg">{course.name}</p>
        <p className="mt-0.5 text-xs text-fg-muted">{course.instructor}</p>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] text-fg-subtle">
          {course.platform}
        </span>
        {course.status === "ongoing" && (
          <span className="flex items-center gap-1 text-[10px] font-mono text-signal-amber">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-signal-amber" />
            ongoing
          </span>
        )}
      </div>
    </div>
  );
}
