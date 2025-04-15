"use client"

import { useEffect, useRef, useState } from "react";


export default function Home() {
  const [toggle,setToggle] = useState(false);
  const [anotherToggle,setAnotherToggle] = useState(false);
  //#region React useEffect Hook: Always
  useEffect(() => {
    console.log('I run on every render: mount + update.')
  });
  //#endregion

  //#region React useEffect Hook: Mount
  useEffect(() => {
    console.log('I run only on the first render: mount.');
  }, []);
  //#endregion
  
  //#region React useEffect Hook: Update
  useEffect(() => {
    console.log('I run only if toggle changes (and on mount).');
  }, [toggle]);
  //#endregion

   //#region React useEffect Hook: Update
   useEffect(() => {
    console.log('I run only if toggle or another toggle changes (and on mount).');
  }, [toggle,anotherToggle]);
  //#endregion

  //#region React useEffect Hook: Only on Update
  const didMount = useRef(false);
  useEffect(() => {
    if (didMount.current) {
      console.log('I run only if toggle changes.');
    } else {
      didMount.current = true;
    }
  }, [toggle]);
  //#endregion

   //#region React useEffect Hook: Only Once
   const calledOnce = useRef(false);
  useEffect(() => {
    if (calledOnce.current) {
      return;
    }
    if (toggle === false) {
      console.log('I run only once if toggle is false.');
      calledOnce.current = true;
    }
  }, [toggle]);
   //#endregion

    //#region React useEffect Hook: Cleanup
    const [timer, setTimer] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => setTimer(timer + 1), 1000);
  
      return () => clearInterval(interval);
    }, [timer]);
     //#endregion


  return (
    <div>
      <button type="button" onClick={() => { setToggle(prev => !prev)}}>
        Toggle
      </button>

      <button type="button" onClick={() => { setAnotherToggle(prev => !prev)}}>
        Another Toggle
      </button>

      <div>{timer}</div>
    </div>
  );
}
