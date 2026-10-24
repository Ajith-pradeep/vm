"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import {
  fadeInUp,
  imageReveal,
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
