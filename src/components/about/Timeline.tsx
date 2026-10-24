"use client";

import { timeline, type TimelineEntry } from "@/data/timeline";
import { FadeInUp, Stagger, StaggerItem } from "@/components/animations/Motion";
import { cn } from "@/lib/utils";

export function Timeline({
  entries = timeline,
  compact = false,
}: {
  entries?: TimelineEntry[];
  compact?: boolean;
}) {
  const items = compact ? entries.slice(-5) : entries;

  return (
    <div className="relative">
      <div
        className="absolute bottom-2 left-[0.7rem] top-2 w-px bg-border sm:left-1/2 sm:-translate-x-px"
        aria-hidden
      />
      <Stagger className="space-y-8">
        {items.map((entry, index) => {
          const isLeft = index % 2 === 0;
          return (
            <StaggerItem key={entry.id} className="relative">
              <div
                className={cn(
                  "grid gap-4 sm:grid-cols-2 sm:gap-10",
                  !isLeft && "sm:[&>*:first-child]:order-2",
                )}
              >
                <div
                  className={cn(
                    "pl-10 sm:pl-0",
                    isLeft ? "sm:pr-12 sm:text-right" : "sm:pl-12",
                  )}
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-saffron-deep">
                    {entry.year}
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-navy">{entry.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                    {entry.description}
                  </p>
                  {entry.sourceNote ? (
                    <p className="mt-2 text-xs text-muted/80">Source note: {entry.sourceNote}</p>
                  ) : null}
                </div>
                <div className="hidden sm:block" />
              </div>
              <span
                className="absolute left-[0.45rem] top-2 h-3.5 w-3.5 rounded-full border-2 border-white bg-saffron shadow-[0_0_0_3px_rgba(242,140,40,0.2)] sm:left-1/2 sm:-translate-x-1/2"
                aria-hidden
              />
            </StaggerItem>
          );
        })}
      </Stagger>
      {compact ? (
        <FadeInUp className="mt-10 text-center">
          <a
            href="/journey"
            className="text-sm font-semibold text-saffron-deep transition hover:text-navy"
          >
            View complete political journey →
          </a>
        </FadeInUp>
      ) : null}
    </div>
  );
}
