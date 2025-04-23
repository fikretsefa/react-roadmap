"use client";

import { useMemo, useState } from "react";
import TodoListWithMemo from "./components/TodoListWithMemo";
import TodoListWithoutMemo from "./components/TodoListWithoutMemo";
import ChildWithMemo from "./components/ChildWithMemo";
import ChildWithUseMemo from "./components/ChildWithUseMemo";

export default function Home() {
  
  //#region TodoList Section

  // Manage the current selected tab state ('all', 'active', 'completed')
  const [tab, setTab] = useState("all");

  // Create a mock todo list with 1,000 items
  const todos = Array.from({ length: 1000 }, (_, i) => ({
    text: `Task ${i + 1}`,
    completed: i % 3 === 0, // Every 3rd task is marked as completed
  }));

  //#endregion

  //#region Counter wtih Child Section
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([1, 2, 3]);

  const addItem = () => {
    setItems([...items, Math.floor(Math.random() * 10)]);
  };
  //#endregion

  return (
    <div>
      
      <>
      {/* Display the current selected tab */}
      <h2>Current Tab: {tab}</h2>

      {/* Tab selection buttons */}
      <div>
        <button onClick={() => setTab("all")}>All</button>
        <button onClick={() => setTab("active")}>Active</button>
        <button onClick={() => setTab("completed")}>Completed</button>
      </div>

      {/* Component that uses useMemo to optimize performance */}
      <h3>✔️ Component WITH useMemo</h3>
      <TodoListWithMemo todos={todos} tab={tab} />

      {/* Component that does not use useMemo */}
      <h3>✖️ Component WITHOUT useMemo</h3>
      <TodoListWithoutMemo todos={todos} tab={tab} />
      </>
      <>
      <h2>memo vs useMemo Demo</h2>
      <button onClick={() => setCount(count + 1)}>Increment Counter ({count})</button>
      <button onClick={addItem}>Add Random to List</button>

      <ChildWithMemo label={`I only re-render when my props change.`} />
      <ChildWithUseMemo items={items} />
      </>
    </div>
  );
}
