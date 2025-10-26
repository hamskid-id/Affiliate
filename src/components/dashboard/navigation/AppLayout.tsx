"use client";

 
import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import { Brand } from "@/src/components/shared/Brand";
import { SidebarInset, SidebarProvider } from "@/src/components/ui/sidebar";
import { navItems } from "@/src/contants/navigation";
import { AppSidebar } from "./AppSidebar";
import { MobileNav } from "./MobileNavigation";
import AppHeader from "./AppHeader";
import { AppSidebarData } from "@/src/types/navigation";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const pathname = usePathname();

  const sidebarData: AppSidebarData = useMemo(
    () => ({
      navMain: navItems,
      logoIcon: Brand,
    }),
    [],
  );

  const isOnboardingPage = pathname === "/dashboard/onboarding";

  return (
    <SidebarProvider>
      <AppSidebar data={sidebarData} />

      <SidebarInset className="w-full md:w-[900px] !shadow-[0px_16px_40px_-8px_rgba(88,92,95,0.16)]">
        {!isOnboardingPage && <AppHeader />}

        <main className="bg-gray-50 px-4 md:px-8 py-6 h-full">{children}</main>
      </SidebarInset>

      <MobileNav />
    </SidebarProvider>
  );
}
