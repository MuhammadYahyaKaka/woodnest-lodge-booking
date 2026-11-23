import { useEffect, useState } from 'react';
import { LODGES as FALLBACK_LODGES } from './data/lodges';
import { fetchLodges } from './api';
import Hero from './components/Hero';
import LodgeGrid from './components/LodgeGrid';
import Experiences from './components/Experiences';
import DesignReference from './components/DesignReference';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import DetailModal from './components/DetailModal';
import BookingModal from './components/BookingModal';

// App holds shared state only — every section lives in its own component file.
export default function App() {
  const [lodges, setLodges] = useState(FALLBACK_LODGES);
  const [detailLodge, setDetailLodge] = useState(null);
  const [booking, setBooking] = useState(null); // { lodge, prefill }

  useEffect(() => {
    fetchLodges()
      .then((data) => Array.isArray(data) && data.length && setLodges(data))
      .catch(() => {
        /* API offline (e.g. static preview) — keep the built-in lodge data */
      });
  }, []);

  const openBooking = (lodge, prefill) => {
    setDetailLodge(null);
    setBooking({ lodge, prefill });
  };

  const heroBookNow = () => {
    const evergreen = lodges.find((l) => l.id === 'evergreen-pine') || lodges[0];
    if (evergreen) openBooking(evergreen);
  };

  return (
    <>
      <Hero lodges={lodges} onReserve={(lodge, prefill) => openBooking(lodge, prefill)} onBookNow={heroBookNow} />
      <main>
        <LodgeGrid
          lodges={lodges}
          onDetails={(lodge) => setDetailLodge(lodge)}
          onReserve={(lodge) => openBooking(lodge)}
        />
        <Experiences />
        <DesignReference />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
      {detailLodge && (
        <DetailModal
          lodge={detailLodge}
          onClose={() => setDetailLodge(null)}
          onReserve={(lodge) => openBooking(lodge)}
        />
      )}
      {booking && (
        <BookingModal
          lodge={booking.lodge}
          prefill={booking.prefill}
          onClose={() => setBooking(null)}
        />
      )}
    </>
  );
}
