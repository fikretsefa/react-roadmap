# 🧠 React `useState` Hooks Showcase

This project demonstrates **various use cases of the `useState` hook** in React, built with **Next.js** and **TypeScript**.

The goal is to show how state management works in different scenarios—from simple counters to more complex forms, lists, and even some **troubleshooting patterns**.

> All examples are encapsulated within a single functional component called `StateComponent`.

---

## 🚀 What’s Inside?

### 🔢 Counter Example

A basic counter initialized to 28. Each button click increases the counter by 1 using `setCount`.

### ✍️ Text Input

Live updates a string of text using `setText` with `onChange`. A great intro to controlled inputs in React.

### ✅ Checkbox Toggle

Manages a boolean state with `setCheckbox`. Demonstrates how checkbox state can be handled via `e.target.checked`.

### 🔁 Previous State Trap

Illustrates **why relying on current state directly inside `setState` multiple times can lead to bugs**.

✅ Correct usage with updater functions:
setCountPrev((prev) => prev + 1);

🚫 Incorrect usage:
setCountPrev(countPrev + 1);

🧾 Form State
A form with firstName, lastName, and email fields managed as a single object state. It shows how to update nested properties while maintaining immutability using the spread operator.

setForm({ ...form, firstName: e.target.value });

📋 Todo List with Initializer Function
A createInitialTodos function generates 3 items on first render, showcasing how to lazy initialize state.

const [todos, setTodos] = useState(createInitialTodos);

♻️ Resetting Components with Key Prop
Demonstrates how a child component can be reset by changing its key. Very useful in form resets.

<FormWithKey key={formKey} />

🐛 Troubleshooting State Updates
Logs troubleCount inside a setTimeout to illustrate React's async state updates. Even after calling setTroubleCount, the console still logs the old value if you access it directly.

📘 Why This Matters
Mastering useState is crucial to writing clean, predictable React apps. This example covers:

Controlled inputs

Boolean toggles

Object state updates

Previous state usage

Component resets

State pitfalls and debugging

It’s like a mini crash course on managing local state in React.

🛠 Tech Stack

✅ React (with Next.js)

✅ TypeScript

✅ Inline styles for layout clarity

🧪 Emphasis on practical, real-world usage of useState

🧪 Run Locally

npm install

npm run dev

🧠 Recommended Learnings After This

useEffect for side effects

useReducer for complex state logic

Form libraries like react-hook-form for better form handling

Component architecture patterns (e.g. lifting state, composition)
