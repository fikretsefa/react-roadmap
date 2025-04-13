"use client"
import React, { useEffect, useState } from 'react';

// A modern functional component using Hooks (useState and useEffect)
// - This is the functional equivalent of the previous ClassComponent.
// - It demonstrates how to persist user input to localStorage using React Hooks.
//
// Preferred in modern React development (after v16.8)
// Cleaner, less boilerplate than class-based components
// Easily extendable and testable
//
// useState:
// - Initializes the `value` state with the value from localStorage (or empty string if not found).
//
// useEffect:
// - Syncs the value to localStorage every time it changes.
// - Equivalent to componentDidUpdate in class components.
//
// Note:
// - Accessing localStorage directly assumes this runs on the client. 
//   In Next.js (especially with SSR), always ensure it's inside `"use client"` and only used after the component mounts.
//
// Tip for TypeScript:
// - Instead of using `event: any`, you can use more specific types:
//   `React.ChangeEvent<HTMLInputElement>` for better type safety.

const FunctionComponent = () => {
  const [value, setValue] = useState(
    localStorage.getItem('myValueInLocalStorage') || ''
  );

  useEffect(() => {
    localStorage.setItem('myValueInLocalStorage', value);
  }, [value]); 

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => 
    setValue(event.target.value);

  return (
    <div style={{ backgroundColor: 'var(--pink-500)' }}>
      <h1>Function Component</h1>

      <input
        value={value}
        type="text"
        onChange={onChange}
        placeholder="Type something..."
      />

      <p>{value}</p>
    </div>
  );
};

export default FunctionComponent;
