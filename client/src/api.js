// Small API helper for the WoodNest Express server.
// In dev, Vite proxies /api to http://localhost:5000 (see vite.config.js).
// In production the server serves the built client, so /api is same-origin.

export async function fetchLodges() {
  const res = await fetch('/api/lodges');
  if (!res.ok) throw new Error('Failed to load lodges');
  return res.json();
}

export async function createBooking(payload) {
  const res = await fetch('/api/bookings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || 'Booking failed');
  return data;
}

export function nightsBetween(checkIn, checkOut) {
  const ms = new Date(checkOut + 'T00:00:00Z') - new Date(checkIn + 'T00:00:00Z');
  return Math.round(ms / 86400000);
}

// Default hero-card dates: Feb 11 → Mar 25 (next upcoming occurrence).
export function defaultDates() {
  const now = new Date();
  let year = now.getFullYear();
  const feb11 = new Date(Date.UTC(year, 1, 11));
  if (feb11.getTime() < Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())) year += 1;
  const fmt = (d) => d.toISOString().slice(0, 10);
  return {
    checkIn: fmt(new Date(Date.UTC(year, 1, 11))),
    checkOut: fmt(new Date(Date.UTC(year, 2, 25))),
  };
}

export function prettyDate(iso) {
  if (!iso) return '';
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}
