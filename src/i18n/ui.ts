export const languages = {
  en: "English",
  km: "Khmer",
};

export type SupportedLanguage = keyof typeof languages;
export type Language = keyof typeof languages;
export const defaultLang = "en";
export const showDefaultLang = true;
export const ui: Record<string, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.about_us": "About DSDP",
    "nav.about_team": "DSDP Team",
    "nav.about.question&answer": "Q&A",
    "nav.our_partners": "Our Partners",
    "nav.how_to_apply": "How to Apply",
    "nav.media_hub": "Media Hub",
    "nav.video_and_media": "Video & Media",
    "nav.news_and_events": "News & Event",
    "nav.contact": "Contact",
  },
  km: {
    "nav.home": "ទំព័រដើម",
    "nav.about": "អំពីពួកយើង",
    "nav.about_us": "អំពីឌីអេសឌីធី",
    "nav.about_team": "អំពីក្រុមឌីអេសឌីធី",
    "nav.about.question&answer": "សំណួរ​និងចម្លើយ",
    "nav.our_partners": "ដៃគូរបស់យើង",
    "nav.how_to_apply": "របៀបដាក់ពាក្យ",
    "nav.media_hub": "មជ្ឈមណ្ឌលព័ត៌មាន",
    "nav.video_and_media": "វីឌីអូនិងប្រព័ន្ធផ្សព្វផ្សាយ",
    "nav.news_and_events": "ព័ត៌មាននិង​ព្រឹត្តិការណ៍",
    "nav.contact": "ទំនាក់ទំនង",
  },
} as const;

export const routes: Record<string, Record<string, string>> = {
  en: {
    news: "news",
    contact: "contact",
  },
  km: {
    news: "news",
    contact: "contact",
  },
};
