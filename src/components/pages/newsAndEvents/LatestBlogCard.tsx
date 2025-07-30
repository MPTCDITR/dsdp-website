import type { ImageMetadata } from "astro";

export interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  author: string;
  image?: ImageMetadata;
  slug: string;
  lang: string;
  translations: Record<string, string>;
}

export function LatestBlogCard({
  title,
  description,
  image,
  slug,
  lang,
}: BlogCardProps) {
  const urlSlug = slug.split("/").slice(1).join("/");

  return (
    <a
      href={`/${lang}/news-and-events/${urlSlug}`}
      className="group relative flex h-full min-h-[320px] w-full flex-col overflow-hidden rounded-lg text-white shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Image */}
      <img
        src={image?.src}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover rounded-lg"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 transition-colors duration-300 group-hover:bg-black/40 rounded-lg"></div>

      {/* Bottom content */}
      <div className="mt-auto relative z-10 bg-white/10 backdrop-blur-md px-4 py-3 w-full rounded-b-lg">
        <h3 className="text-2xl font-bold line-clamp-2">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-200 line-clamp-2">
          {description}
        </p>
      </div>
    </a>
  );
}
