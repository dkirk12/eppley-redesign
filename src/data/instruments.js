import applicationsBg from '../assets/images/applications-background.png';
import applicationsHeader from '../assets/images/applications-header.png';
import radiationHeader from '../assets/images/radiation-header.png';
import radiationBg from '../assets/images/radiation-background.png';
import historyBg from '../assets/images/history-background.png';
import usaMade from '../assets/images/usa-made.png';
import sdkImage from '../assets/images/SDK.jpg';

/*
  List of instrument definitions for the Eppley React site.
  Each entry includes a human‑readable name, a URL‑friendly slug, an optional image,
  a short description for the listing page, a full description for the detail page,
  an optional list of features, and an optional datasheet path.

  Many of the following descriptions are paraphrased from general knowledge about
  solar radiation instruments and do not attempt to reproduce word‑for‑word
  content from the original site. Where appropriate, specifics are retained
  (e.g. instrument names and general functions).
*/

const instruments = [
  {
    name: 'Automatic Solar Tracker',
    slug: 'automatic-solar-tracker',
    image: applicationsBg,
    shortDescription:
      'Positions instruments such as pyrheliometers and pyranometers to follow the sun throughout the day.',
    description:
      'The Automatic Solar Tracker (SMT) continually aligns attached radiometers with the apparent motion of the sun. By keeping the sensor pointed directly at the solar disk, the tracker maximizes measurement accuracy for direct beam instruments. Rugged construction and precise gearing make the SMT suitable for long‑term operation in harsh environments, and it is essential for calibration facilities and research laboratories.',
    features: [
      'Dual‑axis tracking with high precision',
      'Compatible with pyrheliometers and shade mechanisms',
      'Weather‑resistant construction for field use',
    ],
    datasheet: null,
  },
  {
    name: 'Black & White Pyranometer',
    slug: 'black-white-pyranometer',
    image: applicationsHeader,
    shortDescription:
      'Measures diffuse solar irradiance using alternating black and white sectors.',
    description:
      'The Black & White Pyranometer (also known as the 8‑48 pyranometer) is designed to measure diffuse solar radiation by shading the sensor body with alternating black and white painted sectors. This construction minimizes sensitivity to thermal gradients and wind while maintaining a flat spectral response. The instrument is widely used in meteorological networks for measuring diffuse irradiance in conjunction with a shade disk kit.',
    features: [
      'Flat response from 0.3–3 µm',
      'Insensitive to wind and temperature variations',
      'Requires shade disk for diffuse measurements',
    ],
    datasheet: null,
  },
  {
    name: 'Global Precision Pyranometer',
    slug: 'global-precision-pyranometer',
    image: radiationHeader,
    shortDescription:
      'High‑accuracy instrument for measuring global (direct + diffuse) solar irradiance.',
    description:
      'The Global Precision Pyranometer (GPP) combines a thermopile detector with a precision glass dome to measure the total hemispherical solar irradiance. Its temperature‑controlled sensor and precision optics provide low uncertainty over long periods, making it suitable for reference measurements and calibration transfer. The GPP replaces the older model PSP and meets the highest calibration standards.',
    features: [
      'Wide spectral range from 0.3–3 µm',
      'Calibrated sensitivity traceable to world radiometric standards',
      'Low thermal offset and long‑term stability',
    ],
    datasheet: null,
  },
  {
    name: 'Normal Incidence Pyrheliometer',
    slug: 'normal-incidence-pyrheliometer',
    image: radiationBg,
    shortDescription:
      'Direct beam radiometer for measuring the normal incidence solar flux.',
    description:
      'The Normal Incidence Pyrheliometer (NIP) is a precision thermopile radiometer used for measuring direct solar beam irradiance. When mounted on a solar tracker, the NIP continuously points at the sun and produces an output proportional to the solar energy passing through its aperture. It is used as a primary standard in many calibration facilities and provides the reference for converting pyranometer readings.',
    features: [
      'Narrow field‑of‑view to isolate the solar disk',
      'High stability thermopile sensor',
      'Requires a solar tracker for operation',
    ],
    datasheet: null,
  },
  {
    name: 'Precision Infrared Radiometer',
    slug: 'precision-infrared-radiometer',
    image: historyBg,
    shortDescription:
      'Measures longwave terrestrial radiation in the 4–100 µm band.',
    description:
      'The Precision Infrared Radiometer (PIR) is designed to measure the broadband thermal radiation emitted by the Earth and atmosphere. Its blackened cavity and precision thermopile detector provide a flat spectral response in the 4–100 µm range. The PIR is widely used in studies of the Earth’s radiation budget and surface energy balance.',
    features: [
      'Flat spectral response across the thermal infrared region',
      'Window with solar filter to block shortwave radiation',
      'Low noise electronics for high sensitivity',
    ],
    datasheet: null,
  },
  {
    name: 'Standard Precision Pyranometer',
    slug: 'standard-precision-pyranometer',
    image: applicationsBg,
    shortDescription:
      'Reliable instrument for routine measurements of global solar radiation.',
    description:
      'The Standard Precision Pyranometer (SPP) is the workhorse instrument for measuring global solar irradiance. It employs a thermopile sensor and a single glass dome to collect both direct and diffuse radiation. The SPP offers good accuracy and durability, making it ideal for agricultural weather stations, renewable energy monitoring and climatology studies.',
    features: [
      'Spectral range 0.3–3 µm',
      'Rugged design with minimal maintenance',
      'Cost‑effective solution for routine monitoring',
    ],
    datasheet: null,
  },
  {
    name: 'Shade Disk Kit',
    slug: 'shade-disk-kit',
    image: sdkImage,
    shortDescription:
      'Accessory for shading a pyranometer to measure diffuse solar irradiance.',
    description:
      'The Shade Disk Kit (SDK) allows a pyranometer to measure diffuse sky radiation by blocking the direct beam of the sun. It includes a mounting arm and a white disk that can be positioned relative to the instrument’s dome. Combined with a black & white pyranometer, the SDK yields accurate diffuse measurements for radiative balance studies.',
    features: [
      'Easy adjustment for varying solar elevation',
      'Stable mounting hardware',
      'Compatible with most Eppley pyranometers',
    ],
    datasheet: null,
  },
  {
    name: 'Total Ultraviolet Radiometer',
    slug: 'total-ultraviolet-radiometer',
    image: applicationsHeader,
    shortDescription:
      'Measures integrated ultraviolet radiation across the UVA and UVB bands.',
    description:
      'The Total Ultraviolet Radiometer (TUVR) integrates the UV‑A and UV‑B portions of the solar spectrum to provide a single output proportional to total ultraviolet irradiance. Its photodiode detector and optical filters are designed to match the erythemal action spectrum. The TUVR is used in material testing, health studies and environmental monitoring.',
    features: [
      'Spectral response 280–400 nm',
      'Compact design with photodiode detector',
      'Ideal for monitoring UV exposure and material degradation',
    ],
    datasheet: null,
  },
  {
    name: 'Ventilator',
    slug: 'ventilator',
    image: usaMade,
    shortDescription:
      'Enhances air flow over radiometers to reduce thermal offsets.',
    description:
      'The Ventilator is an accessory that mounts over a radiometer to provide a constant flow of air. By keeping the sensor and dome at ambient temperature and preventing dew formation, ventilation improves the accuracy of measurements under calm conditions. The device is particularly useful for instruments installed in humid or frost‑prone environments.',
    features: [
      'Low‑power fan with weatherproof housing',
      'Extends measurement range by preventing condensation',
      'Compatible with multiple Eppley instruments',
    ],
    datasheet: null,
  },
];

export default instruments;