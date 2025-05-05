import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((newValue) => newValue + 1); //1
    setCount((newValue) => newValue + 1); //1
    setCount((newValue) => newValue + 1); //1
    setCount((newValue) => newValue + 1); //1
    setCount((newValue) => newValue + 1); //1
    console.log(count); //1 // ❌ នៅតែបង្ហាញតម្លៃចាស់!
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default Counter;
