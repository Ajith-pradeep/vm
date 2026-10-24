import type { Metadata } from "next";
import Image from "next/image";
import { biography } from "@/data/biography";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description: `Biography and public service background of ${biography.displayName}, Bharatiya Janata Party leader from Kerala.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Biography"
        title={`About ${biography.displayName}`}
        description="A verified overview of education, organisational work, parliamentary service, and current public office."
      />
      <Container className="grid gap-12 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <div className="overflow-hidden rounded-xl border border-border bg-warm">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/portrait/portrait-painterly.jpg"
                alt={`Portrait of ${biography.displayName}`}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover object-top"
              />
            </div>
          </div>
          <dl className="mt-6 space-y-3 rounded-xl border border-border bg-white p-5 text-sm">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-saffron-deep">
                Full name
              </dt>
              <dd className="mt-1 text-navy">{biography.fullName}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-saffron-deep">
                Born
              </dt>
              <dd className="mt-1 text-navy">
                {biography.born}, {biography.birthPlace}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-saffron-deep">
                Party
              </dt>
              <dd className="mt-1 text-navy">{biography.party}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-saffron-deep">
                Education
              </dt>
              <dd className="mt-1 text-navy">{biography.education}</dd>
            </div>
          </dl>
        </div>

        <div className="max-w-2xl">
          <div className="space-y-5 text-base leading-relaxed text-muted">
            {biography.summary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <h2 className="mt-10 font-display text-3xl text-navy">Previous responsibilities</h2>
          <ul className="mt-4 space-y-3">
            {biography.previousRoles.map((role) => (
              <li
                key={role}
                className="rounded-lg border border-border bg-warm/60 px-4 py-3 text-sm text-navy"
              >
                {role}
              </li>
            ))}
          </ul>

          <h2 className="mt-10 font-display text-3xl text-navy">Sources</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {biography.sources.map((source) => (
              <li key={source.href}>
                <a
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-saffron-deep hover:text-navy"
                >
                  {source.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/journey">Political Journey</Button>
            <Button href="/contact" variant="secondary">
              Connect
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}
