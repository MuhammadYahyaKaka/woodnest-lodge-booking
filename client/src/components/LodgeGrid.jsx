import { useState } from 'react';
import { FILTERS } from '../data/lodges';
import LodgeCard from './LodgeCard';

export default function LodgeGrid({ lodges, onDetails, onReserve }) {
  const [filter, setFilter] = useState('all');
  const visible = filter === 'all' ? lodges : lodges.filter((l) => l.category === filter);

  return (
    <section id="lodges" className="section">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="kicker">Featured Lodges</div>
            <h2>Nature's Perfect <em>Hideaways</em></h2>
            <p className="lead">
              Every WoodNest lodge is visited and verified by our team — warm lights, deep
              forests, and mornings that start with mist over the water.
            </p>
          </div>
          <div className="filters" role="group" aria-label="Filter lodges">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                type="button"
                className={filter === f.key ? 'active' : ''}
                onClick={() => setFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
        {visible.length === 0 ? (
          <p className="empty-note">No lodges in this category yet — try another filter.</p>
        ) : (
          <div className="grid3">
            {visible.map((lodge) => (
              <LodgeCard key={lodge.id} lodge={lodge} onDetails={onDetails} onReserve={onReserve} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
