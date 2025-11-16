import Link from "next/link";
import Image from "next/image";
import { fetchAllFeeds } from "@/utils/rss";
import FeedSection from "@/components/FeedSection";

export const revalidate = 1800; // every 30 min

export default async function Home() {
  const allFeeds = await fetchAllFeeds();
  const heroStory = allFeeds
    .flatMap((feed) =>
      feed.items.map((item) => ({
        ...item,
        source: feed.source,
      }))
    )
    .find((item) => Boolean(item.imageUrl));

  const heroStoryHref = heroStory ? `/story/${heroStory.slug}` : undefined;

  return (
    <main className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-10 bg-[var(--surface-bg)]">
      {/* HERO */}
      <section className="bg-white rounded-2xl shadow-sm border border-zinc-200 px-6 md:px-10 py-8 md:py-10 mb-10 space-y-8">
        <div className="w-full">
          {heroStory?.imageUrl && heroStoryHref ? (
            <Link
              href={heroStoryHref}
              className="relative block w-full overflow-hidden rounded-2xl border border-zinc-200 shadow-sm aspect-[16/9]"
            >
              <Image
                src={heroStory.imageUrl}
                alt={heroStory.title}
                fill
                sizes="(max-width: 1024px) 100vw, 640px"
                priority
                unoptimized
                className="object-cover transition duration-500 ease-out hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white drop-shadow">
                <p className="text-[11px] uppercase tracking-[0.3em] text-white/80">
                  Top Story
                </p>
                <p className="mt-1 text-lg font-semibold leading-snug line-clamp-2">
                  {heroStory.title}
                </p>
                <p className="text-xs text-white/80 mt-1">{heroStory.source}</p>
              </div>
            </Link>
          ) : (
            <div className="aspect-[16/9] rounded-2xl border border-dashed border-zinc-200 bg-gradient-to-br from-red-50/60 via-zinc-50 to-white" />
          )}
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.25em] text-red-600 mb-3 uppercase">
            Columbus · Sports
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Cbus News
          </h1>
          <p className="text-sm md:text-base text-zinc-600 max-w-xl leading-relaxed">
            Live Columbus sports coverage pulled from trusted sources: high school,
            Ohio State, Crew, and Blue Jackets — refreshed automatically all day.
          </p>

          {heroStory && heroStoryHref && (
            <div className="mt-6 space-y-2">
              <Link
                href={heroStoryHref}
                className="inline-flex flex-col gap-1 rounded-xl border border-zinc-200/80 bg-zinc-50/60 px-4 py-3 text-sm transition hover:border-zinc-300 hover:bg-white"
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-500">
                  Now featuring
                </span>
                <span className="font-semibold text-zinc-900 line-clamp-2">
                  {heroStory.title}
                </span>
                <span className="text-xs text-zinc-500">{heroStory.source}</span>
              </Link>
              <Link
                href={heroStoryHref}
                className="inline-flex items-center gap-2 text-xs font-semibold text-red-600 hover:text-red-500 transition"
              >
                Continue reading
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* FEEDS */}
      <div className="space-y-10">
        {allFeeds.map((feed, index) => (
          <FeedSection key={index} feed={feed} />
        ))}
      </div>
    </main>
  );
}
