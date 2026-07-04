import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { Metadata } from "next";
import { WritingSection } from "@/components/sections/WritingSection";
import { OpenSourceSection } from "@/components/sections/OpenSourceSection";

export const metadata: Metadata = { title: "Writing" };

export default function WritingPage() {
  return (
    <>
      <div className="mx-auto max-w-content px-6 pt-20">
        <RevealOnScroll><h1 className="font-display text-4xl font-medium">Writing & Open Source</h1></RevealOnScroll>
      </div>
      <WritingSection />
      <OpenSourceSection />
    </>
  );
}
