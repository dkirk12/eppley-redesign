import React from 'react';
import InstrumentCard from '../components/InstrumentCard.jsx';
import instruments from '../data/instruments.js';

/**
 * Instruments page.
 * Displays a list of available instruments using InstrumentCard components.
 */
function Instruments() {
  return (
    <div>
      <h1>Instruments</h1>
      <section className="grid grid-cols-2 grid-cols-3">
        {instruments.map((inst) => (
          <InstrumentCard key={inst.slug} instrument={inst} />
        ))}
      </section>
    </div>
  );
}

export default Instruments;