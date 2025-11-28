import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card.jsx';

/**
 * Displays a summary card for an instrument.
 * @param {Object} props
 * @param {Object} props.instrument - Instrument data (name, slug, image, shortDescription)
 */
function InstrumentCard({ instrument }) {
  const { name, slug, image, heroImage, shortDescription, gallery = [] } = instrument;
  const galleryPreview = Array.isArray(gallery) ? gallery.slice(0, 3) : [];
  const coverAlt = heroImage?.alt || `${name} preview`;
  const primaryImage = image || galleryPreview[0]?.image || null;
  const showGalleryStrip = galleryPreview.length >= 2;

  return (
    <Card className="instrument-card">
      <Link to={`/instruments/${slug}`} className="instrument-card__link">
        {showGalleryStrip ? (
          <div className="instrument-card__media instrument-card__media--grid">
            {galleryPreview.map((item, idx) => (
              <img
                key={`${slug}-preview-${idx}`}
                src={item.image}
                alt={item.caption || `${name} photo ${idx + 1}`}
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        ) : (
          primaryImage && (
            <div className="instrument-card__media">
              <img
                src={primaryImage}
                alt={coverAlt}
                loading="lazy"
                decoding="async"
              />
            </div>
          )
        )}
        <div className="instrument-card__body">
          <p className="instrument-card__eyebrow">Instrument</p>
          <h3>{name}</h3>
          {shortDescription && <p className="instrument-card__summary">{shortDescription}</p>}
          <span className="instrument-card__cta">View instrument &rarr;</span>
        </div>
      </Link>
    </Card>
  );
}

export default InstrumentCard;
