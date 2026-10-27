import { MessageCircle, CalendarCheck, Compass } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
const steps = [
  {
    icon: MessageCircle,
    title: "Tell us your plans",
    text: "Share your dates, pickup point, group size and places you would love to see.",
  },
  {
    icon: CalendarCheck,
    title: "Shape your itinerary",
    text: "We will discuss the route, timing, inclusions and quote with you.",
  },
  {
    icon: Compass,
    title: "Enjoy Sri Lanka",
    text: "Once details are confirmed, enjoy the journey at your agreed pace.",
  },
];
export function HowItWorks() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Simple from start to finish"
          title="Your trip, in three easy steps"
        />
        <div className="steps-grid">
          {steps.map((s, i) => (
            <div className="step-card" key={s.title}>
              <span className="step-number">0{i + 1}</span>
              <s.icon size={28} />
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
