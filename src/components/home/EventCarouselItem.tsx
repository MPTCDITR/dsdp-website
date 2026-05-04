import { formatDate } from "@/lib/utils";

import type { Slide } from "./EventCarousel";

interface EventCarouselItemProps {
  slide: Slide;
  lang: string;
}

export function EventCarouselItem({ slide, lang }: EventCarouselItemProps) {
  return (
    <a href={slide.url} className="block group no-underline">
      <div className="relative block w-full lg:h-[531px] h-[500px]  rounded-[var(--radius)] overflow-hidden shrink-0">
        {slide.image ? (
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gray-200" aria-hidden="true" />
        )}

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70 pointer-events-none" />
        <div className="absolute bottom-0 w-full p-4 text-white">
          <p className="font-semibold text-white hover:underline">
            <time dateTime={slide.date.toISOString()}>
              {formatDate(slide.date.toISOString(), lang)}
            </time>
          </p>
          <h3 className="text-lg font-semibold line-clamp-1">{slide.title}</h3>
          {slide.description && (
            <p className="text-sm text-white/90 line-clamp-2">
              {slide.description}
            </p>
          )}
        </div>
      </div>
    </a>
  );
}
