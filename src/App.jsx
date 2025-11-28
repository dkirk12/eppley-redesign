import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const History = lazy(() => import('./pages/History.jsx'));
const SolarRadiation = lazy(() => import('./pages/SolarRadiation.jsx'));
const Applications = lazy(() => import('./pages/Applications.jsx'));
const Instruments = lazy(() => import('./pages/Instruments.jsx'));
const InstrumentDetail = lazy(() => import('./pages/InstrumentDetail.jsx'));
const Calibrations = lazy(() => import('./pages/Calibrations.jsx'));

/**
 * Main application component.
 * Defines the global layout with header, routed content and footer.
 */
function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="content-area">
        <Suspense fallback={<div className="loading-state">Loading page…</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/solar-radiation" element={<SolarRadiation />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/instruments" element={<Instruments />} />
            <Route path="/instruments/:slug" element={<InstrumentDetail />} />
            <Route path="/calibrations" element={<Calibrations />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
