import fs from "fs/promises";
import path from "path";
import { SiteContent } from "@/types/content";
import initialData from "@/data/site-content.json";

const CONTENT_FILE_PATH = path.join(process.cwd(), "src", "data", "site-content.json");

export async function getSiteContent(): Promise<SiteContent> {
  try {
    const raw = await fs.readFile(CONTENT_FILE_PATH, "utf-8");
    return JSON.parse(raw) as SiteContent;
  } catch {
    return initialData as SiteContent;
  }
}

export async function saveSiteContent(content: SiteContent): Promise<boolean> {
  try {
    await fs.writeFile(CONTENT_FILE_PATH, JSON.stringify(content, null, 2), "utf-8");
    return true;
  } catch (err) {
    console.error("Failed to save site content:", err);
    return false;
  }
}

export async function resetSiteContentToDefault(): Promise<boolean> {
  try {
    await fs.writeFile(CONTENT_FILE_PATH, JSON.stringify(initialData, null, 2), "utf-8");
    return true;
  } catch (err) {
    console.error("Failed to reset site content:", err);
    return false;
  }
}
