import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-content px-6 py-20">
      <h1 className="font-display text-4xl font-medium">Privacy</h1>
      <div className="mt-8 max-w-2xl space-y-4 text-sm leading-relaxed text-fg-muted">
        <p>This site does not use cookies, does not track visitors, and does not collect personal data beyond what you submit directly via email or contact links.</p>
        <p>No third-party analytics or advertising scripts run on this site.</p>
        <p>[Replace with your actual privacy stance if this changes — e.g. if you add analytics later.]</p>
      </div>
    </section>
  );
}
