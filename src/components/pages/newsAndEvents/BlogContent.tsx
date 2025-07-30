import React from "react";

import { formatDate } from "@/lib/utils";

import type { ImageMetadata } from "astro";

interface BlogContentProps {
  title: string;
  date: Date;
  author: string;
  description: string;
  image?: ImageMetadata;
  lang: string;
  children: React.ReactNode;
}

export function BlogContent({
  title,
  date,
  author,
  image,
  lang,
  children,
}: BlogContentProps) {
  return (
    <article className="container mx-auto my-4">
      <img
        src={image?.src}
        alt={title}
        className="rounded-lg w-full aspect-video object-cover"
      />

      <div className="max-w-5xl mx-auto space-y-6">
        <h1 className="text-xl lg:text-4xl font-bold text-primary leading-snug text-justify lg:text-start mt-8">
          {title}
        </h1>
        <p className="flex items-center gap-4 text-secondary font-bold">
          <span>{author},</span>
          <span>
            <time>{formatDate(date.toISOString(), lang)}</time>
          </span>
        </p>
        <div className="prose prose-neutral max-w-none">{children}</div>
      </div>
    </article>
  );
}
