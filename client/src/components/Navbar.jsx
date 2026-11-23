import { useState } from 'react';

export function PineLogo({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <g fill="#f6a21e">
        <path d="M16 1 L23 11 H19.5 L26 20 H6 L12.5 11 H9 Z" />
        <rect x="14.4" y="20" width="3.2" height="6" rx="1" />
        <path d="M4 28.5 h24 v2.4 H4 Z" />
      </g>
    </svg>
  );
}

export default function Navbar({ onBookNow }) {
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav" aria-label="Main">
      <a className="logo" href="#top" aria-label="WoodNest home">
        <PineLogo />
        WoodNest
      </a>
      <div className={`nav-links${open ? ' open' : ''}`}>
        <a href="#lodges" onClick={() => setOpen(false)}>Locations</a>
        <a href="#lodges" onClick={() => setOpen(false)}>Rooms</a>
        <a href="#experiences" onClick={() => setOpen(false)}>Experiences</a>
        <a href="#faq" onClick={() => setOpen(false)}>Contact</a>
      </div>
      <div className="nav-actions">
        <button className="btn-booknow" type="button" onClick={onBookNow}>Book Now</button>
        <button className="menu-btn" type="button" aria-label="Open menu" onClick={() => setOpen(!open)}>☰</button>
      </div>
    </nav>
  );
}
