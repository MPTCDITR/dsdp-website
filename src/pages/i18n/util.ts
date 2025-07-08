// src/i18n/utils.ts
import { defaultLang, ui, type SupportedLanguage } from "./ui.ts";

export function getLangFromUrl(url: URL) {
  const parts = url.pathname.split("/");
  if (parts.length > 1 && Object.keys(ui).includes(parts[1])) {
    return parts[1] as keyof typeof ui;
  }
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(
    key: keyof (typeof ui)[typeof defaultLang],
    params?: Record<string, string>,
  ) {
    // Explicitly declare translatedString as a string type
    let translatedString: string = ui[lang][key] || ui[defaultLang][key];
    if (params) {
      for (const paramKey in params) {
        translatedString = translatedString.replace(
          `{${paramKey}}`,
          params[paramKey],
        );
      }
    }
    return translatedString;
  };
}

export function getRouteFromUrl(url: URL): string {
  const lang = getLangFromUrl(url);
  const path = url.pathname;

  if (lang && path.startsWith(`/${lang}`)) {
    let route = path.substring(`/${lang}`.length);
    return route === "" ? "/" : route;
  }
  return path;
}

export function getLocalizedPath(path: string, lang: keyof typeof ui) {
  if (lang === defaultLang) {
    return path;
  }
  return `/${lang}${path}`;
}

export function removeLanguagePrefix(
  slug: string,
  lang: SupportedLanguage,
): string {
  return slug.replace(`${lang}/`, "");
}
