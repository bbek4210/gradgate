import { z } from "zod";

export const introduceYourselfSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  district: z.string().min(1, "Please select a district"),
  city: z.string().min(1, "Please select a city"),
  phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^\+?[0-9]+$/, "Phone number must contain only numbers"),
  personalPanNumber: z.string().min(1, "PAN number is required"),
  whatsAppNumber: z.string().min(1, "WhatsApp number is required"),
  gmail: z.string().email("Please enter a valid email address"),
});

export const bankAccountDetailsSchema = z.object({
  bankName: z.string().min(2, "Bank name must be at least 2 characters"),
  bankAccountNumber: z
    .string()
    .min(5, "Account number must be at least 5 characters"),
  registeredPhoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^\+?[0-9]+$/, "Phone number must contain only numbers"),
});

export type IntroduceYourselfFormData = z.infer<typeof introduceYourselfSchema>;
export type BankAccountDetailsFormData = z.infer<
  typeof bankAccountDetailsSchema
>;
