import { useEffect, useMemo, useState } from 'react';
import { createBooking, defaultDates, nightsBetween, prettyDate } from '../api';

export default function BookingModal({ lodge, prefill, onClose }) {
  const defaults = useMemo(defaultDates, []);
  const [guestName, setGuestName] = useState('');
  const [checkIn, setCheckIn] = useState(prefill?.checkIn || defaults.checkIn);
  const [checkOut, setCheckOut] = useState(prefill?.checkOut || defaults.checkOut);
  const [guests, setGuests] = useState(prefill?.guests || 2);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!lodge) return null;

  const nights = nightsBetween(checkIn, checkOut);
  const total = nights > 0 ? nights * lodge.price : 0;

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      const created = await createBooking({
        lodgeId: lodge.id,
        guestName,
        checkIn,
        checkOut,
        guests,
      });
      setBooking(created);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={`Reserve ${lodge.name}`}>
      <div className="booking-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close dark" type="button" onClick={onClose} aria-label="Close booking">✕</button>
        {booking ? (
          <div className="booking-success">
            <div className="success-icon">🌲</div>
            <h3>You're Booked!</h3>
            <p>
              {booking.lodgeName} is reserved for {booking.guests} guest{booking.guests > 1 ? 's' : ''}.
            </p>
            <div className="summary-box">
              <div><span>Booking reference</span><strong>{booking.reference}</strong></div>
              <div><span>Check-in</span><strong>{prettyDate(booking.checkIn)}</strong></div>
              <div><span>Check-out</span><strong>{prettyDate(booking.checkOut)}</strong></div>
              <div><span>{booking.nights} nights × ${booking.pricePerNight}</span><strong>${booking.total}</strong></div>
            </div>
            <p className="fine-print">Free cancellation up to 7 days before check-in. No payment is taken — this is a reservation record only.</p>
            <button className="btn btn-gold" type="button" onClick={onClose}>Done</button>
          </div>
        ) : (
          <>
            <div className="kicker">Almost There</div>
            <h3>Reserve Your Retreat</h3>
            <p className="booking-sub">
              <strong>{lodge.name}</strong> · ${lodge.price}/night · {lodge.guestsLabel} · ★ {Number(lodge.rating).toFixed(1)}
            </p>
            <form onSubmit={submit}>
              <div className="form-field">
                <label htmlFor="bk-name">Your name</label>
                <input id="bk-name" type="text" value={guestName} onChange={(e) => setGuestName(e.target.value)} placeholder="e.g. Alex Morgan" />
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="bk-cin">Check-in</label>
                  <input id="bk-cin" type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} required />
                </div>
                <div className="form-field">
                  <label htmlFor="bk-cout">Check-out</label>
                  <input id="bk-cout" type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} required />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="bk-guests">Guests (max {lodge.capacity})</label>
                <select id="bk-guests" value={guests} onChange={(e) => setGuests(Number(e.target.value))}>
                  {Array.from({ length: lodge.capacity }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>{n} guest{n > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>
              <div className="summary-box">
                <div><span>{nights > 0 ? `${nights} nights × $${lodge.price}` : 'Pick valid dates'}</span><strong>{nights > 0 ? `$${total}` : '—'}</strong></div>
                <div><span>Check-in / Check-out</span><strong>{lodge.checkInTime} / {lodge.checkOutTime}</strong></div>
              </div>
              {error && <p className="form-error">{error}</p>}
              <button className="btn btn-gold wide" type="submit" disabled={submitting || nights <= 0}>
                {submitting ? 'Reserving…' : 'Confirm Reservation ✓'}
              </button>
              <p className="fine-print">Confirm your details — no payment is taken. The server recomputes the total from the lodge's real price.</p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
