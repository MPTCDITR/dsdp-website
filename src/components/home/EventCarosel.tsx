import React, { useRef } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { EventCarouselItem } from "./EventCarouselItem";
import type { Language } from "@/i18n/ui";
import type { CollectionEntry } from "astro:content";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

interface Slide {
  image: string;
  title: string;
  description: string;
  url: string;
}

interface EventCarouselProps {
  lang: Language;
  latestPosts?: CollectionEntry<"blog">[];
}

export function Event({ lang, latestPosts = [] }: EventCarouselProps) {
  const slides: Slide[] = latestPosts.map((post) => {
    const [, ...slugParts] = post.slug.split("/");
    const slug = slugParts.join("/");
    return {
      image: post.data.image?.src || "",
      title: post.data.title,
      description: post.data.description,
      url: `/${lang}/media-hub/news-and-events/${slug}`,
    };
  });

  const plugin = useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex justify-end w-full"
    >
      <div className="w-full max-w-full 2xl:max-w-[calc(100%-20rem)] lg:max-w-[calc(100%-11rem)] px-2 sm:px-0">
        <Carousel
          plugins={[plugin.current]}
          opts={{
            loop: false,
          }}
        >
          <CarouselContent className="flex">
            {slides.map((slide, index) => (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-4/5 md:basis-3/5 lg:basis-2/5 transition-all"
              >
                <EventCarouselItem slide={slide} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </motion.div>
  );
}
export default Event;
