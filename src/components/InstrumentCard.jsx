import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card.jsx';

/**
 * Displays a summary card for an instrument.
 * @param {Object} props
 * @param {Object} props.instrument - Instrument data (name, slug, image, shortDescription)
 */
function InstrumentCard({ instrument }) {
  const { name, slug, image, shortDescription } = instrument;
  return (
    <Card>
      <Link to={`/instruments/${slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        {image && (
          <img
            src={image}
            alt={name}
            style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '8px', marginBottom: '0.75rem' }}
          />
        )}
        <h3 style={{ marginBottom: '0.5rem' }}>{name}</h3>
        {shortDescription && <p style={{ marginBottom: '0' }}>{shortDescription}</p>}
      </Link>
    </Card>
  );
}

export default InstrumentCard;