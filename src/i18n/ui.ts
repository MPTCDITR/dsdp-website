// src/i18n/ui.ts
export const languages = {
  en: "English",
  km: "Khmer",
};

export const defaultLang = "km";

export type SupportedLanguage = keyof typeof languages;

export type TranslationKey = keyof (typeof ui)[typeof defaultLang];
export const ui = {
  en: {
    // ---Navbar---
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.about_us": "About DSDP",
    "nav.about_team": "DSDP Team",
    "nav.our_partners": "Our Partners",
    "nav.how_to_apply": "How to Apply",
    "nav.media_hub": "Media Hub",
    "nav.Video&Media": "Video & Media",
    "nav.New&Event": "New & Event",
    "nav.contact": "Contact",
  },
  km: {
    // ---Navbar---
    "nav.home": "ទំព័រដើម",
    "nav.about": "អំពីពួកយើង",
    "nav.about_us": "អំពីឌីអេសឌីធី",
    "nav.about_team": "អំពីក្រុមឌីអេសឌីធី",
    "nav.our_partners": "ដៃគូរបស់យើង",
    "nav.how_to_apply": "របៀបដាក់ពាក្យ",
    "nav.media_hub": "មជ្ឈមណ្ឌលព័ត៌មាន",
    "nav.Video&Media": "វីឌីអូនិងប្រព័ន្ធផ្សព្វផ្សាយ",
    "nav.New&Event": "ព័ត៌មាននិង​ព្រឹត្តិការណ៍",
    "nav.contact": "ទំនាក់ទំនង",
  },
} as const;
