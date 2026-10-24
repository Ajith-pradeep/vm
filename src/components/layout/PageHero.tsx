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
      <Container className="py-14 sm:py-16">
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-saffron-deep">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-3xl font-display text-4xl leading-tight text-navy sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {description}
          </p>
        ) : null}
        <div className="mt-6 h-px w-16 bg-saffron" aria-hidden />
      </Container>
    </section>
  );
}
