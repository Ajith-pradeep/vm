import type { MetadataRoute } from "next";
import { newsArticles } from "@/data/news";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const staticRoutes = [
    "",
    "/about",
    "/journey",
    "/initiatives",
    "/news",
    "/gallery",
    "/contact",
    "/privacy",
  ].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const newsRoutes = newsArticles.map((article) => ({
    url: `${base}/news/${article.slug}`,
    lastModified: article.publishedAt,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...newsRoutes];
}
