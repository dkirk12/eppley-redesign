import React from 'react';
import { useParams, Link } from 'react-router-dom';
import instruments from '../data/instruments.js';

/**
 * Instrument detail page.
 * Looks up an instrument by slug and displays detailed information.
 */
function InstrumentDetail() {
  const { slug } = useParams();
  const instrument = instruments.find((inst) => inst.slug === slug);
  if (!instrument) {
    return <p>Instrument not found.</p>;
  }
  return (
    <div>
      <h1>{instrument.name}</h1>
      {instrument.image && (
        <img
          src={instrument.image}
          alt={instrument.name}
          style={{ width: '100%', maxWidth: '400px', borderRadius: '8px', marginBottom: '1rem' }}
        />
      )}
      <p>{instrument.description}</p>
      {instrument.features && instrument.features.length > 0 && (
        <>
          <h2>Features</h2>
          <ul>
            {instrument.features.map((feat, idx) => (
              <li key={idx}>{feat}</li>
            ))}
          </ul>
        </>
      )}
      {instrument.datasheet && (
        <p>
          <a href={instrument.datasheet} className="btn" download>
            Download Datasheet
          </a>
        </p>
      )}
      <p style={{ marginTop: '1.5rem' }}>
        <Link to="/instruments" className="btn">
          Back to Instruments
        </Link>
      </p>
    </div>
  );
}

export default InstrumentDetail;