import { useMemo, useState } from 'react';
import { defaultDates } from '../api';

// The hero glass booking card from the Dribbble main shot.
// Defaults: Evergreen Pine Family Lodge, Feb 11 → Mar 25, $359/night, 2–5 guests.
export default function BookingCard({ lodges, onReserve }) {
  const defaults = useMemo(defaultDates, []);
  const [lodgeId, setLodgeId] = useState('evergreen-pine');
  const [checkIn, setCheckIn] = useState(defaults.checkIn);
  const [checkOut, setCheckOut] = useState(defaults.checkOut);
  const [guests, setGuests] = useState(2);

  const lodge = lodges.find((l) => l.id === lodgeId) || lodges[0];
  if (!lodge) return null;

  const submit = (e) => {
    e.preventDefault();
    onReserve(lodge, { checkIn, checkOut, guests });
  };

  return (
    <form className="glass-card" onSubmit={submit}>
      <h3>{lodge.name}</h3>
      <div className="glass-field full">
        <label htmlFor="card-lodge">Choose your lodge</label>
        <select id="card-lodge" value={lodge.id} onChange={(e) => setLodgeId(e.target.value)}>
          {lodges.map((l) => (
            <option key={l.id} value={l.id}>{l.name}</option>
          ))}
        </select>
      </div>
      <div className="glass-row">
        <div className="glass-field">
          <label htmlFor="card-cin">Check-in date</label>
          <input id="card-cin" type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} required />
        </div>
        <div className="glass-field">
          <label htmlFor="card-cout">Check-out date</label>
          <input id="card-cout" type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} required />
        </div>
      </div>
      <div className="glass-row">
        <div className="glass-field">
          <label>Check-in</label>
          <div className="val">{lodge.checkInTime}</div>
        </div>
        <div className="glass-field">
          <label>Check-out</label>
          <div className="val">{lodge.checkOutTime}</div>
        </div>
      </div>
      <div className="glass-field full">
        <label htmlFor="card-guests">Guests</label>
        <select id="card-guests" value={guests} onChange={(e) => setGuests(Number(e.target.value))}>
          {Array.from({ length: lodge.capacity }, (_, i) => i + 1).map((n) => (
            <option key={n} value={n}>{n} guest{n > 1 ? 's' : ''}</option>
          ))}
        </select>
      </div>
      <div className="glass-price">
        <span className="amount">${lodge.price}<small>/night</small></span>
        <span className="guests-note">{lodge.guestsLabel.replace('Sleeps ', '')} guests</span>
      </div>
      <button className="btn btn-reserve" type="submit">Reserve</button>
    </form>
  );
}
