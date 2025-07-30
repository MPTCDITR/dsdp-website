import { formatDate } from "@/lib/utils";

import { Card } from "@/components/ui/card";

import type { ImageMetadata } from "astro";
import { motion } from "framer-motion";

interface BlogCardProps {
  index: number;
  title: string;
  description: string;
  date: string;
  image?: ImageMetadata;
  author: string;
  slug: string;
  lang: string;
  translations: Record<string, string>;
}

export function BlogCard({
  index,
  title,
  description,
  date,
  image,
  slug,
  lang,
  translations,
}: BlogCardProps) {
  const urlSlug = slug.split("/").slice(1).join("/");
  const t = (key: string) => translations[key] || key;

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <a href={`/${lang}/news-and-events/${urlSlug}`}>
        <Card className="overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl">
          <div
            className={`grid md:grid-cols-5 grid-cols-1 gap-6 p-3 h-auto duration-300 rounded-lg${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
          >
            {/* Image */}
            <div className=" md:col-span-2 aspect-auto relative rounded-lg overflow-hidden">
              <img
                src={image?.src}
                alt={title}
                className="w-full h-full object-cover "
              />
            </div>
            {/* Content */}
            <div className="space-y-3 md:col-span-3 ">
              {/* Date */}
              <p className="font-bold text-secondary hover:underline">
                <time dateTime={date}>{formatDate(date, lang)}</time>
              </p>
              {/* Blog Title */}
              <h1 className="text-2xl font-bold text-primary line-clamp-2 leading-normal">
                {title}
              </h1>
              {/* Short Description */}
              <p className="text-gray-600 line-clamp-2">{description}</p>
              {/* CTA Btn */}
              <p className="bg-primary text-white hover:bg-secondary w-fit px-4 py-2 rounded-md">
                {t("newsAndEvents.readmore")} →
              </p>
            </div>
          </div>
        </Card>
      </a>
    </motion.div>
  );
}
