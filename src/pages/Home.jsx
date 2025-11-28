import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card.jsx';

/**
 * Home page component without the large hero image.
 */
function Home() {
  return (
    <article className="home-page">
      <section className="home-intro">
        <div className="sun-emblem" aria-hidden="true" />
        <p className="home-eyebrow">Since 1917</p>
        <h1>Precision Instruments for Solar and Terrestrial Radiation</h1>
        <p>
          The Eppley Laboratory supplies radiometers, automatic trackers, and calibration services to researchers,
          meteorological networks, and solar power developers across the globe. Each instrument is engineered for
          accuracy, durability, and traceability to international standards.
        </p>
        <div className="home-actions">
          <Link to="/instruments" className="btn">
            Explore Instruments
          </Link>
          <Link to="/calibrations" className="btn btn-secondary">
            Schedule Calibration
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-2 grid-cols-3">
        <Card>
          <h3>History</h3>
          <p>Discover how Captain Marion Eppley's vision built more than a century of radiometry innovation.</p>
          <Link to="/history" className="btn">
            Discover
          </Link>
        </Card>
        <Card>
          <h3>Solar Radiation</h3>
          <p>Review the electromagnetic spectrum and the instruments used to measure each band.</p>
          <Link to="/solar-radiation" className="btn">
            Learn More
          </Link>
        </Card>
        <Card>
          <h3>Applications</h3>
          <p>See how Eppley sensors support meteorology, solar resource assessment, and material testing.</p>
          <Link to="/applications" className="btn">
            View Applications
          </Link>
        </Card>
        <Card>
          <h3>Calibrations</h3>
          <p>Every calibration follows ISO procedures with traceability to WRR, WISG, IPTS, and NIST.</p>
          <Link to="/calibrations" className="btn">
            Get Started
          </Link>
        </Card>
        <Card>
          <h3>Contact</h3>
          <p>
            Speak with the Eppley team about instruments, orders, or support. We’re available by phone on business
            days and respond to email inquiries promptly.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <a className="btn" href="tel:+14018471020">
              Call +1.401.847.1020
            </a>
            <a className="btn btn-secondary" href="mailto:info@eppleylab.com">
              Email Us
            </a>
          </div>
        </Card>
      </section>
    </article>
  );
}

export default Home;
