import React from 'react';
import captain from '../assets/images/captain-eppley.jpg';

function History() {
  return (
    <article className="history-page">
      <h1>Our History</h1>
      <section className="history-layout">
        <div className="history-copy">
          <p>
            The Eppley Laboratory was founded in Newport, RI by Captain Marion Eppley in 1917 for the purpose of
            supplying Weston Standard Cells at the request of the Leeds &amp; Northrup Company. It was incorporated
            shortly thereafter and after World War I, the Standard Cell division continued to grow and Eppley Lab added
            new products including Thermal Radiation Instrumentation, DC Bridges and Thermopiles.
          </p>
          <p>
            In the 1930s and 1940s, Eppley began supplying instrumentation for the measurement of solar irradiance and
            atmospheric irradiance and by the 1960s, the most widely used pyranometer for measuring (global) solar
            radiation was the Eppley 180&deg; "Lightbulb" Pyranometer.
          </p>
          <p>
            In the late 1960s and early 1970s, Eppley began producing improved solar instruments based on the
            wire-wound thermopiles that are still in use today.
          </p>
          <p>
            In the 1980s, Eppley was involved in several satellite missions designed to determine the Solar Constant
            outside of the Earth's atmosphere which then led to the development of the AHF Cavity Radiometer System
            which is the premier Primary Standard Instrument for measuring solar irradiance.
          </p>
          <p>
            In 2020 Eppley discontinued manufacturing new instruments. We are still available for recalibration and
            repairs of the thousands of instruments still in service today.
          </p>
        </div>
        <div className="history-figure">
          <img src={captain} alt="Captain Marion Eppley" loading="lazy" decoding="async" />
          <p>Captain Marion Eppley</p>
        </div>
      </section>
    </article>
  );
}

export default History;
