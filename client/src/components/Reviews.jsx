import { REVIEWS } from '../data/lodges';

export default function Reviews() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="kicker">Guest Stories</div>
            <h2>Loved by <em>Escapers</em></h2>
          </div>
        </div>
        <div className="reviews">
          {REVIEWS.map((r) => (
            <figure className="review" key={r.name}>
              <div className="stars">★★★★★</div>
              <blockquote>"{r.text}"</blockquote>
              <figcaption>
                <span className="avatar">{r.initial}</span>
                <span>
                  <strong>{r.name}</strong>
                  <small>{r.meta}</small>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
