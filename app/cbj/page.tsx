import Image from "next/image";
import Link from "next/link";
import FeedSection from "@/components/FeedSection";
import { fetchFeedBySource } from "@/utils/rss";

export const metadata = {
  title: "Columbus Blue Jackets News | CityLine Sports",
  description: "Game recaps, roster moves, and community events from Nationwide Arena.",
};

export default async function BlueJacketsPage() {
  const feed = await fetchFeedBySource("Columbus Blue Jackets");
  const featured = feed?.items[0];
  const remainingFeed = feed
    ? {
        ...feed,
        items: feed.items.slice(1),
      }
    : undefined;

  return (
    <main className="max-w-5xl mx-auto px-4 md:px-6 py-10 space-y-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-600">
          Union Blue
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight">Blue Jackets</h1>
        <p className="text-sm md:text-base text-zinc-600 max-w-2xl">
          Rapid-fire coverage of the Jackets’ playoff push, prospect call-ups, and themed nights inside Nationwide.
        </p>
      </header>

      {featured && (
        <Link
          href={`/story/${featured.slug}`}
          className="block rounded-2xl border border-zinc-200 shadow-sm overflow-hidden hover:shadow-md transition"
        >
          {featured.imageUrl && (
            <div className="relative w-full aspect-[16/9] bg-zinc-100">
              <Image
                src={featured.imageUrl}
                alt={featured.title}
                fill
                sizes="(max-width: 1024px) 100vw, 768px"
                unoptimized
                className="object-cover"
              />
            </div>
          )}
          <div className="p-6 md:p-8 space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-red-600">In focus</p>
            <h2 className="text-3xl font-bold">{featured.title}</h2>
            <p className="text-sm text-zinc-600">
              {featured.contentSnippet || "Tap to read the full update."}
            </p>
          </div>
        </Link>
      )}

      {remainingFeed && remainingFeed.items.length > 0 ? (
        <FeedSection feed={remainingFeed} />
      ) : feed ? (
        <p className="text-sm text-zinc-500">More Jackets coverage lands shortly.</p>
      ) : (
        <p className="text-sm text-zinc-500">Blue Jackets coverage will return shortly.</p>
      )}
    </main>
  );
}
