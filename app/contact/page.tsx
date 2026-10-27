import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/config";
import { ContactForm } from "@/components/forms/ContactForm";
export const metadata: Metadata = pageMetadata(
  "Contact Lanka Explorer",
  "Contact Lanka Explorer to discuss private transport, tours, safaris and coastal experiences in Sri Lanka.",
  "/contact",
);
export default function ContactPage() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <span className="eyebrow">We’re here to help</span>
          <h1>Let’s talk about your trip</h1>
          <p>
            Have a question or a route in mind? Send us your details and we’ll
            be happy to discuss it.
          </p>
        </div>
      </header>
      <section className="page-content">
        <div className="container contact-grid">
          <aside className="contact-info">
            <h2>Contact details</h2>
            <p>
              Replace the sample business details in <code>data/config.ts</code>{" "}
              with your real contact information before publishing.
            </p>
            <p>
              <MapPin size={17} /> {siteConfig.location}
            </p>
            <Link href={`mailto:${siteConfig.email}`}>
              <Mail size={17} />
              {siteConfig.email}
            </Link>
            <Link href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}>
              <Phone size={17} />
              {siteConfig.phone}
            </Link>
            <Link href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank">
              <MessageCircle size={17} /> WhatsApp us
            </Link>
          </aside>
          <div className="form-shell">
            <h2>Send an enquiry</h2>
            <p>
              This form opens your email app with a prepared message; it does
              not silently send or store your information.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
