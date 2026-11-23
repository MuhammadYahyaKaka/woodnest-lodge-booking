const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
const DB_PATH = path.join(__dirname, 'data', 'db.json');

app.use(express.json());

// --- tiny JSON-file database -------------------------------------------------
function readDb() {
  return JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
}
function writeDb(db) {
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2));
}

function makeReference() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return `WN-${code}`;
}

function nightsBetween(checkIn, checkOut) {
  const ms = new Date(checkOut + 'T00:00:00Z') - new Date(checkIn + 'T00:00:00Z');
  return Math.round(ms / 86400000);
}

function isValidDateStr(s) {
  return typeof s === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(s) && !isNaN(new Date(s + 'T00:00:00Z'));
}

// --- API ---------------------------------------------------------------------
app.get('/api/health', (req, res) => {
  res.json({ ok: true, service: 'woodnest-server', time: new Date().toISOString() });
});

app.get('/api/lodges', (req, res) => {
  const db = readDb();
  res.json(db.lodges);
});

app.get('/api/lodges/:id', (req, res) => {
  const db = readDb();
  const lodge = db.lodges.find((l) => l.id === req.params.id);
  if (!lodge) return res.status(404).json({ error: 'Lodge not found' });
  res.json(lodge);
});

app.get('/api/bookings', (req, res) => {
  const db = readDb();
  res.json(db.bookings);
});

// Create a booking. The price is ALWAYS recomputed on the server from the
// lodge record — any price/total sent by the client is ignored.
app.post('/api/bookings', (req, res) => {
  const { lodgeId, guestName, checkIn, checkOut, guests } = req.body || {};
  const db = readDb();
  const lodge = db.lodges.find((l) => l.id === lodgeId);
  if (!lodge) return res.status(404).json({ error: 'Lodge not found' });

  if (!isValidDateStr(checkIn) || !isValidDateStr(checkOut)) {
    return res.status(400).json({ error: 'checkIn and checkOut must be valid dates (YYYY-MM-DD)' });
  }
  const nights = nightsBetween(checkIn, checkOut);
  if (nights <= 0) {
    return res.status(400).json({ error: 'Check-out date must be after check-in date' });
  }
  const guestCount = Number(guests);
  if (!Number.isInteger(guestCount) || guestCount < 1) {
    return res.status(400).json({ error: 'Guests must be a whole number of at least 1' });
  }
  if (guestCount > lodge.capacity) {
    return res.status(400).json({
      error: `${lodge.name} sleeps up to ${lodge.capacity} guests — ${guestCount} is too many`,
    });
  }

  const total = nights * lodge.price; // server-side price, never the client's
  const booking = {
    id: 'bk_' + Date.now().toString(36),
    reference: makeReference(),
    lodgeId: lodge.id,
    lodgeName: lodge.name,
    guestName: typeof guestName === 'string' && guestName.trim() ? guestName.trim() : 'Guest',
    checkIn,
    checkOut,
    guests: guestCount,
    nights,
    pricePerNight: lodge.price,
    total,
    status: 'reserved',
    createdAt: new Date().toISOString(),
  };
  db.bookings.push(booking);
  writeDb(db);
  res.status(201).json(booking);
});

// --- production: serve the built client as one service -----------------------
const distPath = path.join(__dirname, '..', 'client', 'dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.get(/^(?!\/api\/).*/, (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`WoodNest server running on http://localhost:${PORT}`);
});
