import React, { useState, useEffect } from "react";
import randomcolor from "randomcolor";

function HookEx() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("");

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  //hook that looks for change in [<var>] like componentDidUpdate, if empty then only runs once like componentDidMount
  useEffect(() => {
    setColor(randomcolor());
  }, [count]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    // returns a function that is saved for componentWillUnmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h1 style={{ color: color }}>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default HookEx;
