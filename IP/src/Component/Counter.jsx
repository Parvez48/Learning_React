import React, { useState } from "react";

function Counter() {
  // Initialize count state to 0
  let [count, setCount] = useState(10);

  // Function to increment the count
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };
  if (count == 8) {
    count = 0;
  } else {
    count = count;
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>decrement</button>
    </div>
  );
}

export default Counter;
