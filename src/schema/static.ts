import { z } from "zod";

export const WaitlistFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  campaign: z.string().min(1, "Please select a best fit option"),
});

export type WaitlistFormData = z.infer<typeof WaitlistFormSchema>;
