import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchAllFeeds, fetchStoryBySlug } from "@/utils/rss";

type StoryPageProps = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 1800;

export default async function StoryPage({ params }: StoryPageProps) {
  const { slug } = await params;
  const story = await fetchStoryBySlug(slug);

  if (!story) {
    notFound();
  }

  const storyBody = story.content ?? story.contentSnippet ?? "No preview available.";

  return (
    <main className="max-w-4xl mx-auto px-4 md:px-6 py-12 space-y-8">
      <Link
        href="/"
        className="text-sm text-zinc-600 hover:text-red-600 transition inline-flex items-center gap-2"
      >
        <span aria-hidden="true">←</span>
        Back to feeds
      </Link>

      <article className="bg-white rounded-3xl border border-zinc-200 shadow-lg overflow-hidden">
        {story.imageUrl && (
          <div className="relative w-full aspect-[16/8] md:aspect-[16/6]">
            <Image
              src={story.imageUrl}
              alt={story.title}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              unoptimized
              className="object-cover"
            />
          </div>
        )}

        <div className="p-6 md:p-10 space-y-7">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-red-600">
              {story.source}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-snug">
              {story.title}
            </h1>
            {story.publishedAt && (
              <p className="text-xs text-zinc-500">
                Published{" "}
                {new Date(story.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                })}
              </p>
            )}
          </div>

          <div className="prose prose-zinc max-w-none text-base md:text-lg leading-relaxed text-zinc-700">
            {story.content ? (
              <div
                className="story-body space-y-4 [&_p]:text-lg [&_p]:leading-relaxed [&_p]:text-zinc-700"
                dangerouslySetInnerHTML={{ __html: storyBody }}
              />
            ) : (
              <p>{storyBody}</p>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-zinc-200 text-xs text-zinc-500">
            <p>Cbus News original reporting covering Ohio State athletics.</p>
            {story.publishedAt && (
              <p>Updated {new Date(story.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric" })}</p>
            )}
          </div>
        </div>
      </article>
    </main>
  );
}

export async function generateStaticParams() {
  const feeds = await fetchAllFeeds();
  return feeds.flatMap((feed) =>
    feed.items.map((item) => ({
      slug: item.slug,
    }))
  );
}
