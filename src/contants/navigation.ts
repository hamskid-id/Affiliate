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
} from "@/src/svg";

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
}

export const navItems: NavItem[] = [
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
