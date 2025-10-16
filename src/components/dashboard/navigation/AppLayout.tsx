"use client";

import React, { useMemo } from "react";
import { Brand } from "@/src/components/shared/Brand";
import { SidebarInset, SidebarProvider } from "@/src/components/ui/sidebar";
import { navItems } from "@/src/contants/navigation";
import { AppSidebar } from "./AppSidebar";
import { MobileNav } from "./MobileNavigation";
import AppHeader from "./AppHeader";

interface NavItem {
  title: string;
  url: string;
  icon: React.ComponentType<any>; // eslint-disable-line @typescript-eslint/no-explicit-any
  count?: number;
}

interface SidebarData {
  navMain: readonly NavItem[];
  logoIcon: React.ComponentType<any>; // eslint-disable-line @typescript-eslint/no-explicit-any
}

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const sidebarData: SidebarData = useMemo(
    () => ({
      navMain: navItems,
      logoIcon: Brand,
    }),
    [],
  );

  return (
    <SidebarProvider>
      <AppSidebar data={sidebarData} />

      <SidebarInset
        className="w-full md:w-[900px] !shadow-[0px_16px_40px_-8px_rgba(88,92,95,0.16)]
"
      >
        <AppHeader />
        <main className="bg-gray-50 px-4 md:px-8 py-6 h-full relative">{children}</main>
      </SidebarInset>

      <MobileNav items={sidebarData.navMain} />
    </SidebarProvider>
  );
}
