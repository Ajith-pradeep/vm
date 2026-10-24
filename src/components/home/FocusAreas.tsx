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
    <section className="bg-white py-16 sm:py-20">
      <Container>
        {showHeading ? (
          <FadeInUp>
            <SectionHeading
              eyebrow="Public Service"
              title="Focus Areas & Public Engagement"
              description="Thematic areas of public life and engagement. Specific programmes and outcomes are listed only when independently verified."
              className="mb-12"
            />
          </FadeInUp>
        ) : null}
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((area) => (
            <StaggerItem key={area.id}>
              <article
                id={area.id}
                className="group overflow-hidden rounded-xl border border-border bg-white transition duration-300 hover:border-saffron/50 hover:shadow-[0_18px_40px_rgba(23,43,77,0.08)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={area.image}
                    alt={area.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-2xl text-navy">{area.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{area.description}</p>
                  {area.href ? (
                    <Link
                      href={area.href}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-saffron-deep transition hover:text-navy"
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
