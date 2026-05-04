import { getTranslatedKeys } from "@/i18n/utils";
import { getRelativeLocaleUrl } from "astro:i18n";

export const navigation: RouteType[] = [
  { label: "nav.home", href: "/" },
  {
    label: "nav.about",
    href: "/about",
    children: [
      { label: "nav.about_us", href: `/about/about-us` },
      { label: "nav.about_team", href: `/about/chairman` },
      { label: "nav.about.question&answer", href: `/about/qa` },
    ],
  },
  {
    label: "nav.our_partners",
    href: "/partnerships",
  },
  {
    label: "nav.how_to_apply",
    href: "/how-to-apply/",
  },
  {
    label: "nav.media_hub",
    href: "/media-hub",
    children: [
      { label: "nav.news_and_events", href: `/media-hub/news-and-events` },
      { label: "nav.video_and_media", href: `/media-hub/video-and-media` },
    ],
  },
  { href: `/contact/`, label: "nav.contact" },
];

interface RouteType {
  href: string;
  label: string;
  children?: RouteType[];
}

export function getLocalizedRoutes(
  paths: RouteType[],
  locale: string,
): RouteType[] {
  return paths.map((path) => {
    return {
      label: getTranslatedKeys(path.label, locale),
      href: getRelativeLocaleUrl(locale, path.href),
      children: path.children && getLocalizedRoutes(path.children, locale),
    };
  });
}
