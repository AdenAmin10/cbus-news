"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type CarouselStory = {
  slug: string;
  title: string;
  imageUrl?: string;
  contentSnippet?: string;
  source?: string;
};

export default function TopStoriesCarousel({ stories }: { stories: CarouselStory[] }) {
  const validStories = useMemo(() => stories.filter((story) => story.imageUrl), [stories]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!validStories.length) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % validStories.length);
    }, 6500);
    return () => clearInterval(id);
  }, [validStories.length]);

  if (!validStories.length) {
    return null;
  }

  const current = validStories[index];

  return (
    <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden rounded-3xl border border-zinc-800 bg-black text-white shadow-2xl">
      <Image
        src={current.imageUrl!}
        alt={current.title}
        fill
        sizes="100vw"
        className="object-cover opacity-80"
        priority
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-10">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.4em]">
          <span className="bg-red-600/80 px-3 py-1 rounded-full">Top Story</span>
          {current.source && <span className="text-white/70">{current.source}</span>}
        </div>
        <div className="space-y-5 max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-black leading-tight">{current.title}</h1>
          <p className="text-sm md:text-base text-white/80 line-clamp-3">
            {current.contentSnippet || "Tap through to read the latest reporting."}
          </p>
          <Link
            href={`/story/${current.slug}`}
            className="inline-flex items-center gap-3 bg-white text-zinc-900 px-5 py-3 rounded-full font-semibold w-fit shadow hover:bg-red-500 hover:text-white transition"
          >
            Read Full Story <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {validStories.map((story, i) => (
              <button
                key={story.slug}
                aria-label={`Slide ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-10 bg-red-500" : "w-4 bg-white/40 hover:bg-white/70"
                }`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
          <div className="flex gap-3">
            <button
              aria-label="Previous story"
              onClick={() => setIndex((prev) => (prev - 1 + validStories.length) % validStories.length)}
              className="h-10 w-10 rounded-full border border-white/40 hover:border-white flex items-center justify-center"
            >
              ←
            </button>
            <button
              aria-label="Next story"
              onClick={() => setIndex((prev) => (prev + 1) % validStories.length)}
              className="h-10 w-10 rounded-full border border-white/40 hover:border-white flex items-center justify-center"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
