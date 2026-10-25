"use client";

import Image from "next/image";
import { biography } from "@/data/biography";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  FadeInUp,
  ImageReveal,
  Stagger,
  StaggerItem,
} from "@/components/animations/Motion";

export function AboutPreview() {
  return (
    <section
      id="about-preview"
      className="relative overflow-hidden bg-white py-14 sm:py-20 lg:py-28"
    >
      <div
        className="pointer-events-none absolute -right-20 top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(242,140,40,0.08),transparent_70%)]"
        aria-hidden
      />
      <Container className="grid items-center gap-10 sm:gap-14 lg:grid-cols-2 lg:gap-20">
        <ImageReveal className="relative">
          <div className="overflow-hidden rounded-[1.35rem] bg-[linear-gradient(160deg,#FFF8F0,#FFE8D2)] shadow-[0_20px_48px_rgba(23,43,77,0.08)]">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/portrait/portrait-painterly.jpg"
                alt={`Portrait of ${biography.displayName}`}
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover object-top"
              />
            </div>
          </div>
          <FadeInUp className="absolute -bottom-5 left-5 right-5 border border-border/80 bg-white/95 p-4 shadow-[0_16px_40px_rgba(23,43,77,0.1)] backdrop-blur-sm sm:left-8 sm:right-auto sm:max-w-xs">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-saffron-deep">
              Current office
            </p>
            <p className="mt-1 font-display text-lg font-bold text-navy">
              {biography.currentRole.title}
            </p>
            <p className="mt-1 text-sm text-muted">
              {biography.currentRole.constituency} · since{" "}
              {biography.currentRole.since}
            </p>
          </FadeInUp>
        </ImageReveal>

        <div>
          <FadeInUp>
            <SectionHeading
              eyebrow="About"
              title={biography.displayName}
              description={biography.summary[0]}
            />
          </FadeInUp>
          <FadeInUp className="mt-6 space-y-4 text-base leading-relaxed text-muted">
            <p>{biography.summary[1]}</p>
            <p>{biography.summary[3]}</p>
          </FadeInUp>
          <Stagger className="mt-9 space-y-0 border-l-2 border-saffron/35 pl-5">
            {biography.previousRoles.slice(0, 3).map((role, i) => (
              <StaggerItem key={role}>
                <p className="border-b border-border/70 py-3 text-sm leading-snug text-navy/90 last:border-b-0">
                  <span className="mr-2 font-semibold text-saffron-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {role}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
          <FadeInUp className="mt-9">
            <Button href="/about" variant="secondary">
              Read Full Biography
            </Button>
          </FadeInUp>
        </div>
      </Container>
    </section>
  );
}
