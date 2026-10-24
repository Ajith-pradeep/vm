import type { Metadata } from "next";
import { Globe, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { IconFacebook, IconX } from "@/components/ui/SocialIcons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Connect with the office of V. Muraleedharan through the contact form and verified public channels.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Connect"
        title="Stay Connected. Stay Informed."
        description="Use the form below to send a message. Only verified contact channels are listed on this page."
      />
      <Container className="grid gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-xl border border-border bg-white p-6 sm:p-8">
          <h2 className="font-display text-3xl text-navy">Send a message</h2>
          <p className="mt-2 text-sm text-muted">
            Client- and server-side validation are enabled. Delivery to email requires configuring{" "}
            <code className="rounded bg-warm px-1.5 py-0.5 text-xs">CONTACT_WEBHOOK_URL</code>{" "}
            for production.
          </p>
          <div className="relative mt-8">
            <ContactForm />
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-xl border border-border bg-warm p-6">
            <h2 className="font-display text-2xl text-navy">Verified channels</h2>
            <ul className="mt-5 space-y-4 text-sm">
              {siteConfig.contact.phone ? (
                <li className="flex gap-3">
                  <Phone className="mt-0.5 shrink-0 text-saffron-deep" size={18} />
                  <div>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="font-medium text-navy hover:text-saffron-deep"
                    >
                      {siteConfig.contact.phoneDisplay}
                    </a>
                    <p className="mt-1 text-xs text-muted">
                      Listed on the Kerala Legislative Assembly member profile.
                    </p>
                  </div>
                </li>
              ) : null}
              <li className="flex gap-3">
                <IconX className="mt-0.5 shrink-0 text-saffron-deep" size={18} />
                <a
                  href={siteConfig.social.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-navy hover:text-saffron-deep"
                >
                  @{siteConfig.social.x.replace("https://x.com/", "")}
                </a>
              </li>
              <li className="flex gap-3">
                <IconFacebook className="mt-0.5 shrink-0 text-saffron-deep" size={18} />
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-navy hover:text-saffron-deep"
                >
                  Facebook profile
                </a>
              </li>
              <li className="flex gap-3">
                <Globe className="mt-0.5 shrink-0 text-saffron-deep" size={18} />
                <a
                  href={siteConfig.social.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-navy hover:text-saffron-deep"
                >
                  vmuraleedharan.com
                </a>
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-dashed border-border p-6 text-sm text-muted">
            Official email and office address will be published here only after confirmation from
            authorised sources.
          </div>
        </aside>
      </Container>
    </>
  );
}
