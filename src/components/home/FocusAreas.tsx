"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { focusAreas } from "@/data/initiatives";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInUp, Stagger, StaggerItem } from "@/components/animations/Motion";

export function FocusAreas({
  limit,
  showHeading = true,
}: {
  limit?: number;
  showHeading?: boolean;
}) {
  const items = limit ? focusAreas.slice(0, limit) : focusAreas;

  return (
    <section className="bg-white py-14 sm:py-20 lg:py-28">
      <Container>
        {showHeading ? (
          <FadeInUp>
            <SectionHeading
              eyebrow="Initiatives"
              title="Priorities in public life"
              description="Constituency infrastructure, Technocity, water and roads, youth opportunity, diaspora care, and national service — themes from his public record."
              className="mb-10 sm:mb-14"
            />
          </FadeInUp>
        ) : null}
        <Stagger className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
          {items.map((area) => (
            <StaggerItem key={area.id}>
              <article
                id={area.id}
                className="group relative overflow-hidden rounded-2xl border border-border bg-white transition duration-300 hover:-translate-y-1 hover:border-saffron/45 hover:shadow-[0_20px_44px_rgba(23,43,77,0.1)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={area.image}
                    alt={area.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent opacity-70"
                    aria-hidden
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="font-display text-xl font-bold text-navy transition-colors group-hover:text-saffron-deep sm:text-2xl">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {area.description}
                  </p>
                  {area.href ? (
                    <Link
                      href={area.href}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-saffron-deep transition hover:gap-2 hover:text-navy sm:mt-5"
                    >
                      Learn More <ArrowUpRight size={16} />
                    </Link>
                  ) : null}
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
