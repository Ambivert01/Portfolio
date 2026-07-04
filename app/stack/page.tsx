import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { Metadata } from "next";
import { Stack } from "@/components/sections/Stack";
import { CodingProfilesSection } from "@/components/sections/CodingProfilesSection";
import { CoursesSection } from "@/components/sections/CoursesSection";

export const metadata: Metadata = { title: "Stack" };

export default function StackPage() {
  return (
    <>
      <div className="mx-auto max-w-content px-6 pt-20">
        <RevealOnScroll><h1 className="font-display text-4xl font-medium">Stack</h1></RevealOnScroll>
      </div>
      <Stack />
      <CodingProfilesSection />
      <div className="mx-auto max-w-content px-6 pb-16"><CoursesSection /></div>
    </>
  );
}
