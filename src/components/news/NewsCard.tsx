import Image from "next/image";
import Link from "next/link";
import type { NewsArticle } from "@/data/news";
import { formatDate } from "@/lib/utils";

export function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-white transition hover:border-saffron/40 hover:shadow-[0_16px_36px_rgba(23,43,77,0.08)]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        {article.isSample ? (
          <span className="absolute left-3 top-3 rounded bg-navy/85 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
            Sample
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3 text-xs text-muted">
          <span className="font-semibold uppercase tracking-[0.14em] text-saffron-deep">
            {article.category}
          </span>
          <span aria-hidden>·</span>
          <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
        </div>
        <h3 className="mt-3 font-display text-2xl leading-snug text-navy">
          <Link href={`/news/${article.slug}`} className="hover:text-saffron-deep">
            {article.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{article.summary}</p>
        <Link
          href={`/news/${article.slug}`}
          className="mt-4 text-sm font-semibold text-saffron-deep hover:text-navy"
        >
          Read More →
        </Link>
      </div>
    </article>
  );
}
