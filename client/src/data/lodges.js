// Lodge data — mirrors the server seed (server/data/db.json).
// The app fetches live data from GET /api/lodges and falls back to this list.
export const LODGES = [
  {
    "id": "spruce-hill",
    "name": "Spruce Hill Lodge",
    "category": "mountain",
    "badge": "★ Most Loved",
    "price": 450,
    "location": "Dolomites, Italy",
    "rating": 4.9,
    "stays": "312 stays",
    "guestsLabel": "Sleeps 4",
    "capacity": 4,
    "bedrooms": 2,
    "beds": 3,
    "baths": 2,
    "image": "/assets/lodge-spruce-hill.jpg",
    "imageAlt": "Spruce Hill Lodge glowing at dusk",
    "shortDesc": "Lakeside boathouse charm with panoramic peaks, a private dock and sunrise views from every window.",
    "description": "A mountain lodge above the valley with panoramic peaks, a private dock below and golden light in every room. Perfect for families who want lakeside calm with alpine views, slow mornings and evenings by the fire.",
    "amenities": [
      "Hot Tub",
      "Fireplace",
      "Private Dock",
      "Wi-Fi",
      "Mountain View",
      "Private Deck",
      "Kitchen",
      "Breakfast"
    ],
    "included": [
      "Free parking on site",
      "Hotel-grade linen & towels",
      "Welcome breakfast hamper",
      "Firewood for the fireplace",
      "Kayak & dock access",
      "Local host support 7 days a week"
    ],
    "checkInTime": "After 2:00 PM",
    "checkOutTime": "Until 12:00 PM"
  },
  {
    "id": "evergreen-pine",
    "name": "Evergreen Pine Family Lodge",
    "category": "forest",
    "badge": "Hero Lodge",
    "price": 359,
    "location": "Black Forest",
    "rating": 4.7,
    "stays": "1,800+ stays",
    "guestsLabel": "Sleeps 2–5",
    "capacity": 5,
    "bedrooms": 3,
    "beds": 4,
    "baths": 2,
    "image": "/assets/lodge-evergreen-pine.jpg",
    "imageAlt": "Evergreen Pine Family Lodge with warm orange windows in the misty forest",
    "shortDesc": "The lodge from our cover shot — golden windows in the pines, a wraparound deck, and total quiet for the whole family.",
    "description": "The lodge from our cover shot — golden windows glowing in the pines, a wraparound deck and total quiet for the whole family. Self check-in, a wood-fired sauna and forest trails starting right at your door.",
    "amenities": [
      "Self Check-in",
      "Pet Friendly",
      "Kitchen",
      "Sauna",
      "Wi-Fi",
      "Fireplace",
      "Private Deck",
      "Forest View"
    ],
    "included": [
      "Free parking on site",
      "Hotel-grade linen & towels",
      "Full kitchen essentials & coffee",
      "Sauna session included daily",
      "Pet welcome pack (one dog)",
      "Self check-in door code on arrival day"
    ],
    "checkInTime": "After 2:00 PM",
    "checkOutTime": "Until 12:00 PM"
  },
  {
    "id": "lakeside-boathouse",
    "name": "Lakeside Boathouse Cabin",
    "category": "lakeside",
    "badge": "New",
    "price": 289,
    "location": "Lake District",
    "rating": 4.8,
    "stays": "256 stays",
    "guestsLabel": "Sleeps 3",
    "capacity": 3,
    "bedrooms": 2,
    "beds": 2,
    "baths": 1,
    "image": "/assets/lodge-lakeside-boathouse.jpg",
    "imageAlt": "Lakeside Boathouse Cabin in a golden meadow beneath mountain peaks",
    "shortDesc": "Fall asleep to water sounds. Golden windows, a wraparound porch, and kayaks waiting at your door.",
    "description": "Fall asleep to water sounds in this cosy boathouse cabin. Golden windows, a wraparound porch and kayaks waiting at your door — made for slow lake days, sunrise paddles and fireside evenings.",
    "amenities": [
      "Kayaks",
      "Porch Deck",
      "Fireplace",
      "Breakfast",
      "Wi-Fi",
      "Lake View",
      "Kitchen",
      "Private Dock"
    ],
    "included": [
      "Free parking on site",
      "Hotel-grade linen & towels",
      "2 kayaks & life jackets included",
      "Breakfast basket on first morning",
      "Firewood for the fireplace",
      "Fishing rods on request"
    ],
    "checkInTime": "After 2:00 PM",
    "checkOutTime": "Until 12:00 PM"
  },
  {
    "id": "forest-log",
    "name": "Forest Log Hideaway",
    "category": "forest",
    "badge": "",
    "price": 210,
    "location": "Pine Valley",
    "rating": 4.7,
    "stays": "143 stays",
    "guestsLabel": "Sleeps 2",
    "capacity": 2,
    "bedrooms": 1,
    "beds": 1,
    "baths": 1,
    "image": "/assets/lodge-forest-log.jpg",
    "imageAlt": "Forest Log Hideaway — small red cabin by a still forest lake",
    "shortDesc": "A cosy couples' escape — one room, one lake, zero distractions. Perfect for a slow weekend.",
    "description": "A cosy couples' escape — one room, one lake, zero distractions. No TV by design, just a wood stove, a private deck over the water and the forest all around you for a truly slow weekend.",
    "amenities": [
      "Lake View",
      "Wood Stove",
      "Wi-Fi",
      "Kitchen",
      "Private Deck",
      "Self Check-in",
      "Fireplace",
      "Pet Friendly"
    ],
    "included": [
      "Free parking on site",
      "Hotel-grade linen & towels",
      "Wood for the stove — unlimited",
      "Coffee, tea & kitchen basics",
      "Board games & books shelf",
      "Self check-in door code on arrival day"
    ],
    "checkInTime": "After 2:00 PM",
    "checkOutTime": "Until 12:00 PM"
  },
  {
    "id": "alpine-glass",
    "name": "Alpine Glass Lodge",
    "category": "mountain",
    "badge": "",
    "price": 520,
    "location": "Swiss Alps",
    "rating": 5.0,
    "stays": "421 stays",
    "guestsLabel": "Sleeps 5",
    "capacity": 5,
    "bedrooms": 3,
    "beds": 4,
    "baths": 2,
    "image": "/assets/lodge-alpine-glass.jpg",
    "imageAlt": "Alpine Glass Lodge with snowy mountain views",
    "shortDesc": "Floor-to-ceiling glass, a grand stone fireplace inside, and snow peaks in every direction.",
    "description": "Floor-to-ceiling glass, a grand stone fireplace inside and snow peaks in every direction. Watch storms and sunrises from bed, soak in the hot tub under the stars, and cook in a chef-grade kitchen.",
    "amenities": [
      "Panorama Glass",
      "Hot Tub",
      "Chef Kitchen",
      "EV Charger",
      "Wi-Fi",
      "Mountain View",
      "Fireplace",
      "Private Deck"
    ],
    "included": [
      "Free parking + EV charging",
      "Hotel-grade linen & towels",
      "Private hot tub, cleaned before arrival",
      "Chef kitchen with Nespresso machine",
      "Ski & snowshoe storage",
      "Welcome wine & alpine cheese board"
    ],
    "checkInTime": "After 2:00 PM",
    "checkOutTime": "Until 12:00 PM"
  },
  {
    "id": "grand-timber",
    "name": "The Grand Timber Lodge",
    "category": "lakeside",
    "badge": "Premium",
    "price": 475,
    "location": "Banff, Canada",
    "rating": 4.9,
    "stays": "367 stays",
    "guestsLabel": "Sleeps 8",
    "capacity": 8,
    "bedrooms": 4,
    "beds": 6,
    "baths": 3,
    "image": "/assets/lodge-grand-timber.jpg",
    "imageAlt": "The Grand Timber Lodge interior with fireplace and wooden beams",
    "shortDesc": "Vaulted timber ceilings, a roaring stone fireplace, and room for everyone you love.",
    "description": "Vaulted timber ceilings, a roaring stone fireplace and room for everyone you love. A games room, hot tub and full kitchen make this the lodge for big family gatherings and long, loud, happy evenings.",
    "amenities": [
      "Fireplace",
      "Games Room",
      "Hot Tub",
      "Full Kitchen",
      "Wi-Fi",
      "Mountain View",
      "Private Deck",
      "Self Check-in"
    ],
    "included": [
      "Free parking for 3 cars",
      "Hotel-grade linen & towels",
      "Hot tub, cleaned before arrival",
      "Games room with pool table",
      "Firewood for the stone fireplace",
      "Self check-in door code on arrival day"
    ],
    "checkInTime": "After 2:00 PM",
    "checkOutTime": "Until 12:00 PM"
  }
];

export const FILTERS = [
  { key: 'all', label: 'All Lodges' },
  { key: 'lakeside', label: 'Lakeside' },
  { key: 'forest', label: 'Forest' },
  { key: 'mountain', label: 'Mountain' },
];

export const EXPERIENCES = [
  { name: 'Forest Bathing Walk', detail: 'Guided slow walk · 2 hrs · $35 / person' },
  { name: 'Fireside Dinner', detail: 'Private chef · 3 courses · $85 / person' },
  { name: 'Dusk Cabin Sauna', detail: 'Wood-fired sauna · 90 min · $45 / session' },
  { name: 'Alpine Snow Day', detail: 'Snowshoes + guide · $60 / person' },
];

export const REVIEWS = [
  {
    text: 'We watched mist roll over the lake from the hot tub every morning. Booking took two minutes and check-in was just a code. Pure calm.',
    name: 'Sarah Mitchell', meta: 'Spruce Hill Lodge · 4 nights', initial: 'S',
  },
  {
    text: "The photos don't do it justice. Warm lights in the pines, a real fireplace, and our dog was welcome everywhere. We've already rebooked.",
    name: 'James Okafor', meta: 'Evergreen Pine · 3 nights', initial: 'J',
  },
  {
    text: 'Work has been nonstop — this was the reset we needed. No TV, no noise, just forest. The fireside dinner was unforgettable.',
    name: 'Amelia Chen', meta: 'Grand Timber Lodge · 5 nights', initial: 'A',
  },
];

export const FAQS = [
  {
    q: 'How does self check-in work?',
    a: "You'll receive a door code by email and SMS on the morning of arrival. No key handover, no waiting — arrive any time after 2:00 PM, just like the booking card says.",
  },
  {
    q: 'What is the cancellation policy?',
    a: 'Free cancellation up to 7 days before check-in for a full refund. Within 7 days, you can move your dates once at no charge.',
  },
  {
    q: 'Are pets allowed?',
    a: 'Most lodges welcome one well-behaved dog (look for the Pet Friendly tag). A small cleaning fee of $25 applies per stay.',
  },
  {
    q: 'Is there Wi-Fi in remote lodges?',
    a: 'Yes — every lodge has fast Wi-Fi, but we gently suggest a digital detox. The forest is the real entertainment.',
  },
];

export const DESIGN_REFERENCE = [
  { img: '/assets/dribbble-main.jpg', caption: 'Main shot — the hero design recreated at the top of this page (the cabin photo inside it is cropped for the Evergreen Pine lodge card).' },
  { img: '/assets/dribbble-related-1.jpg', caption: 'Related shot — daytime cabin' },
  { img: '/assets/dribbble-related-2.jpg', caption: 'Related shot — mobile screens' },
  { img: '/assets/dribbble-related-3.jpg', caption: 'Related shot — on laptop' },
  { img: '/assets/dribbble-related-4.jpg', caption: 'Related shot — booking card detail' },
];
