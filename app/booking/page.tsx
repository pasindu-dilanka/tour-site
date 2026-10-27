import type { Metadata } from "next";
import { Suspense } from "react";
import { BookingForm } from "@/components/forms/BookingForm";
import { pageMetadata } from "@/lib/seo";
export const metadata: Metadata = pageMetadata(
  "Request a Tour or Transfer",
  "Send your preferred dates, pickup location and destination to enquire about Sri Lanka travel services.",
  "/booking",
);
export default function BookingPage() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <span className="eyebrow">Let’s plan your trip</span>
          <h1>Request a booking</h1>
          <p>Share a few details and continue your enquiry through WhatsApp.</p>
        </div>
      </header>
      <section className="page-content">
        <div className="container form-shell">
          <h2>Tell us about your journey</h2>
          <p>
            This is an enquiry form. Availability, itinerary and pricing will
            need to be confirmed with the business.
          </p>
          <Suspense fallback={<p>Loading form…</p>}>
            <BookingForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}
