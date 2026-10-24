import { getLatestArticles } from "@/data/news";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NewsCard } from "@/components/news/NewsCard";
import { FadeInUp, Stagger, StaggerItem } from "@/components/animations/Motion";

export function NewsPreview() {
  const articles = getLatestArticles(3);

  return (
    <section className="border-t border-border bg-warm py-16 sm:py-20">
      <Container>
        <FadeInUp className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="News & Updates"
            title="Latest updates"
            description="Sample layout cards until verified articles are connected from an official feed or CMS."
          />
          <Button href="/news" variant="secondary" className="shrink-0">
            View All Updates
          </Button>
        </FadeInUp>
        <Stagger className="grid gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <StaggerItem key={article.slug}>
              <NewsCard article={article} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
