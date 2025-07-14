// scr/components/layout/MobileNav.tsx

import React, { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// Assuming these types and components are imported from your project
import type { NavMenuProps } from "@/components/layout/Navigation";

import DSDP from "@/assets/logo/dsdp-logo.svg";
import type { SupportedLanguage } from "@/i18n/ui";
import { Menu, X } from "lucide-react";

const isLinkActive = (link: NavMenuProps, currentPath: string): boolean => {
  if (currentPath === link.href) return true;
  return (
    link.dropdown?.some((item) => currentPath.startsWith(item.href)) ?? false
  );
};

interface MobileNavProps {
  lang: SupportedLanguage;
  currentPath: string;
  navLinks: NavMenuProps[];
}

const MobileNav = ({ lang, currentPath, navLinks }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const MobileNavLink = ({
    link,
    closeMenu,
  }: {
    link: NavMenuProps;
    closeMenu: () => void;
  }) => {
    const isActive = isLinkActive(link, currentPath);
    const mobileClasses = `flex w-full items-center justify-between rounded-md px-4 py-2 font-medium transition-colors hover:bg-accent/80 text-base ${
      isActive ? "bg-accent" : ""
    }`;

    if (link.dropdown) {
      return (
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value={link.href} className="border-b-0">
            <AccordionTrigger className={mobileClasses}>
              {link.textKey}
            </AccordionTrigger>
            <AccordionContent className="ml-4 mt-1 space-y-1">
              {link.dropdown.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`block rounded-md px-4 py-2 text-base font-medium transition-colors hover:bg-accent ${
                    currentPath.startsWith(item.href) ? "bg-accent" : ""
                  }`}
                  onClick={closeMenu}
                >
                  {item.textKey}
                </a>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      );
    }

    return (
      <a href={link.href} className={mobileClasses} onClick={closeMenu}>
        {link.textKey}
      </a>
    );
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex h-full flex-col py-4">
          <div className="mb-6 px-4">
            <a href={`/${lang}/`} onClick={() => setIsOpen(false)}>
              <img src={DSDP.src} alt="Logo" className="h-8 w-auto sm:h-12" />
            </a>
          </div>
          <div className="flex-grow space-y-1 px-2">
            {navLinks.map((link) => (
              <MobileNavLink
                key={link.href}
                link={link}
                closeMenu={() => setIsOpen(false)}
              />
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
