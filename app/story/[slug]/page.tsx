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
    <main className="w-full bg-gradient-to-b from-zinc-50 via-white to-zinc-100">
      <section className="max-w-3xl mx-auto px-4 md:px-6 py-10 space-y-6">
        <Link
          href="/"
          className="text-sm text-zinc-600 hover:text-red-600 transition inline-flex items-center gap-2"
        >
          <span aria-hidden="true">←</span>
          Back to feeds
        </Link>

        <article className="bg-white rounded-3xl border border-zinc-200 shadow-xl overflow-hidden">
          {story.imageUrl && (
            <div className="relative w-full aspect-[16/7]">
              <Image
                src={story.imageUrl}
                alt={story.title}
                fill
                sizes="100vw"
                unoptimized
                className="object-cover"
              />
            </div>
          )}

          <div className="p-6 md:p-10 space-y-6">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-red-600">{story.source}</p>
              <h1 className="text-3xl md:text-4xl font-black leading-tight">
                {story.title}
              </h1>
              <p className="text-sm text-zinc-500">
                By {story.editor ?? "CityLine Sports Desk"}
              </p>
              {story.publishedAt && (
                <p className="text-xs text-zinc-500">
                  Updated {new Date(story.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric" })}
                </p>
              )}
            </div>

            <div className="prose prose-zinc max-w-none">
              {story.content ? (
                <div dangerouslySetInnerHTML={{ __html: storyBody }} />
              ) : (
                <p>{storyBody}</p>
              )}
            </div>

            <div className="pt-6 border-t border-zinc-200 text-xs text-zinc-500">
              <p>CityLine Sports original reporting covering Columbus athletics.</p>
            </div>
          </div>
        </article>
      </section>
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
