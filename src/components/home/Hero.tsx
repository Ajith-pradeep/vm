"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { fadeInUp, staggerContainer } from "@/components/animations/variants";
import { biography } from "@/data/biography";
import { siteConfig } from "@/data/site";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[#FFF8F0] lg:min-h-[calc(100svh-4.25rem)]">
      {/* Static atmosphere — no scroll-linked motion for stability */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <Image
          src="/images/atmosphere/event-panel.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%] opacity-[0.55] sm:opacity-[0.62]"
        />
        <div className="absolute inset-0 bg-[#FFF8F0]/40" />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(255,248,240,0.72)_0%,rgba(255,248,240,0.35)_40%,rgba(255,248,240,0.18)_70%,rgba(255,248,240,0.4)_100%)]" />
      </div>

      {/* Desktop portrait — single fade-in */}
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
        className="pointer-events-none absolute inset-y-0 right-0 z-[1] hidden w-[min(62vw,820px)] lg:block"
      >
        <div
          className="absolute inset-0"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.35) 18%, rgba(0,0,0,0.85) 38%, black 55%)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.35) 18%, rgba(0,0,0,0.85) 38%, black 55%)",
          }}
        >
          <Image
            src="/images/portrait/portrait-cutout.png"
            alt=""
            fill
            priority
            sizes="62vw"
            className="object-contain object-right-bottom scale-[1.08] origin-bottom-right"
          />
        </div>
      </motion.div>

      <Container className="relative z-10 flex flex-col justify-center py-8 sm:py-12 lg:min-h-[calc(100svh-4.25rem)] lg:py-14">
        <motion.div
          variants={reduce ? undefined : staggerContainer}
          initial={reduce ? false : "hidden"}
          animate={reduce ? undefined : "visible"}
          className="relative z-10 w-full max-w-2xl lg:max-w-[36rem] xl:max-w-[42rem]"
        >
          <div
            className="pointer-events-none absolute -inset-x-3 -inset-y-4 -z-10 rounded-[1.5rem] bg-[radial-gradient(ellipse_at_left,rgba(255,248,240,0.94)_0%,rgba(255,248,240,0.6)_50%,transparent_78%)] sm:-inset-x-6 sm:-inset-y-8 sm:rounded-[2rem]"
            aria-hidden
          />

          <motion.p
            variants={fadeInUp}
            className="mb-4 inline-flex max-w-full flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-saffron-deep sm:mb-5 sm:gap-2.5 sm:text-xs sm:tracking-[0.28em]"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-saffron" aria-hidden />
            <span className="leading-relaxed">
              {siteConfig.partyAffiliation} · Kerala
            </span>
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            className="font-display text-[2.35rem] font-bold leading-[1.08] tracking-[-0.03em] text-navy sm:text-5xl sm:leading-[1.02] md:text-6xl lg:text-[4.5rem] lg:leading-[1.02] xl:text-[5rem] xl:whitespace-nowrap"
          >
            {siteConfig.name}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-3 font-display text-lg font-bold leading-snug text-navy/85 sm:mt-4 sm:text-2xl lg:text-[1.65rem]"
          >
            {biography.currentRole.title}
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="mt-4 max-w-lg text-[0.95rem] leading-[1.7] text-muted sm:mt-5 sm:text-lg lg:text-xl"
          >
            Senior BJP leader from Kerala — organisational leadership,
            parliamentary service, and public engagement rooted in the state.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <Button
              href="/journey"
              className="w-full min-w-0 gap-2 shadow-[0_12px_32px_rgba(242,140,40,0.35)] sm:w-auto sm:min-w-[11rem]"
            >
              Explore His Journey
              <ArrowRight size={16} aria-hidden />
            </Button>
            <Button
              href="/news"
              variant="secondary"
              className="w-full min-w-0 sm:w-auto sm:min-w-[9.5rem]"
            >
              Latest Updates
            </Button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-8 flex items-start gap-3 text-sm text-navy/70 sm:mt-10 sm:items-center"
          >
            <span className="mt-2 h-px w-8 shrink-0 bg-saffron sm:mt-0 sm:w-10" aria-hidden />
            <span className="leading-snug">
              {biography.currentRole.constituency} constituency · since{" "}
              {biography.currentRole.since}
            </span>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
