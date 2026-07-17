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
    neutral: "bg-bg-inset/80 text-fg-muted border border-border/80 hover:border-accent/50 hover:text-accent transition-colors duration-150",
    active: "bg-signal-green/15 text-signal-green border border-signal-green/20",
    amber: "bg-accent/15 text-accent border border-accent/20",
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
