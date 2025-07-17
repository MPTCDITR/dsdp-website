// src/components/layout/Languageswitcher.tsx

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import ENSquareIcon from "@/assets/language/en-square.svg";
import KHSquareIcon from "@/assets/language/km-square.svg";
import { languages, type SupportedLanguage } from "@/i18n/ui";
import { ChevronDown } from "lucide-react";

interface LanguageSwitcherProps {
  lang: SupportedLanguage;
}

const languageAssets = {
  en: {
    label: "English",
    mainFlag: ENSquareIcon,
    squareFlag: ENSquareIcon,
  },
  km: {
    label: "ភាសាខ្មែរ",
    mainFlag: KHSquareIcon,
    squareFlag: KHSquareIcon,
  },
};
export function LanguageSwitcher({ lang }: LanguageSwitcherProps) {
  const currentLangAssets = languageAssets[lang];
  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "";

  // Helper to replace the lang segment in the current path
  const getLangPath = (newLang: SupportedLanguage) => {
    const segments = currentPath.split("/").filter(Boolean);
    if (segments.length === 0) return `/${newLang}/`;
    segments[0] = newLang;
    return "/" + segments.join("/") + (currentPath.endsWith("/") ? "/" : "");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-2 text-base font-medium"
        >
          <img
            src={currentLangAssets?.mainFlag?.src}
            width="23"
            height="23"
            alt={`${currentLangAssets?.label} flag`}
          />
          <span>{currentLangAssets?.label}</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {Object.entries(languages).map(([langKey, label]) => {
          const itemLangAssets = languageAssets[langKey as SupportedLanguage];
          return (
            <DropdownMenuItem key={langKey} className="text-base" asChild>
              <a href={getLangPath(langKey as SupportedLanguage)}>
                <img
                  src={itemLangAssets?.mainFlag?.src}
                  width="23"
                  height="23"
                  alt={`${label} flag`}
                  className="mr-2"
                />
                {label}
              </a>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
