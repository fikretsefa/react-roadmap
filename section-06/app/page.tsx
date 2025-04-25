"use client";
import { useCallback, useState } from "react";
import Link from "next/link";
import ChildButton from "./components/ChildButton";
import ChildButtonWithMemo from "./components/ChildButtonWithMemo";

export default function Home() {
  // States
  const [childCount, setChildCount] = useState(0); // Count for normal ChildButton
  const [childMemoCount, setChildMemoCount] = useState(0); // Count for ChildButton with React.memo
  const [otherState, setOtherState] = useState(false); // Another state that affects other components

  // Normal function - this is redefined on every render
  const handleIncrement = () => {
    setChildCount((prev) => prev + 1);
  };

  // useCallback provides a stable reference for the function
  // This ensures the function is not redefined on each render.
  // The dependency array is empty, so the function is defined only on the first render and remains stable afterward.
  const handleIncrementWithCallback = useCallback(() => {
    setChildMemoCount((prev) => prev + 1);
  }, []); // With an empty dependency array, useCallback ensures the function is created only once

  // Alternatively, we can add a dependency to the array to ensure the function updates when a specific state changes.
  // For example, when 'otherState' changes, handleIncrementWithCallback will also update.
  // const handleIncrementWithCallback = useCallback(() => {
  //   setChildMemoCount((prev) => prev + 1);
  // }, [otherState]); // This way, the function will be updated whenever the 'otherState' changes

  return (
    <div>
      {/* First section: ChildButton without React.memo */}
      <section>
        <h2>🚨 Child without React.memo</h2>
        <h3>childCount: {childCount}</h3>
        {/* The onClick function is redefined on every render */}
        <ChildButton onClick={handleIncrement} />
      </section>

      {/* Second section: Optimized ChildButton with React.memo */}
      <section>
        <h2>✅ Child with React.memo</h2>
        <h3>childMemoCount: {childMemoCount}</h3>
        {/* This button will only re-render when the reference to handleIncrementWithCallback changes */}
        <ChildButtonWithMemo onClick={handleIncrementWithCallback} />
      </section>

      {/* Button to toggle the other state */}
      <br />
      <div>
        <button onClick={() => setOtherState((prev) => !prev)}>
          Toggle Other State
        </button>
      </div>

      {/* Link to go to the real-world example page */}
      <br />
      <div>
        <Link href="/real-world-example">Go to Real World Example</Link>
      </div>
    </div>
  );
}
