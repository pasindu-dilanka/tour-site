"use client";
import { useState } from "react";
import type { Metadata } from "next";
import { tours } from "@/data/tours";
import { TourCard } from "@/components/cards/TourCard";
import { CTASection } from "@/components/sections/CTASection";
const filters = [
  { id: "all", label: "All packages" },
  { id: "culture", label: "Heritage & culture" },
  { id: "wildlife", label: "Wildlife & nature" },
  { id: "coastal", label: "Coast & beaches" },
];
export default function ToursPage() {
  const [filter, setFilter] = useState("all");
  const filtered = tours.filter(
    (t) => filter === "all" || t.category === filter,
  );
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <span className="eyebrow">Curated experiences</span>
          <h1>Sri Lanka tour packages</h1>
          <p>
            Explore sample itineraries that can be adapted to your dates,
            interests and pace.
          </p>
        </div>
      </header>
      <section className="page-content">
        <div className="container">
          <div className="filter-row">
            {filters.map((f) => (
              <button
                key={f.id}
                className={`button ${filter === f.id ? "button-primary" : "filter-button"}`}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="card-grid">
            {filtered.map((t) => (
              <TourCard key={t.id} tour={t} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
