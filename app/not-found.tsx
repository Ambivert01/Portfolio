import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "404 — Not Found" };

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-content flex-col items-center justify-center px-6 py-20 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-accent">404</p>
      <h1 className="mt-4 font-display text-4xl font-medium md:text-6xl">Page not found</h1>
      <p className="mt-4 max-w-md text-fg-muted">
        This route doesn&apos;t exist — or was removed. No cascading failures, just a missing page.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="focus-ring inline-flex items-center gap-2 rounded-sm bg-accent px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Go home
        </Link>
        <Link
          href="/work"
          className="focus-ring inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2.5 text-sm font-medium text-fg-muted transition-colors hover:text-fg"
        >
          View work
        </Link>
      </div>
    </section>
  );
}
