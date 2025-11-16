import NewsCard from "./NewsCard";
import { FeedSource } from "@/utils/rss";

export default function FeedSection({ feed }: { feed: FeedSource }) {
  return (
    <section className="pb-8 border-b border-zinc-200 last:border-b-0">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            {feed.source}
          </h2>
          {feed.description && (
            <p className="text-sm text-zinc-500 mt-1">
              {feed.description}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {feed.items.map((item, index) => (
          <NewsCard key={index} item={item} source={feed.source} />
        ))}
      </div>
    </section>
  );
}
