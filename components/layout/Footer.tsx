import Link from "next/link";
import { siteConfig } from "@/content/site-config";

const sitemap = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/research", label: "Research" },
  { href: "/writing", label: "Writing" },
  { href: "/achievements", label: "Achievements" },
  { href: "/stack", label: "Stack" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
  { href: "/changelog", label: "Changelog" },
];

const legal = [
  { href: "/legal/privacy", label: "Privacy" },
  { href: "/legal/license", label: "License" },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="track-rule" />
      <div className="mx-auto max-w-content px-6 py-10">
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-fg-muted">
          {sitemap.map((s) => (
            <Link key={s.href} href={s.href} className="focus-ring hover:text-fg">
              {s.label}
            </Link>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-fg-subtle">
          {legal.map((l) => (
            <Link key={l.href} href={l.href} className="focus-ring hover:text-fg-muted">
              {l.label}
            </Link>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-4 text-sm text-fg-subtle md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} {siteConfig.name}. Built with intent.</span>
          <div className="flex flex-wrap gap-5">
            <a href={siteConfig.social.github} className="focus-ring hover:text-fg-muted">GitHub</a>
            <a href={siteConfig.social.linkedin} className="focus-ring hover:text-fg-muted">LinkedIn</a>
            <a href={siteConfig.social.twitter} className="focus-ring hover:text-fg-muted">Twitter</a>
            <a href={siteConfig.social.medium} className="focus-ring hover:text-fg-muted">Medium</a>
            <a href={siteConfig.social.devto} className="focus-ring hover:text-fg-muted">Dev.to</a>
            <a href={siteConfig.social.youtube} className="focus-ring hover:text-fg-muted">YouTube</a>
            <a href={`mailto:${siteConfig.email}`} className="focus-ring hover:text-fg-muted">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
