import type { SupportedLanguage, TranslationKey } from "@/i18n/ui";

export interface NavMenuProps {
  href: string;
  textKey: TranslationKey;
  dropdown?: NavMenuProps[];
}

export const getNavLinks = (lang: SupportedLanguage): NavMenuProps[] => [
  { href: `/${lang}/`, textKey: "nav.home" },
  {
    href: `/${lang}/about`,
    textKey: "nav.about",
    dropdown: [
      { href: `/${lang}/about/about-us`, textKey: "nav.about_us" },
      { href: `/${lang}/about/about-team`, textKey: "nav.about_team" },
    ],
  },
  { href: `/${lang}/partnerships`, textKey: "nav.our_partners" },
  { href: `/${lang}/how-to-apply`, textKey: "nav.how_to_apply" },
  {
    href: `/${lang}/media`,
    textKey: "nav.media_hub",
    dropdown: [
      { href: `/${lang}/news_and-events`, textKey: "nav.news_and_events" },
      { href: `/${lang}/video-and-media`, textKey: "nav.video_and_media" },
    ],
  },
  { href: `/${lang}/contact`, textKey: "nav.contact" },
];
