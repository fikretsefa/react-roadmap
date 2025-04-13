# React Components Example Project

This project demonstrates different types of React components, both **class-based** and **functional**, to illustrate key concepts such as props, state, default values, component reusability, and local storage usage.

> Built using **Next.js** and **TypeScript**.


## 🚀 Components Overview

### ✅ SimpleComponent
A **basic functional component** with no props or state. Useful as a starting point for any new component.

### 🧩 PropsComponent
A functional component that receives and displays props (`name`, `age`, `isStudent`).  
Props are typed using TypeScript interfaces. Default values are also demonstrated.

### 🧠 StateComponent
Functional component using `useState` to manage internal state for:
- A counter
- A text input

Demonstrates event handling and real-time state updates.

### 📦 ProptypesComponent
Functional component that uses `PropTypes` for runtime type-checking.  
⚠️ **Note**: PropTypes is considered legacy. Prefer **TypeScript** for type safety in modern applications.

### 🧼 PureComponent
Functional version of a PureComponent using `props` and internal `useState`.  
It accepts an optional `onClick` prop, allowing external behavior override.

### 🧪 OverrideComponent
Demonstrates **component composition** and behavior override.  
It reuses `PureComponent` but replaces its button behavior with a custom `alert`.

### 🏛 ClassComponent
A classic class-based component with local state and `componentDidUpdate` lifecycle method.  
Synchronizes state with `localStorage`.

### ⚡ FunctionComponent
Modern, functional version of `ClassComponent`.  
Uses `useState` and `useEffect` to manage state and sync with `localStorage`.

---

## 📘 Why This Exists

This project serves as a **reference and learning tool** for understanding how components work in React—especially:
- Functional vs Class components
- Using state, props, and effects
- Handling events
- Managing persistent data (via localStorage)
- Encouraging modern patterns like **hooks** and **TypeScript**

---

## 🛠 Tech Stack

- React (with Next.js)
- TypeScript
- CSS Variables for simple theming
- PropTypes (for legacy illustration)

---

## 📚 Recommended

While this project includes both class and functional components, **modern React development favors functional components with hooks** for cleaner and more scalable code.

For new projects:
- ✅ Use functional components
- ✅ Prefer TypeScript over PropTypes
- 🚫 Avoid class components unless maintaining legacy code

---

## 🧪 Run Locally

```bash
npm install
npm run dev

