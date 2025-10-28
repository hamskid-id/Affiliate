"use client";

import { z } from "zod";

export const CreateRuleSchema = z.object({
  event: z.string().min(1, "Please select an event"),
  commissionType: z.enum(["flat", "percentage"], {
    message: "Please select a commission type",
  }),
  commissionValue: z.string().min(1, "Commission value is required"),
});

export type CreateRuleFormData = z.infer<typeof CreateRuleSchema>;
