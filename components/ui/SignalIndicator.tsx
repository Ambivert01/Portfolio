import { cn } from "@/lib/cn";

const toneMap = {
  green: "bg-signal-green shadow-[0_0_8px_hsl(var(--signal-green)/0.7)]",
  amber: "bg-signal-amber shadow-[0_0_8px_hsl(var(--signal-amber)/0.7)]",
  red: "bg-signal-red shadow-[0_0_8px_hsl(var(--signal-red)/0.7)]",
};

export function SignalIndicator({
  tone = "green",
  label,
  pulse = true,
}: {
  tone?: "green" | "amber" | "red";
  label: string;
  pulse?: boolean;
}) {
  return (
    <div className="flex items-center gap-2 font-mono text-xs text-fg-muted">
      <span
        className={cn("h-2 w-2 rounded-full", toneMap[tone], pulse && "animate-blink-signal")}
        aria-hidden
      />
      <span>{label}</span>
    </div>
  );
}
