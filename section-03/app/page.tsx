"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [toggle, setToggle] = useState(false);
  const [anotherToggle, setAnotherToggle] = useState(false);
  //#region React useEffect Hook: Always
  /*
   * This useEffect runs on every render (both mount and updates)
   * It has no dependencies array, so it will execute every time the component re-renders
   * Useful for operations that need to happen on every render
   */
  useEffect(() => {
    console.log("I run on every render: mount + update.");
  });
  //#endregion

  //#region React useEffect Hook: Mount
  /*
   * This useEffect runs only once when the component mounts
   * Empty dependencies array [] means it will only execute on initial render
   * Perfect for initial setup, API calls, or subscriptions
   */
  useEffect(() => {
    console.log("I run only on the first render: mount.");
  }, []);
  //#endregion

  //#region React useEffect Hook: Update
  /*
   * This useEffect runs when the 'toggle' state changes
   * It also runs on initial mount because all effects run at least once
   * Useful for reacting to specific state changes
   */
  useEffect(() => {
    console.log("I run only if toggle changes (and on mount).");
  }, [toggle]);
  //#endregion

  //#region React useEffect Hook: Update
  /*
   * This useEffect watches multiple dependencies: toggle and anotherToggle
   * It will run whenever either of these states change
   * Demonstrates how to watch multiple values for changes
   */
  useEffect(() => {
    console.log(
      "I run only if toggle or another toggle changes (and on mount)."
    );
  }, [toggle, anotherToggle]);
  //#endregion

  //#region React useEffect Hook: Only on Update
  /*
   * This is a pattern to skip the initial mount run of useEffect
   * Uses useRef to track if we're past the first render
   * Only executes the effect logic after the component has mounted
   */
  const didMount = useRef(false);
  useEffect(() => {
    if (didMount.current) {
      console.log("I run only if toggle changes.");
    } else {
      didMount.current = true;
    }
  }, [toggle]);
  //#endregion

  //#region React useEffect Hook: Only Once
  /*
   * This effect demonstrates a one-time execution pattern
   * Uses useRef to ensure the logic runs exactly once when condition is met
   * Will only execute when toggle is false and hasn't run before
   */
  const calledOnce = useRef(false);
  useEffect(() => {
    if (calledOnce.current) {
      return;
    }
    if (toggle === false) {
      console.log("I run only once if toggle is false.");
      calledOnce.current = true;
    }
  }, [toggle]);
  //#endregion

  //#region React useEffect Hook: Cleanup
  /*
   * This effect sets up an interval timer and includes cleanup
   * The cleanup function (returned function) runs before the next effect execution
   * and when the component unmounts
   * Important for preventing memory leaks with timers, subscriptions, etc.
   */
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setTimer(timer + 1), 1000);

    return () => clearInterval(interval);
  }, [timer]);
  //#endregion

  //#region React useEffect Hook: Unmount
  /*
   * This effect also sets up an interval but with a different pattern
   * Uses the function updater form of setState to avoid dependencies
   * Cleanup only runs when component unmounts due to empty dependency array
   * More efficient than the previous timer as it doesn't re-create the interval on every tick
   */
  const [timerUnmount, setTimerUnmount] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () => setTimerUnmount((currentTimer) => currentTimer + 1),
      1000
    );

    return () => clearInterval(interval);
  }, []);
  //#endregion

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setToggle((prev) => !prev);
        }}
      >
        Toggle
      </button>

      <button
        type="button"
        onClick={() => {
          setAnotherToggle((prev) => !prev);
        }}
      >
        Another Toggle
      </button>

      <div>{timer}</div>
      <div>{timerUnmount}</div>
    </div>
  );
}
