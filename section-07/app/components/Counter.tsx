"use client";

import { useReducer } from "react";

// Define the shape of the state
interface State {
  count: number;
}

// Define possible actions
type Action = { type: "increment" } | { type: "decrement" } | { type: "reset" };

// Reducer function to handle state changes based on actions
function counterReducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

export default function Counter() {
  // Initialize useReducer with reducer function and initial state
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <h2>Counter: {state.count}</h2>

      {/* Dispatch increment action */}
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>

      {/* Dispatch decrement action */}
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>

      {/* Dispatch reset action */}
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
