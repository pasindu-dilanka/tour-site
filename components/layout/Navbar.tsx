"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, CalendarDays, Clock, MapPin } from "lucide-react";
import { siteConfig } from "@/data/config";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const pathname = usePathname();
  const [shortTime, setShortTime] = useState<string | null>(null);
  const [fullTimeDetails, setFullTimeDetails] = useState<{
    timeWithSeconds: string;
    fullDate: string;
  } | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      // 1. Short time for Navbar display (e.g. 10:45 AM)
      const shortFormatted = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Colombo",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }).format(now);

      // 2. Detailed time with seconds for hover popup (e.g. 10:45:30 AM)
      const fullTimeFormatted = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Colombo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }).format(now);

      // 3. Full date for hover popup (e.g. Wednesday, October 28, 2026)
      const dateFormatted = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Colombo",
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(now);

      setShortTime(shortFormatted);
      setFullTimeDetails({
        timeWithSeconds: fullTimeFormatted,
        fullDate: dateFormatted,
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

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
          {/* SLST Time Indicator with Hover Popup */}
          <div className="relative group hidden lg:block">
            {/* Navbar Badge */}
            <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 dark:bg-emerald-950/40 dark:hover:bg-emerald-900/50 border border-emerald-500/30 px-3 py-1.5 rounded-full cursor-pointer transition-colors shadow-sm">
              <Clock
                size={13}
                className="text-emerald-600 dark:text-emerald-400 animate-pulse"
              />
              <span>{shortTime ? `${shortTime} SLST` : "--:-- SLST"}</span>
            </div>

            {/* Hover Tooltip / Modal */}
            <div className="absolute right-0 top-full mt-2 w-64 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">
                <MapPin size={13} />
                Sri Lanka Local Time
              </div>

              <div className="text-2xl font-black text-slate-900 dark:text-white tracking-tight mb-1">
                {fullTimeDetails?.timeWithSeconds || "--:--:--"}
              </div>

              <div className="text-xs font-medium text-slate-600 dark:text-slate-300 mb-3">
                {fullTimeDetails?.fullDate || "Loading date..."}
              </div>

              <div className="border-t border-slate-100 dark:border-slate-800 pt-2 flex items-center justify-between text-[11px] text-slate-400">
                <span>Timezone</span>
                <span className="font-semibold text-slate-700 dark:text-slate-200">
                  Asia/Colombo (UTC+05:30)
                </span>
              </div>
            </div>
          </div>

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
