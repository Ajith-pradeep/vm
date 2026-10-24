import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleBySlug, newsArticles } from "@/data/news";
import { Container } from "@/components/ui/Container";
import { formatDate } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article not found" };
  return {
    title: article.title,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      images: [article.image],
      type: "article",
    },
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <article>
      <div className="border-b border-border bg-warm">
        <Container className="py-12 sm:py-14">
          <Link
            href="/news"
            className="text-sm font-semibold text-saffron-deep hover:text-navy"
          >
            ← All updates
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-muted">
            <span className="font-semibold uppercase tracking-[0.14em] text-saffron-deep">
              {article.category}
            </span>
            <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
            {article.isSample ? (
              <span className="rounded bg-navy px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                Sample content
              </span>
            ) : null}
          </div>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-navy sm:text-5xl">
            {article.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">{article.summary}</p>
        </Container>
      </div>

      <Container className="grid gap-10 py-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="relative mb-8 aspect-[16/10] overflow-hidden rounded-xl border border-border">
            <Image
              src={article.image}
              alt={article.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
          </div>
          <div className="max-w-2xl space-y-5 text-base leading-relaxed text-muted">
            {article.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <aside className="h-fit rounded-xl border border-border bg-warm p-5 text-sm text-muted">
          <p className="font-semibold text-navy">About this page</p>
          <p className="mt-2 leading-relaxed">
            {article.isSample
              ? "This article is sample content for development. It is not an official statement or news report."
              : "Content on this page is drawn from verified public communications."}
          </p>
        </aside>
      </Container>
    </article>
  );
}
