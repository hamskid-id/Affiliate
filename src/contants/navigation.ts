/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  DashboardIcon,
  CampaignIcon,
  EventsIcon,
  PayoutsIcon,
  SettingsIcon,
  IntegrationIcon,
  AffiliatesIcon,
  CommissionRulesIcon,
  PointerSvg,
  AwardSvg,
} from "@/src/svg";
import { Landmark } from "lucide-react";

export interface NavItem {
  title: string;
  url: string;
  icon: any;
  description?: string;
  showRightSection?: boolean;
  showSearch?: boolean;
  showActionButton?: boolean;
  actionButtonText?: string;
  actionButtonUrl?: string; // for navigation
  onActionClick?: () => void; // for custom actions
  hideNav?: boolean;
  hideHeader?: boolean;
}

export const navItems: NavItem[] = [
  {
    title: "Onboarding",
    url: "/dashboard/onboarding",
    icon: DashboardIcon,
    hideNav: true,
    hideHeader: true,
  },
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: DashboardIcon,
    description: "Monitor your affiliate performance",
    showRightSection: false,
  },
  {
    title: "Campaigns",
    url: "/dashboard/campaigns",
    icon: CampaignIcon,
    description: "Manage your marketing campaigns",
    showRightSection: true,
    showSearch: true,
    showActionButton: true,
    actionButtonText: "Create Campaign",
    actionButtonUrl: "/dashboard/campaigns/create", // Navigate to create page
  },
  {
    title: "Affiliates",
    url: "/dashboard/affiliates",
    icon: AffiliatesIcon,
    description: "Approve new affiliates and track existing ones",
    showRightSection: true,
    showSearch: true,
    showActionButton: true,
    actionButtonText: "Invite Affiliate",
    actionButtonUrl: "/dashboard/affiliates/invite",
  },
  {
    title: "Events",
    url: "/dashboard/events",
    icon: EventsIcon,
    description: "Track and manage conversion events",
    showRightSection: true,
    showSearch: true,
    showActionButton: true,
    actionButtonText: "Create Event",
    actionButtonUrl: "/dashboard/events/create",
  },
  {
    title: "Commission Rules",
    url: "/dashboard/commission-rules",
    icon: CommissionRulesIcon,
    description: "Set up and manage commission structures",
    showRightSection: true,
    showSearch: true,
    showActionButton: true,
    actionButtonText: "Add Rule",
    actionButtonUrl: "/dashboard/commission-rules/create",
  },
  {
    title: "Payments",
    url: "/dashboard/payments",
    icon: PayoutsIcon,
    description: "Configure your payment methods securely",
    showRightSection: false,
    hideNav: true,
  },
  {
    title: "Payouts",
    url: "/dashboard/payouts",
    icon: PayoutsIcon,
    description: "Process and track affiliate payments",
    showRightSection: true,
    showSearch: true,
    showActionButton: true,
    actionButtonText: "Process Payout",
    actionButtonUrl: "/dashboard/payouts/process",
  },
  {
    title: "Integration",
    url: "/dashboard/integration",
    icon: IntegrationIcon,
    description: "Connect with third-party tools and services",
    showRightSection: true,
    showSearch: true,
    showActionButton: true,
    actionButtonText: "Add Integration",
    actionButtonUrl: "/dashboard/integration/add",
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: SettingsIcon,
    description: "Configure your account and preferences",
    showRightSection: false,
  },
];

export const affiliateNav: NavItem[] = [
  { title: "Dashboard", url: "/dashboard", icon: DashboardIcon },
  { title: "Clicks & Conversion", url: "/dashboard/events", icon: PointerSvg },
  { title: "Leaderboard", url: "/dashboard/leaderboard", icon: AwardSvg },
  { title: "Payments", url: "/dashboard/payments", icon: Landmark },
  {
    title: "Request Payouts",
    description:
      "Withdraw your available balance by submitting a payout request",
    url: "/dashboard/request-payouts",
    icon: PayoutsIcon,
  },
];
