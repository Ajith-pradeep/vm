export type FocusArea = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href?: string;
};

/**
 * Thematic focus areas for public engagement.
 * These are category descriptions, not claims of specific project outcomes.
 */
export const focusAreas: FocusArea[] = [
  {
    id: "kerala-development",
    title: "Kerala's Development",
    description:
      "Engagement with questions of infrastructure, livelihood, and balanced growth across Kerala’s districts and communities.",
    image: "/images/atmosphere/kerala-1.jpg",
    imageAlt: "Landscape view associated with Kerala’s geography and development context",
    href: "/initiatives#kerala-development",
  },
  {
    id: "youth-education",
    title: "Youth & Education",
    description:
      "A long association with student and youth organisations informs continuing interest in education, skill-building, and civic participation.",
    image: "/images/atmosphere/youth.jpg",
    imageAlt: "Young people collaborating in an educational setting",
    href: "/initiatives#youth-education",
  },
  {
    id: "employment-skills",
    title: "Employment & Skills",
    description:
      "Public conversations on employment pathways, entrepreneurship, and skill development for Kerala’s workforce.",
    image: "/images/atmosphere/policy.jpg",
    imageAlt: "Professional workspace representing skills and employment themes",
    href: "/initiatives#employment-skills",
  },
  {
    id: "infrastructure",
    title: "Infrastructure & Connectivity",
    description:
      "Attention to transport, digital connectivity, and public infrastructure that support everyday life and economic opportunity.",
    image: "/images/atmosphere/india-1.jpg",
    imageAlt: "Architectural landmark representing national infrastructure and connectivity",
    href: "/initiatives#infrastructure",
  },
  {
    id: "public-outreach",
    title: "Public Outreach",
    description:
      "Community visits, public meetings, and constituent engagement as part of representative public life.",
    image: "/images/atmosphere/community.jpg",
    imageAlt: "Community gathering representing public outreach",
    href: "/initiatives#public-outreach",
  },
  {
    id: "national-policy",
    title: "National Development & Policy",
    description:
      "Experience in parliamentary and ministerial roles informs engagement with national policy, diplomacy, and legislative processes.",
    image: "/images/atmosphere/policy.jpg",
    imageAlt: "Documents and planning materials representing public policy work",
    href: "/initiatives#national-policy",
  },
];
