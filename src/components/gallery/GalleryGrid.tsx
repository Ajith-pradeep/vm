"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { galleryItems, type GalleryItem } from "@/data/gallery";
import { Stagger, StaggerItem } from "@/components/animations/Motion";

export function GalleryGrid({ items = galleryItems }: { items?: GalleryItem[] }) {
  const [active, setActive] = useState<number | null>(null);
  const reduce = useReducedMotion();

  const close = useCallback(() => setActive(null), []);
  const showPrev = useCallback(() => {
    setActive((current) =>
      current === null ? current : (current - 1 + items.length) % items.length,
    );
  }, [items.length]);
  const showNext = useCallback(() => {
    setActive((current) => (current === null ? current : (current + 1) % items.length));
  }, [items.length]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, showNext, showPrev]);

  const current = active !== null ? items[active] : null;

  return (
    <>
      <Stagger className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {items.map((item, index) => (
          <StaggerItem key={item.id} className="mb-4 break-inside-avoid">
            <button
              type="button"
              onClick={() => setActive(index)}
              className="group relative w-full overflow-hidden rounded-xl border border-border bg-white text-left focus-visible:outline-none"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-saffron">
                    {item.category}
                    {item.isPlaceholder ? " · Thematic" : ""}
                  </p>
                  <p className="mt-1 font-display text-lg text-white">{item.title}</p>
                </div>
              </div>
            </button>
          </StaggerItem>
        ))}
      </Stagger>

      <AnimatePresence>
        {current ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-navy/85 p-4 backdrop-blur-sm"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={current.title}
            onClick={close}
          >
            <motion.div
              className="relative w-full max-w-4xl overflow-hidden rounded-xl bg-white"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: 16 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative aspect-[16/11] bg-warm">
                <Image
                  src={current.image}
                  alt={current.imageAlt}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-2 border-t border-border p-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-display text-xl text-navy">{current.title}</p>
                  <p className="text-xs text-muted">{current.credit}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={showPrev}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-navy hover:border-saffron"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-navy hover:border-saffron"
                    aria-label="Next image"
                  >
                    <ChevronRight size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={close}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-navy hover:border-saffron"
                    aria-label="Close lightbox"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
