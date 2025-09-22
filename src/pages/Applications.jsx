import React from 'react';
import Card from '../components/Card.jsx';

/**
 * Applications page.
 * Highlights several domains that rely on solar and terrestrial radiation measurements.
 */
function Applications() {
  const applications = [
    {
      title: 'Meteorology',
      description:
        'Solar radiation data are essential for weather forecasting and climate monitoring. Our radiometers provide baseline measurements for meteorological networks and climate research.',
    },
    {
      title: 'Solar Power',
      description:
        'Accurate irradiance measurements enable the design and performance evaluation of photovoltaic systems and solar thermal plants. Reliable data help optimize energy yield and efficiency.',
    },
    {
      title: 'Traceability of Reference Cells',
      description:
        'Photovoltaic reference cells must be traceable to international standards. We calibrate reference cells and radiometers to ensure consistency across laboratories and test facilities.',
    },
    {
      title: 'Material Degradation Testing',
      description:
        'Exposure to sunlight causes paints, plastics and coatings to fade and degrade. Our instruments quantify UV and total solar exposure for durability studies and quality assurance.',
    },
  ];
  return (
    <div>
      <h1>Applications</h1>
      <section className="grid grid-cols-2 grid-cols-3">
        {applications.map((app) => (
          <Card key={app.title}>
            <h3>{app.title}</h3>
            <p>{app.description}</p>
          </Card>
        ))}
      </section>
    </div>
  );
}

export default Applications;