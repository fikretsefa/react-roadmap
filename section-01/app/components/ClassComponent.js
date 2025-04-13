"use client"
import React from 'react';

// A classic React class component
// - Demonstrates the use of state and lifecycle methods in a class-based component.
// - Synchronizes user input with localStorage to persist data across sessions.
//
// Notes:
// - This approach (class components) was the standard before React 16.8 introduced hooks.
// - Now, functional components with hooks (`useState`, `useEffect`, etc.) are preferred in modern React development.
// - While class components are still supported, using **TypeScript with functional components** offers better DX and scalability.
//
// Lifecycle Overview:
// - `constructor`: Initializes the component's state by reading from localStorage.
// - `componentDidUpdate`: Runs after every render (update), and writes the updated value back to localStorage.
// - `render`: Displays a text input and the stored value.
// - `onChange`: Updates the component's state as the user types.
//
// Important Considerations:
// - This pattern tightly couples UI with localStorage; using `useEffect` and `useState` is cleaner and more testable.
// - Be cautious when using localStorage in SSR/Next.js apps — always ensure it's accessed on the client.

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);

    // Initialize state from localStorage (client-side persistence)
    this.state = {
      value: localStorage.getItem('myValueInLocalStorage') || '',
    };
  }

  // Update localStorage whenever the component updates (i.e., when value changes)
  componentDidUpdate() {
    localStorage.setItem('myValueInLocalStorage', this.state.value);
  }

  // Handle input changes and update component state
  onChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div style={{ backgroundColor: 'var(--orange-500)' }}>
        <h1>Class Component</h1>

        <input
          value={this.state.value}
          type="text"
          onChange={this.onChange}
          placeholder="Type something..."
        />

        <p>{this.state.value}</p>
      </div>
    );
  }
}

export default ClassComponent;
