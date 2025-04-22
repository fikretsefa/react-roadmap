"use client"
import { useMemo, useState } from "react";
import TodoListWithMemo from "./components/TodoListWithMemo";
import TodoListWithoutMemo from "./components/TodoListWithoutMemo";

export default function Home() {
  
  //#region Todolist
  //Call use memo at the top of your component to cache a calculation between re-renderes
  const [tab, setTab] = useState("all");

  // 10.000 elemanlı yapay todo listesi
  const todos = Array.from({ length: 100000  }, (_, i) => ({
    text: `Görev ${i + 1}`,
    completed: i % 3 === 0,
  }));
  //#endregion
  
  
  return (
    <div>
      <h2>Aktif Sekme: {tab}</h2>
      <div>
        <button onClick={() => setTab("all")}>Tümü</button>
        <button onClick={() => setTab("active")}>Aktif</button>
        <button onClick={() => setTab("completed")}>Tamamlanan</button>
      </div>

      <h3>✅ useMemo KULLANAN Bileşen</h3>
      <TodoListWithMemo todos={todos} tab={tab} />

      <h3>❌ useMemo KULLANMAYAN Bileşen</h3>
      <TodoListWithoutMemo todos={todos} tab={tab} />
    </div>
  );
}
