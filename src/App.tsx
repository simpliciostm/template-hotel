import { useEffect } from 'react';

import { DemoNotice } from './components/layout/DemoNotice';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Introduction } from './components/sections/Introduction';
import { Amenities } from './components/sections/Amenities';
import { BookingChannels } from './components/sections/BookingChannels';
import { Gallery } from './components/sections/Gallery';
import { Location } from './components/sections/Location';
import { Reviews } from './components/sections/Reviews';
import { Studios } from './components/sections/Studios';
import { hotel } from './data/hotel';
import { applyDocumentMetadata } from './utils/metadata';

function App() {
  useEffect(() => {
    applyDocumentMetadata(hotel);
  }, []);

  useEffect(() => {
    if (!window.location.hash) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      const target = document.getElementById(window.location.hash.slice(1));
      target?.scrollIntoView();
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <div data-publication-status={hotel.publication.status}>
      <DemoNotice />
      <Header />
      <main id="inicio">
        <Hero />
        <Introduction />
        <Studios />
        <Amenities />
        <Gallery />
        <Reviews />
        <Location />
        <BookingChannels />
      </main>
      <Footer />
    </div>
  );
}

export default App;
