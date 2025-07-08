// src/i18n/ui.ts
export const languages = {
  en: "English",
  km: "Khmer",
};

export const defaultLang = "km";

export type SupportedLanguage = keyof typeof languages;

// Define the type for all possible translation keys
export type TranslationKey = keyof (typeof ui)[typeof defaultLang];

export const ui = {
  en: {
    
  },
  km: {

  },
} as const;
