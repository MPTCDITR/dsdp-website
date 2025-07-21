import { useEffect, useRef, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "../ui/carousel";
import dsdp from "@/assets/home/dsdp-hero.png";
import somdach from "@/assets/home/somdach.jpg";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface Slide {
  image: string;
  title: string;
  description: string;
}

interface HeroCarouselProps {
  translations: Record<string, string>;
  lang?: string;
}

export function HeroCarousel({ translations, lang }: HeroCarouselProps) {
  const t = (key: string) => translations[key] || key;
  const moreDetailsHref = `/${lang}/about/about-us/`;

  const slides: Slide[] = [
    {
      image: dsdp.src,
      title: "home.hero.title",
      description: "home.hero.description",
    },
    {
      image: somdach.src,
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
    <div className="relative w-full h-[600px] mx-auto">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        opts={{ loop: true, duration: 50 }}
        className="h-full"
      >
        <CarouselContent className="h-full ">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="pl-0">
              <div className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt={t(slide.title)}
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 flex items-center justify-start p-6 sm:p-12 md:p-24 pointer-events-none">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="pointer-events-auto flex w-full max-w-4xl flex-col gap-6 text-white"
                  >
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight line-clamp-3">
                      {t(slide.title)}
                    </h1>
                    <p className="text-lg md:text-xl leading-relaxed line-clamp-4 text-gray-200">
                      {t(slide.description)}
                    </p>
                    <motion.a
                      href={moreDetailsHref}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-w px-4 py-3 rounded-lg font-medium transition-colors w-fit"
                    >
                      {t("btn.moredetails")}
                      <ChevronRight className="w-5 h-5" />
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
export default HeroCarousel;
