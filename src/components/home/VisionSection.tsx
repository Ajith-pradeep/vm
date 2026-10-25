"use client";

import { visions } from "@/data/initiatives";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInUp, Stagger, StaggerItem } from "@/components/animations/Motion";

export function VisionSection({
  limit,
  showHeading = true,
}: {
  limit?: number;
  showHeading?: boolean;
}) {
  const items = limit ? visions.slice(0, limit) : visions;

  return (
    <section className="border-y border-border/80 bg-[linear-gradient(180deg,#FFF9F3_0%,#FFFFFF_100%)] py-14 sm:py-20 lg:py-28">
      <Container>
        {showHeading ? (
          <FadeInUp>
            <SectionHeading
              eyebrow="Vision"
              title="A vision for Kerala’s progress"
              description="Publicly articulated goals associated with V. Muraleedharan’s leadership and constituency work. These describe stated direction — not verified project completion."
              className="mb-10 sm:mb-14"
            />
          </FadeInUp>
        ) : null}
        <Stagger className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <StaggerItem key={item.id}>
              <article
                id={item.id}
                className="h-full border border-border/90 bg-white p-5 transition duration-300 hover:-translate-y-0.5 hover:border-saffron/35 sm:p-7"
              >
                <p className="font-display text-2xl font-bold text-saffron/80 sm:text-3xl">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-xl font-bold text-navy sm:mt-3 sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:mt-3 sm:text-[0.95rem]">
                  {item.description}
                </p>
                {item.sourceNote ? (
                  <p className="mt-4 text-xs text-muted/75">Source: {item.sourceNote}</p>
                ) : null}
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
