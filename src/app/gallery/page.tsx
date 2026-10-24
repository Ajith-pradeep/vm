import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photographs and thematic visuals related to V. Muraleedharan’s public life. Authentic portraits are credited; thematic images are clearly labelled.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Media"
        title="Photo Gallery"
        description="Authentic portraits are credited to their licence holders. Additional images are thematic placeholders until authorised event photography is supplied."
      />
      <Container className="py-14">
        <GalleryGrid />
        <p className="mt-10 text-sm text-muted">
          Video section: verified public videos can be embedded here when official links are
          available.
        </p>
      </Container>
    </>
  );
}
