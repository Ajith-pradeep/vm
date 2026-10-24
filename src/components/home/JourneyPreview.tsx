import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/about/Timeline";
import { FadeInUp } from "@/components/animations/Motion";

export function JourneyPreview() {
  return (
    <section className="border-y border-border bg-warm py-16 sm:py-20">
      <Container>
        <FadeInUp>
          <SectionHeading
            eyebrow="Political Journey"
            title="Milestones in public life"
            description="A concise view of verified roles and organisational responsibilities across decades of public service."
            align="center"
            className="mb-12"
          />
        </FadeInUp>
        <Timeline compact />
      </Container>
    </section>
  );
}
