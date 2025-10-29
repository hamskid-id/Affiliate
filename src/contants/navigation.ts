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
import { Landmark } from "lucide-react";
import { Role } from "../types";
import { AwardSvg, PointerSvg } from "../svg/affiliate";
import { MerchantIcon, TransactionIcon } from "../svg/admin";

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
  roles: Role[];
}

export const navItems: NavItem[] = [
  {
    title: "Onboarding",
    url: "/dashboard/onboarding",
    icon: DashboardIcon,
    hideNav: true,
    hideHeader: true,
    roles: [Role.MERCHANT],
  },
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: DashboardIcon,
    description: "Monitor your affiliate performance",
    showRightSection: false,
    roles: [Role.MERCHANT, Role.AFFILIATE, Role.ADMIN],
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
    actionButtonUrl: "/dashboard/campaigns/create",
    roles: [Role.MERCHANT],
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
    roles: [Role.MERCHANT, Role.ADMIN],
  },
  {
    title: "Merchant",
    url: "/dashboard/merchant",
    icon: MerchantIcon,
    description: "View and manage all registered merchant accounts",
    showRightSection: true,
    showSearch: true,
    roles: [Role.ADMIN],
  },
  {
    title: "Events",
    url: "/dashboard/events",
    icon: EventsIcon,
    description:
      "Define the actions that count as conversions for your campaigns.",
    roles: [Role.MERCHANT],
  },
  {
    title: "Commission Rules",
    url: "/dashboard/commission-rules",
    icon: CommissionRulesIcon,
    description:
      "Manage automated commission calculations for your affiliate programs",
    roles: [Role.MERCHANT],
  },
  {
    title: "Payments",
    url: "/dashboard/payments",
    icon: PayoutsIcon,
    description: "Configure your payment methods securely",
    showRightSection: false,
    hideNav: true,
    roles: [Role.MERCHANT, Role.ADMIN],
  },
  {
    title: "Transactions",
    url: "/dashboard/transactions",
    icon: TransactionIcon,
    showRightSection: true,
    showSearch: true,
    description:
      " Monitor and manage all affiliate transactions and commissions",
    roles: [Role.ADMIN],
  },
  {
    title: "Payouts",
    url: "/dashboard/payouts",
    icon: PayoutsIcon,
    description:
      "Manage automated commission calculations for your affiliate programs",
    roles: [Role.MERCHANT, Role.ADMIN],
  },
  // {
  //   title: "Integration",
  //   url: "/dashboard/integration",
  //   icon: IntegrationIcon,
  //   description: "Connect with third-party tools and services",
  //   showRightSection: true,
  //   showSearch: true,
  //   showActionButton: true,
  //   actionButtonText: "Add Integration",
  //   actionButtonUrl: "/dashboard/integration/add",
  //   roles: [Role.MERCHANT],
  // },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: SettingsIcon,
    description: "Configure your account and preferences",
    showRightSection: false,
    roles: [Role.MERCHANT, Role.ADMIN],
  },
  {
    title: "Clicks & Conversion",
    url: "/dashboard/events",
    icon: PointerSvg,
    roles: [Role.AFFILIATE],
  },
  {
    title: "Leaderboard",
    url: "/dashboard/leaderboard",
    icon: AwardSvg,
    roles: [Role.AFFILIATE],
  },
  {
    title: "Payments",
    url: "/dashboard/payments",
    icon: Landmark,
    roles: [Role.AFFILIATE],
  },
  {
    title: "Request Payouts",
    description:
      "Withdraw your available balance by submitting a payout request",
    url: "/dashboard/request-payouts",
    icon: PayoutsIcon,
    roles: [Role.AFFILIATE],
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "#features" },
  { label: "Who It's For", href: "#who-its-for" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
];
