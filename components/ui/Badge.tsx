import { cn } from "@/lib/cn";

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: "neutral" | "active" | "amber";
  className?: string;
}) {
  const tones = {
    neutral: "bg-bg-inset text-fg-muted",
    active: "bg-signal-green/10 text-signal-green",
    amber: "bg-accent/10 text-accent",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-sm px-2 py-1 text-xs font-mono tracking-wide",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
