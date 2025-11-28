import React from 'react';
import InstrumentCard from '../components/InstrumentCard.jsx';
import instruments from '../data/instruments.js';

/**
 * Instruments page.
 * Displays a list of available instruments using InstrumentCard components.
 */
function Instruments() {
  return (
    <div className="instruments-page">
      <header className="page-header">
        <h1>Instrument Catalog</h1>
        <p>
          Explore the complete range of Eppley instruments, including product descriptions,
          photography, and downloadable specification sheets for each model.
        </p>
      </header>
      <section className="instrument-grid">
        {instruments.map((inst) => (
          <InstrumentCard key={inst.slug} instrument={inst} />
        ))}
      </section>
    </div>
  );
}

export default Instruments;
