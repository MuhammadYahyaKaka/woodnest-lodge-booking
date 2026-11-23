import { useEffect } from 'react';

export default function DetailModal({ lodge, onClose, onReserve }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!lodge) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={`${lodge.name} details`}>
      <div className="detail-box" onClick={(e) => e.stopPropagation()}>
        <div className="detail-scroll">
          <div className="detail-hero">
            <img src={lodge.image} alt={lodge.imageAlt || lodge.name} />
            <button className="modal-close" type="button" onClick={onClose} aria-label="Close details">✕</button>
            {lodge.badge && <span className="detail-badge">{lodge.badge}</span>}
            <span className="detail-price-badge">${lodge.price} / night</span>
          </div>
          <div className="detail-content">
            <h3>{lodge.name}</h3>
            <div className="detail-meta">
              <span>📍 {lodge.location}</span>
              <span className="rate">★ {Number(lodge.rating).toFixed(1)}</span>
              <span>{lodge.stays}</span>
            </div>
            <p className="detail-desc">{lodge.description}</p>
            <div className="detail-specs">
              <div className="detail-spec"><strong>{lodge.guestsLabel.replace('Sleeps ', '')}</strong><span>Guests</span></div>
              <div className="detail-spec"><strong>{lodge.bedrooms}</strong><span>Bedrooms</span></div>
              <div className="detail-spec"><strong>{lodge.beds}</strong><span>Beds</span></div>
              <div className="detail-spec"><strong>{lodge.baths}</strong><span>Baths</span></div>
            </div>
            <h4 className="detail-section-title">Amenities</h4>
            <div className="detail-amen">
              {lodge.amenities.map((a) => <span key={a}>{a}</span>)}
            </div>
            <div className="detail-times">
              <div className="detail-time"><small>Check-in</small><strong>{lodge.checkInTime}</strong></div>
              <div className="detail-time"><small>Check-out</small><strong>{lodge.checkOutTime}</strong></div>
            </div>
            <h4 className="detail-section-title">What's Included</h4>
            <ul className="detail-included">
              {lodge.included.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn btn-gold" type="button" onClick={() => onReserve(lodge)}>
            Reserve This Lodge
          </button>
          <button className="btn btn-ghost" type="button" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
