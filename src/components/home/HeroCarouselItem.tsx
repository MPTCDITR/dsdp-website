import type { Language } from "@/i18n/ui";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface Slide {
  image: string;
  title: string;
  description: string;
  slug: string; // NEW
}

interface HeroCarouselItemProps {
  slide: Slide;
  lang: Language;
}

export function HeroCarouselItem({ slide, lang }: HeroCarouselItemProps) {
  const urlSlug = slide.slug.split("/").slice(1).join("/");
  const moreDetailsHref = `/${lang}/hero/${urlSlug}`; // route to hero MD

  const hasImage = Boolean(slide.image);
  return (
    <div className="relative w-full h-full">
      {/* optional: make whole slide clickable */}
      <a href={moreDetailsHref} className="block">
        {hasImage ? (
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-[600px] object-cover"
          />
        ) : (
          <div className="w-full h-[600px] bg-gray-200" aria-hidden="true" />
        )}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 50%)",
          }}
        />
      </a>

      <div className="absolute inset-0 flex items-center justify-start p-6 sm:p-12 md:p-24 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pointer-events-auto flex w-full max-w-4xl flex-col gap-6 text-white"
        >
          <h1 className="text-3xl md:text-4xl font-bold leading-tight line-clamp-3">
            {slide.title}
          </h1>
          {slide.description && (
            <p className="text-lg md:text-xl leading-relaxed line-clamp-4 text-white">
              {slide.description}
            </p>
          )}
          <motion.a
            href={moreDetailsHref}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-4 py-3 rounded-lg font-medium transition-colors w-fit"
          >
            More details
            <ChevronRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
