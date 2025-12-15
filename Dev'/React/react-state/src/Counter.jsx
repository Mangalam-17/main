import { useState } from "react";

export default function Counter() {
  function init() {
    console.log("init was called!");
    return Math.random();
  }
  let [count, setCount] = useState(init);
  console.log("component was re-rendered");

  let incCount = () => {
    setCount((currCount) => {
      return currCount + 1;
    });
    setCount((currCount) => {
      return currCount + 1;
    });
    setCount((currCount) => {
      return currCount + 1;
    });

    // setCount(25);
  };

  return (
    <div>
      <h3>Count = {count} </h3>
      <button onClick={incCount}>Increase Count</button>
    </div>
  );
}
