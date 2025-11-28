import React from 'react';
import captain from '../assets/images/captain-eppley.jpg';

const timelineEvents = [
  {
    year: '1917',
    text: 'Captain Marion Eppley founds The Eppley Laboratory in Newport, Rhode Island with a focus on precision reagents and instruments.'
  },
  {
    year: '1920s',
    text: 'Development of pyrheliometers and pyranometers to calibrate Smithsonian solar instruments, establishing a global solar irradiance reference.'
  },
  {
    year: '1950s',
    text: 'Eppley radiometers become standard at meteorological stations worldwide for weather and climate research.'
  },
  {
    year: '1980s',
    text: 'Introduction of improved precision radiometers and automatic solar trackers to support the growing renewable energy industry.'
  },
  {
    year: 'Present',
    text: 'Eppley continues to innovate with radiometers, trackers, and calibration services that support meteorology, solar power, and materials research.'
  }
];

function History() {
  return (
    <article className="history-page">
      <h1>Our History</h1>
      <section className="history-layout">
        <div className="history-copy">
          <p>
            The Eppley Laboratory traces its origins to 1917, when Captain Marion Eppley founded a small scientific
            enterprise in Newport, Rhode Island. Originally focused on producing high-purity chemical reagents and
            precision instruments, the company soon turned its attention to the emerging field of solar radiometry.
            Captain Eppley and his colleagues developed pyrheliometers and pyranometers to calibrate the Smithsonian's
            solar constant instruments, establishing standards that are still referenced today.
          </p>
          <p>
            Over the ensuing decades the laboratory expanded its product line to include instruments capable of
            measuring direct, diffuse, and global irradiance, as well as the thermal infrared radiation emitted by the
            Earth. Eppley instruments have been deployed on weather stations, research vessels, and calibration
            facilities around the world. Today, the company continues to innovate while maintaining the craftsmanship
            and accuracy that made its name synonymous with quality radiometry.
          </p>
        </div>
        <div className="history-figure">
          <img src={captain} alt="Captain Marion Eppley" loading="lazy" decoding="async" />
          <p>Captain Marion Eppley</p>
        </div>
      </section>

      <section className="timeline">
        {timelineEvents.map((event) => (
          <div className="timeline-item" key={event.year}>
            <div className="timeline-marker" aria-hidden="true" />
            <div className="timeline-content">
              <h3>{event.year}</h3>
              <p>{event.text}</p>
            </div>
          </div>
        ))}
      </section>
    </article>
  );
}

export default History;
