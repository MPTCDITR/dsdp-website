import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { LinkButton } from "../ui/link-button";
import { useTranslations } from "@/i18n/utils";
import { MenuIcon } from "lucide-react";

interface NavMenuProps {
  href?: string;
  label: string;
  children?: NavMenuProps[];
}

interface MobileNavProps {
  translations: Record<string, string>;
  lang: string;
  navigationItems: NavMenuProps[];
  currentPath: string;
  applyLabel: string;
}

export function MobileNav({
  navigationItems,
  lang,
  applyLabel,
}: MobileNavProps) {
  const t = useTranslations(lang);
  return (
    <div className="flex items-center">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="xl:hidden size-6 rounded-md ml-2"
            aria-label="Open menu"
          >
            <MenuIcon className="size-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="p-4">
          <SheetHeader>
            <SheetTitle>{t("nav.menu")}</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-4 mt-4">
            {navigationItems?.map((item, index) =>
              item.children ? (
                <Accordion
                  type="single"
                  collapsible
                  className="border-0"
                  key={item.label}
                >
                  <AccordionItem
                    value={`item_${index}`}
                    className="rounded border-0 data-[state=open]:bg-accent/50"
                  >
                    <AccordionTrigger
                      className={`rounded-md bg-transparent px-4 py-2 font-medium hover:bg-accent nav-link hover:text-primary hover:no-underline text-base`}
                    >
                      {item.label}
                    </AccordionTrigger>
                    <AccordionContent className="border-t bg-transparent">
                      <ul>
                        {item.children?.map((child) => (
                          <li key={child.href}>
                            <a
                              href={child.href}
                              className={`block rounded-md px-6 py-2 font-medium hover:text-primary nav-link hover:bg-accent text-base`}
                            >
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ) : (
                <a
                  key={item.href || item.label}
                  href={item.href}
                  className={`block rounded-md px-4 py-2 text-base font-medium transition-colors hover:bg-accent`}
                >
                  {item.label}
                </a>
              ),
            )}
          </nav>
          <LinkButton
            target="_blank"
            variant={"secondary"}
            className="px-4 rounded-full text-white sm:hidden"
            href="https://go.gov.kh/mptc/dsdp-registration"
          >
            {applyLabel}
          </LinkButton>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNav;
