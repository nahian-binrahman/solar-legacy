"use server";

import { revalidatePath } from "next/cache";
import { getSiteContent, saveSiteContent, resetSiteContentToDefault } from "@/lib/content-store";
import { SiteContent } from "@/types/content";
import { isAdminAuthenticated } from "@/lib/admin-auth";

export async function fetchSiteContentAction(): Promise<SiteContent> {
  return await getSiteContent();
}

export async function updateSiteContentAction(newContent: SiteContent) {
  const isAuthed = await isAdminAuthenticated();
  if (!isAuthed) {
    return { success: false, error: "Unauthorized access. Please log in as administrator." };
  }

  const success = await saveSiteContent(newContent);
  if (!success) {
    return { success: false, error: "Failed to persist site content changes." };
  }

  revalidatePath("/");
  revalidatePath("/admin");
  revalidatePath("/admin/content");

  return { success: true };
}

export async function resetContentAction() {
  const isAuthed = await isAdminAuthenticated();
  if (!isAuthed) {
    return { success: false, error: "Unauthorized access." };
  }

  const success = await resetSiteContentToDefault();
  if (success) {
    revalidatePath("/");
    revalidatePath("/admin");
  }
  return { success };
}
