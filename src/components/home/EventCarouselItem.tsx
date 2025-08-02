import type { Language } from "@/i18n/ui";
import { useTranslations } from "@/i18n/utils";
import { motion } from "framer-motion";

interface Slide {
  image: string;
  title: string;
  description: string;
}

interface HeroCarouselItemProps {
  slide: Slide;
  lang: Language;
}

export function EventCarouselItem({ slide, lang }: HeroCarouselItemProps) {
  const t = useTranslations(lang);

  return (
    <div className="relative w-full h-full rounded-lg">
      <img
        src={slide.image}
        alt={t(slide.title)}
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-transparent to-black" />
      <div
        className="absolute bottom-0 w-full p-4 flex flex-col justify-end 
                   backdrop-blur-xs rounded-b-lg"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.05, ease: "easeOut" }}
          className="text-white "
        >
          <h1 className="text-xl font-bold  line-clamp-1">{t(slide.title)}</h1>
          <p className="text-sm leading-relaxed line-clamp-2 text-white">
            {t(slide.description)}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
