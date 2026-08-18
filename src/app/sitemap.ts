import type { MetadataRoute } from "next";
import { schools } from "@/data/schools";
import { articles } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://sushi-school-finder.vercel.app";
  const now = new Date();
  const staticPages = ["", "/schools", "/compare", "/ranking", "/reviews", "/articles", "/beginner", "/inquiry", "/favorites", "/diagnosis", "/about", "/contact", "/privacy", "/terms", "/disclaimer"].map((p) => ({
    url: `${base}${p || "/"}`,
    lastModified: now,
  }));
  const schoolPages = schools.map((s) => ({ url: `${base}/schools/${s.slug}`, lastModified: now }));
  const articlePages = articles.map((a) => ({ url: `${base}/articles/${a.slug}`, lastModified: now }));
  return [...staticPages, ...schoolPages, ...articlePages];
}
