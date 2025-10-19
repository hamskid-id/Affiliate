import { z } from "zod";

export const CreateEventSchema = z.object({
  campaignId: z.string().min(1, "Please select a campaign"),
  eventName: z.string().min(1, "Event name is required"),
  testUrl: z.string().min(1, "Test Url is required"),
  rate: z.string().min(1, "Rate is required"),
  eventType: z.string().min(1, "Please select an event type"),
  eventDescription: z.string().optional(),
  trackingUrl: z
    .string()
    .url("Please enter a valid URL")
    .optional()
    .or(z.literal("")),
});

export type CreateEventFormData = z.infer<typeof CreateEventSchema>;
