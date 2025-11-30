import { z } from "zod";

export const consultancyOnboardingSchema = z.object({
  // About section
  logo: z.string().optional(),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  location: z.string().min(2, "Location must be at least 2 characters"),
  phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^\+?[0-9]+$/, "Phone number must contain only numbers"),

  // Socials section
  gmail: z
    .string()
    .url("Please enter a valid URL")
    .optional()
    .or(z.literal("")),
  website: z
    .string()
    .url("Please enter a valid URL")
    .optional()
    .or(z.literal("")),
  tikTok: z
    .string()
    .url("Please enter a valid URL")
    .optional()
    .or(z.literal("")),
  instagram: z
    .string()
    .url("Please enter a valid URL")
    .optional()
    .or(z.literal("")),
  facebook: z
    .string()
    .url("Please enter a valid URL")
    .optional()
    .or(z.literal("")),

  // Credibility Video URL section
  video1: z
    .string()
    .url("Please enter a valid URL")
    .optional()
    .or(z.literal("")),
  video2: z
    .string()
    .url("Please enter a valid URL")
    .optional()
    .or(z.literal("")),
  video3: z
    .string()
    .url("Please enter a valid URL")
    .optional()
    .or(z.literal("")),
});

export type ConsultancyOnboardingFormData = z.infer<
  typeof consultancyOnboardingSchema
>;
