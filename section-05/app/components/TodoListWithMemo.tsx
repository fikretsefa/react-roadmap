"use client";
import { useMemo } from "react";

export default function TodoListWithMemo({ todos, tab }: { todos: any[]; tab: string }) {
  // Simulates a CPU-heavy computation for demonstration purposes
  function heavyCalculation(todo: any) {
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
      sum += Math.sqrt(i * Math.random());
    }
    // Return true if the todo is not completed
    return !todo.completed;
  }
  
  // Filters todos based on the selected tab (all, active, completed)
  const filterTodos = (todos: any[], tab: string) => {
    let result = todos;
    if (tab === "active") {
      // Show only active (not completed) todos
      result = todos.filter(todo => heavyCalculation(todo));
    } else if (tab === "completed") {
      // Show only completed todos
      result = todos.filter(todo => !heavyCalculation(todo));
    }
    return result;
  };

  // Measure performance before memoization
  const t0 = performance.now();

  // useMemo is used to avoid recalculating filtered todos unless dependencies change
  const visibleTodos = useMemo(() => {
    const result = filterTodos(todos, tab);
    return result;
  }, [todos, tab]);

  // Measure performance after memoization
  const t1 = performance.now();
  console.log(`✔️ With useMemo: ${t1 - t0}ms`);

  // Render the first 10 todos from the filtered list
  return (
    <ul>
      {visibleTodos.slice(0, 10).map((todo, index) => (
        <li key={index}>{todo.text}</li>
      ))}
    </ul>
  );
}
