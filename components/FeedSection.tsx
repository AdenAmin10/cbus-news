import Link from "next/link";
import NewsCard from "./NewsCard";
import { FeedSource } from "@/utils/rss";

const sectionLinks: Record<string, string> = {
  "Ohio State": "/osu",
  "High School": "/highschool",
  "Columbus Crew": "/crew",
  "Columbus Blue Jackets": "/cbj",
};

export default function FeedSection({ feed }: { feed: FeedSource }) {
  return (
    <section className="bg-white/90 border border-zinc-200 rounded-3xl shadow-sm px-6 md:px-10 py-8 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-red-500">{feed.source}</p>
          <h2 className="text-3xl font-black tracking-tight text-zinc-900 mt-1">{feed.source}</h2>
          {feed.description && (
            <p className="text-sm md:text-base text-zinc-600 mt-2 max-w-3xl">{feed.description}</p>
          )}
        </div>
        {sectionLinks[feed.source] && (
          <Link
            href={sectionLinks[feed.source]}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-red-600 hover:text-red-500"
          >
            View Section →
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {feed.items.map((item) => (
          <NewsCard key={item.slug} item={item} source={feed.source} />
        ))}
      </div>
    </section>
  );
}
