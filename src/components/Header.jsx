import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import eppleyLogo from '../assets/images/eppley-logo.png';

/**
 * Header component providing the site logo and navigation links.
 */
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <Link to="/" className="logo-button" aria-label="Return to the homepage">
        <img src={eppleyLogo} alt="The Eppley Laboratory" className="logo-image" />
      </Link>
      <button
        type="button"
        className="menu-toggle"
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="menu-toggle__icon" aria-hidden="true">☰</span>
        <span className="menu-toggle__text">Menu</span>
      </button>
      <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active-link' : '')} onClick={closeMenu}>Home</NavLink>
        <NavLink to="/history" className={({ isActive }) => (isActive ? 'active-link' : '')} onClick={closeMenu}>History</NavLink>
        <NavLink to="/instruments" className={({ isActive }) => (isActive ? 'active-link' : '')} onClick={closeMenu}>Instruments</NavLink>
        <NavLink to="/solar-radiation" className={({ isActive }) => (isActive ? 'active-link' : '')} onClick={closeMenu}>Solar Radiation</NavLink>
        <NavLink to="/applications" className={({ isActive }) => (isActive ? 'active-link' : '')} onClick={closeMenu}>Applications</NavLink>
        <NavLink to="/calibrations" className={({ isActive }) => (isActive ? 'active-link' : '')} onClick={closeMenu}>Calibrations</NavLink>
      </nav>
    </header>
  );
}

export default Header;
