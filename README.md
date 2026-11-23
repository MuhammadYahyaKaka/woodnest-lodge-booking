# WoodNest — Lodge Booking Website (React + Node.js)

A cinematic lodge booking website recreated from Nixtio's Dribbble design
"Landing Page Design for Lodge Booking":
https://dribbble.com/shots/27389159-Landing-Page-Design-for-Lodge-Booking

This is the **code version**: a Vite + React front end and a Node.js + Express
back end. Bookings are created through the API and saved on the server.

> **No payment gateway is included.** A booking is a *reservation record only* —
> no card is charged. Prices are always recomputed on the server from its own
> lodge data; anything the browser sends as a price is ignored.

## Features

- Hero with a **live video background** (Pexels video 6497973, "A cabin in the
  woods with snow on the ground" by Mikhail Nilov, free license), with the
  Dribbble main still as the poster/fallback
- Headline *Nature's Perfect Hideaways*, rating ★ 4.7 from 1,800+ stays
- Glass booking card (Evergreen Pine Family Lodge, Feb 11 → Mar 25 defaults,
  check-in after 2:00 PM, check-out until 12:00 PM, $359/night, 2–5 guests)
- **6 lodges** with category filters (All / Lakeside / Forest / Mountain)
- **Details** button (or clicking a lodge photo/title) opens a detail modal:
  large photo, location, rating + stays, price, guests/bedrooms/beds/baths,
  description, amenities, check-in/out times, what's included
- **Reserve** opens a booking modal; the booking is saved by the server, which
  returns a booking reference (e.g. `WN-AB12CD`) and the nights × price total
- Experiences, showcase, guest reviews, FAQ, and a Design Reference section
  showing the original Dribbble shot images

## Project structure

```
woodnest-code/
├── client/                  Vite + React front end
│   ├── public/assets/       Hero video + Dribbble images + lodge photos (local files, not hotlinked)
│   └── src/
│       ├── App.jsx          Shared state only (lodges, open modal) — small on purpose
│       ├── api.js           API helper (fetch lodges, create booking, date helpers)
│       ├── data/lodges.js   Lodge data (mirrors the server seed) + experiences/reviews/FAQ constants
│       └── components/
│           ├── Navbar.jsx
│           ├── Hero.jsx
│           ├── BookingCard.jsx   Hero glass booking card
│           ├── LodgeGrid.jsx     Section + category filters
│           ├── LodgeCard.jsx
│           ├── DetailModal.jsx
│           ├── BookingModal.jsx
│           ├── Experiences.jsx   Showcase + experiences
│           ├── Reviews.jsx
│           ├── FAQ.jsx
│           ├── DesignReference.jsx
│           └── Footer.jsx
├── server/
│   ├── server.js            Express API + serves the built client in production
│   └── data/db.json         JSON-file database (seeded: 6 lodges, 0 bookings)
├── render.yaml              One-service Render deploy
└── package.json             Convenience scripts
```

## Database

`server/data/db.json` is a plain **JSON file** — not a hosted database. It
ships fresh: **6 lodges, 0 bookings**, no users, no admin account. Bookings
created through the site are appended to this file. On hosts with an ephemeral
filesystem (e.g. Render free tier) the file can reset on restart/redeploy.

## How to run

You need Node.js 18+.

### Development (two terminals)

```bash
# 1 — API server on http://localhost:5000
cd server
npm install
npm run dev

# 2 — React dev site on http://localhost:5173 (proxies /api to the server)
cd client
npm install
npm run dev
```

Open http://localhost:5173.

### Production (one service)

```bash
cd client && npm install && npm run build   # builds client/dist
cd ../server && npm install
node server.js                              # http://localhost:5000
```

The Express server serves `client/dist` itself, so the whole site runs as a
single service on one port (`PORT` env var, default 5000). The root
`package.json` has shortcuts: `npm run build` then `npm start`.

### Deploy on Render

Use the included `render.yaml` (New → Blueprint, or create a Web Service with
the same build/start commands). Build: `cd client && npm install && npm run
build && cd ../server && npm install` — Start: `cd server && node server.js`.

## API

| Method | Route              | What it does |
|--------|--------------------|--------------|
| GET    | `/api/health`      | `{ ok: true, service, time }` |
| GET    | `/api/lodges`      | All 6 lodges |
| GET    | `/api/lodges/:id`  | One lodge by id (e.g. `evergreen-pine`); 404 if unknown |
| POST   | `/api/bookings`    | Create a booking (see below) |
| GET    | `/api/bookings`    | List all bookings (for checking) |

### POST /api/bookings

```json
{
  "lodgeId": "evergreen-pine",
  "guestName": "Alex Morgan",
  "checkIn": "2027-02-11",
  "checkOut": "2027-02-14",
  "guests": 3
}
```

The server looks the lodge up itself, validates the dates (check-out must be
after check-in) and the guest count (must fit the lodge's capacity), computes
`nights × pricePerNight` from **its own** price, saves the booking and returns
it with status `201`:

```json
{
  "reference": "WN-AB12CD",
  "lodgeName": "Evergreen Pine Family Lodge",
  "nights": 3,
  "pricePerNight": 359,
  "total": 1077,
  "status": "reserved"
}
```

Invalid dates or too many guests get a `400` with an `error` message; an
unknown lodge gets a `404`.

## Credits

- Design & reference imagery: "Landing Page Design for Lodge Booking" by
  [Nixtio on Dribbble](https://dribbble.com/shots/27389159-Landing-Page-Design-for-Lodge-Booking)
- Hero video: "A cabin in the woods with snow on the ground" by Mikhail Nilov
  on [Pexels](https://www.pexels.com/video/a-cabin-in-the-woods-with-snow-on-the-ground-6497973/) (free license)
- Lodge card photos were carried over from the hosted WoodNest page
- Prices in USD per night, before taxes
- Built by Muhammad Yahya Kaka
