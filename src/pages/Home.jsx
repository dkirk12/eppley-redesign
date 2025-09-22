import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card.jsx';
import hero from '../assets/images/hero.png';

/**
 * Home page component.
 * Displays a hero image, tagline and summaries of the other sections of the site.
 */
function Home() {
  return (
    <div>
      {/* Hero section */}
      <section style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <img
          src={hero}
          alt="Abstract solar energy illustration"
          style={{ width: '100%', maxHeight: '360px', objectFit: 'cover', borderRadius: '12px' }}
        />
        <h1 style={{ marginTop: '1rem', fontSize: '2rem' }}>Precision Instruments for Solar Energy Research</h1>
        <p style={{ color: 'var(--color-muted)', marginBottom: '1.5rem' }}>
          Eppley Laboratory crafts high‑accuracy radiometers and trackers for measuring solar and terrestrial radiation.
        </p>
        <Link to="/instruments" className="btn">
          Explore Instruments
        </Link>
      </section>
      {/* Overview cards */}
      <section className="grid grid-cols-2 grid-cols-3">
        <Card>
          <h3>History</h3>
          <p>Learn how Captain Marion Eppley’s vision led to over a century of excellence in radiometry.</p>
          <Link to="/history" className="btn">
            Discover
          </Link>
        </Card>
        <Card>
          <h3>Solar Radiation</h3>
          <p>Understand the electromagnetic spectrum and the principles behind our instruments.</p>
          <Link to="/solar-radiation" className="btn">
            Learn More
          </Link>
        </Card>
        <Card>
          <h3>Applications</h3>
          <p>See how our instruments support meteorology, solar power, calibration and more.</p>
          <Link to="/applications" className="btn">
            View Applications
          </Link>
        </Card>
        <Card>
          <h3>Calibrations</h3>
          <p>Need an instrument calibrated? Find out how to send your instrument for precise calibration.</p>
          <Link to="/calibrations" className="btn">
            Get Started
          </Link>
        </Card>
      </section>
    </div>
  );
}

export default Home;