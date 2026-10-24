import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-start py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-saffron-deep">
        404
      </p>
      <h1 className="mt-3 font-display text-4xl text-navy">Page not found</h1>
      <p className="mt-3 max-w-md text-muted">
        The page you requested is unavailable. Return home or browse the latest updates.
      </p>
      <div className="mt-8 flex gap-3">
        <Button href="/">Home</Button>
        <Button href="/news" variant="secondary">
          News
        </Button>
      </div>
    </Container>
  );
}
