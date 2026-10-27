# My Lanka Tour — Next.js conversion

This project converts the supplied single-file Lanka Explorer HTML concept into reusable Next.js App Router files while retaining its ocean/jungle/sand palette, travel photography, glass hero booking strip, cards, sections, dark/light theme, and booking interactions.

## Run locally
1. Install Node.js (current LTS).
2. In this folder run `npm install`.
3. Copy `.env.example` to `.env.local` and replace the example website URL, WhatsApp number and email.
4. Run `npm run dev`, then open http://localhost:3000.
5. Run `npm run build` before deploying.

## Before publishing
- Update `data/config.ts` and `.env.local` with real business contact information and URL.
- Replace placeholder testimonials with real customer reviews; they are not shown by default.
- Confirm service claims, vehicle features, licences, tour inclusions, seasonal information and prices before publishing.
- Replace sample itinerary text and images if needed. Unsplash images are remotely loaded and allowed in `next.config.ts`.
- The booking form opens WhatsApp and requires the customer to press Send. The contact form prepares an email in the visitor's email app; no backend or database is configured.
- The site uses illustrative content; it does not confirm live availability or process payments.

## Main structure
- `app/`: pages, dynamic routes, metadata, sitemap and robots
- `components/`: layout, cards, page sections, forms and theme provider
- `data/`: services, tours, destinations, FAQs and business configuration
- `lib/`: SEO and utility functions
