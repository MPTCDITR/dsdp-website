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
  slug: string; // NEW
}

interface HeroCarouselProps {
  lang: Language;
  posts?: CollectionEntry<"hero">[]; // new
}

export function Hero({ lang, posts = [] }: HeroCarouselProps) {
  const slides: Slide[] = posts.map((post) => ({
    image: post.data.image?.src || "",
    title: post.data.title,
    description: post.data.description,
    slug: post.slug, // NEW
  }));

  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }),
  );

  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;
  }, [api]);

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
            <CarouselItem key={index} className="h-full pl-0">
              <HeroCarouselItem slide={slide} lang={lang} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
export default Hero;
