import Image from "next/image";
import Link from "next/link";
import FeedSection from "@/components/FeedSection";
import { fetchFeedBySource } from "@/utils/rss";

export const metadata = {
  title: "Columbus Crew News | CityLine Sports",
  description: "Banner celebrations, preseason notes, and match coverage for the reigning MLS champs.",
};

export default async function CrewPage() {
  const feed = await fetchFeedBySource("Columbus Crew");
  const featured = feed?.items[0];
  const remainingFeed = feed
    ? {
        ...feed,
        items: feed.items.slice(1),
      }
    : undefined;

  return (
    <main className="w-full bg-gradient-to-b from-zinc-50 via-white to-zinc-100">
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-10 space-y-10">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-600">
            Massive Club
          </p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">Columbus Crew</h1>
          <p className="text-sm md:text-base text-zinc-600 max-w-3xl">
            Daily insight on Wilfried Nancy’s squad, academy standouts, and Lower.com Field upgrades.
          </p>
        </header>

        {featured && (
          <Link
            href={`/story/${featured.slug}`}
            className="block rounded-3xl border border-zinc-200 shadow-lg overflow-hidden bg-black text-white"
          >
            {featured.imageUrl && (
              <div className="relative w-full aspect-[16/7]">
                <Image
                  src={featured.imageUrl}
                  alt={featured.title}
                  fill
                  sizes="100vw"
                  unoptimized
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
              </div>
            )}
            <div className="p-6 md:p-10 space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-red-400">Feature</p>
              <h2 className="text-3xl md:text-4xl font-black">{featured.title}</h2>
              <p className="text-sm md:text-base text-white/80 max-w-3xl">
                {featured.contentSnippet || "Tap to read the full update."}
              </p>
              <span className="inline-flex items-center text-xs font-semibold bg-white px-4 py-2 rounded-full w-fit !text-zinc-900">
                Read full story <span className="ml-2" aria-hidden="true">→</span>
              </span>
            </div>
          </Link>
        )}

        {remainingFeed && remainingFeed.items.length > 0 ? (
          <FeedSection feed={remainingFeed} />
        ) : feed ? (
          <p className="text-sm text-zinc-500">More Crew updates will post soon.</p>
        ) : (
          <p className="text-sm text-zinc-500">Crew updates will return soon.</p>
        )}
      </section>
    </main>
  );
}
