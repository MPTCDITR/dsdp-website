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
  const switchLanguage = (newLang: SupportedLanguage) => {
    const currentPath = window.location.pathname;
    const segments = currentPath.split("/").filter(Boolean);

    const pathWithoutLang =
      segments.length > 0 && languages[segments[0] as SupportedLanguage]
        ? segments.slice(1).join("/")
        : segments.join("/");

    window.location.pathname = `/${newLang}/${pathWithoutLang}`;
  };

  const currentLangAssets = languageAssets[lang];

  return (
    <>
      <div>
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
              const itemLangAssets =
                languageAssets[langKey as SupportedLanguage];
              return (
                <DropdownMenuItem
                  key={langKey}
                  onClick={() => switchLanguage(langKey as SupportedLanguage)}
                  className="text-base"
                  asChild
                >
                  <a href={`/${langKey}/`}>
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
      </div>
    </>
  );
}
