"use client";

import { z } from "zod";

export const InviteAffiliateSchema = z.object({
  affiliateName: z.string().min(1, "Affiliate name is required"),
  email: z.string().email("Invalid email address"),
  campaignId: z.string().min(1, "Please select a campaign"),
  commissionRuleId: z.string().min(1, "Please select a commission rule"),
  personalMessage: z.string().optional(),
  invitationExpires: z.string().min(1, "Please select expiration time"),
  sendWelcomeEmail: z.boolean().optional(),
});

export type InviteAffiliateFormData = z.infer<typeof InviteAffiliateSchema>;
