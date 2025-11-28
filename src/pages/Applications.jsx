import React from 'react';

function Applications() {
  return (
    <article className="applications-page rich-text">
      <h1>Applications</h1>

      <section>
        <h2>Meteorology: Climate Study and Long-Term Monitoring</h2>
        <p>
          The Earth's radiation budget drives weather, climate, atmospheric circulation, and ocean currents. Reliable
          long-term measurements of shortwave and longwave irradiance are therefore essential for detecting climate
          change trends. This has been the primary focus of The Eppley Laboratory for nearly a century and our
          instruments operate on grassy plains, rain forests, deserts, mountain summits, polar regions, equatorial
          islands, aircraft, balloons, ships, and ocean buoys. Universities and government institutions on every
          continent use Eppley sensors to build networks that capture accurate, traceable data sets of solar and
          atmospheric conditions.
        </p>
      </section>

      <section>
        <h2>Solar Power: Site Selection, Predictions, and Performance Testing</h2>
        <p>
          The rapid growth of photovoltaic (PV) and concentrating solar power (CSP) plants demands precise monitoring
          of solar resources. Accurate measurements inform site selection, energy forecasts, and acceptance or
          performance testing. PV facilities typically mount an SPP or GPP pyranometer in the plane of the array to
          record plane-of-array irradiance, with growing interest in rear-side measurements for bifacial modules.
          CSP facilities pair an sNIP pyrheliometer with an SMT tracker to capture Direct Normal Irradiance (DNI).
          Many researchers augment those instruments with a complete solar monitoring station that measures global,
          diffuse, direct, and albedo components simultaneously.
        </p>
      </section>

      <section>
        <h2>Reference Cells</h2>
        <p>
          Solar reference cells are built from the same materials used in PV modules, but variations in design and
          construction can produce different temperature and spectral responses. Thermopile-based SPP pyranometers
          provide a stable standard so different reference cells can be compared and traced to the World Radiation
          Reference (WRR).
        </p>
      </section>

      <section>
        <h2>Material Testing</h2>
        <p>
          Solar, UV, and infrared measurements support an enormous range of material and system tests. Examples
          include monitoring UV exposure for color or material degradation; evaluating heating and cooling systems in
          buildings, automobiles, and military vehicles; measuring roof or pavement reflectance; improving packaging
          for beverages; and characterizing solar/temperature chambers for indoor testing. These experiments may run
          outdoors under natural sunlight or indoors using controlled sources while relying on Eppley instrumentation
          for trusted irradiance data.
        </p>
      </section>
    </article>
  );
}

export default Applications;
