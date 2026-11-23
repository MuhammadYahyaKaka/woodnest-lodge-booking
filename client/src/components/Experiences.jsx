import { EXPERIENCES } from '../data/lodges';

export default function Experiences() {
  return (
    <>
      <section className="showcase-section">
        <div className="wrap showcase">
          <div className="showcase-media">
            <img src="/assets/dribbble-related-1.jpg" alt="Daytime cabin from the WoodNest design series" loading="lazy" />
            <div className="showcase-card">
              <span>Reserve Your Retreat</span>
              <small>Free cancellation up to 7 days before check-in</small>
              <strong>$359 <small>/ night</small></strong>
            </div>
          </div>
          <div className="showcase-copy">
            <div className="kicker">The WoodNest Experience</div>
            <h2>Perfect Havens <em>in the Wild</em></h2>
            <p>
              Experience the perfect blend of comfort and nature. Cinematic evenings,
              environmental calm, and premium booking in under two minutes.
            </p>
            <div className="stats">
              <div><strong>120+</strong><span>Verified lodges</span></div>
              <div><strong>4.7 ★</strong><span>Average rating</span></div>
              <div><strong>48k</strong><span>Happy guests</span></div>
            </div>
            <ul className="ticks">
              <li>Self check-in — arrive whenever you like</li>
              <li>Professionally cleaned, hotel-grade linen</li>
              <li>Local host support, 7 days a week</li>
            </ul>
            <a className="btn btn-dark" href="#lodges">Start Booking ↑</a>
          </div>
        </div>
      </section>

      <section id="experiences" className="section alt">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="kicker">Experiences</div>
              <h2>More Than a <em>Stay</em></h2>
              <p className="lead">Add these when you book — your host arranges everything before you arrive.</p>
            </div>
          </div>
          <div className="exp-grid">
            {EXPERIENCES.map((exp) => (
              <div className="exp-card" key={exp.name}>
                <h3>{exp.name}</h3>
                <p>{exp.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
