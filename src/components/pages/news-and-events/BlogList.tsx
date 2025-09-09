import { useState } from "react";

import { convertNumberToKhmer } from "@/lib/utils";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { BlogCard } from "@/components/pages/news-and-events/BlogCard";

import { useTranslations } from "@/i18n/utils";
import type { CollectionEntry } from "astro:content";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BlogListProps {
  translations: Record<string, string>;
  posts: CollectionEntry<"blog">[];
  lang: string;
}

export function BlogList({ translations, posts, lang }: BlogListProps) {
  const t = useTranslations(lang);

  if (!posts?.length) {
    return (
      <div className="space-y-8">
        <h1 className="text-4xl font-bold">{t("newsAndEvents.title")}</h1>
        <p className="text-muted-foreground">{t("newsAndEvents.no_posts")}</p>
      </div>
    );
  }

  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 10;
  const totalPages = Math.ceil(posts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentArticles = posts.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto my-12">
      <motion.h1
        className={"text-4xl font-bold text-gradient leading-normal mb-8"}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        {t("newsAndEvents.sub_title")}
      </motion.h1>

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

      <div className="mt-12">
        <Pagination>
          <PaginationContent className="justify-end flex flex-1">
            <PaginationItem>
              <div
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className={`cursor-pointer flex text-sm font-semibold space-x-2 me-5 items-center ${currentPage === 1 ? "pointer-events-none opacity-50" : ""}`}
              >
                <ChevronLeft className="h-4 w-4" />
                <span>{t("btn.previous")}</span>
              </div>
            </PaginationItem>
            {Array.from(
              { length: Math.min(totalPages, 3) },
              (_, i) => i + 1,
            ).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  className="w-10 h-10 mx-1"
                  onClick={() => setCurrentPage(page)}
                  isActive={currentPage === page}
                >
                  {lang === "en" ? page : convertNumberToKhmer(page)}
                </PaginationLink>
              </PaginationItem>
            ))}
            {totalPages > 3 && (
              <PaginationItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <DropdownMenuTrigger asChild>
                      <PaginationLink
                        className="w-10 h-10 text-center flex mx-1"
                        isActive={currentPage > 3}
                      >
                        {currentPage > 3
                          ? lang === "en"
                            ? currentPage
                            : convertNumberToKhmer(currentPage)
                          : "..."}
                      </PaginationLink>
                    </DropdownMenuTrigger>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-auto">
                    <DropdownMenuRadioGroup
                      value={currentPage.toString()}
                      onValueChange={(value) => setCurrentPage(Number(value))}
                    >
                      {Array.from(
                        { length: totalPages - 3 },
                        (_, i) => i + 4,
                      ).map((page) => (
                        <DropdownMenuRadioItem
                          key={page}
                          value={page.toString()}
                        >
                          {lang === "en" ? page : convertNumberToKhmer(page)}
                        </DropdownMenuRadioItem>
                      ))}
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </PaginationItem>
            )}

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
