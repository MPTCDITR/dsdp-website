//scr/components/layout/Header.tsx

// scr/components/layout/Header.tsx

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
import { getNavLinks, type NavLink } from "@/components/layout/Navigation";

import DSDP from "@/assets/logo/dsdp-logo.svg";
import { type SupportedLanguage, type TranslationKey } from "@/i18n/ui";
import { useTranslations } from "@/i18n/util";
import { ChevronDown, Menu, X } from "lucide-react";

interface HeaderProps {
  lang: SupportedLanguage;
  currentPath: string;
}

const isLinkActive = (link: NavLink, currentPath: string): boolean => {
  if (currentPath === link.href) return true;
  if (link.dropdown) {
    return link.dropdown.some((item) => currentPath.startsWith(item.href));
  }
  return false;
};

interface DesktopNavLinkProps {
  link: NavLink;
  currentPath: string;

  // eslint-disable-next-line no-unused-vars
  t: (key: TranslationKey) => string;
}

const DesktopNavLink = ({ link, currentPath, t }: DesktopNavLinkProps) => {
  const isActive = isLinkActive(link, currentPath);

  const baseClasses = `rounded-md px-4 py-2 font-medium lg:text-sm transition-colors hover:bg-accent/80 ${
    isActive ? "bg-accent" : ""
  }`;
  const desktopClasses = `flex items-center gap-1 ${baseClasses}`;

  if (link.dropdown) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <a
            href={link.href}
            title={t(link.textKey)}
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
              <a href={item.href} title={t(item.textKey)}>
                {t(item.textKey)}
              </a>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <a href={link.href} title={t(link.textKey)} className={baseClasses}>
      {t(link.textKey)}
    </a>
  );
};

const Header = ({ lang, currentPath }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations(lang);
  const navLinks = getNavLinks(lang);

  return (
    <header className=" sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <a href={`/${lang}/`} className="flex-shrink-0" title={t("nav.home")}>
          <img src={DSDP.src} alt="Logo" className="h-8 w-auto sm:h-12" />
        </a>

        <nav className="hidden lg:flex items-center gap-x-1 flex-grow justify-center ">
          {navLinks.map((link) => (
            <DesktopNavLink
              key={link.href}
              link={link}
              currentPath={currentPath}
              t={t}
            />
          ))}
        </nav>

        <div className="flex items-center gap-x-2">
          <LanguageSwitcher lang={lang} />

          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-expanded={isMobileMenuOpen}
                  aria-controls="mobile-menu"
                >
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex h-full flex-col py-4">
                  <div className="mb-6 px-4">
                    <a
                      href={`/${lang}/`}
                      className="flex-shrink-0"
                      title={t("nav.home")}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <img
                        src={DSDP.src}
                        alt="Logo"
                        className="h-8 w-auto sm:h-12"
                      />
                    </a>
                  </div>
                  <div className="flex-grow space-y-1 px-2">
                    {navLinks.map((link) => {
                      const isActive = isLinkActive(link, currentPath);
                      const mobileClasses = `flex w-full items-center justify-between space-x-1 text-base rounded-md px-4 py-2 font-medium transition-colors hover:bg-accent/80 ${
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
                            <AccordionItem
                              value={link.href}
                              className="border-b-0"
                            >
                              <AccordionTrigger className={mobileClasses}>
                                {t(link.textKey)}
                              </AccordionTrigger>
                              <AccordionContent className="ml-4 mt-1 space-y-1">
                                {link.dropdown.map((item) => (
                                  <a
                                    key={item.href}
                                    href={item.href}
                                    title={t(item.textKey)}
                                    className={`block rounded-md px-4 py-2 text-base font-medium transition-colors hover:bg-accent ${
                                      currentPath.startsWith(item.href)
                                        ? "bg-accent"
                                        : ""
                                    }`}
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
                            title={t(link.textKey)}
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
    </header>
  );
};

export default Header;
