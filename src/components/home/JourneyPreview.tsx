"use client";

import { Container } from "@/components/ui/Container";
import { Timeline } from "@/components/about/Timeline";
import { FadeInUp } from "@/components/animations/Motion";

export function JourneyPreview() {
  return (
    <section className="relative overflow-hidden border-y border-border/80 bg-[linear-gradient(180deg,#FFF9F3_0%,#FFF1E4_50%,#FFF9F3_100%)] py-14 sm:py-20 lg:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[min(42rem,85%)] -translate-x-1/2 bg-gradient-to-r from-transparent via-saffron/40 to-transparent"
        aria-hidden
      />
      <Container>
        <FadeInUp className="mb-10 text-center sm:mb-14">
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-saffron-deep">
            <span className="h-1 w-1 rounded-full bg-saffron" aria-hidden />
            Political Journey
          </p>
          <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold leading-tight tracking-[-0.02em] text-navy sm:text-4xl md:text-[2.75rem]">
            Milestones in public life
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            A concise view of verified roles and organisational responsibilities
            across decades of public service.
          </p>
          <div
            className="mx-auto mt-6 h-0.5 w-14 rounded-full bg-gradient-to-r from-saffron to-saffron/30"
            aria-hidden
          />
        </FadeInUp>
        <Timeline compact />
      </Container>
    </section>
  );
}
