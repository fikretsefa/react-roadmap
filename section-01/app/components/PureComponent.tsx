"use client"
import React, { useState } from 'react';

interface PureComponentProps {
  onClick?: () => void;
}

// A functional component that simulates the concept of a "pure component".
// - It includes internal state for a counter.
// - Optionally, an external `onClick` handler can be passed via props to override the default behavior.
// - If no `onClick` is provided, it falls back to an internal increment function.
//
// Notes:
// - In traditional React, `React.PureComponent` is used with class components to prevent unnecessary re-renders
//   by doing a shallow comparison of props and state.
// - In functional components, similar behavior can be achieved using `React.memo()`
//   to optimize performance by memoizing the component output.
// - This example doesn't use `React.memo()` directly, but demonstrates a composable behavior by accepting an external handler.
// - The conditional button behavior (`onClick || handleIncrement`) provides flexibility for parent components to override default logic.
// - State is managed using the `useState` hook, and the component is declared with TypeScript for strict typing.

const PureComponent: React.FC<PureComponentProps> = ({ onClick }) => {
  // State declarations
  const [count, setCount] = useState<number>(0);

  // Default increment handler if no external onClick is provided
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div style={{backgroundColor:'var(--green-300)'}}>
      <h2>PureComponent</h2>
      
      <div>
        <h3>Counter: {count}</h3>
        <button onClick={onClick || handleIncrement}>Increment</button>
      </div>
    </div>
  );
};

export default PureComponent;
