import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-saffron-deep",
            align === "center" && "mx-auto",
          )}
        >
          <span className="h-1 w-1 rounded-full bg-saffron" aria-hidden />
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.025em] text-navy sm:text-4xl md:text-[3.15rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{description}</p>
      ) : null}
      <div
        className={cn(
          "mt-6 h-0.5 w-14 rounded-full bg-gradient-to-r from-saffron to-saffron/30",
          align === "center" && "mx-auto",
        )}
        aria-hidden
      />
    </div>
  );
}
