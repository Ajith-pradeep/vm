import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy practices for the informational website of ${siteConfig.name}.`,
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How this informational website handles contact form submissions and basic usage data."
      />
      <Container className="max-w-3xl space-y-8 py-14 text-base leading-relaxed text-muted">
        <section>
          <h2 className="font-display text-2xl text-navy">Overview</h2>
          <p className="mt-3">
            This website provides public information about {siteConfig.name}. It does not sell
            personal data. Contact form submissions are processed only to respond to enquiries.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-navy">Information you provide</h2>
          <p className="mt-3">
            When you use the contact form, we collect your name, email address, subject, and
            message. A honeypot field may be used to reduce automated spam.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-navy">Delivery & retention</h2>
          <p className="mt-3">
            In development mode, validated messages may be acknowledged without email delivery. In
            production, messages are forwarded only when a configured webhook or mail service is
            available. Retain submissions only as long as needed to respond.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-navy">Cookies & analytics</h2>
          <p className="mt-3">
            Essential technical cookies may be used by the hosting platform. Any analytics tools
            added later should be disclosed here with an opt-out where required.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-navy">Contact</h2>
          <p className="mt-3">
            For privacy-related questions, use the{" "}
            <a href="/contact" className="font-medium text-saffron-deep hover:text-navy">
              contact form
            </a>
            .
          </p>
        </section>
      </Container>
    </>
  );
}
