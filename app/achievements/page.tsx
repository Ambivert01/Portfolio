import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { Metadata } from "next";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { MediaSection } from "@/components/sections/MediaSection";
import { FAQSection } from "@/components/sections/FAQSection";

export const metadata: Metadata = { title: "Achievements" };

export default function AchievementsPage() {
  return (
    <>
      <div className="mx-auto max-w-content px-6 pt-20">
        <RevealOnScroll><h1 className="font-display text-4xl font-medium">Achievements</h1></RevealOnScroll>
      </div>
      <AchievementsSection />
      <CertificationsSection />
      <TestimonialsSection />
      <MediaSection />
      <FAQSection />
    </>
  );
}
