import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeInUp } from "@/components/animations/Motion";

export function ConnectCta() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <FadeInUp className="relative overflow-hidden rounded-2xl border border-border bg-navy px-6 py-12 text-center sm:px-12">
          <div
            className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-saffron/20 blur-3xl"
            aria-hidden
          />
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-saffron">
            Public engagement
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl text-white sm:text-4xl">
            Stay Connected. Stay Informed.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
            Share a message through the contact form, or follow verified public channels for
            updates from Kerala and beyond.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact">Connect with Us</Button>
            <Button href="/gallery" variant="secondary">
              View Gallery
            </Button>
          </div>
        </FadeInUp>
      </Container>
    </section>
  );
}
