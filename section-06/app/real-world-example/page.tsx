"use client";
import React from "react";
import { useCallback, useState } from "react";

// List item component
const ListItem = React.memo(
  ({
    item,
    onClick,
  }: {
    item: { id: number; name: string; count: number };
    onClick: (id: number) => void;
  }) => {
    console.log(`Rendered: ${item.name}`); // This logs to the console whenever the component re-renders, so you can observe which items are being re-rendered
    return (
      <div style={{ marginBottom: "10px" }}>
        <p>
          {item.name} - Count: {item.count}
        </p>
        <button onClick={() => onClick(item.id)}>
          Increase {item.name}'s count
        </button>
      </div>
    );
  }
);

export default function RealWorldExample() {
  // Creating an initial list of 1000 items
  const [items, setItems] = useState(
    Array.from({ length: 1000 }, (_, index) => ({
      id: index + 1,
      name: `Item ${index + 1}`,
      count: 0,
    }))
  );

  // Another state that will be toggled by the "Toggle Other State" button
  const [otherState, setOtherState] = useState(false);

  // Defining the handleIncrement function with useCallback
  // This function will have a fixed reference, and it will only trigger when the item's id changes
  const handleIncrement = useCallback((id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  }, []);
  // The empty dependency array ensures that the function reference remains constant

  // Test this:
  // If we don't use useCallback, all items will be re-rendered and performance may suffer
  //   const handleIncrement = (id: number) => {
  //     setItems((prevItems) =>
  //       prevItems.map((item) =>
  //         item.id === id ? { ...item, count: item.count + 1 } : item
  //       )
  //     );
  //   };

  return (
    <div>
      <h1>Real-world Example: List Rendering Optimization</h1>

      {/* A button to toggle the other state */}
      <button onClick={() => setOtherState((prev) => !prev)}>
        Toggle Other State
      </button>

      {/* Rendering the list */}
      <div>
        {items.map((item) => (
          // Rendering the ListItem component for each item in the list
          <ListItem key={item.id} item={item} onClick={handleIncrement} />
        ))}
      </div>
    </div>
  );
}
