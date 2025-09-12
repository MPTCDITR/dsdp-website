import { formatDate } from "@/lib/utils";

import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/link-button";

import { useTranslations } from "@/i18n/utils";
import type { ImageMetadata } from "astro";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
}: BlogCardProps) {
  const urlSlug = slug.split("/").slice(1).join("/");
  const t = useTranslations(lang);

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 shadow-none hover:shadow-md">
        <article
          className={`grid md:grid-cols-5 grid-cols-1 gap-6 p-3 h-auto duration-300 rounded-lg${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
        >
          <figure className="md:col-span-2 aspect-auto relative rounded-lg overflow-hidden">
            <img
              src={image?.src}
              alt={title}
              className="w-full h-full object-cover"
            />
          </figure>
          <section className="space-y-3 md:col-span-3">
            <p className="font-bold text-secondary hover:underline">
              <time dateTime={date}>{formatDate(date, lang)}</time>
            </p>
            <h2 className="text-2xl font-bold text-primary line-clamp-2 leading-normal">
              {title}
            </h2>
            <p className="text-gray-600 line-clamp-2">{description}</p>
            <LinkButton
              href={`/${lang}/media-hub/news-and-events/${urlSlug}`}
              variant="outline"
              className="bg-primary text-white hover:bg-secondary w-fit px-4 py-2 rounded-md"
            >
              {t("newsAndEvents.readmore")} <ArrowRight className="w-4 h-4" />
            </LinkButton>
          </section>
        </article>
      </Card>
    </motion.div>
  );
}
