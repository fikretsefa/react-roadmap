React useEffect Hook – Comprehensive Examples

This project demonstrates various usage patterns of the React useEffect hook. It's designed as a learning tool and reference for understanding how useEffect behaves under different conditions.

📦 Technologies Used
React (with App Router: "use client")

React Hooks (useState, useEffect, useRef)

🚀 Overview
The Home component includes multiple useEffect examples, each illustrating a specific lifecycle behavior or side effect pattern. These cover initial mount, updates, conditional execution, cleanup, and more.

🔍 useEffect Patterns Covered

1. Run on Every Render

useEffect(() => {
console.log("I run on every render: mount + update.");
});

No dependency array → runs on every render (both mount and updates).

2. Run Only on Mount

useEffect(() => {
console.log("I run only on the first render: mount.");
}, []);

Empty dependency array → runs only once when the component mounts.

3. Run When a Specific State Changes

useEffect(() => {
console.log("I run only if toggle changes (and on mount).");
}, [toggle]);

Runs when toggle changes.

4. Run When Any of Multiple States Change

useEffect(() => {
console.log("I run only if toggle or another toggle changes (and on mount).");
}, [toggle, anotherToggle]);

Reacts to either toggle or anotherToggle changes.

5. Skip Initial Mount (Run Only on Update)

const didMount = useRef(false);

useEffect(() => {
if (didMount.current) {
console.log("I run only if toggle changes.");
} else {
didMount.current = true;
}
}, [toggle]);

Skips the first render using a useRef flag.

6. Run Only Once When a Condition Is Met

const calledOnce = useRef(false);

useEffect(() => {
if (calledOnce.current) return;
if (toggle === false) {
console.log("I run only once if toggle is false.");
calledOnce.current = true;
}
}, [toggle]);

Runs one time when toggle is false and never again.

7. Effect with Cleanup (Timer Example)

useEffect(() => {
const interval = setInterval(() => setTimer(timer + 1), 1000);
return () => clearInterval(interval);
}, [timer]);

Demonstrates cleanup on each re-run to prevent memory leaks.

8. Cleanup on Unmount Only

useEffect(() => {
const interval = setInterval(
() => setTimerUnmount((current) => current + 1),
1000
);
return () => clearInterval(interval);
}, []);

Sets up a stable timer that only gets cleared when the component unmounts.

🧪 How to Test It
Run the project in your local React environment.

Open the browser console to see logs from each useEffect.

Use the Toggle and Another Toggle buttons to trigger state changes.

Observe the timer behaviors on the UI.
