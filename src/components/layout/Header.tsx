// scr/components/layout/Header.tsx

import React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { getNavLinks, type NavMenuProps } from "@/components/layout/Navigation";

import MobileNav from "./MobileNav";
import DSDP from "@/assets/logo/dsdp-logo.svg";
import type { SupportedLanguage } from "@/i18n/ui";
import { useTranslations } from "@/i18n/util";
import { ChevronDown } from "lucide-react";

interface HeaderProps {
  lang: SupportedLanguage;
  currentPath: string;
}

const isLinkActive = (item: NavMenuProps, currentPath: string): boolean => {
  if (currentPath === item.href) {
    return true;
  }
  if (item.dropdown) {
    return item.dropdown.some((child) => currentPath === child.href);
  }
  return false;
};

const Header = ({ lang, currentPath }: HeaderProps) => {
  const t = useTranslations(lang);
  const navLinks = getNavLinks(lang);
  const isActive = (item: NavMenuProps) => isLinkActive(item, currentPath);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <a href={`/${lang}/`} className="flex-shrink-0">
          <img src={DSDP.src} alt="Logo" className="h-8 w-auto sm:h-12" />
        </a>

        <nav className="hidden lg:flex lg:gap-0 xl:gap-4 items-center">
          {navLinks.map((item) =>
            item.dropdown ? (
              <DropdownMenu key={item.textKey}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={`${
                      isActive(item) ? "active" : ""
                    } flex items-center gap-1 text-base lg:px-3 xl:px-4 font-medium transition-colors hover:text-primary nav-link`}
                  >
                    {t(item.textKey)} <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {item.dropdown.map((child) => (
                    <a key={child.href} href={child.href} className="text-base">
                      <DropdownMenuItem
                        className={`${
                          isActive(child)
                            ? "nav-link text-secondary"
                            : "nav-link"
                        } cursor-pointer focus:text-primary`}
                      >
                        {t(child.textKey)}
                      </DropdownMenuItem>
                    </a>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <a
                key={item.textKey}
                href={item.href}
                className={`${
                  isActive(item) ? "active" : ""
                } hover:text-primary lg:px-3 xl:px-4 font-medium transition-colors nav-link text-base`}
              >
                {t(item.textKey)}
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center gap-x-2">
          <LanguageSwitcher lang={lang} />
          <MobileNav
            lang={lang}
            currentPath={currentPath}
            navLinks={navLinks}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
