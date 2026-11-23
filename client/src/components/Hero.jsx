import Navbar from './Navbar';
import BookingCard from './BookingCard';

export default function Hero({ lodges, onReserve, onBookNow }) {
  return (
    <header className="hero" id="top">
      <div className="hero-bg">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/assets/dribbble-main.jpg"
          aria-label="Cozy cabin in a snowy pine forest"
        >
          <source src="/assets/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-shade" />
      </div>
      <div className="wrap hero-inner">
        <Navbar onBookNow={onBookNow} />
        <div className="hero-copy">
          <h1>
            <span className="line">Nature's</span>
            <span className="perfect">Perfect</span>
            <span className="line">Hideaways</span>
          </h1>
        </div>
        <div className="hero-bottom">
          <p className="hero-desc">
            Discover handpicked luxury cabins in breathtaking locations. Unplug, unwind, and
            reconnect with what matters most.
          </p>
          <div className="hero-rating">
            <div className="score"><span className="star">★</span> 4.7</div>
            <small>from 1,800+ stays</small>
          </div>
          <BookingCard lodges={lodges} onReserve={onReserve} />
        </div>
      </div>
    </header>
  );
}
