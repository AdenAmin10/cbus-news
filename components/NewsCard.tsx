import Image from "next/image";
import Link from "next/link";
import { FeedItem } from "@/utils/rss";

type NewsCardProps = {
  item: FeedItem;
  source: string;
};

export default function NewsCard({ item, source }: NewsCardProps) {
  const internalHref = `/story/${item.slug}`;

  return (
    <article className="group border border-zinc-200 rounded-xl bg-white px-4 py-4 md:px-5 md:py-5 shadow-sm hover:shadow-md hover:-translate-y-[1px] transition flex flex-col gap-4">
      <Link href={internalHref} className="flex flex-col gap-3 flex-1">
        {item.imageUrl && (
          <div className="relative w-full overflow-hidden rounded-lg border border-zinc-100 bg-zinc-100 aspect-[4/3]">
          {item.imageUrl ? (
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              unoptimized
              className="object-cover transition duration-500 ease-out group-hover:scale-[1.02]"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-red-50 via-white to-zinc-100" />
          )}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
          </div>
        )}

        <div>
          <h3 className="font-semibold text-base md:text-lg mb-2 group-hover:text-red-600 transition">
            {item.title}
          </h3>

          <p className="text-xs md:text-sm text-zinc-600 line-clamp-3">
            {item.contentSnippet?.slice(0, 220) || "Tap to read the full update."}
          </p>
        </div>
      </Link>

      <div className="flex items-center justify-between text-xs text-zinc-500 flex-wrap gap-2">
        <span className="font-semibold text-zinc-700">{source}</span>
        {item.publishedAt && (
          <span>{new Date(item.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
        )}
      </div>
    </article>
  );
}
