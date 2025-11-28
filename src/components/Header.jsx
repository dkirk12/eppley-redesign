import React from 'react';
import { Link, NavLink } from 'react-router-dom';

/**
 * Header component providing the site logo and navigation links.
 */
function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo-button" aria-label="Return to the homepage">
        EPLAB
      </Link>
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
