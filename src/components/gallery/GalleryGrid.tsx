"use client";

import Image from "next/image";
import { galleryItems, type GalleryItem } from "@/data/gallery";
import { Stagger, StaggerItem } from "@/components/animations/Motion";

export function GalleryGrid({ items = galleryItems }: { items?: GalleryItem[] }) {
  return (
    <Stagger className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
      {items.map((item) => (
        <StaggerItem key={item.id}>
          <figure className="overflow-hidden rounded-lg border border-border bg-white">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/65 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-2.5 sm:p-3">
                <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-saffron">
                  {item.category}
                  {item.isPlaceholder ? " · Thematic" : ""}
                </p>
                <p className="mt-0.5 font-display text-sm text-white sm:text-base">
                  {item.title}
                </p>
              </figcaption>
            </div>
          </figure>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
