import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import History from './pages/History.jsx';
import SolarRadiation from './pages/SolarRadiation.jsx';
import Applications from './pages/Applications.jsx';
import Instruments from './pages/Instruments.jsx';
import InstrumentDetail from './pages/InstrumentDetail.jsx';
import Calibrations from './pages/Calibrations.jsx';

/**
 * Main application component.
 * Defines the global layout with header, routed content and footer.
 */
function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="content-area">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/solar-radiation" element={<SolarRadiation />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/instruments" element={<Instruments />} />
          <Route path="/instruments/:slug" element={<InstrumentDetail />} />
          <Route path="/calibrations" element={<Calibrations />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;