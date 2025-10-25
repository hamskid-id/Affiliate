"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/src/components/ui/sidebar";
import { cn } from "@/src/lib/utils";
import { NavItem } from "@/src/types/navigation";

interface NavMainProps {
  items: readonly NavItem[];
}

export function NavMain({ items }: NavMainProps) {
  const { state } = useSidebar();

  const isCollapsed = state === "collapsed";
  const pathname = usePathname();

  // Find the most specific (longest) matching route
  const getActiveUrl = () => {
    // Find exact match first
    const exactMatch = items.find((item) => pathname === item.url);
    if (exactMatch) return exactMatch.url;

    // Find all matching parent routes
    const matchingItems = items.filter((item) =>
      pathname.startsWith(item.url + "/"),
    );

    // Return the longest (most specific) match
    if (matchingItems.length > 0) {
      return matchingItems.sort((a, b) => b.url.length - a.url.length)[0].url;
    }

    return null;
  };

  const activeUrl = getActiveUrl();
  const isActive = (url: string) => url === activeUrl;

  return (
    <SidebarGroup className="custom-scroll">
      <SidebarMenu className="flex flex-col gap-2 mb-5">
        {items.map((item, index) => {
          const active = isActive(item.url);

          return (
            <SidebarMenuItem key={`${item.url}-${index}`}>
              <SidebarMenuButton
                tooltip={item.title}
                asChild
                className={cn(
                  " transition-colors duration-200 rounded-[50px] !px-4",
                  active
                    ? "bg-[#4169E11A] text-[#4169E1]"
                    : "text-[#606060] hover:text-[#4169E1] hover:bg-[#4169E11A]/70",
                  !isCollapsed && "!h-[42px]",
                )}
                data-active={active}
              >
                <Link
                  href={item.url}
                  className="flex items-center gap-3 w-full"
                >
                  {item.icon && (
                    <item.icon
                      isActive={active}
                      className="w-[24px] h-[24px] flex-shrink-0"
                    />
                  )}
                  <span className="text-[13px] font-[500]">{item.title}</span>
                </Link>
              </SidebarMenuButton>
              {index === 4 && (
                <div className="-mx-2 my-3 h-[1px] bg-[#E5E7EB]" />
              )}
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
