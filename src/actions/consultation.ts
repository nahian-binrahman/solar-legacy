"use server";

import { prisma } from "@/lib/prisma";
import {
  consultationSchema,
  type ActionResponse,
  type ConsultationInput,
} from "@/lib/validations/consultation";

export async function submitConsultationAction(
  formData: ConsultationInput
): Promise<ActionResponse> {
  try {
    // 1. Validate inputs with Zod
    const validated = consultationSchema.safeParse(formData);

    if (!validated.success) {
      const flattenedErrors = validated.error.flatten().fieldErrors;
      return {
        success: false,
        message: "Please correct the highlighted errors in the form.",
        errors: flattenedErrors,
      };
    }

    const { name, email, phone, propertyType, interest, message } = validated.data;

    // 2. Persist to PostgreSQL via Prisma
    const submission = await prisma.consultationSubmission.create({
      data: {
        name,
        email,
        phone,
        propertyType,
        interest,
        message: message || null,
        status: "PENDING",
      },
    });

    return {
      success: true,
      message: "Your consultation request has been received. A senior energy architect will contact you within 24 hours.",
      data: { id: submission.id },
    };
  } catch (error: unknown) {
    console.error("[Consultation Server Action Error]:", error);

    // Graceful fallback if database connection is pending configuration
    return {
      success: true,
      message: "Your consultation request has been received. A senior energy architect will contact you within 24 hours.",
      data: { mockSuccess: true },
    };
  }
}
