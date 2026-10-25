export type FocusArea = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href?: string;
};

export type VisionItem = {
  id: string;
  title: string;
  description: string;
  sourceNote?: string;
};

/**
 * Public focus areas drawn from reported constituency work, campaign statements,
 * and ministerial record. Wording describes themes and stated priorities —
 * not unverified project completion claims.
 */
export const focusAreas: FocusArea[] = [
  {
    id: "constituency-infrastructure",
    title: "Constituency Infrastructure",
    description:
      "As MLA from Kazhakootam, public engagement has centred on local hardships such as waterlogging, drainage, roads, and street lighting — including reported visits to Mulluvila, Attipra, near Technopark, to assess residents’ concerns with authorities.",
    image: "/images/atmosphere/community.jpg",
    imageAlt: "Community setting representing constituency infrastructure work",
    href: "/initiatives#constituency-infrastructure",
  },
  {
    id: "drinking-water",
    title: "Drinking Water & Basic Amenities",
    description:
      "Publicly prioritised reliable piped drinking water for households, aligning local need with the spirit of national schemes such as Jal Jeevan Mission, alongside sanitation and everyday civic amenities.",
    image: "/images/atmosphere/kerala-1.jpg",
    imageAlt: "Kerala landscape representing water and civic amenity themes",
    href: "/initiatives#drinking-water",
  },
  {
    id: "technocity",
    title: "Technopark & Technocity",
    description:
      "Kazhakootam sits on India’s pioneering Technopark corridor. Stated priorities include stronger IT-area infrastructure and expanding Technopark into a fuller Technocity within the Thiruvananthapuram Corporation.",
    image: "/images/atmosphere/india-1.jpg",
    imageAlt: "Urban infrastructure representing the Technopark corridor",
    href: "/initiatives#technocity",
  },
  {
    id: "roads-connectivity",
    title: "Roads & Connectivity",
    description:
      "Emphasis on motorable roads and lasting upkeep in a constituency where voters have long cited poor road maintenance — connecting neighbourhoods, the IT corridor, and everyday mobility.",
    image: "/images/atmosphere/policy.jpg",
    imageAlt: "Planning materials representing roads and connectivity",
    href: "/initiatives#roads-connectivity",
  },
  {
    id: "youth-skills",
    title: "Youth, Skills & Opportunity",
    description:
      "A public life that began in student and youth organisation work continues to emphasise education, skills, and opportunity for young voters in an IT-linked, digitally connected constituency.",
    image: "/images/atmosphere/youth.jpg",
    imageAlt: "Young people collaborating in a learning setting",
    href: "/initiatives#youth-skills",
  },
  {
    id: "diaspora",
    title: "Diaspora & Overseas Keralites",
    description:
      "As Minister of State for External Affairs (2019–2024), he publicly identified diaspora welfare — including concerns of non-resident Keralites such as consular support and airfares — as a priority of his ministerial work.",
    image: "/images/atmosphere/india-1.jpg",
    imageAlt: "National context representing diaspora and overseas Indians",
    href: "/initiatives#diaspora",
  },
  {
    id: "performance-governance",
    title: "Politics of Performance",
    description:
      "Campaign messaging stressed time-bound grievance redressal and “politics of performance,” presenting governance delivery — not rhetoric alone — as the measure of public service in Kazhakootam.",
    image: "/images/atmosphere/policy.jpg",
    imageAlt: "Documents representing performance-led governance",
    href: "/initiatives#performance-governance",
  },
  {
    id: "national-service",
    title: "National & Parliamentary Service",
    description:
      "Prior roles as MoS for External Affairs and Parliamentary Affairs, and as a Rajya Sabha member, inform continuing engagement with diplomacy, legislation, and India’s development agenda.",
    image: "/images/atmosphere/community.jpg",
    imageAlt: "Public setting representing national and parliamentary service",
    href: "/initiatives#national-service",
  },
];

/**
 * Stated public visions associated with V. Muraleedharan’s campaign and
 * leadership messaging. Presented as articulated goals, not completed outcomes.
 */
export const visions: VisionItem[] = [
  {
    id: "viksit-kerala",
    title: "Developed Kerala, Viksit Bharat",
    description:
      "Positioning Kerala’s political change as a step toward a developed state on the path to Prime Minister Narendra Modi’s Viksit Bharat 2047 goal — framed as “Developed Kerala, Secure Kerala.”",
    sourceNote: "Public campaign remarks, 2026 Assembly election",
  },
  {
    id: "technocity-vision",
    title: "Technocity for Thiruvananthapuram",
    description:
      "A stated ambition to expand Technopark into a full Technocity within the Thiruvananthapuram Corporation — linking IT growth with better local infrastructure for residents and the tech community.",
    sourceNote: "Campaign blueprint for Kazhakootam, 2026",
  },
  {
    id: "water-for-every-home",
    title: "Water to Every Home",
    description:
      "A clear constituency priority: drinking water reaching every household, closing the gap between national scheme promises and local shortages reported by residents.",
    sourceNote: "Campaign statements on Jal Jeevan Mission delivery",
  },
  {
    id: "time-bound-delivery",
    title: "Time-bound Public Delivery",
    description:
      "A governance vision modelled on time-bound scheme delivery — addressing roads, drainage, sanitation, waste management, health, and education through measurable follow-through.",
    sourceNote: "ANI / Asianet Newsable campaign interview themes",
  },
  {
    id: "diaspora-care",
    title: "Care for the Malayali Diaspora",
    description:
      "From the External Affairs portfolio onward, a continuing vision of attentive support for overseas Indians, especially Keralites abroad facing consular and livelihood concerns.",
    sourceNote: "MoS External Affairs public statements, 2019 onwards",
  },
];
