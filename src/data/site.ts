export const siteConfig = {
  name: "V. Muraleedharan",
  shortName: "V. MURALEEDHARAN",
  title: "V. Muraleedharan | Public Service & Leadership",
  description:
    "Official informational website on the public journey, initiatives, and work of V. Muraleedharan, Bharatiya Janata Party leader from Kerala.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.vmuraleedharan.com",
  locale: "en_IN",
  partyAffiliation: "Bharatiya Janata Party",
  tagline: "Dedicated to Public Service. Committed to Kerala's Progress.",
  social: {
    website: "https://www.vmuraleedharan.com",
    x: "https://x.com/VMBJP",
    facebook: "https://www.facebook.com/VMBJP",
  },
  contact: {
    // Listed on Kerala Legislative Assembly member profile (Niyamasabha).
    phone: "9946484942",
    phoneDisplay: "+91 99464 84942",
    phoneSource: "Kerala Legislative Assembly member profile",
    email: null as string | null,
    address: null as string | null,
  },
  attribution: {
    portrait:
      "Portraits supplied for this site. Additional archival portrait: Kiran Gopi, Wikimedia Commons, CC BY-SA 3.0. Atmospheric photographs: Unsplash (thematic context only).",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/journey", label: "Political Journey" },
  { href: "/initiatives", label: "Initiatives" },
  { href: "/news", label: "News & Updates" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;
