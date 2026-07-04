import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { Metadata } from "next";
import { ResearchSection } from "@/components/sections/ResearchSection";

export const metadata: Metadata = { title: "Research" };

export default function ResearchPage() {
  return (
    <>
      <div className="mx-auto max-w-content px-6 pt-20">
        <RevealOnScroll><h1 className="font-display text-4xl font-medium">Research & Publications</h1></RevealOnScroll>
      </div>
      <ResearchSection />
    </>
  );
}
