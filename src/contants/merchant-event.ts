import { Event } from "../types/merchant-event";

export const MOCK_EVENTS_DATA: Event[] = [
  {
    id: "CAMP-2025-001",
    name: "Summer Sale 2025",
    type: "Purchase",
    description: "When a customer completes a purchase",
    trigger: "Triggers on checkout completion",
    conversions: 142,
    conversionsLabel: "This month",
    status: true,
  },
  {
    id: "CAMP-2025-002",
    name: "Black Friday Blitz",
    type: "Registration",
    description: "User creates a new account",
    trigger: "Triggers on successful registration",
    conversions: 89,
    conversionsLabel: "This month",
    status: true,
  },
  {
    id: "CAMP-2025-003",
    name: "Valentine's Special",
    type: "Page View",
    description: "User views a product page",
    trigger: "Triggers on product page load",
    conversions: 1242,
    conversionsLabel: "This month",
    status: false,
  },
  {
    id: "CAMP-2025-004",
    name: "Flash Sale Weekend",
    type: "Subscription",
    description: "Product added to shopping cart",
    trigger: "Triggers on cart addition",
    conversions: 342,
    conversionsLabel: "This month",
    status: true,
  },
];

export const TYPE_STYLES = {
  Purchase: "bg-[#DBEAFE] text-[#1E40AF]",
  Registration: "bg-[#D1FAE5] text-[#065F46]",
  "Page View": "bg-[#FEF3C7] text-[#92400E]",
  Subscription: "bg-[#E0E7FF] text-[#4F46E5]",
};

export const iconOptions = [
  "🛒",
  "📦",
  "💳",
  "🔔",
  "📧",
  "🎯",
  "⭐",
  "🎁",
  "👤",
  "📱",
  "💰",
  "🏷️",
  "🔍",
  "📊",
  "🎨",
  "🎭",
  "🎪",
  "🎬",
  "📷",
  "🎵",
  "🎮",
  "⚽",
  "🏀",
  "🎾",
  "🚗",
  "✈️",
  "🏠",
  "🏢",
  "🏪",
  "🏨",
];

// Mock data
export const campaigns = [
  { label: "Summer Sale 2025", value: "summer_sale" },
  { label: "Black Friday Blitz", value: "black_friday" },
  { label: "Valentine's Special", value: "valentine" },
];

export const eventTypes = [
  { label: "Purchase", value: "purchase" },
  { label: "Signup", value: "signup" },
  { label: "Page View", value: "page_view" },
  { label: "Subscription", value: "subscription" },
  { label: "Registration", value: "registration" },
  { label: "Custom Event", value: "custom" },
];
