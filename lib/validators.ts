import { z } from "zod";

export const LeadSchema = z.object({
  email: z.string().email().min(6).max(254),
  name: z.string().trim().min(1).max(120).nullable().optional(),
  persona: z.string().trim().min(1).max(50).nullable().optional(),
  consentMarketing: z.boolean(),
  consentAnalytics: z.boolean(),
  source: z.string().trim().min(1).max(50).nullable().optional(),
  message: z.string().trim().min(1).max(500).nullable().optional(),
  website: z.string().trim().max(0).optional() // Honeypot: must be empty
});

export type LeadInput = z.infer<typeof LeadSchema>;
