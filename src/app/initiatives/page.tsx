import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { FocusAreas } from "@/components/home/FocusAreas";

export const metadata: Metadata = {
  title: "Initiatives",
  description:
    "Focus areas and public engagement themes associated with V. Muraleedharan’s public life in Kerala and national politics.",
};

export default function InitiativesPage() {
  return (
    <>
      <PageHero
        eyebrow="Public service"
        title="Focus Areas & Public Engagement"
        description="These panels describe thematic areas of public life. They are not claims of specific project outcomes unless independently documented."
      />
      <FocusAreas showHeading={false} />
    </>
  );
}
