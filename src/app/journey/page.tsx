import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Timeline } from "@/components/about/Timeline";

export const metadata: Metadata = {
  title: "Political Journey",
  description:
    "Verified timeline of organisational roles, parliamentary service, and public offices held by V. Muraleedharan.",
};

export default function JourneyPage() {
  return (
    <>
      <PageHero
        eyebrow="Timeline"
        title="Political Journey"
        description="Milestones drawn from government profiles, Election Commission results, and established public records. Entries are data-driven and can be updated as new verified information becomes available."
      />
      <Container className="py-14 sm:py-16">
        <Timeline />
      </Container>
    </>
  );
}
