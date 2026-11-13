# Mr.Cute Hair Studio

A responsive premium men's grooming website for Mr.Cute Hair Studio in Podhaturpet, built with React, Vite and React Router.

## Run locally

```bash
npm install
npm run dev
```

Create a production build:

```bash
npm run build
npm run preview
```

## Page files

Each website page is maintained in its own file:

- `src/pages/Home.jsx` — homepage
- `src/pages/Services.jsx` — services menu
- `src/pages/Pricing.jsx` — service prices
- `src/pages/Gallery.jsx` — haircut and studio gallery
- `src/pages/About.jsx` — salon introduction
- `src/pages/Team.jsx` — barber profiles
- `src/pages/Booking.jsx` — appointment request form
- `src/pages/Contact.jsx` — contact information and Google Map
- `src/admin/Admin.jsx` — salon admin dashboard

Shared UI components live in `src/components/` and salon details/prices live in `src/data.js`.

## Configured salon details

- Location: Podhaturpet
- Phone / WhatsApp: +91 6379978394
- Hours: 8:00 AM–10:00 PM
- Barbers: Surya and Chandru
- Haircut: ₹130
- Beard Trim: ₹50
- Shaving: ₹60
- Appointment slots: every 30 minutes, 8:00 AM through 9:30 PM
- Google Maps embed: configured on the Contact page

## Important production note

The current booking prototype saves requests in the visitor's browser local storage and opens WhatsApp with the request details. This does not provide shared availability between devices or prevent double bookings. Before accepting live bookings, connect a backend such as Firebase Firestore, implement server-side slot locking/availability checks, and secure the admin dashboard with authentication and role-based access.
