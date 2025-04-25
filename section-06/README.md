# UseCallback - React Memo Optimization Example

This project demonstrates the performance benefits of using `React.memo` and `useCallback` in a React application. By optimizing rendering behavior, unnecessary re-renders can be prevented, leading to a more efficient app.

## ⚙️ Overview

This example focuses on two components: `ChildButton` and `ChildButtonWithMemo`.

- **`ChildButton`**: A simple button that increments a counter. The counter will be updated each time the button is clicked, but the component will re-render on every state change.
- **`ChildButtonWithMemo`**: A memoized button component using `React.memo`. The component will only re-render if its props change (in this case, if the reference to the `onClick` function changes).

### Key Concepts

1. **`React.memo`**:
   - This higher-order component prevents unnecessary re-renders. It memoizes the component and ensures it only re-renders when its props change.
2. **`useCallback`**:
   - This hook returns a memoized version of the callback function. It's useful when passing functions as props to child components to ensure they don't get recreated on every render.

On the main page, you will see two sections:

1. **Child without React.memo**: This section shows how the component will re-render on every click.
2. **Child with React.memo**: This section shows how `ChildButtonWithMemo` only re-renders when the function reference passed as a prop changes (thanks to `useCallback`).

You can also toggle the `otherState` by clicking the "Toggle Other State" button. This allows you to see that changing this state doesn't affect the render of the `ChildButtonWithMemo` component due to the stable function reference provided by `useCallback`.

## 🔍 How It Works

1. **State Management**: The application manages three states:

   - `childCount`: Tracks the count for the `ChildButton` component.
   - `childMemoCount`: Tracks the count for the `ChildButtonWithMemo` component.
   - `otherState`: A state used to test how it affects the render behavior of the memoized component.

2. **Memoization**:

   - **`ChildButton`**: The button will re-render every time its parent component renders because the function passed as `onClick` is recreated on every render.
   - **`ChildButtonWithMemo`**: The button component is memoized using `React.memo`. It will only re-render if its `onClick` function reference changes. Thanks to `useCallback`, the `onClick` function will only change when necessary.

3. **Optimization**:
   - By using `useCallback`, the `handleIncrementWithCallback` function is memoized, ensuring that its reference remains stable unless dependencies change. This prevents unnecessary re-renders in the `ChildButtonWithMemo` component.
