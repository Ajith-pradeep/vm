"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeInUp, staggerFast, viewportOnce } from "@/components/animations/variants";
import { cn } from "@/lib/utils";

type TextRevealProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  mode?: "chars" | "words";
  delay?: number;
  once?: boolean;
  onMount?: boolean;
};

/** Simple fade-up for headings — stable, professional, no letter splitting */
export function TextReveal({
  text,
  as: Tag = "p",
  className,
  delay = 0,
  once = true,
  onMount = false,
}: TextRevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[Tag];

  if (reduce) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <MotionTag
      className={cn(className)}
      initial={{ opacity: 0, y: 14 }}
      {...(onMount
        ? { animate: { opacity: 1, y: 0 } }
        : {
            whileInView: { opacity: 1, y: 0 },
            viewport: once ? viewportOnce : { amount: 0.2 },
          })}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {text}
    </MotionTag>
  );
}

export function BlurFade({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 14 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerWords({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={reduce ? undefined : staggerFast}
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "visible"}
      viewport={viewportOnce}
    >
      {children}
    </motion.div>
  );
}

export function FadeLine({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={reduce ? undefined : fadeInUp}
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "visible"}
      viewport={viewportOnce}
    >
      {children}
    </motion.div>
  );
}
