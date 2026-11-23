import { useState } from 'react';
import { FAQS } from '../data/lodges';

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="section alt">
      <div className="wrap faq-wrap">
        <div className="section-head">
          <div>
            <div className="kicker">Good to Know</div>
            <h2>Questions, <em>Answered</em></h2>
          </div>
        </div>
        <div className="faq-list">
          {FAQS.map((f, i) => (
            <div className={`faq-item${open === i ? ' open' : ''}`} key={f.q}>
              <button type="button" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                {f.q}
                <span>{open === i ? '−' : '+'}</span>
              </button>
              {open === i && <p>{f.a}</p>}
            </div>
          ))}
        </div>
        <div className="cta">
          <h2>Your Cabin Is <em>Waiting</em></h2>
          <p>Weekends fill fast in peak season. Pick your dates in the card above and lock in your escape today.</p>
          <a className="btn btn-gold" href="#top">Check Availability ↑</a>
        </div>
      </div>
    </section>
  );
}
