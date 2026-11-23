export default function LodgeCard({ lodge, onDetails, onReserve }) {
  return (
    <article className="lodge">
      <div
        className="lodge-img"
        onClick={() => onDetails(lodge)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onDetails(lodge)}
        title={`View details for ${lodge.name}`}
      >
        <img src={lodge.image} alt={lodge.imageAlt || lodge.name} loading="lazy" />
        {lodge.badge && <span className="lodge-badge">{lodge.badge}</span>}
        <span className="lodge-price">${lodge.price} / night</span>
      </div>
      <div className="lodge-body">
        <h3 onClick={() => onDetails(lodge)} className="lodge-title">{lodge.name}</h3>
        <div className="lodge-meta">
          <span>📍 {lodge.location}</span>
          <span className="rate">★ {Number(lodge.rating).toFixed(1)} ({lodge.stays.replace(' stays', '')})</span>
          <span>👥 {lodge.guestsLabel}</span>
        </div>
        <p>{lodge.shortDesc}</p>
        <div className="chips">
          {lodge.amenities.slice(0, 4).map((a) => (
            <span key={a}>{a}</span>
          ))}
        </div>
        <div className="lodge-actions">
          <button className="btn btn-reserve-sm" type="button" onClick={() => onReserve(lodge)}>
            Reserve
          </button>
          <button className="btn btn-details" type="button" onClick={() => onDetails(lodge)}>
            Details
          </button>
        </div>
      </div>
    </article>
  );
}
