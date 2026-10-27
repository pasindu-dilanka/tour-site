import Link from "next/link";
import { Compass, Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/data/config";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="brand footer-brand">
            <span className="brand-mark">
              <Compass />
            </span>
            <span>
              <strong>{siteConfig.name}</strong>
              <small>{siteConfig.tagline}</small>
            </span>
          </Link>
          <p className="footer-copy">
            Thoughtful private travel, tours and transportation across Sri
            Lanka.
          </p>
        </div>
        <div>
          <h3>Explore</h3>
          <Link href="/services">Our services</Link>
          <Link href="/tours">Tours & safari</Link>
          <Link href="/destinations">Destinations</Link>
          <Link href="/about">About us</Link>
        </div>
        <div>
          <h3>Contact</h3>
          <p>
            <MapPin size={16} /> {siteConfig.location}
          </p>
          <p>
            <Phone size={16} /> {siteConfig.phone}
          </p>
          <p>
            <Mail size={16} /> {siteConfig.email}
          </p>
          <Link href="/contact">Send an enquiry</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </span>
        <span>Made for discovering Sri Lanka.</span>
      </div>
    </footer>
  );
}
