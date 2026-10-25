"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-border/80 bg-white/95 shadow-[0_8px_30px_rgba(23,43,77,0.06)] backdrop-blur-md"
          : "border-transparent bg-white",
      )}
    >
      <div className="mx-auto grid h-16 max-w-6xl grid-cols-[1fr_auto] items-center gap-3 px-4 sm:h-[4.25rem] sm:px-6 lg:grid-cols-[auto_1fr_auto] lg:gap-6 lg:px-8">
        <Link
          href="/"
          className="group min-w-0 shrink-0 leading-none"
          aria-label={`${siteConfig.name} home`}
          onClick={closeMenu}
        >
          <span className="font-display block truncate text-lg font-bold tracking-[0.04em] text-navy sm:text-xl lg:text-[1.35rem]">
            {siteConfig.shortName}
          </span>
          <span className="mt-0.5 hidden text-[9px] font-medium uppercase tracking-[0.18em] text-muted transition-colors group-hover:text-saffron-deep sm:block sm:text-[10px]">
            Public Service · Kerala
          </span>
        </Link>

        <nav
          className="hidden items-center justify-center gap-0.5 lg:flex xl:gap-1"
          aria-label="Primary"
        >
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "whitespace-nowrap rounded-md px-2.5 py-2 text-[13px] font-medium transition-colors xl:px-3 xl:text-sm",
                  active
                    ? "text-saffron-deep"
                    : "text-navy/80 hover:text-saffron-deep",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center justify-end gap-2 sm:gap-3">
          <Button
            href="/contact"
            className="hidden px-3.5 py-2 text-xs lg:inline-flex"
          >
            Connect with Us
          </Button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-navy lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-white lg:hidden"
          >
            <nav
              className="mx-auto flex max-w-6xl flex-col gap-0.5 px-4 py-3 sm:px-6"
              aria-label="Mobile"
            >
              {navLinks.map((link) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={cn(
                      "rounded-md px-3 py-3 text-base font-medium",
                      active ? "bg-warm text-saffron-deep" : "text-navy",
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div onClick={closeMenu} className="pt-2">
                <Button href="/contact" className="w-full">
                  Connect with Us
                </Button>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
