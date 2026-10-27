import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/config";
export function WhatsAppButton() {
  const url = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hello, I would like to enquire about travel services in Sri Lanka.")}`;
  return (
    <a
      className="whatsapp-float"
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={24} />
      <span>Chat with us</span>
    </a>
  );
}
