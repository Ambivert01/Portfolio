import { cn } from "@/lib/cn";

export function Card({
  children,
  className,
  glass = true,
}: {
  children: React.ReactNode;
  className?: string;
  glass?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border/60 p-5 transition-all duration-300 hover:border-accent/30 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/8",
        glass ? "glass" : "bg-bg-elevated",
        className
      )}
    >
      {children}
    </div>
  );
}
