import React from 'react';

/**
 * Reusable card component that applies consistent styling to its content.
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to render inside the card
 */
function Card({ children }) {
  return <div className="card">{children}</div>;
}

export default Card;