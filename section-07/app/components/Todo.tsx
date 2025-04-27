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
  | { type: "delete"; id: number }
  | { type: "edit"; id: number; nextText: string }
  | { type: "toggle"; id: number };

// Reducer function to update the state based on the action
function todoReducer(state: State[], action: Action): State[] {
  switch (action.type){
    case "add":
      const maxId = Math.max(...state.map(todo => todo.id));
      return [
        ...state,
        {
          id: maxId + 1,
          text: action.nextText,
          done: false,
        }
      ];
    case "delete":
      return state.filter(todo => todo.id !== action.id);
    case "edit":
      return state.map(todo => 
        todo.id === action.id 
          ? { ...todo, text: action.nextText }
          : todo
      );
    case "toggle":
      return state.map(todo =>
        todo.id === action.id
          ? { ...todo, done: !todo.done }
          : todo
      );
    default:
      throw new Error("⚠ Unknown action: " + (action as any).type);
  }
}

// Initial state for the reducer
const initialState: State[] = [
  { id: 0, text: "Task 1", done: false },
  { id: 1, text: "Task 2", done: true },
  { id: 2, text: "Task 3", done: false },
];

export default function Form() {
  // useReducer hook to manage the form state
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [inputValue, setInputValue] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");
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
    setInputValue("");
  }

    // Handle button add
    function handleDeleteClick(id:number) {
      dispatch({
        type: "delete",
        id: id,
      });
      setInputValue("");
    }

     // Handle button add
     function handleEditClick(id: number) {
      setEditingId(id);
      const todo = state.find(t => t.id === id);
      if (todo) {
        setEditText(todo.text);
      }
    }

    function handleEditSave(id: number) {
      dispatch({
        type: "edit",
        id: id,
        nextText: editText,
      });
      setEditingId(null);
    }

    function handleToggle(id: number) {
      dispatch({
        type: "toggle",
        id: id
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
            <input 
              type="checkbox" 
              checked={todo.done}
              onChange={() => handleToggle(todo.id)}
            />
            {editingId === todo.id ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => handleEditSave(todo.id)}>Save</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </>
            ) : (
              <>
                <p className="todo-text">{todo.text}</p>
                <button onClick={() => handleEditClick(todo.id)}>Edit</button>
                <button onClick={() => handleDeleteClick(todo.id)}>Delete</button>
              </>
            )}
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
