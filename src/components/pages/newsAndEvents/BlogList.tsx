import { useState } from "react";

import { convertNumberToKhmer } from "@/lib/utils";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { BlogCard } from "@/components/pages/newsAndEvents/BlogCard";

import type { CollectionEntry } from "astro:content";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BlogListProps {
  translations: Record<string, string>;
  posts: CollectionEntry<"blog">[];
  lang: string;
}

export function BlogList({ translations, posts, lang }: BlogListProps) {
  const t = (key: string) => translations[key] || key;
  // Error Handling
  if (!posts?.length) {
    return (
      <div className="space-y-8">
        <h1 className="text-4xl font-bold">{t("newsAndEvents.title")}</h1>
        <p className="text-muted-foreground">{t("newsAndEvents.no_posts")}</p>
      </div>
    );
  }

  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 2;
  const totalPages = Math.ceil(posts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentArticles = posts.slice(startIndex, endIndex);

  return (
    // Title
    <div className="container mx-auto my-12">
      <motion.h1
        className={"text-4xl font-bold text-gradient leading-normal mb-8"}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t("newsAndEvents.sub_title")}
      </motion.h1>

      {/* Contents */}
      <div className="space-y-4">
        {currentArticles.map((post, index) => (
          <BlogCard
            index={index}
            key={post.slug}
            title={post.data.title}
            description={post.data.description}
            date={post.data.date.toISOString()}
            author={post.data.author}
            image={post.data.image}
            slug={post.slug}
            lang={lang}
            translations={translations}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-12">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <div
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className={`cursor-pointer flex text-sm font-semibold space-x-2 me-5 items-center ${currentPage === 1 ? "pointer-events-none opacity-50" : ""}`}
              >
                <ChevronLeft className="h-4 w-4" />
                <span>{t("btn.previous")}</span>
              </div>
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  onClick={() => setCurrentPage(page)}
                  isActive={currentPage === page}
                >
                  {lang === "en" ? page : convertNumberToKhmer(page)}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <div
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                className={`cursor-pointer flex text-sm font-semibold space-x-2 ms-5 items-center ${currentPage === totalPages ? "pointer-events-none opacity-50" : ""}`}
              >
                <span>{t("btn.next")}</span>
                <ChevronRight className="h-4 w-4" />
              </div>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
