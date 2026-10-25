"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import {
  clipReveal,
  fadeIn,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  imageReveal,
  scaleIn,
  springSoft,
  staggerContainer,
  viewportOnce,
} from "@/components/animations/variants";

type MotionProps = HTMLMotionProps<"div"> & {
  children: React.ReactNode;
};

export function FadeInUp({ children, className, ...props }: MotionProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={reduce ? undefined : fadeInUp}
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "visible"}
      viewport={viewportOnce}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({ children, className, ...props }: MotionProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={reduce ? undefined : fadeIn}
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "visible"}
      viewport={viewportOnce}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeInLeft({ children, className, ...props }: MotionProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={reduce ? undefined : fadeInLeft}
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "visible"}
      viewport={viewportOnce}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeInRight({ children, className, ...props }: MotionProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={reduce ? undefined : fadeInRight}
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "visible"}
      viewport={viewportOnce}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({ children, className, ...props }: MotionProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={reduce ? undefined : scaleIn}
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "visible"}
      viewport={viewportOnce}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ children, className }: MotionProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={reduce ? undefined : staggerContainer}
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "visible"}
      viewport={viewportOnce}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: MotionProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div className={className} variants={reduce ? undefined : fadeInUp}>
      {children}
    </motion.div>
  );
}

export function ImageReveal({ children, className }: MotionProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={reduce ? undefined : imageReveal}
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "visible"}
      viewport={viewportOnce}
    >
      {children}
    </motion.div>
  );
}

export function ClipReveal({ children, className }: MotionProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={reduce ? undefined : clipReveal}
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "visible"}
      viewport={viewportOnce}
    >
      {children}
    </motion.div>
  );
}

export function HoverLift({
  children,
  className,
  lift = 8,
}: MotionProps & { lift?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      whileHover={reduce ? undefined : { y: -lift, transition: springSoft }}
      whileTap={reduce ? undefined : { scale: 0.985 }}
    >
      {children}
    </motion.div>
  );
}
