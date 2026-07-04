import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export const metadata: Metadata = { title: "Resume" };

export default function ResumePage() {
  return (
    <section className="mx-auto max-w-content px-6 py-20">
      <RevealOnScroll>
        <div className="flex items-end justify-between">
          <h1 className="font-display text-4xl font-medium">Resume</h1>
          <Magnetic><Button href={siteConfig.resumeUrl}>Download PDF</Button></Magnetic>
        </div>
        <div className="mt-10 aspect-[8.5/11] w-full max-w-2xl overflow-hidden rounded-md border border-border bg-bg-elevated">
          <iframe src={siteConfig.resumeUrl} className="h-full w-full" title="Resume preview" />
        </div>
      </RevealOnScroll>
    </section>
  );
}
