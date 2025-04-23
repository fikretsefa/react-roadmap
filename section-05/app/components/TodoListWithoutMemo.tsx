"use client";

export default function TodoListWithoutMemo({ todos, tab }: { todos: any[]; tab: string }) {
  
  // Simulates a CPU-intensive task for each todo item
  function heavyCalculation(todo: any) {
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
      sum += Math.sqrt(i * Math.random());
    }
    // Return true if the todo is not completed
    return !todo.completed;
  }
  
  // Filters the todos based on the selected tab (all, active, completed)
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

  // Measure performance without memoization
  const t0 = performance.now();
  const visibleTodos = filterTodos(todos, tab);
  const t1 = performance.now();
  console.log(`✖️ Without useMemo: ${t1 - t0}ms`);

  // Render the first 10 todos from the filtered list
  return (
    <ul>
      {visibleTodos.slice(0, 10).map((todo, index) => (
        <li key={index}>{todo.text}</li>
      ))}
    </ul>
  );
}
