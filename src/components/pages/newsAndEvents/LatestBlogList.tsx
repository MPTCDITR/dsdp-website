import { LatestBlogCard } from "./LatestBlogCard";
import type { CollectionEntry } from "astro:content";
import { motion } from "framer-motion";

interface BlogListProps {
  translations: Record<string, string>;
  posts: CollectionEntry<"blog">[];
  lang: string;
}

export function LatestBlogList({ translations, posts, lang }: BlogListProps) {
  const t = (key: string) => translations[key] || key;
  // Error Handling
  if (!posts?.length) {
    return (
      <div className="space-y-8">
        <h1>{t("newsAndEvents.title")}</h1>
        <p className="text-muted-foreground">{t("newsAndEvents.no_posts")}</p>
      </div>
    );
  }

  return (
    // Blog Title & Description
    <div className="container mx-auto my-12">
      <motion.h1
        className={
          "text-4xl font-bold text-center text-gradient leading-normal mb-4"
        }
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t("newsAndEvents.title")}
      </motion.h1>
      <motion.p
        className={"text-center text-muted-foreground max-w-8xl mx-auto mb-12"}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {t("newsAndEvents.short_description")}
      </motion.p>
      {/* Blog Cards */}

      <div className="grid md:grid-cols-5 md:grid-rows-2 gap-6 grid-cols-1 grid-rows-none">
        {posts.map((post, index) => {
          const gridClass = [
            "md:col-span-3 md:row-span-2 col-span-1 row-span-1", // Item 1
            "md:col-span-2 md:row-span-1 col-span-1", // Item 2
            "md:col-span-2 md:row-span-1 col-span-1", // Item 3
          ];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={gridClass[index]}
            >
              <LatestBlogCard
                title={post.data.title}
                description={post.data.description}
                date={post.data.date.toISOString()}
                author={post.data.author}
                image={post.data.image}
                slug={post.slug}
                lang={lang}
                translations={translations}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
