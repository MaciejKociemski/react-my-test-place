// import { Component } from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count:{count}</p>
      <button onClick={handleClick}>increment</button>
    </div>
  );
}

export default Counter;
