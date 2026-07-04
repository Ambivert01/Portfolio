import type { Metadata } from "next";

export const metadata: Metadata = { title: "License" };

export default function LicensePage() {
  return (
    <section className="mx-auto max-w-content px-6 py-20">
      <h1 className="font-display text-4xl font-medium">License</h1>
      <div className="mt-8 max-w-2xl space-y-4 text-sm leading-relaxed text-fg-muted">
        <p>Site design and code: MIT License — free to use as reference, not to republish as-is under your own name.</p>
        <p>Written content, case studies, and project descriptions: © you, all rights reserved.</p>
      </div>
    </section>
  );
}
