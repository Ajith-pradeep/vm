import Image from "next/image";
import { biography } from "@/data/biography";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInUp, ImageReveal } from "@/components/animations/Motion";

export function AboutPreview() {
  return (
    <section id="about-preview" className="bg-white py-16 sm:py-20">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <ImageReveal className="relative">
          <div className="overflow-hidden rounded-[1.1rem] border border-border bg-warm">
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
          <div className="absolute -bottom-5 left-5 right-5 rounded-lg border border-border bg-white p-4 shadow-[0_12px_30px_rgba(23,43,77,0.08)] sm:left-8 sm:right-auto sm:max-w-xs">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-saffron-deep">
              Current office
            </p>
            <p className="mt-1 font-display text-lg text-navy">
              {biography.currentRole.title}
            </p>
            <p className="mt-1 text-sm text-muted">
              {biography.currentRole.constituency} · since {biography.currentRole.since}
            </p>
          </div>
        </ImageReveal>

        <FadeInUp>
          <SectionHeading
            eyebrow="About"
            title={biography.displayName}
            description={biography.summary[0]}
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
            <p>{biography.summary[1]}</p>
            <p>{biography.summary[3]}</p>
          </div>
          <ul className="mt-8 space-y-2 border-l-2 border-saffron/40 pl-4 text-sm text-navy/90">
            {biography.previousRoles.slice(0, 3).map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href="/about" variant="secondary">
              Read Full Biography
            </Button>
          </div>
        </FadeInUp>
      </Container>
    </section>
  );
}
