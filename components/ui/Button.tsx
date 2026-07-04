import Link from "next/link";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

const base =
  "focus-ring inline-flex items-center justify-center gap-2 rounded-sm px-4 py-2.5 text-sm font-medium transition-colors duration-150";

const variants = {
  primary: "bg-gradient-to-r from-accent to-accent2 text-white shadow-lg hover:opacity-90 hover:shadow-accent/30 hover:shadow-xl transition-all",
  secondary: "bg-bg-elevated text-fg border border-border hover:border-accent/50 hover:bg-bg-inset",
  ghost: "text-fg-muted hover:text-fg hover:bg-bg-inset",
};

export function Button({ href, variant = "primary", children, className, onClick, type = "button" }: ButtonProps) {
  const classes = cn(base, variants[variant], className);
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
