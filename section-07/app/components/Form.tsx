"use client";
import { useReducer, ChangeEvent, useEffect } from "react";

// Define the shape of the state
interface State {
  name: string;
  age: number;
}

// Define the possible actions
type Action =
  | { type: "incremented_age" }
  | { type: "changed_name"; nextName: string };

// Reducer function to update the state based on the action
function formReducer(state: State, action: Action): State {
  switch (action.type) {
    case "incremented_age":
      return {
        ...state,
        age: state.age + 1,
      };
    case "changed_name":
      return {
        ...state,
        name: action.nextName,
      };
    default:
      throw new Error("⚠ Unknown action: " + (action as any).type);
  }
}

// Initial state for the reducer
const initialState: State = { name: "Taylor", age: 42 };

export default function Form() {
  // useReducer hook to manage the form state
  const [state, dispatch] = useReducer(formReducer, initialState);

  //Is rendered?
  useEffect(() => {
    console.log("✔ Form rendered");
  });

  // Handle button click to increment the age
  function handleButtonClick() {
    dispatch({ type: "incremented_age" });
  }

  // Handle input change to update the name
  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: "changed_name",
      nextName: e.target.value,
    });
  }

  return (
    <>
      {/* Input field to update the name */}
      <input value={state.name} onChange={handleInputChange} />

      {/* Button to increment the age */}
      <button onClick={handleButtonClick}>Increment age</button>

      {/* Unknown type */}
      <button
        onClick={() => {
          dispatch({ type: "unknown_action_type" } as any);
        }}
      >
        Unknown Type
      </button>

      {/* Display the current name and age */}
      <p>
        Hello, {state.name}. You are {state.age} years old.
      </p>
    </>
  );
}
