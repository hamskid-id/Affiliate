import z from "zod";

export const PayoutSettingsSchema = z.object({
  frequency: z.string().min(1, "Please select a frequency"),
  threshold: z.string().min(1, "Please enter a threshold amount"),
  campaigns: z.array(z.string()).optional(),
});

export type PayoutSettingsFormData = z.infer<typeof PayoutSettingsSchema>;
