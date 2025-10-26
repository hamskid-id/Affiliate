import QuickSetupImg from "@/public/assets/quick-setup.svg";
import RealTimeImg from "@/public/assets/real-time.svg";
import PayoutImg from "@/public/assets/payouts.svg";
import EasyIntegrationImg from "@/public/assets/easy-integration.svg";
import { Testimonial } from "../types";

export const traditionalFeatures = [
  { text: "Too expensive for SMEs", variant: "negative" as const },
  { text: "Overly complex setup", variant: "negative" as const },
  { text: "Requires developer help", variant: "negative" as const },
  { text: "Weeks to get started", variant: "negative" as const },
];

export const ourToolFeatures = [
  { text: "Affordable for any business", variant: "positive" as const },
  { text: "Quick 10-minute setup", variant: "positive" as const },
  { text: "No developer required", variant: "positive" as const },
  { text: "Launch in minutes", variant: "positive" as const },
];

export const everythingYouNeedfeatures = [
  {
    icon: QuickSetupImg,
    title: "Quick Setup",
    description: "Create a campaign and referral link in under 10mins",
  },
  {
    icon: RealTimeImg,
    title: "Real Time Tracking",
    description: "See clicks, conversions, and commissions instantly",
  },
  {
    icon: PayoutImg,
    title: "Payouts from Day One",
    description: "Track and mark affiliate payments manually",
  },
  {
    icon: EasyIntegrationImg,
    title: "Easy Integration",
    description: "One script or API call, no developer required",
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "1",
    quote:
      "Setting up our referral program took just 10 minutes. Everything worked flawlessly from tracking to payout. Our affiliate network has grown 300% since we started using AffiliateHub.",
    author: {
      name: "Gabriel Okonkwo",
      title: "Principal Product Designer, Patreon",
      avatar: "/avatars/gabriel.jpg",
    },
  },
  {
    id: "2",
    quote:
      "Setting up our referral program took just 10 minutes. Everything worked flawlessly from tracking to payout. Our affiliate network has grown 300% since we started using AffiliateHub.",
    author: {
      name: "Gabriel Okonkwo",
      title: "Principal Product Designer, Patreon",
      avatar: "/avatars/gabriel.jpg",
    },
  },
  {
    id: "3",
    quote:
      "Setting up our referral program took just 10 minutes. Everything worked flawlessly from tracking to payout. Our affiliate network has grown 300% since we started using AffiliateHub.",
    author: {
      name: "Gabriel Okonkwo",
      title: "Principal Product Designer, Patreon",
      avatar: "/avatars/gabriel.jpg",
    },
  },
  {
    id: "4",
    quote:
      "Setting up our referral program took just 10 minutes. Everything worked flawlessly from tracking to payout. Our affiliate network has grown 300% since we started using AffiliateHub.",
    author: {
      name: "Gabriel Okonkwo",
      title: "Principal Product Designer, Patreon",
      avatar: "/avatars/gabriel.jpg",
    },
  },
];

export const CAMPAIGN_OPTIONS = [
  { label: "E-commerce", value: "ecommerce" },
  { label: "SaaS", value: "saas" },
  { label: "Digital Products", value: "digital-products" },
  { label: "Services", value: "services" },
  { label: "Other", value: "other" },
];

export const FOOTER_LINKS = {
  product: [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Who It's For", href: "/who-its-for" },
  ],
  company: [
    { label: "Contact", href: "/contact" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

export const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: "linkedin",
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: "twitter",
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: "facebook",
  },
];
