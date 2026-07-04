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
        "rounded-md border border-border p-6 transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/10",
        glass ? "glass" : "bg-bg-elevated",
        className
      )}
    >
      {children}
    </div>
  );
}
