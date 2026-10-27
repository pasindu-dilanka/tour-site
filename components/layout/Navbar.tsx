"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, CalendarDays } from "lucide-react";
import { siteConfig } from "@/data/config";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link href="/" className="brand">
          <span className="brand-mark">
            <Compass size={25} />
          </span>
          <span>
            <strong>{siteConfig.name}</strong>
            <small>{siteConfig.tagline}</small>
          </span>
        </Link>
        <nav className="desktop-nav">
          {siteConfig.nav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={isActive ? "active-nav-link" : ""}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          <Link href="/booking" className="button button-primary nav-book">
            <CalendarDays size={16} /> Book Your Trip
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}