import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/config";
import { tours } from "@/data/tours";
import { destinations } from "@/data/destinations";
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/about",
    "/booking",
    "/contact",
    "/services",
    "/tours",
    "/destinations",
  ];
  return [
    ...staticPaths.map((path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...tours.map((t) => ({
      url: `${siteConfig.url}/tours/${t.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
    ...destinations.map((d) => ({
      url: `${siteConfig.url}/destinations/${d.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
  ];
}
