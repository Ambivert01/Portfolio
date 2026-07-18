import { Hero } from "@/components/sections/Hero";
import { Now } from "@/components/sections/Now";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { StatsBar } from "@/components/sections/StatsBar";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Now />
      <FeaturedWork />
      <StatsBar />
      <TestimonialsSection />
      <ContactCTA />
    </>
  );
}
