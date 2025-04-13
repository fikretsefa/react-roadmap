"use client"
import React, { useState } from 'react';

// This component demonstrates how to use state in functional components using the useState hook.
// - It includes a numeric counter with an increment button.
// - It also includes a text input field that updates state on user input.
// - Each state update triggers a re-render to reflect the current values in the UI.
// 
// Notes:
// - useState is a React hook introduced in React 16.8 to allow stateful logic in functional components.
// - The `number` and `string` typings in useState are TypeScript features for stricter type safety.
// - React handles re-rendering the component whenever state changes occur.
// - For scalable state management in larger apps, you may consider tools like Redux, Zustand, or useReducer.
// - This is a client component (`"use client"`) so it runs entirely on the browser side in a Next.js app.

const StateComponent = () => {
  // State declarations
  const [count, setCount] = useState<number>(0); // Counter state initialized to 0
  const [text, setText] = useState<string>(''); // Text input state initialized to empty string

  // Event handler to increment counter
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Event handler to update text state on input change
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div style={{backgroundColor:'var(--yellow-300)'}}>
      <h2>Component with State</h2>
      
      <div>
        <h3>Counter: {count}</h3>
        <button onClick={handleIncrement}>Increment</button>
      </div>

      <div>
        <h3>Text Input</h3>
        <input 
          type="text" 
          value={text} 
          onChange={handleTextChange}
          placeholder="Type something..."
        />
        <p>Entered text: {text}</p>
      </div>
    </div>
  );
};

export default StateComponent;
