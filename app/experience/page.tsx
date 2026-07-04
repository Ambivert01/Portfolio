import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { Metadata } from "next";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { SpeakingSection } from "@/components/sections/SpeakingSection";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <>
      <div className="mx-auto max-w-content px-6 pt-20">
        <RevealOnScroll><h1 className="font-display text-4xl font-medium">Experience</h1></RevealOnScroll>
      </div>
      <ExperienceTimeline />
      <SpeakingSection />
    </>
  );
}
