"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/content/site-config";
import { SignalIndicator } from "@/components/ui/SignalIndicator";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { AccessibilityMenu } from "@/components/ui/AccessibilityMenu";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/research", label: "Research" },
  // { href: "/writing", label: "Writing" }, // unhide when articles are added
  { href: "/achievements", label: "Achievements" },
  { href: "/stack", label: "Stack" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <Link href="/" className="focus-ring font-display text-lg font-medium tracking-tight">
          {siteConfig.name}
          <span className="text-accent">.</span>
        </Link>

        <div className="hidden items-center gap-5 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="focus-ring text-sm text-fg-muted transition-colors hover:text-fg"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <SignalIndicator tone="green" label={siteConfig.availability} />
          <ThemeToggle />
          <AccessibilityMenu />
        </div>

        <button
          className="focus-ring lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="focus-ring text-sm text-fg-muted hover:text-fg"
              >
                {l.label}
              </Link>
            ))}
            <div className="flex items-center justify-between pt-2">
              <SignalIndicator tone="green" label={siteConfig.availability} />
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <AccessibilityMenu />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
