"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { fadeInUp, staggerContainer } from "@/components/animations/variants";

export function ConnectCta() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-white py-14 sm:py-20 lg:py-28">
      <Container>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative overflow-hidden rounded-[1.5rem] bg-navy px-6 py-14 text-center sm:rounded-[1.85rem] sm:px-12 sm:py-16"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -left-16 top-0 h-56 w-56 rounded-full bg-saffron/25 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-12 bottom-0 h-48 w-48 rounded-full bg-saffron/15 blur-3xl"
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "26px 26px",
            }}
            aria-hidden
          />

          <motion.div
            variants={reduce ? undefined : staggerContainer}
            initial={reduce ? false : "hidden"}
            whileInView={reduce ? undefined : "visible"}
            viewport={{ once: true, amount: 0.35 }}
            className="relative z-10"
          >
            <motion.p
              variants={fadeInUp}
              className="text-xs font-semibold uppercase tracking-[0.22em] text-saffron"
            >
              Public engagement
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="mx-auto mt-3 max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl md:text-[2.85rem]"
            >
              Stay Connected. Stay Informed.
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base"
            >
              Share a message through the contact form, or follow verified public
              channels for updates from Kerala and beyond.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <Button href="/contact" className="shadow-[0_14px_36px_rgba(242,140,40,0.35)]">
                Connect with Us
              </Button>
              <Button
                href="/gallery"
                variant="secondary"
                className="border-white/25 bg-white/10 text-white hover:border-saffron hover:bg-white hover:text-navy"
              >
                View Gallery
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
