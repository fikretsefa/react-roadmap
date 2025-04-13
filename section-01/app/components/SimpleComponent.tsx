import React from 'react';

// A simple functional component
// - This is the most basic form of a React component.
// - It doesn't use any state, props, or lifecycle methods.
// - It's a good starting point to understand how JSX and functional components work.
//
// Notes:
// - Functional components are simply JavaScript functions that return JSX.
// - Since there's no state or props here, it's purely presentational (static).
// - For styling, it uses inline CSS with a CSS variable (e.g., --blue-300).
// - Ideal for components like headers, footers, or reusable UI elements.
//
// In modern React (with hooks and TypeScript), functional components are preferred over class components
// for simplicity, readability, and better support for composable logic (e.g., custom hooks).

const SimpleComponent = () => {
  return (
    <div style={{backgroundColor:'var(--blue-300)'}}>
      <h1>Hello, I am a Functional Component!</h1>
      <p>This is a simple functional component example.</p>
      <p>There is not any state, props etc.</p>
    </div>
  );
};

export default SimpleComponent;
