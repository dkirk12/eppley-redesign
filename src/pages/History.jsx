import React from 'react';
import captain from '../assets/images/captain-eppley.jpg';

/**
 * History page.
 * Provides a brief history of The Eppley Laboratory and a timeline of key events.
 */
function History() {
  return (
    <div>
      <h1>Our History</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        <div style={{ flex: '1 1 250px', marginRight: '1rem' }}>
          <p>
            The Eppley Laboratory traces its origins to 1917, when Captain Marion Eppley founded a
            small scientific enterprise in Newport, Rhode Island. Originally focused on producing
            high‑purity chemical reagents and precision instruments, the company soon turned its
            attention to the emerging field of solar radiometry. Captain Eppley and his colleagues
            developed pyrheliometers and pyranometers to calibrate the Smithsonian’s solar constant
            instruments, establishing standards that are still referenced today.
          </p>
          <p>
            Over the ensuing decades the laboratory expanded its product line to include instruments
            capable of measuring direct, diffuse and global irradiance, as well as the thermal
            infrared radiation emitted by the Earth. Eppley instruments have been deployed on weather
            stations, research vessels and calibration facilities around the world. Today, the
            company continues to innovate while maintaining the craftsmanship and accuracy that made
            its name synonymous with quality radiometry.
          </p>
        </div>
        <div style={{ flex: '0 0 240px', textAlign: 'center' }}>
          <img
            src={captain}
            alt="Captain Marion Eppley"
            style={{ width: '100%', maxWidth: '240px', borderRadius: '8px' }}
          />
          <p style={{ color: 'var(--color-muted)', fontSize: '0.875rem' }}>
            Captain Marion Eppley
          </p>
        </div>
      </div>
      <h2>Timeline</h2>
      <ul>
        <li>
          <strong>1917</strong> – Captain Marion Eppley founds The Eppley Laboratory in Newport,
          Rhode Island.
        </li>
        <li>
          <strong>1920s</strong> – Development of pyrheliometers and pyranometers to calibrate the
          Smithsonian’s solar instruments, establishing a world reference for solar irradiance.
        </li>
        <li>
          <strong>1950s</strong> – Eppley instruments become standard equipment at meteorological
          stations worldwide for weather and climate research.
        </li>
        <li>
          <strong>1980s</strong> – Introduction of improved precision radiometers and automatic solar
          trackers for the growing renewable energy industry.
        </li>
        <li>
          <strong>Present</strong> – Eppley continues to innovate with a suite of radiometers,
          trackers and calibration services, supporting meteorology, solar power and materials
          research around the globe.
        </li>
      </ul>
    </div>
  );
}

export default History;