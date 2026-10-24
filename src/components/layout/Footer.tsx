import Link from "next/link";
import { Globe } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { IconFacebook, IconX } from "@/components/ui/SocialIcons";
import { CopyrightYear } from "@/components/layout/CopyrightYear";

export function Footer() {
  return (
    <footer className="relative z-10 mt-auto border-t border-border bg-warm">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-semibold tracking-wide text-navy">
              {siteConfig.shortName}
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              An informational website presenting the public journey and work of{" "}
              {siteConfig.name}, a senior leader of the Bharatiya Janata Party
              from Kerala. Content is limited to verified public information.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={siteConfig.social.x}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-white text-navy transition hover:border-saffron hover:text-saffron-deep"
                aria-label="X (Twitter) profile"
              >
                <IconX size={18} />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-white text-navy transition hover:border-saffron hover:text-saffron-deep"
                aria-label="Facebook profile"
              >
                <IconFacebook size={18} />
              </a>
              <a
                href={siteConfig.social.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-white text-navy transition hover:border-saffron hover:text-saffron-deep"
                aria-label="Official website"
              >
                <Globe size={18} />
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-saffron-deep">
              Quick links
            </p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy/80 transition hover:text-saffron-deep"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-saffron-deep">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {siteConfig.contact.phone ? (
                <li>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-navy hover:text-saffron-deep"
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                  <p className="mt-1 text-xs">
                    Source: {siteConfig.contact.phoneSource}
                  </p>
                </li>
              ) : null}
              <li>
                <Link href="/contact" className="text-navy hover:text-saffron-deep">
                  Write via the contact form
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-navy hover:text-saffron-deep">
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border/80 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CopyrightYear /> {siteConfig.name}. All rights reserved.
          </p>
          <p className="max-w-xl sm:text-right">{siteConfig.attribution.portrait}</p>
        </div>
      </Container>
    </footer>
  );
}
