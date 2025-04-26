"use client";
import { useReducer, ChangeEvent, useEffect, useState } from "react";

// Define the shape of the state
interface State {
  id: number;
  text: string;
  done: boolean;
}
// Define the possible actions
type Action =
  | { type: "add"; nextText: string }
  | { type: "delete"; nextId: number }
  | { type: "edit"; nextText: string };

// Reducer function to update the state based on the action
function todoReducer(state: State[], action: Action): State[] {
  // switch (action.type) {
  //   case "add":
  //     return [
  //       ...state,
  //       {
  //         id: action.id,
  //         text: action.text,
  //         done: false,
  //       },
  //     ];
  //   default:
  //     throw new Error("⚠ Unknown action: " + (action as any).type);
  // }
  throw new Error("⚠ Unknown action: " + (action as any).type);
}

// Initial state for the reducer
const initialState: State[] = [
  { id: 0, text: "Task 1", done: false },
  { id: 1, text: "Task 2", done: false },
  { id: 2, text: "Task 3", done: false },
];

export default function Form() {
  // useReducer hook to manage the form state
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [inputValue, setInputValue] = useState("");
  //Is rendered?
  useEffect(() => {
    console.log("✔ Form rendered");
  });

  // Handle button add
  function handleAddClick() {
    dispatch({
      type: "add",
      nextText: inputValue,
    });
  }

  return (
    <div>
      {/* Input field to update the name */}
      <input
        placeholder={"Add new task"}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button onClick={handleAddClick}>Add</button>

      <ul className="todo-list">
        {state.map((todo: State) => (
          <li key={todo.id} className="todo-item">
            <input type="checkbox" />
            <p className="todo-text">{todo.text}</p>
            <button onClick={() => {}}>Edit</button>
            <button onClick={() => {}}>Delete</button>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .todo-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          list-style: none;
          padding: 0;
        }
        .todo-item {
          display: flex;
          align-items: center;
          gap: 8px;
          border: 1px solid #ddd;
          border-radius: 6px;
          padding: 8px 12px;
          background: #fafafa;
        }
        .todo-text {
          margin: 0;
        }
      `}</style>
    </div>
  );
}
