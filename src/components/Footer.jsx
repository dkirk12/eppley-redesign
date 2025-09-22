import React from 'react';

/**
 * Footer component displaying contact information and credits.
 */
function Footer() {
  return (
    <footer className="footer">
      <p>The Eppley Laboratory Inc. U.S.A. — +1.401.847.1020</p>
      <p>
        Site by <a href="https://www.eyecitemedia.com" target="_blank" rel="noopener noreferrer">eyecitemedia, LLC</a> &amp;{' '}
        <a href="https://www.roskelly.com" target="_blank" rel="noopener noreferrer">Roskelly Inc</a>
      </p>
    </footer>
  );
}

export default Footer;