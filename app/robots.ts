import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/config";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/booking?*"] },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
