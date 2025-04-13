"use client"
import React from 'react';
import PropTypes from 'prop-types';

// Note:
// The usage of `defaultProps` is a legacy pattern mainly used in class components.
// In functional components, especially with modern React (17+ and 18+), using default
// function parameters (like in the destructuring above) is the recommended way.
// `defaultProps` might not work reliably with functional components in frameworks
// like Next.js, especially in client components.
// For better type safety and modern practices, consider using TypeScript instead.

const ProptypesComponent = ({ name = 'This is default props, not assigned from parent' }) => {
  return (
    <div style={{backgroundColor:'var(--gray-300)'}}>
      <h1>This Component with Props and Types</h1>
      <p>Name: {name}</p>
    </div>
  );
};

// PropTypes is still useful for runtime type checking,
// but for larger projects, switching to TypeScript is highly recommended.
ProptypesComponent.propTypes = {
  name: PropTypes.string,
};

// Although defined here, this defaultProps definition may not work
// reliably in functional components. Use default parameters instead.
ProptypesComponent.defaultProps = {
  name: 'This is default props, not assigned from parent'
};

export default ProptypesComponent;
