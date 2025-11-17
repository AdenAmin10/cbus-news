import Image from "next/image";
import Link from "next/link";
import FeedSection from "@/components/FeedSection";
import { fetchFeedBySource } from "@/utils/rss";

export const metadata = {
  title: "Ohio State Coverage | CityLine Sports",
  description: "Daily Ohio State football, basketball, and campus sports headlines.",
};

export default async function OhioStatePage() {
  const feed = await fetchFeedBySource("Ohio State");
  const featured = feed?.items[0];
  const remainingFeed = feed
    ? {
        ...feed,
        items: feed.items.slice(1),
      }
    : undefined;

  return (
    <main className="w-full bg-white">
      {featured && (
        <section className="w-full">
          <Link href={`/story/${featured.slug}`} className="block w-full bg-black text-white">
            {featured.imageUrl && (
              <div className="relative w-full min-h-[80vh]">
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
            <div className="p-6 md:p-12 space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-red-400">Feature</p>
              <h1 className="text-4xl md:text-6xl font-black leading-tight text-white">{featured.title}</h1>
              <p className="text-base md:text-lg text-white/90 max-w-4xl">
                {featured.contentSnippet || "Tap to read the full update."}
              </p>
              <span className="inline-flex items-center text-xs font-semibold bg-white px-4 py-2 w-fit text-zinc-900">
                Read full story <span className="ml-2" aria-hidden="true">→</span>
              </span>
            </div>
          </Link>
        </section>
      )}

      <section className="w-full border-b border-t border-zinc-200 py-10 px-4 md:px-8 bg-white">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-600">Scarlet & Gray</p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-2">Ohio State Sports</h2>
        <p className="text-sm md:text-base text-zinc-600 max-w-4xl mt-3">
          In-depth Buckeye football notes, basketball rankings, and crossover stories spanning the entire athletic department.
        </p>
      </section>

      {remainingFeed && remainingFeed.items.length > 0 ? (
        <FeedSection feed={remainingFeed} />
      ) : feed ? (
        <p className="text-sm text-zinc-500 px-4 md:px-8 py-10">More Buckeye headlines will be added soon.</p>
      ) : (
        <p className="text-sm text-zinc-500 px-4 md:px-8 py-10">No Ohio State stories available right now.</p>
      )}
    </main>
  );
}
