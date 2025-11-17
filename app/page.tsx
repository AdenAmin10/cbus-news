import Link from "next/link";
import { fetchAllFeeds } from "@/utils/rss";
import FeedSection from "@/components/FeedSection";
import TopStoriesCarousel from "@/components/TopStoriesCarousel";

export const revalidate = 1800; // every 30 min

export default async function Home() {
  const allFeeds = await fetchAllFeeds();
  const flattenedStories = allFeeds
    .flatMap((feed) =>
      feed.items.map((item) => ({
        ...item,
        source: feed.source,
      }))
    )
    .filter((item) => item.imageUrl);

  const topStories = [...flattenedStories].sort((a, b) => {
    const dateA = new Date(a.publishedAt ?? "").getTime();
    const dateB = new Date(b.publishedAt ?? "").getTime();
    return dateB - dateA;
  });

  const carouselStories = topStories.slice(0, 5);
  const tickerStories = topStories.slice(0, 8);

  return (
    <main className="w-full bg-gradient-to-b from-zinc-50 via-white to-zinc-100 text-zinc-900">
      <section className="w-full px-4 md:px-8 lg:px-12 py-8">
        <TopStoriesCarousel stories={carouselStories} />
      </section>

      {tickerStories.length > 0 && (
        <section className="bg-zinc-900 text-white py-4">
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center gap-4">
            <span className="text-xs uppercase tracking-[0.4em] text-red-400">Breaking</span>
            <div className="flex-1 overflow-x-auto whitespace-nowrap flex gap-8 text-sm">
              {tickerStories.map((story) => (
                <Link
                  key={story.slug}
                  href={`/story/${story.slug}`}
                  className="hover:text-red-400 transition"
                >
                  {story.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-10 space-y-12">
        {allFeeds.map((feed, index) => (
          <FeedSection key={index} feed={feed} />
        ))}
      </section>
    </main>
  );
}
