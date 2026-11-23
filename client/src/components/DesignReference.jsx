import { DESIGN_REFERENCE } from '../data/lodges';

export default function DesignReference() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="kicker">Design Reference</div>
            <h2>From the Original <em>Dribbble Shot</em></h2>
            <p className="lead">
              This page is built directly from Nixtio's "Landing Page Design for Lodge
              Booking" — the main shot below is the hero design recreated at the top of this
              page, and the related shots from the same series appear across the lodges and
              showcase sections.{' '}
              <a
                href="https://dribbble.com/shots/27389159-Landing-Page-Design-for-Lodge-Booking"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Dribbble ↗
              </a>
            </p>
          </div>
        </div>
        <div className="ref-grid">
          {DESIGN_REFERENCE.map((item, i) => (
            <figure className={`ref-item${i === 0 ? ' wide' : ''}`} key={item.img}>
              <img src={item.img} alt={item.caption} loading="lazy" />
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
