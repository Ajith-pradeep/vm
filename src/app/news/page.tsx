import type { Metadata } from "next";
import { newsArticles } from "@/data/news";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { NewsCard } from "@/components/news/NewsCard";

export const metadata: Metadata = {
  title: "News & Updates",
  description:
    "Latest updates and public communications related to V. Muraleedharan. Sample cards are clearly labelled until a verified feed is connected.",
};

export default function NewsPage() {
  const sorted = [...newsArticles].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  );

  return (
    <>
      <PageHero
        eyebrow="Updates"
        title="News & Updates"
        description="This listing is structured for a future CMS or official news feed. Until then, sample articles are shown for layout and accessibility review."
      />
      <Container className="py-14">
        {sorted.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border bg-warm px-6 py-16 text-center">
            <p className="font-display text-2xl text-navy">No updates yet</p>
            <p className="mt-2 text-sm text-muted">
              Verified articles will appear here when available.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sorted.map((article) => (
              <NewsCard key={article.slug} article={article} />
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
