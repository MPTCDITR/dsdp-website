import React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import type { Language } from "@/i18n/ui";
import { ChevronDown } from "lucide-react";

interface NavMenuProps {
  href?: string;
  label: string;
  children?: NavMenuProps[];
}

interface DesktopNavProps {
  lang: Language;
  navigationItems: NavMenuProps[];
  currentPath: string;
}

export default function DesktopNav({
  lang,
  navigationItems,
  currentPath,
}: DesktopNavProps) {
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
    <nav className="hidden lg:flex md:gap-0 items-center">
      {navigationItems?.map((item) =>
        item.children ? (
          <DropdownMenu key={item.label}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={`flex items-center text-base font-medium nav-link text-black ${
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
            className={`block rounded-md xl:px-4 lg:px-2 py-2 text-base font-medium transition-colors nav-link text-black hover:bg-accent hover:text-primary ${
              isActive(item) ? "bg-accent text-primary" : ""
            }`}
          >
            {item.label}
          </a>
        ),
      )}
    </nav>
  );
}
