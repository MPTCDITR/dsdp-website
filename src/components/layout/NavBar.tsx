// src/components/layout/NavBar.tsx

import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";

import DSDP from "@/assets/logo/dsdp-logo.svg";
import { type SupportedLanguage, type TranslationKey } from "@/i18n/ui";
import { useTranslations } from "@/i18n/util";
import { ChevronDown, Menu, X } from "lucide-react";

interface HeaderProps {
  lang: SupportedLanguage;
  currentPath: string;
}

interface NavLink {
  href: string;
  textKey: TranslationKey;
  dropdown?: NavLink[];
}

const Navbar = ({ lang, currentPath }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations(lang);

  const navLinks: NavLink[] = [
    { href: `/${lang}/`, textKey: "nav.home" },
    {
      href: `/${lang}/about`,
      textKey: "nav.about",
      dropdown: [
        { href: `/${lang}/about/about-us`, textKey: "nav.about_us" },
        { href: `/${lang}/about/aout-team`, textKey: "nav.about_team" },
      ],
    },
    { href: `/${lang}/partnerships`, textKey: "nav.our_partners" },
    { href: `/${lang}/how-to-apply`, textKey: "nav.how_to_apply" },
    {
      href: `/${lang}/media`,
      textKey: "nav.media_hub",
      dropdown: [
        { href: `/${lang}/News & Event`, textKey: "nav.New&Event" },
        { href: `/${lang}/Video & Media`, textKey: "nav.Video&Media" },
      ],
    },
    { href: `/${lang}/contact`, textKey: "nav.contact" },
  ];

  const isLinkActive = (link: NavLink, currentPath: string): boolean => {
    if (currentPath === link.href) return true;
    if (link.dropdown) {
      return link.dropdown.some((item) => currentPath.startsWith(item.href));
    }
    return false;
  };

  const renderNavLink = (link: NavLink, isMobile: boolean = false) => {
    const isActive = isLinkActive(link, currentPath);

    const baseClasses = `rounded-md px-4 py-2 font-medium  text-base ${
      isActive ? "bg-accent" : ""
    }`;
    const desktopClasses = `flex items-center gap-1 ${baseClasses}`;
    const mobileClasses = ` rounded-md px-4 py-2 font-medium  text-base  ${
      isActive ? "bg-accent" : ""
    }`;

    if (link.dropdown && !isMobile) {
      return (
        <DropdownMenu key={link.href}>
          <DropdownMenuTrigger asChild>
            <a
              href={link.href}
              className={desktopClasses}
              onClick={(e) => e.preventDefault()}
            >
              {t(link.textKey)}
              <ChevronDown className="h-4 w-4" />
            </a>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {link.dropdown.map((item) => (
              <DropdownMenuItem key={item.href} asChild>
                <a href={item.href}>{t(item.textKey)}</a>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }

    return (
      <a
        key={link.href}
        href={link.href}
        className={isMobile ? mobileClasses : baseClasses}
        onClick={() => {
          if (isMobile) setIsMobileMenuOpen(false);
        }}
      >
        {t(link.textKey)}
      </a>
    );
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <a href={`/${lang}/`} className="flex-shrink-0">
          <img src={DSDP.src} alt="Logo" className="h-12 w-auto" />
        </a>

        {/* Destop navigation links  */}
        <div className="hidden items-center lg:flex lg:flex-grow lg:justify-center">
          <div className="flex items-center gap-x-1">
            {navLinks.map((link) => renderNavLink(link))}
          </div>
        </div>

        <div className="flex items-center gap-x-2">
          <LanguageSwitcher lang={lang} />
          {/* Mobile menu toggle button */}
          <div className="lg:hidden">
            {" "}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-expanded={isMobileMenuOpen}
                  aria-controls="mobile-menu "
                >
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-7 w-7" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full py-4">
                  <div className="mb-6 px-4">
                    <a href={`/${lang}/`} className="flex-shrink-0">
                      <img src={DSDP.src} alt="Logo" className="h-12 w-auto" />
                    </a>
                  </div>

                  <div className="space-y-1 px-2 flex-grow">
                    {navLinks.map((link) => {
                      const isActive = isLinkActive(link, currentPath);
                      const mobileClasses = `flex items-center space-x-1 text-base rounded-md px-4 py-2 font-medium transition-colors  ${
                        isActive ? "bg-accent" : ""
                      }`;
                      if (link.dropdown) {
                        return (
                          <Accordion
                            type="single"
                            collapsible
                            className="w-full"
                            key={link.href}
                          >
                            <AccordionItem value={link.href}>
                              <AccordionTrigger className={mobileClasses}>
                                {t(link.textKey)}
                              </AccordionTrigger>
                              <AccordionContent className="ml-4 space-y-1">
                                {link.dropdown.map((item) => (
                                  <a
                                    key={item.href}
                                    href={item.href}
                                    className="block rounded-md px-4 py-2 text-base font-medium hover:bg-accent"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    {t(item.textKey)}
                                  </a>
                                ))}
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        );
                      } else {
                        return (
                          <a
                            key={link.href}
                            href={link.href}
                            className={mobileClasses}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {t(link.textKey)}
                          </a>
                        );
                      }
                    })}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
