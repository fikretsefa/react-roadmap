"use client";
import { useMemo } from "react";

export default function TodoListWithMemo({ todos, tab }: { todos: any[]; tab: string }) {
  function heavyCalculation(todo: any) {
    // Suni olarak CPU meşgul et
    let sum = 0;
    for (let i = 0; i < 5000; i++) {
      sum += Math.sqrt(i * Math.random());
    }
    return !todo.completed;
  }
  
  const filterTodos = (todos: any[], tab: string) => {
    //const time = performance.now();
    let result = todos;
    if (tab === "active") {
      result = todos.filter(todo => heavyCalculation(todo));
    } else if (tab === "completed") {
      result = todos.filter(todo => !heavyCalculation(todo));
    }
    //const timeEnd = performance.now();
    //console.log(`TodoListWithMemo: ${(timeEnd-time)}ms`);
    return result;
  };

  const t0 = performance.now();
const visibleTodos = useMemo(() => {
  const result = filterTodos(todos, tab);
  return result;
}, [todos, tab]);
const t1 = performance.now();
console.log(`useMemo ile hesaplama süresi: ${t1 - t0}ms`);
  return (
    <ul>
      {visibleTodos.slice(0, 10).map((todo, index) => (
        <li key={index}>{todo.text}</li>
      ))}
    </ul>
  );
}
