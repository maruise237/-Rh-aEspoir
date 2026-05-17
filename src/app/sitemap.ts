import type { MetadataRoute } from "next";
import { allSitePaths, absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return allSitePaths().map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency:
      path === "/" || path === "/actualites" ? "weekly" : path.includes("/actualites/") ? "monthly" : "yearly",
    priority: path === "/" ? 1 : path === "/contact" ? 0.9 : path.includes("/actualites/") ? 0.8 : 0.7,
  }));
}
