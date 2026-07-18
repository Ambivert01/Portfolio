import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site-config";
import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticRoutes = [
    "/",
    "/work",
    "/about",
    "/experience",
    "/research",
    "/achievements",
    "/stack",
    "/contact",
    "/resume",
    "/changelog",
    "/legal/privacy",
    "/legal/license",
  ].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1 : 0.8,
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${base}/work/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...projectRoutes];
}
