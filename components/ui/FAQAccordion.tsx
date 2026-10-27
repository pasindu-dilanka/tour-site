"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/faqs";
export function FAQAccordion() {
  const [active, setActive] = useState<number | null>(0);
  return (
    <div className="faq-list">
      {faqs.map((faq, i) => (
        <div className="faq-item" key={faq.q}>
          <button
            onClick={() => setActive(active === i ? null : i)}
            aria-expanded={active === i}
          >
            <span>{faq.q}</span>
            <ChevronDown className={active === i ? "rotate-icon" : ""} />
          </button>
          {active === i && <p>{faq.a}</p>}
        </div>
      ))}
    </div>
  );
}
