import { z } from "zod";

export const consultationSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(25, "Phone number is too long"),
  propertyType: z.enum(["RESIDENTIAL", "COMMERCIAL", "ESTATE"] as const, {
    message: "Please select a valid property type",
  }),
  interest: z.enum(["RESIDENTIAL", "COMMERCIAL", "BATTERY"] as const, {
    message: "Please select an area of interest",
  }),
  message: z
    .string()
    .trim()
    .max(1000, "Message cannot exceed 1000 characters")
    .optional()
    .or(z.literal("")),
});

export type ConsultationInput = z.infer<typeof consultationSchema>;

export type ActionResponse<T = unknown> = {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string[]>;
};
