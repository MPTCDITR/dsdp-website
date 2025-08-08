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

import MobileNav from "./MobileNav";
import DSDP from "@/assets/logo/dsdp-logo.svg";
import type { Language } from "@/i18n/ui";
import { ChevronDown } from "lucide-react";

interface NavMenuProps {
  href?: string;
  label: string;
  children?: NavMenuProps[];
}

interface HeaderProps {
  translations: Record<string, string>;
  lang: Language;
  navigationItems: NavMenuProps[];
  currentPath: string;
}

export function Header({
  translations,
  lang,
  navigationItems,
  currentPath,
}: HeaderProps) {
  const isActive = (item: NavMenuProps) => {
    if (!item.href) {
      return item.children
        ? item.children.some(
            (child) => child.href && currentPath.startsWith(child.href),
          )
        : false;
    }
    if (item.href === `/${lang}` || item.href === `/${lang}/`) {
      return currentPath === item.href;
    }

    return currentPath.startsWith(item.href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <a href={`/${lang}/`} className="flex-shrink-0">
          <img src={DSDP.src} alt="Logo" className="h-8 w-auto sm:h-12" />
        </a>
        <nav className="hidden lg:flex lg:gap-0 xl:gap-4 items-center">
          {navigationItems?.map((item) =>
            item.children ? (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={`flex items-center gap-1 text-base lg:px-3 xl:px-4 font-medium nav-link text-black ${
                      isActive(item) ? "active" : "hover:text-primary"
                    }`}
                  >
                    {item.label} <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {item.children?.map((child) => (
                    <DropdownMenuItem key={child.href} asChild>
                      <a
                        href={child.href}
                        className={`block rounded-md px-6 py-2 font-medium nav-link text-base transition-colors hover:bg-accent hover:text-primary text-black ${
                          isActive(child) ? "text-primary bg-accent" : ""
                        }`}
                      >
                        {child.label}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <a
                key={item.href || item.label}
                href={item.href}
                className={`block rounded-md px-4 py-2 text-base font-medium transition-colors nav-link text-black hover:bg-accent hover:text-primary ${
                  isActive(item) ? "bg-accent text-primary" : ""
                }`}
              >
                {item.label}
              </a>
            ),
          )}
        </nav>
        <div className="flex items-center gap-x-2">
          <LanguageSwitcher lang={lang} />
          <MobileNav
            lang={lang}
            translations={translations}
            currentPath={currentPath}
            navigationItems={navigationItems}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
