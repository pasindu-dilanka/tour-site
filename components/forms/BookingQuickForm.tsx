"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
export function BookingQuickForm() {
  const router = useRouter();
  const [service, setService] = useState("Private Chauffeur Tour");
  const [pickup, setPickup] = useState("");
  const [date, setDate] = useState("");
  function submit(e: React.FormEvent) {
    e.preventDefault();
    const q = new URLSearchParams({ service, pickup, date });
    router.push(`/booking?${q.toString()}`);
  }
  return (
    <form className="quick-booking" onSubmit={submit}>
      <label>
        Service type
        <select value={service} onChange={(e) => setService(e.target.value)}>
          <option>Private Chauffeur Tour</option>
          <option>Airport Transfer</option>
          <option>Wildlife Safari Package</option>
          <option>Whale Watching Coastal</option>
          <option>City Tour</option>
        </select>
      </label>
      <label>
        Pickup location
        <input
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
          placeholder="Airport, hotel or city"
        />
      </label>
      <label>
        Travel date
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <button className="button button-green" type="submit">
        <Search size={16} /> Check availability
      </button>
    </form>
  );
}
