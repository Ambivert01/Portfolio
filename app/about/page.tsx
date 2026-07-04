import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/AboutSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { JourneyTimeline } from "@/components/sections/JourneyTimeline";
import { VisionSection } from "@/components/sections/VisionSection";
import { LifeSection } from "@/components/sections/LifeSection";
import { PressSection } from "@/components/sections/PressSection";
import { LeadershipSection } from "@/components/sections/LeadershipSection";
import { LanguagesSection } from "@/components/sections/LanguagesSection";
import { FunFactsSection } from "@/components/sections/FunFactsSection";
import { ConsumingSection } from "@/components/sections/ConsumingSection";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <div className="mx-auto max-w-content px-6 pt-20">
        <RevealOnScroll><h1 className="font-display text-4xl font-medium">About</h1></RevealOnScroll>
      </div>
      <AboutSection />
      <div className="mx-auto max-w-content px-6"><LanguagesSection /></div>
      <EducationSection />
      <JourneyTimeline />
      <LeadershipSection />
      <VisionSection />
      <LifeSection />
      <ConsumingSection />
      <FunFactsSection />
      <PressSection />
    </>
  );
}
