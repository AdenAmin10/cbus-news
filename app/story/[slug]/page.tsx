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
    <main className="w-full bg-white">
      {story.imageUrl && (
        <section className="w-full bg-black text-white">
          <div className="relative w-full min-h-[80vh]">
            <Image src={story.imageUrl} alt={story.title} fill sizes="100vw" unoptimized className="object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
            <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-end space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-red-400">{story.source}</p>
              <h1 className="text-4xl md:text-6xl font-black leading-tight text-white">{story.title}</h1>
              <p className="text-sm text-white/80">
                By {story.editor ?? "CityLine Sports Desk"}
                {story.publishedAt && (
                  <span>
                    {" "}
                    ·{" "}
                    {new Date(story.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric" })}
                  </span>
                )}
              </p>
            </div>
          </div>
        </section>
      )}

      <section className="max-w-4xl mx-auto px-4 md:px-8 py-10 space-y-6">
        <Link href="/" className="text-sm text-zinc-600 hover:text-red-600 transition inline-flex items-center gap-2">
          <span aria-hidden="true">←</span>
          Back to feeds
        </Link>

        <article className="prose prose-zinc max-w-none text-lg leading-relaxed">
          {story.content ? (
            <div dangerouslySetInnerHTML={{ __html: storyBody }} />
          ) : (
            <p>{storyBody}</p>
          )}
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
