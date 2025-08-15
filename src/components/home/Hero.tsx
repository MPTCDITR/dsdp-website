import { useEffect, useRef, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

import { HeroCarouselItem } from "./HeroCarouselItem";
import hero_1 from "@/assets/home/dsdp_hero_1.png";
import hero_2 from "@/assets/home/dsdp_hero_2.png";
import type { Language } from "@/i18n/ui";
import Autoplay from "embla-carousel-autoplay";

interface Slide {
  image: string;
  title: string;
  description: string;
}

interface HeroCarouselProps {
  lang: Language;
}

export function Hero({ lang }: HeroCarouselProps) {
  const slides: Slide[] = [
    {
      image: hero_1.src,
      title: "home.hero.title",
      description: "home.hero.description",
    },
    {
      image: hero_2.src,
      title: "home.hero.somdach",
      description: "home.hero.somdach.description",
    },
  ];

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
