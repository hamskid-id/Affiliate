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
  onActionClick?: () => void;
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
    onActionClick: () => {
      // Handle create campaign
      console.log("Create Campaign clicked");
    },
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
    onActionClick: () => {
      // Handle invite affiliate
      console.log("Invite Affiliate clicked");
    },
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
    onActionClick: () => {
      // Handle create event
      console.log("Create Event clicked");
    },
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
    onActionClick: () => {
      // Handle add rule
      console.log("Add Rule clicked");
    },
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
    onActionClick: () => {
      // Handle process payout
      console.log("Process Payout clicked");
    },
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
    onActionClick: () => {
      // Handle add integration
      console.log("Add Integration clicked");
    },
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: SettingsIcon,
    description: "Configure your account and preferences",
    showRightSection: false,
  },
];
