"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { fadeInUp, staggerContainer } from "@/components/animations/variants";
import { siteConfig } from "@/data/site";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate min-h-[calc(100svh-4.25rem)] overflow-hidden bg-[#FFFCFA]">
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden
      >
        <Image
          src="/images/brand/lotus-emblem.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-[0.04]"
        />
      </div>
      <div
        className="pointer-events-none absolute -right-10 -top-20 z-[1] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(242,140,40,0.18)_0%,rgba(242,140,40,0.06)_40%,transparent_72%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 top-0 z-[1] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(232,117,22,0.12)_0%,transparent_70%)]"
        aria-hidden
      />

      {/* Desktop: oversized cutout anchored to right + bottom */}
      <motion.div
        initial={reduce ? false : { opacity: 0, x: 36 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="pointer-events-none absolute bottom-0 right-0 top-0 z-[1] hidden w-[min(62vw,780px)] lg:block"
      >
        <Image
          src="/images/portrait/portrait-cutout.png"
          alt=""
          fill
          priority
          sizes="62vw"
          className="object-contain object-right-bottom scale-[1.12] origin-bottom-right"
        />
      </motion.div>

      <Container className="relative z-10 flex min-h-[calc(100svh-4.25rem)] flex-col justify-center py-10 max-lg:min-h-0 lg:py-12">
        <div className="grid items-center gap-8 lg:grid-cols-1">
          <motion.div
            variants={reduce ? undefined : staggerContainer}
            initial={reduce ? false : "hidden"}
            animate={reduce ? undefined : "visible"}
            className="relative z-10 w-full max-w-xl lg:max-w-[36rem] xl:max-w-[40rem]"
          >
            <motion.p
              variants={fadeInUp}
              className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-saffron-deep sm:text-xs"
            >
              {siteConfig.partyAffiliation} · Kerala
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="font-display text-[2.45rem] font-bold leading-[1.12] tracking-[-0.03em] text-navy sm:text-5xl lg:text-[3.4rem] lg:leading-[1.1]"
            >
              Dedicated to Public Service.
              <br className="hidden sm:block" />{" "}
              Committed to Kerala&apos;s Progress.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-md text-[0.95rem] leading-[1.7] text-muted sm:text-base lg:max-w-lg"
            >
              Explore the public journey, initiatives, and work of V.
              Muraleedharan, and stay connected with developments across Kerala
              and India.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Button href="/journey" className="min-w-[10.5rem]">
                Explore His Journey
              </Button>
              <Button href="/news" variant="secondary" className="min-w-[9.5rem]">
                Latest Updates
              </Button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-10 flex items-center gap-3 text-sm text-muted"
            >
              <span className="h-px w-10 shrink-0 bg-saffron" aria-hidden />
              <span>Member, Kerala Legislative Assembly · Kazhakootam</span>
            </motion.div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
