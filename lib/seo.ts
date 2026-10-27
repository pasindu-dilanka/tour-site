import { siteConfig } from "@/data/config";
export function pageMetadata(title: string, description: string, path = "") {
  const url = `${siteConfig.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_US",
    },
    twitter: { card: "summary_large_image" as const, title, description },
  };
}
