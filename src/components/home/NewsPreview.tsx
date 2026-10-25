"use client";

import { getLatestArticles } from "@/data/news";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NewsCard } from "@/components/news/NewsCard";
import { FadeInUp, Stagger, StaggerItem } from "@/components/animations/Motion";

export function NewsPreview() {
  const articles = getLatestArticles(3);

  return (
    <section className="border-t border-border/80 bg-[linear-gradient(180deg,#FFF9F3_0%,#FFFFFF_100%)] py-14 sm:py-20 lg:py-28">
      <Container>
        <FadeInUp className="mb-10 flex flex-col gap-5 sm:mb-14 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <SectionHeading
            eyebrow="News & Updates"
            title="Latest updates"
            description="Sample layout cards until verified articles are connected from an official feed or CMS."
          />
          <Button href="/news" variant="secondary" className="shrink-0 self-start sm:self-auto">
            View All Updates
          </Button>
        </FadeInUp>
        <Stagger className="grid gap-5 sm:gap-6 md:grid-cols-3 md:gap-7">
          {articles.map((article) => (
            <StaggerItem key={article.slug}>
              <div className="h-full transition duration-300 hover:-translate-y-1">
                <NewsCard article={article} />
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
