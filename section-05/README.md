# Todo List & Memoization Demo

This project demonstrates the use of React's `useMemo` and `memo` for optimizing the rendering performance of components. It includes a mock todo list with 1,000 items and a counter section with a child component, showcasing both `useMemo` and `memo` performance optimization techniques.

## Features

- **Todo List**: Displays a list of todos and allows switching between three tabs: All, Active, and Completed.
- **Performance Optimization**: Demonstrates two versions of a Todo List component, one using `useMemo` to optimize performance and the other without it.
- **Memoization Demo**: Includes a counter with a child component that demonstrates the difference between `memo` and `useMemo` in terms of rendering.

## Components

- `TodoListWithMemo`: A todo list component optimized with `useMemo` to avoid unnecessary re-renders.
- `TodoListWithoutMemo`: A todo list component without `useMemo`, showing how re-renders happen with each state change.
- `ChildWithMemo`: A child component that only re-renders when its props change, demonstrating React's `memo` function.
- `ChildWithUseMemo`: A child component optimized with `useMemo` to prevent unnecessary recomputation of props.

