import React from 'react';

/**
 * Reusable card component that applies consistent styling to its content.
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to render inside the card
 * @param {string} [props.className] - Optional extra class names
 */
function Card({ children, className = '' }) {
  const classes = ['card', className].filter(Boolean).join(' ').trim();
  return <div className={classes}>{children}</div>;
}

export default Card;
