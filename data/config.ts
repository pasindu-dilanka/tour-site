export const siteConfig = {
  name: "Lanka Explorer",
  tagline: "Luxury Travel & Chauffeurs",
  description:
    "Discover Sri Lanka with private transportation, tailor-made tours, wildlife safaris, whale watching and airport transfers.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "94771751899",
  email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "pasindu.dilanka98@gmail.com",
  phone: "+94 77 175 1899",
  location: "Sri Lanka",
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Tours & Safari", href: "/tours" },
    { label: "Destinations", href: "/destinations" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};
