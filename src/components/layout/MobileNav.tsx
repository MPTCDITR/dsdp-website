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
}

export function MobileNav({ navigationItems, currentPath }: MobileNavProps) {
  const isActive = (item: NavMenuProps) => {
    if (!item.href) {
      return item.children
        ? item.children.some(
            (child) => child.href && currentPath.startsWith(child.href),
          )
        : false;
    }

    if (item.href === "/" || item.href === "") {
      return currentPath === item.href;
    }
    return currentPath.startsWith(item.href);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label="Open menu"
        >
          <MenuIcon className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="border-l-2 border-dashed">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
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
                    className={`${
                      isActive(item) ? "active " : ""
                    }rounded-md bg-transparent px-4 py-2 font-medium hover:bg-accent nav-link hover:text-primary hover:no-underline text-base`}
                  >
                    {item.label}
                  </AccordionTrigger>
                  <AccordionContent className="border-t bg-transparent">
                    <ul>
                      {item.children?.map((child) => (
                        <li key={child.href}>
                          <a
                            href={child.href}
                            className={`${
                              isActive(child) ? "text-primary " : ""
                            }block rounded-md px-6 py-2 font-medium hover:text-primary nav-link hover:bg-accent text-base`}
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
                className={`block rounded-md px-4 py-2 text-base font-medium transition-colors hover:bg-accent ${
                  isActive(item) ? "bg-accent" : ""
                }`}
              >
                {item.label}
              </a>
            ),
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
