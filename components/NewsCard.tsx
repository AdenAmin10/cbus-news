import Image from "next/image";
import Link from "next/link";
import { FeedItem } from "@/utils/rss";

type NewsCardProps = {
  item: FeedItem;
  source: string;
};

export default function NewsCard({ item, source }: NewsCardProps) {
  const internalHref = `/story/${item.slug}`;
  const published = item.publishedAt
    ? new Date(item.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })
    : null;

  return (
    <article className="group flex flex-col bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
      <Link href={internalHref} className="flex flex-col h-full">
        {item.imageUrl && (
          <div className="relative h-48 w-full">
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
            {published && (
              <span className="absolute top-3 left-3 text-[11px] uppercase tracking-[0.3em] bg-black/70 text-white px-3 py-1 rounded-full">
                {published}
              </span>
            )}
          </div>
        )}
        <div className="flex-1 px-5 py-5 space-y-3">
          <p className="text-xs uppercase tracking-[0.4em] text-red-500">{source}</p>
          <h3 className="text-lg font-semibold leading-snug group-hover:text-red-600 transition line-clamp-2">
            {item.title}
          </h3>
          <p className="text-sm text-zinc-600 line-clamp-3">
            {item.contentSnippet?.slice(0, 220) || "Tap to read the full update."}
          </p>
          <div className="flex items-center justify-between text-xs text-zinc-500">
            <span>By {item.editor ?? "CityLine Sports Desk"}</span>
            {published && <span>{published}</span>}
          </div>
          <span className="inline-flex items-center text-xs font-semibold text-black group-hover:text-red-600">
            Read more <span className="ml-1" aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
