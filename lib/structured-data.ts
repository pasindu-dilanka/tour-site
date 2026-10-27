import { siteConfig } from "@/data/config";
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    areaServed: { "@type": "Country", name: "Sri Lanka" },
    email: siteConfig.email,
    telephone: siteConfig.phone,
  };
}
