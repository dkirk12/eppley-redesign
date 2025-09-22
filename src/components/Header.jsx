import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Header component providing the site logo and navigation links.
 */
function Header() {
  return (
    <header className="header">
      <div className="logo" style={{ fontWeight: '700', fontSize: '1.5rem' }}>
        EPLAB
      </div>
      <nav className="nav">
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active-link' : '')}>Home</NavLink>
        <NavLink to="/history" className={({ isActive }) => (isActive ? 'active-link' : '')}>History</NavLink>
        <NavLink to="/instruments" className={({ isActive }) => (isActive ? 'active-link' : '')}>Instruments</NavLink>
        <NavLink to="/solar-radiation" className={({ isActive }) => (isActive ? 'active-link' : '')}>Solar Radiation</NavLink>
        <NavLink to="/applications" className={({ isActive }) => (isActive ? 'active-link' : '')}>Applications</NavLink>
        <NavLink to="/calibrations" className={({ isActive }) => (isActive ? 'active-link' : '')}>Calibrations</NavLink>
      </nav>
    </header>
  );
}

export default Header;