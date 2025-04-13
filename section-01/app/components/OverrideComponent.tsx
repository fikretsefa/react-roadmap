"use client"
import React from 'react';
import PureComponent from './PureComponent';

// This component demonstrates how to **override default behavior** of a child component
// by passing custom props—in this case, a custom `onClick` function.
//
// What it does:
// - It imports and renders `PureComponent`, which accepts an optional `onClick` prop.
// - Instead of using PureComponent's internal counter logic, it overrides the behavior
//   with a custom `handleAlert` function that shows an alert on click.
//
// Notes:
// - This is a powerful pattern in React where you compose components and customize
//   them via props instead of rewriting or duplicating logic.
// - This promotes **reusability** and **separation of concerns**:
//   `PureComponent` handles layout/state, while `OverrideComponent` decides behavior.
// - Common use case: Button components that can be reused with different actions.
//
// Additional Tip:
// - If you're using TypeScript, ensure the types of the props (like `onClick`) are flexible enough for reuse.
// - You can further optimize `PureComponent` using `React.memo` if needed.

const OverrideComponent = () => {

  const handleAlert = () => {
    alert("This button doesn't increment — it just shows an alert.");
  };

  return (
    <div>
      <h2>Override Component Example</h2>
      <p>
        This component extends PureComponentExample with custom styles and behaviors.
        The component below is a customized version of the original component.
      </p>
      
      <div>
        <PureComponent onClick={handleAlert}/>
      </div>
    </div>
  );
};

export default OverrideComponent;
