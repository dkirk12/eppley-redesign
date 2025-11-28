import rawInstruments from './instruments.json';

const instruments = rawInstruments.map((instrument) => ({
  ...instrument,
  image: instrument.heroImage?.image ?? null,
}));

export default instruments;
