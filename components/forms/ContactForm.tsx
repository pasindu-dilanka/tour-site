"use client";
import { useState } from "react";
import { siteConfig } from "@/data/config";
export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  function submit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Website enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}
Email: ${email}

Message:
${message}`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  }
  return (
    <form className="form-grid" onSubmit={submit}>
      <label className="full-field">
        Full name
        <input
          required
          minLength={2}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
        />
      </label>
      <label className="full-field">
        Email address
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
        />
      </label>
      <label className="full-field">
        Your message
        <textarea
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="How can we help?"
        />
      </label>
      <div className="full-field">
        <button className="button button-primary" type="submit">
          Prepare email
        </button>
      </div>
    </form>
  );
}
