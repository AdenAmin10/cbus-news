import Link from "next/link";
import { fetchAllFeeds } from "@/utils/rss";
import { fetchLatestScores } from "@/utils/scores";
import FeedSection from "@/components/FeedSection";
import TopStoriesCarousel from "@/components/TopStoriesCarousel";

export const revalidate = 1800; // every 30 min

export default async function Home() {
  const [allFeeds, latestScores] = await Promise.all([
    fetchAllFeeds(),
    fetchLatestScores(),
  ]);
  const flattenedStories = allFeeds
    .flatMap((feed) =>
      feed.items.map((item) => ({
        ...item,
        source: feed.source,
      }))
    )
    .filter((item) => item.imageUrl);

  const sortedStories = [...flattenedStories].sort((a, b) => {
    const dateA = new Date(a.publishedAt ?? "").getTime();
    const dateB = new Date(b.publishedAt ?? "").getTime();
    return dateB - dateA;
  });

  const topBySection = new Map<string, typeof sortedStories[number]>();
  for (const story of sortedStories) {
    if (!topBySection.has(story.source)) {
      topBySection.set(story.source, story);
    }
  }

  const prioritizedStories = Array.from(topBySection.values());
  const remainingStories = sortedStories.filter((story) => !topBySection.has(story.source) || topBySection.get(story.source) !== story);
  const topStories = [...prioritizedStories, ...remainingStories].slice(0, 5);

  const carouselStories = topStories.slice(0, 5);
  const tickerStories = topStories.slice(0, 8);

  return (
    <main className="w-full bg-white text-zinc-900">
      <section className="w-full">
        <TopStoriesCarousel stories={carouselStories} />
      </section>

      {tickerStories.length > 0 && (
        <section className="bg-zinc-900 text-white py-4 px-4 md:px-8 flex items-center gap-4">
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
        </section>
      )}

      {latestScores.length > 0 && (
        <section className="bg-white border-t border-b border-zinc-200 px-4 md:px-8 py-4 overflow-x-auto whitespace-nowrap flex gap-6 text-sm">
          {latestScores.map((game, idx) => (
            <div key={idx} className="inline-flex items-center gap-3 text-zinc-700">
              <span className="text-xs uppercase tracking-[0.3em] text-red-500">{game.league}</span>
              <span className="font-semibold">{game.away.name} {game.away.score}</span>
              <span className="text-zinc-400">@</span>
              <span className="font-semibold">{game.home.name} {game.home.score}</span>
              <span className="text-xs text-zinc-500">{game.status}</span>
            </div>
          ))}
        </section>
      )}

      <section className="w-full space-y-0">
        {allFeeds.map((feed, index) => (
          <FeedSection key={index} feed={feed} limit={6} />
        ))}
      </section>
    </main>
  );
}
