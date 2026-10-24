export type NewsCategory = "News" | "Public Engagement" | "Statements" | "Events";

export type NewsArticle = {
  slug: string;
  title: string;
  summary: string;
  category: NewsCategory;
  publishedAt: string;
  image: string;
  imageAlt: string;
  body: string[];
  isSample: boolean;
  sourceLabel?: string;
};

/**
 * Until an official CMS or verified press feed is connected, articles are
 * clearly labelled sample content for layout demonstration only.
 */
export const newsArticles: NewsArticle[] = [
  {
    slug: "sample-assembly-session-update",
    title: "Sample: Assembly session briefing format",
    summary:
      "This card demonstrates how verified legislative or constituency updates will appear once connected to an official feed.",
    category: "News",
    publishedAt: "2026-10-01",
    image: "/images/atmosphere/india-1.jpg",
    imageAlt: "Thematic image representing public institutions",
    body: [
      "This is sample content prepared for development and design review. It is not a real news report.",
      "When verified statements or press notes are available from official channels, they can replace this placeholder without changing the page layout.",
    ],
    isSample: true,
  },
  {
    slug: "sample-public-engagement-visit",
    title: "Sample: Public engagement visit template",
    summary:
      "Illustrative layout for community meetings and constituency interactions, pending verified event material.",
    category: "Public Engagement",
    publishedAt: "2026-09-18",
    image: "/images/atmosphere/community.jpg",
    imageAlt: "Thematic image representing community engagement",
    body: [
      "Sample article body for design and accessibility testing only.",
      "Do not treat this text as an official announcement or record of events.",
    ],
    isSample: true,
  },
  {
    slug: "sample-statement-on-development",
    title: "Sample: Statement page structure",
    summary:
      "Placeholder for published statements on development and public policy themes.",
    category: "Statements",
    publishedAt: "2026-08-22",
    image: "/images/atmosphere/policy.jpg",
    imageAlt: "Thematic image representing policy discussion",
    body: [
      "This sample demonstrates typography, metadata, and reading width for statement pages.",
      "Replace with authenticated content from official communications when available.",
    ],
    isSample: true,
  },
  {
    slug: "sample-constituency-event",
    title: "Sample: Constituency event announcement",
    summary:
      "Example event card for programmes and public meetings once dates and details are confirmed.",
    category: "Events",
    publishedAt: "2026-07-10",
    image: "/images/atmosphere/youth.jpg",
    imageAlt: "Thematic image representing youth and civic events",
    body: [
      "Event details will be published here after confirmation from authorised sources.",
      "This sample exists only to validate the news listing and detail templates.",
    ],
    isSample: true,
  },
];

export function getArticleBySlug(slug: string) {
  return newsArticles.find((article) => article.slug === slug);
}

export function getLatestArticles(limit = 3) {
  return [...newsArticles]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, limit);
}
