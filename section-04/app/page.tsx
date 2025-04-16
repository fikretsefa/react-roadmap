"use client";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [renderKey, setRenderKey] = useState(0);

  const handleReRender = () => {
    setRenderKey((prevKey) => prevKey + 1); // Triggers a re-render
  };

  useEffect(() => {
    console.log("Page rendered!");
  });

  //#region Accessing DOM Elements
  // This region demonstrates how to access DOM elements directly using useRef.
  // It's useful when you need to imperatively control focus or perform other direct DOM operations.
  // Prefer specifying HTMLInputElement instead of 'any' for better type safety.
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    inputRef?.current?.focus();
  };
  //#endregion

  //#region Storing Mutable Values
  // This region shows how to store a value that persists across renders without triggering a re-render.
  // Useful for counters, timers, and caching values that don't affect the UI directly.
  const countRef = useRef<number>(0);

  const handleIncreaseCount = () => {
    countRef.current += 1;
  };
  //#endregion

  //#region Stopwatch Example
  // This region demonstrates a basic stopwatch using useRef and useState.
  // - useRef stores the interval ID and avoids re-renders.
  // - useState is used to track timestamps that affect the UI.
  const [startTime, setStartTime] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);
  const intervalRef = useRef<any>(null);

  function handleStart() {
    const time = Date.now();
    setStartTime(time);
    setNow(time);

    clearInterval(intervalRef.current!);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current!);
  }

  let secondsPassed = 0;
  if (startTime !== null && now !== null) {
    secondsPassed = (now - startTime) / 1000;
  }
  //#endregion

  //#region Scroll Into View (UI Animation Example)
  // This region demonstrates how to use useRef to scroll specific elements into view.
  // Useful for carousel-like UI interactions or smooth scrolling behavior.
  const RefListExample = () => {
    const listRef = useRef<HTMLUListElement | null>(null);

    const scrollToIndex = (index: number) => {
      const listNode = listRef.current;
      const imgNode = listNode?.querySelectorAll("li > img")[index];
      imgNode?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    };

    return (
      <>
        <nav>
          <button onClick={() => scrollToIndex(0)}>Go to A</button>
          <button onClick={() => scrollToIndex(1)}>Go to B</button>
          <button onClick={() => scrollToIndex(2)}>Go to C</button>
        </nav>
        <div>
          <ul ref={listRef}>
            <li>
              <img
                src="https://api.fnkr.net/testimg/500x500/EDEDED/000/?text=A"
                alt="A"
              />
            </li>
            <li>
              <img
                src="https://api.fnkr.net/testimg/500x500/EDEDED/000/?text=B"
                alt="B"
              />
            </li>
            <li>
              <img
                src="https://api.fnkr.net/testimg/500x500/EDEDED/000/?text=C"
                alt="C"
              />
            </li>
          </ul>
        </div>
      </>
    );
  };
  //#endregion

  //#region Video Player Control
  // This region demonstrates controlling a video player using useRef.
  // Useful for triggering play/pause actions imperatively based on UI state.
  const VideoPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const ref = useRef<HTMLVideoElement | null>(null);

    function handleClick() {
      const nextIsPlaying = !isPlaying;
      setIsPlaying(nextIsPlaying);

      if (nextIsPlaying) {
        ref.current?.play();
      } else {
        ref.current?.pause();
      }
    }

    return (
      <>
        <video
          width="250"
          ref={ref}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            type="video/mp4"
          />
        </video>
        <br />
        <button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button>
      </>
    );
  };
  //#endregion

  //#region Passing Refs to Child Components
  // This region shows how to forward refs from a parent component to a child component.
  // This is helpful when the parent needs to control focus or read values from child inputs.
  const pageRef = useRef<any | null>(null);

  function handleClickFromPage() {
    pageRef.current?.focus();
  }

  const MyInput = ({ ref }: { ref: React.RefObject<HTMLInputElement> }) => {
    return <input ref={ref} />;
  };
  //#endregion

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>

      <hr />

      <p>Count Ref: {countRef.current}</p>
      <button onClick={handleIncreaseCount}>
        Increase (No UI update unless re-rendered)
      </button>
      <button onClick={handleReRender}>Force Re-render</button>

      <hr />

      <p>Time passed: {secondsPassed.toFixed(3)}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>

      <hr />

      <RefListExample />

      <hr />

      <VideoPlayer />

      <hr />

      <MyInput ref={pageRef} />
      <button onClick={handleClickFromPage}>Focus Child Input from Parent</button>
    </div>
  );
}
