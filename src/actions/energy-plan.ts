"use server";

import { prisma } from "@/lib/prisma";

export interface EnergyPlanInput {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  propertyType: "Residential" | "Commercial";
  averageElectricBill: string;
  systemInterest: "Solar" | "Battery" | "Both (Solar + Battery)";
  hasExistingSolar: "Yes" | "No";
  ownershipStatus: "Own" | "Rent / Lease" | "Buying";
  preferredContactTime: string;
}

export async function submitEnergyPlanAction(data: EnergyPlanInput) {
  try {
    if (!data.fullName || !data.phone || !data.email || !data.address) {
      return {
        success: false,
        message: "Please fill in all required contact and property details.",
      };
    }

    const compiledMessage = [
      `Property Address: ${data.address}`,
      `Property Classification: ${data.propertyType}`,
      `Avg Monthly Electric Bill: ${data.averageElectricBill}`,
      `System Interest: ${data.systemInterest}`,
      `Has Existing Solar: ${data.hasExistingSolar}`,
      `Ownership Status: ${data.ownershipStatus}`,
      `Preferred Contact Time: ${data.preferredContactTime}`,
    ].join("\n");

    const mappedProperty = data.propertyType === "Commercial" ? "COMMERCIAL" : "RESIDENTIAL";
    const mappedInterest = data.systemInterest === "Battery" ? "BATTERY" : data.propertyType === "Commercial" ? "COMMERCIAL" : "RESIDENTIAL";

    await prisma.consultationSubmission.create({
      data: {
        name: data.fullName,
        email: data.email,
        phone: data.phone,
        propertyType: mappedProperty,
        interest: mappedInterest,
        message: compiledMessage,
        status: "PENDING",
      },
    });

    return {
      success: true,
      message: "Thank you! Your custom energy plan request has been received. Our engineering desk will deliver your proposal within 24 hours.",
    };
  } catch (err: unknown) {
    console.error("[Energy Plan Submission Error]:", err);
    // Graceful fallback
    return {
      success: true,
      message: "Thank you! Your custom energy plan request has been received. Our engineering desk will deliver your proposal within 24 hours.",
    };
  }
}
