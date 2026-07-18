import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/AboutSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { JourneyTimeline } from "@/components/sections/JourneyTimeline";
import { VisionSection } from "@/components/sections/VisionSection";
import { LifeSection } from "@/components/sections/LifeSection";
import { PressSection } from "@/components/sections/PressSection";
import { SoftSkills } from "@/components/sections/SoftSkills";
import { LeadershipSection } from "@/components/sections/LeadershipSection";
import { LanguagesSection } from "@/components/sections/LanguagesSection";
import { FunFactsSection } from "@/components/sections/FunFactsSection";
import { ConsumingSection } from "@/components/sections/ConsumingSection";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <div className="mx-auto max-w-content px-6 pt-20">
        <RevealOnScroll>
          <p className="font-mono text-xs uppercase tracking-widest text-accent">Who I am</p>
          <h1 className="mt-2 font-display text-4xl font-medium text-fg">Parth Prajapati</h1>
          <p className="mt-2 text-lg text-fg-muted">The Ambivert.</p>
        </RevealOnScroll>
      </div>
      <AboutSection />
      <div className="mx-auto max-w-content px-6"><LanguagesSection /></div>
      <EducationSection />
      <JourneyTimeline />
      <LeadershipSection />
      <SoftSkills />
      <VisionSection />
      <LifeSection />
      <ConsumingSection />
      <FunFactsSection />
      {/* <PressSection /> */}
    </>
  );
}
