import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { JourneyPreview } from "@/components/home/JourneyPreview";
import { FocusAreas } from "@/components/home/FocusAreas";
import { NewsPreview } from "@/components/home/NewsPreview";
import { ConnectCta } from "@/components/home/ConnectCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <JourneyPreview />
      <FocusAreas limit={6} />
      <NewsPreview />
      <ConnectCta />
    </>
  );
}
