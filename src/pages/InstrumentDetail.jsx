import React from 'react';
import { Link, useParams } from 'react-router-dom';
import instruments from '../data/instruments.js';

/**
 * Instrument detail page.
 * Looks up an instrument by slug and displays detailed information.
 */
function InstrumentDetail() {
  const { slug } = useParams();
  const instrument = instruments.find((inst) => inst.slug === slug);

  if (!instrument) {
    return (
      <div className="instrument-detail">
        <p>Instrument not found.</p>
        <Link to="/instruments" className="btn">
          Return to catalog
        </Link>
      </div>
    );
  }

  const { name, heroImage, shortDescription, descriptionHtml, datasheet, specTables, gallery } = instrument;

  return (
    <article className="instrument-detail">
      <Link to="/instruments" className="instrument-detail__back">
        &larr; Back to catalog
      </Link>

      <header className="instrument-detail__header">
        {heroImage && (
          <img
            className="instrument-detail__hero"
            src={heroImage.image}
            alt={heroImage.alt || name}
            loading="lazy"
            decoding="async"
          />
        )}
        <div className="instrument-detail__intro">
          <p className="instrument-detail__eyebrow">Instrument overview</p>
          <h1>{name}</h1>
          {shortDescription && <p className="instrument-detail__lede">{shortDescription}</p>}
          {datasheet && (
            <div className="instrument-detail__actions">
              <a
                href={datasheet.file}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                {datasheet.label}
              </a>
            </div>
          )}
        </div>
      </header>

      {descriptionHtml && (
        <section className="instrument-detail__section">
          <h2>Overview</h2>
          <div
            className="instrument-detail__richtext"
            dangerouslySetInnerHTML={{ __html: descriptionHtml }}
          />
        </section>
      )}

      {specTables && specTables.length > 0 && (
        <section className="instrument-detail__section">
          <h2>Specifications</h2>
          <div className="spec-table-grid">
            {specTables.map((table, idx) => (
              <div className="spec-table card" key={`${table.title || 'spec'}-${idx}`}>
                {table.title && <h3>{table.title}</h3>}
                <dl>
                  {table.rows.map((row, rowIdx) => (
                    <div className="spec-row" key={rowIdx}>
                      {row.labelHtml && (
                        <dt dangerouslySetInnerHTML={{ __html: row.labelHtml }} />
                      )}
                      <dd dangerouslySetInnerHTML={{ __html: row.valueHtml }} />
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </section>
      )}

      {gallery && gallery.length > 0 && (
        <section className="instrument-detail__section">
          <h2>Gallery</h2>
          <div className="instrument-gallery-grid">
            {gallery.map((item, idx) => (
              <figure className="instrument-gallery-item" key={`${item.image}-${idx}`}>
                <img
                  src={item.image}
                  alt={item.caption || name}
                  loading="lazy"
                  decoding="async"
                />
                {item.caption && <figcaption>{item.caption}</figcaption>}
              </figure>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

export default InstrumentDetail;
