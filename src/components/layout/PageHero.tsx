import { Container } from "@/components/ui/Container";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-warm">
      <div
        className="pointer-events-none absolute -right-16 top-0 h-56 w-56 rounded-full bg-saffron/10 blur-3xl"
        aria-hidden
      />
      <Container className="py-10 sm:py-14 lg:py-16">
        {eyebrow ? (
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-saffron-deep sm:text-xs">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-3xl font-display text-3xl font-bold leading-tight text-navy sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:mt-4 sm:text-base md:text-lg">
            {description}
          </p>
        ) : null}
        <div className="mt-6 h-px w-16 bg-saffron" aria-hidden />
      </Container>
    </section>
  );
}
