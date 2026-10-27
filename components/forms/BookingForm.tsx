"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { siteConfig } from "@/data/config";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(6, "Please enter a phone or WhatsApp number"),
  date: z.string().min(1, "Choose a preferred date"),
  pickup: z.string().min(2, "Enter a pickup location"),
  destination: z.string().min(2, "Enter a destination"),
  travelers: z.string().min(1, "Select the number of travelers"),
  service: z.string().min(1, "Please select a service"),
  notes: z.string().optional(),
});

type Values = z.infer<typeof schema>;

function BookingFormFields() {
  const params = useSearchParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: {
      service: params.get("service") || "Private Chauffeur Tour",
      pickup: params.get("pickup") || "",
      date: params.get("date") || "",
      travelers: "2",
      notes: "",
    },
  });

  const onSubmit = (values: Values) => {
    const message = [
      "New Lanka Explorer booking enquiry",
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone}`,
      `Date: ${values.date}`,
      `Pickup: ${values.pickup}`,
      `Destination: ${values.destination}`,
      `Travelers: ${values.travelers}`,
      `Service: ${values.service}`,
      `Notes: ${values.notes || "None"}`,
    ].join("\n");

    const whatsappNumber = siteConfig.whatsapp.replace(/\D/g, "");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <form className="form-grid" onSubmit={handleSubmit(onSubmit)} noValidate>
      <label>
        Full name
        <input {...register("name")} placeholder="Your name" />
        {errors.name && (
          <small className="field-error">{errors.name.message}</small>
        )}
      </label>

      <label>
        Email address
        <input
          type="email"
          {...register("email")}
          placeholder="you@example.com"
        />
        {errors.email && (
          <small className="field-error">{errors.email.message}</small>
        )}
      </label>

      <label>
        Phone / WhatsApp
        <input {...register("phone")} placeholder="Country code + number" />
        {errors.phone && (
          <small className="field-error">{errors.phone.message}</small>
        )}
      </label>

      <label>
        Preferred travel date
        <input
          type="date"
          min={new Date().toISOString().slice(0, 10)}
          {...register("date")}
        />
        {errors.date && (
          <small className="field-error">{errors.date.message}</small>
        )}
      </label>

      <label>
        Pickup location
        <input {...register("pickup")} placeholder="Airport, hotel or town" />
        {errors.pickup && (
          <small className="field-error">{errors.pickup.message}</small>
        )}
      </label>

      <label>
        Destination
        <input
          {...register("destination")}
          placeholder="Where would you like to go?"
        />
        {errors.destination && (
          <small className="field-error">{errors.destination.message}</small>
        )}
      </label>

      <label>
        Travelers
        <select {...register("travelers")}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
            <option key={number} value={String(number)}>
              {number} {number === 1 ? "traveler" : "travelers"}
            </option>
          ))}
        </select>
        {errors.travelers && (
          <small className="field-error">{errors.travelers.message}</small>
        )}
      </label>

      <label>
        Service type
        <select {...register("service")}>
          <option value="Private Chauffeur Tour">Private Chauffeur Tour</option>
          <option value="Airport Transfer">Airport Transfer</option>
          <option value="Wildlife Safari Package">
            Wildlife Safari Package
          </option>
          <option value="Whale Watching">Whale Watching</option>
          <option value="City Tour">City Tour</option>
          <option value="Custom Island Tour">Custom Island Tour</option>
        </select>
      </label>

      <label className="full-field">
        Additional requests
        <textarea
          rows={4}
          {...register("notes")}
          placeholder="Destinations, flight details, luggage or other preferences"
        />
      </label>

      <div className="full-field">
        <button className="button button-primary button-large" type="submit">
          Send enquiry on WhatsApp
        </button>

        <p className="form-note">
          This opens WhatsApp with your enquiry details. Your request is not
          sent until you press Send in WhatsApp.
        </p>
      </div>
    </form>
  );
}

export function BookingForm() {
  return (
    <Suspense fallback={<p>Loading booking form...</p>}>
      <BookingFormFields />
    </Suspense>
  );
}
