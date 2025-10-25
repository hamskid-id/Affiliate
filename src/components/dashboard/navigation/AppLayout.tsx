"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import { Brand } from "@/src/components/shared/Brand";
import { SidebarInset, SidebarProvider } from "@/src/components/ui/sidebar";
import { navItems } from "@/src/contants/navigation";
import { AppSidebar } from "./AppSidebar";
import { MobileNav } from "./MobileNavigation";
import AppHeader from "./AppHeader";
import SetupHeader from "./SetupHeader";
import { cn } from "@/src/lib/utils";

interface NavItem {
  title: string;
  url: string;
  icon: React.ComponentType<any>;
  count?: number;
}

interface SidebarData {
  navMain: readonly NavItem[];
  logoIcon: React.ComponentType<any>;
}

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const pathname = usePathname();

  const sidebarData: SidebarData = useMemo(
    () => ({
      navMain: navItems,
      logoIcon: Brand,
    }),
    [],
  );

  // Determine if we’re on the main dashboard route
  const isDashboardPage = pathname === "/dashboard";

  // Replace with your actual dashboard setup state (can come from API or store)
  const dashboardIsSetup = false; // e.g., from context or fetched value

  const showSetupView = isDashboardPage && !dashboardIsSetup;

  return (
    <SidebarProvider>
      <AppSidebar data={sidebarData} />

      <SidebarInset className="w-full md:w-[900px] !shadow-[0px_16px_40px_-8px_rgba(88,92,95,0.16)]">
        {showSetupView ? <SetupHeader /> : <AppHeader />}

        <main
          className={cn(
            "bg-gray-50 px-4 md:px-8 py-6 h-full",
            showSetupView && " px-0 md:px-0 py-0",
          )}
        >
          {children}
        </main>
      </SidebarInset>

      <MobileNav items={sidebarData.navMain} />
    </SidebarProvider>
  );
}
