import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { FocusAreas } from "@/components/home/FocusAreas";
import { VisionSection } from "@/components/home/VisionSection";

export const metadata: Metadata = {
  title: "Initiatives & Vision",
  description:
    "Focus areas and publicly stated vision themes associated with V. Muraleedharan’s work in Kazhakootam, Kerala, and national public life.",
};

export default function InitiativesPage() {
  return (
    <>
      <PageHero
        eyebrow="Public service"
        title="Initiatives & Vision"
        description="Rearranged around verified public themes — constituency infrastructure, Technocity, water and roads, diaspora care, and performance-led governance — with stated visions presented separately from outcomes."
      />
      <VisionSection />
      <FocusAreas
        showHeading
      />
    </>
  );
}
