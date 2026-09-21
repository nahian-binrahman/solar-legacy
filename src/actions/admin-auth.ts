"use server";

import { verifyAdminPassword, setAdminSession, clearAdminSession } from "@/lib/admin-auth";
import { redirect } from "next/navigation";

export async function loginAdminAction(formData: FormData) {
  const password = formData.get("password")?.toString() || "";

  const isValid = await verifyAdminPassword(password);
  if (!isValid) {
    return { success: false, error: "Invalid password! Please provide the correct admin passcode." };
  }

  await setAdminSession();
  return { success: true };
}

export async function logoutAdminAction() {
  await clearAdminSession();
  redirect("/admin/login");
}
