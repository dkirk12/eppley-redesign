import React from 'react';

const spectrumBands = [
  { label: 'UV', range: '200 – 390 nm' },
  { label: 'Visible', range: '390 – 780 nm' },
  { label: 'Near IR', range: '780 – 4,000 nm' },
  { label: 'Longwave IR', range: '4 – 100 µm' },
];

/**
 * Restored Solar Radiation page with spectrum visualization.
 */
function SolarRadiation() {
  return (
    <article className="solar-page rich-text">
      <h1>Introduction to Solar Radiation Measurements</h1>
      <p>
        Solar radiation describes the visible and near-visible (ultraviolet and near-infrared) energy emitted by
        the sun. Terrestrial radiation refers to the infrared energy emitted by the atmosphere. Together they span
        a broad band from roughly 0.20 to 100 micrometers (µm). The key regions include ultraviolet, visible,
        near-infrared, and infrared radiation.
      </p>
      <ul>
        <li>Ultraviolet: 0.20 – 0.39 µm</li>
        <li>Visible: 0.39 – 0.78 µm</li>
        <li>Near-infrared: 0.78 – 4.0 µm</li>
        <li>Infrared: 4.0 – 100 µm</li>
      </ul>
      <p>
        Approximately 99% of solar (shortwave) radiation at the Earth's surface lies between 0.3 and 3.0 µm, while
        most terrestrial (longwave) radiation occupies 3.5 to 50 µm. Outside the atmosphere the intensity is about
        1,370 W/m², known as the solar constant. At ground level, a clear day typically delivers about 1,000 W/m² of
        direct beam energy, although latitude, season, cloud cover, and aerosols all modulate the available
        irradiance.
      </p>

      <section className="spectrum-section">
        <h2>The Solar Spectrum</h2>
        <p>
          The historic site illustrated the visible spectrum with a gradient display. The visualization below
          recreates that reference so each waveband can be identified at a glance.
        </p>
        <div className="spectrum-display" role="img" aria-label="Ultraviolet, visible, near infrared, and longwave infrared wavelengths">
          <div className="spectrum-bar" />
          <div className="spectrum-labels">
            {spectrumBands.map((band) => (
              <div key={band.label} className="spectrum-label">
                <strong>{band.label}</strong>
                <span>{band.range}</span>
              </div>
            ))}
          </div>
        </div>
        <p>
          As sunlight passes through the atmosphere it is scattered and absorbed by air molecules, aerosols, water
          vapor, and clouds. Those processes reduce the direct beam and create the diffuse skylight component that
          radiometers must capture.
        </p>
      </section>

      <section>
        <h2>Ultraviolet Measurements</h2>
        <p>
          Ultraviolet radiation between 0.295 and 0.385 µm is critical for environmental, biological, and pollution
          studies. The Total Ultraviolet Radiometer (Model TUVR) uses a photoelectric cell with a quartz window and
          Teflon diffuser to follow the cosine law and limit the spectral response to that band.
        </p>
      </section>

      <section>
        <h2>Shortwave: Direct, Diffuse, and Global</h2>
        <p>
          Direct Normal Irradiance (DNI) is captured with a pyrheliometer such as the Normal Incidence
          Pyrheliometer (Model sNIP) mounted on a Solar Tracker or Automatic Solar Tracker (Model SMT). Diffuse
          Horizontal Irradiance is obtained by shading a pyranometer with the Shade Disk Kit (Model SDK) or a shadow
          band so the detector sees only the scattered component. Global Horizontal Irradiance combines the direct
          and diffuse energy on a horizontal surface and is best measured with thermopile pyranometers like the
          Standard Precision Pyranometer (SPP), Global Precision Pyranometer (GPP), or the Black &amp; White
          Pyranometer (Model 8-48).
        </p>
      </section>

      <section>
        <h2>Longwave (Infrared) Measurements</h2>
        <p>
          The Precision Infrared Radiometer (Model PIR) remains the industry standard for incoming and outgoing
          longwave radiation. It uses the same thermopile architecture found in Eppley pyranometers along with case
          and dome thermistors so net terrestrial radiation can be derived accurately.
        </p>
      </section>

      <section>
        <h2>Albedo, Bifacial, and Net Radiation</h2>
        <p>
          Albedo measurements compare incoming and reflected shortwave radiation with an upward- and downward-looking
          pyranometer pair (often using compact GPP sensors). Tilting that pair captures plane-of-array irradiance
          and rear-side flux for bifacial PV research. Net radiation sums incoming and reflected shortwave plus
          incoming and outgoing longwave radiation; Eppley recommends two SPPs and two PIRs so each term is resolved
          directly.
        </p>
      </section>

      <section>
        <h2>Sunshine Duration</h2>
        <p>
          Sunshine duration is typically defined as the length of time when DNI exceeds 120 W/m². Because the sNIP
          continuously measures the direct beam, those intervals are easily derived from its data stream.
        </p>
      </section>
    </article>
  );
}

export default SolarRadiation;
