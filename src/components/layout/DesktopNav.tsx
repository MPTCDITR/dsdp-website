import React from "react";

import { getLocalizedRoutes, navigation } from "@/lib/route";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import type { Language } from "@/i18n/ui";

export interface NavMenuProps {
  href: string;
  label: string;
  children?: NavMenuProps[];
}

interface DesktopNavProps {
  lang: Language;
  currentPath: string;
}

interface ListItemProps {
  item: NavMenuProps;
  isActive: boolean;
}

const ListItem = ({ item, isActive }: ListItemProps) => {
  return (
    <NavigationMenuLink
      className={cn(
        isActive && "bg-accent text-primary font-medium",
        "bg-transparent font-medium text-base",
      )}
      href={item.href}
    >
      {item.label}
    </NavigationMenuLink>
  );
};

export default function DesktopNav({ lang, currentPath }: DesktopNavProps) {
  const navigationItems = getLocalizedRoutes(navigation, lang);

  const isActive = (item: NavMenuProps) => currentPath.endsWith(item.href);
  const isDropdownActive = (item: NavMenuProps) =>
    currentPath.startsWith(item.href);

  return (
    <NavigationMenu viewport={false} className="hidden xl:flex items-center">
      <NavigationMenuList>
        {navigationItems.map((item) =>
          item.children ? (
            <NavigationMenuItem
              className={cn(
                isDropdownActive(item) && "text-primary font-semibold",
              )}
              key={item.label}
            >
              <NavigationMenuTrigger className="bg-transparent text-base">
                {item.label}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-46">
                {item.children.map((child) => (
                  <ListItem
                    item={child}
                    isActive={isActive(child)}
                    key={child.label}
                  />
                ))}
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem
              className={cn(
                isActive(item) && "bg-accent text-primary font-semibold",
                "bg-transparent",
              )}
              key={item.label}
            >
              <ListItem item={item} isActive={isActive(item)} />
            </NavigationMenuItem>
          ),
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
