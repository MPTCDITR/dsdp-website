import React, { useEffect, useRef, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

import { Button } from "../ui/button";
import { EventCarouselItem } from "./EventCarouselItem";
import bacII from "@/assets/home/bacII.jpg";
import bgstyle from "@/assets/home/backgorund-style 3.png";
import boat_1 from "@/assets/home/boat_1.jpg";
import boat_2 from "@/assets/home/boat_2.jpg";
import type { Language } from "@/i18n/ui";
import Autoplay from "embla-carousel-autoplay";
import { ChevronRight } from "lucide-react";

interface Slide {
  image: string;
  title: string;
  description: string;
}

interface EventCarouselProps {
  lang: Language;
}

function useEllipseCount() {
  const [count, setCount] = useState(3);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setCount(2);
      } else {
        setCount(3);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return count;
}

export function Event({ lang }: EventCarouselProps) {
  const slides: Slide[] = [
    {
      image: boat_1.src,
      title: "home.event_1.title",
      description: "home.event_1.description",
    },
    {
      image: bacII.src,
      title: "home.event_2.title",
      description: "home.event_2.description",
    },
    {
      image: boat_2.src,
      title: "home.event_3.title",
      description: "home.event_3.description",
    },
  ];

  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }),
  );

  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const ellipseCount = useEllipseCount();

  useEffect(() => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());

    const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
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
          className="absolute select-none hidden md:block opacity-50"
          aria-hidden="true"
        />
      </div>
      <div className="relative md:ml-7 xl:ml-27 2xl:ml-55 px-4 md:px-0">
        <div className="relative z-10">
          <Carousel
            setApi={setApi}
            plugins={[plugin.current]}
            opts={{
              loop: true,
              duration: 5000,
              align: "start",
            }}
            className="w-full h-full"
          >
            <CarouselContent className="h-full flex">
              {slides.map((slide, index) => (
                <CarouselItem
                  key={index}
                  className="rounded-lg md:basis-1/3 basis-full"
                >
                  <EventCarouselItem slide={slide} lang={lang} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="flex justify-center mt-11 gap-2">
            {Array.from({ length: ellipseCount }).map((_, idx) => (
              <span
                key={idx}
                className={`w-2 h-2 rounded-full transition-all duration-300
              ${selectedIndex % ellipseCount === idx ? "bg-primary scale-125" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Event;
