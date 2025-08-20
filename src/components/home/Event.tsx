import React, { useEffect, useRef, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

import { Button } from "../ui/button";
import { EventCarouselItem } from "./EventCarouselItem";
import bgstyle from "@/assets/home/backgorund-style 3.png";
import type { Language } from "@/i18n/ui";
import type { CollectionEntry } from "astro:content";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface Slide {
  image: string;
  title: string;
  description: string;
  url: string; // NEW
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

  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {};
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div>
      <div className="container items-center mb-6 lg:flex lg:justify-between">
        <h1 className="text-4xl font-bold text-primary mb-8">
          ព្រឹត្តិការណ៍សំខាន់ៗ
        </h1>
        <div className="ml-2">
          <Button
            variant="link"
            className="w-40 h-11 rounded-full bg-primary text-white text-sm font-medium text-center flex justify-center hover:bg-primary/90"
          >
            <a
              href={`/${lang}/media-hub/news-and-events`}
              className="w-full h-full flex items-center justify-center no-underline"
            >
              All Events
              <ChevronRight className="size-4" />
            </a>
          </Button>
        </div>
      </div>

      <div>
        <img
          src={bgstyle.src}
          alt="background style"
          className="absolute "
          aria-hidden="true"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative md:ml-7 xl:ml-27 2xl:ml-55 px-4 md:px-0"
      >
        <div className="relative z-10">
          <Carousel
            setApi={setApi}
            plugins={[plugin.current]}
            opts={{
              loop: true,
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="flex ">
              {slides.map((slide, index) => (
                <CarouselItem
                  key={index}
                  className="lg:basis-2/5 md:basis-3/5 basis-full"
                >
                  <EventCarouselItem slide={slide} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </motion.div>
    </div>
  );
}
export default Event;
