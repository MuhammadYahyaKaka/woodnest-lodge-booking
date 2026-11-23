import { PineLogo } from './Navbar';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-brand">
          <PineLogo size={26} />
          <strong>WoodNest</strong>
          <span>— Nature's Perfect Hideaways.</span>
        </div>
        <p className="footer-links">Locations · Rooms · Experiences · Contact</p>
        <p className="footer-credit">
          Design and imagery: "Landing Page Design for Lodge Booking" by{' '}
          <a href="https://dribbble.com/nixtio" target="_blank" rel="noopener noreferrer">Nixtio on Dribbble</a>{' '}
          — main shot and related shots from the same series, used as the design reference for
          this page. Hero video: "A cabin in the woods with snow on the ground" by Mikhail Nilov on{' '}
          <a href="https://www.pexels.com/video/a-cabin-in-the-woods-with-snow-on-the-ground-6497973/" target="_blank" rel="noopener noreferrer">Pexels</a>{' '}
          (free license). Prices in USD per night, before taxes.
        </p>
      </div>
    </footer>
  );
}
