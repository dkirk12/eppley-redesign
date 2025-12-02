import React from 'react';

/**
 * Home page component without hero image or tiles.
 */
function Home() {
  return (
    <article className="home-page">
      <section className="home-intro">
        <div className="sun-emblem" aria-hidden="true" />
        <h1 className="home-title">The Eppley Laboratory</h1>
        <p className="home-eyebrow">Since 1917</p>
        <h2 className="home-subtitle">Precision Instruments for Solar and Terrestrial Radiation</h2>
        <p>
          The Eppley Laboratory supplied radiometers, automatic trackers, and calibration services to researchers,
          meteorological networks, and solar power developers across the globe. Our instruments are engineered for
          accuracy, durability, and traceability to international standards.
        </p>
        <p>
          In 2020 Eppley discontinued manufacturing new instruments. We are still available for recalibration and
          repairs of the thousands of instruments still in service today.
        </p>
      </section>
    </article>
  );
}

export default Home;
