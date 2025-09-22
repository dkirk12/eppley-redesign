import React from 'react';

/**
 * Solar Radiation page.
 * Explains the basics of the solar spectrum and the importance of measuring
 * different wavebands. Citations reference the original archived content for
 * factual statements.
 */
function SolarRadiation() {
  return (
    <div>
      <h1>Solar Radiation</h1>
      <p>
        The Sun emits a broad spectrum of electromagnetic radiation. At the top of Earth’s
        atmosphere, the mean flux—known as the solar constant—is approximately 1,367&nbsp;W·m⁻²【395161079109363†screenshot】.
        As sunlight passes through the atmosphere it is attenuated by scattering and absorption,
        reducing the irradiance to about 1,000&nbsp;W·m⁻² on a clear day at sea level.
      </p>
      <h2>Wavebands</h2>
      <ul>
        <li>
          <strong>Ultraviolet (UV)</strong>: 100–400&nbsp;nm. UV‑B (280–320&nbsp;nm) causes sunburn and
          is largely absorbed by ozone, while UV‑A (320–400&nbsp;nm) penetrates the atmosphere and
          contributes to material degradation.
        </li>
        <li>
          <strong>Visible</strong>: 400–700&nbsp;nm. These wavelengths are perceived by the human eye
          and drive photosynthesis【395161079109363†screenshot】.
        </li>
        <li>
          <strong>Near‑infrared (NIR)</strong>: 700–1,000&nbsp;nm. NIR carries most of the Sun’s heat
          energy and is important for thermal processes.
        </li>
        <li>
          <strong>Longwave infrared</strong>: 4–100&nbsp;µm. The Earth’s surface and atmosphere emit
          this thermal radiation, which is measured by instruments such as the precision infrared
          radiometer.
        </li>
      </ul>
      <p>
        Understanding these spectral regions helps scientists and engineers select the appropriate
        sensors. Eppley instruments measure direct, diffuse and global irradiance across these
        bands, supporting meteorology, renewable energy and materials testing.
      </p>
    </div>
  );
}

export default SolarRadiation;