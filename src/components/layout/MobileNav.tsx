import React from "react";

import { getLocalizedRoutes, navigation } from "@/lib/route";
import { cn } from "@/lib/utils";

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
import type { NavMenuProps } from "./DesktopNav";
import { useTranslations } from "@/i18n/utils";
import { MenuIcon } from "lucide-react";

interface MobileNavProps {
  lang: string;
  currentPath: string;
  applyLabel: string;
}

interface NavMenuItemProps {
  item: NavMenuProps;
  isActive: boolean;
}

const NavItem = ({ item, isActive }: NavMenuItemProps) => {
  return (
    <LinkButton
      variant={"ghost"}
      key={item.href}
      href={item.href}
      className={cn(
        isActive && "text-primary",
        "block rounded-md px-4 py-2 text-base font-medium transition-colors hover:bg-accent",
      )}
    >
      {item.label}
    </LinkButton>
  );
};

export function MobileNav({ lang, applyLabel, currentPath }: MobileNavProps) {
  const t = useTranslations(lang);
  const navigationItems = getLocalizedRoutes(navigation, lang);

  const isDropdownActive = (item: NavMenuProps) =>
    currentPath.startsWith(item.href);

  const isActive = (item: NavMenuProps) => currentPath.endsWith(item.href);

  return (
    <div className="flex items-center">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="xl:hidden rounded-md p-4 size-10"
            aria-label="Open menu"
          >
            <MenuIcon className="size-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="p-4">
          <SheetHeader>
            <SheetTitle>{t("nav.menu")}</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-4 mt-4">
            {navigationItems.map((item, index) =>
              item.children ? (
                <Accordion
                  type="single"
                  collapsible
                  className="border-0"
                  key={item.href}
                >
                  <AccordionItem value={`item_${index}`}>
                    <AccordionTrigger
                      className={cn(
                        isDropdownActive(item) && "text-primary",
                        "rounded-md bg-transparent px-4 py-2 font-medium hover:bg-accent nav-link hover:text-primary hover:no-underline text-base",
                      )}
                    >
                      {item.label}
                    </AccordionTrigger>
                    <AccordionContent className="border-t bg-transparent">
                      <ul>
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <NavItem item={child} isActive={isActive(child)} />
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ) : (
                <NavItem item={item} isActive={isActive(item)} />
              ),
            )}
          </div>
          <LinkButton
            target="_blank"
            variant={"secondary"}
            className="px-4 rounded-full text-white md:hidden"
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
