import { useEffect, useRef, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

import { HeroCarouselItem } from "./HeroCarouselItem";
import type { Language } from "@/i18n/ui";
import type { CollectionEntry } from "astro:content";
import Autoplay from "embla-carousel-autoplay";

interface Slide {
  image: string;
  title: string;
  description: string;
  url: string;
  date?: Date | string;
  author?: string;
  thumbnail?: string;
}

interface HeroCarouselProps {
  lang: Language;
  latestPosts?: CollectionEntry<"hero">[];
}

export function Hero({ lang, latestPosts = [] }: HeroCarouselProps) {
  const slides: Slide[] = latestPosts.map((post) => {
    const [, ...slugParts] = post.slug.split("/");
    const slug = slugParts.join("/");
    return {
      image:
        typeof post.data.thumbnail === "string"
          ? post.data.thumbnail
          : post.data.thumbnail?.src || "",
      title: post.data.title,
      description: post.data.description,
      url: `/${lang}/media-hub/hero/${slug}`,
      date: post.data.date,
      author: post.data.author,
    };
  });
  const plugin = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;
  }, [api]);

  if (slides.length === 0) return null;

  return (
    <div className="relative w-full  mx-auto">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        opts={{ loop: true, duration: 50 }}
        className="h-full"
      >
        <CarouselContent className="h-full">
          {slides.map((slide, index) => (
            <CarouselItem
              key={`${slide.image}-${index}`}
              className="h-full pl-0"
            >
              <HeroCarouselItem slide={slide} lang={lang} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
export default Hero;
