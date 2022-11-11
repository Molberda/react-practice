import React, { useState } from "react";
import './Counter.css'

function Counter() {
  const [count, action] = useState(0);
  return (
    <div className="counter">
      <button onClick={() => action(count - 1)}>-</button>
      <h1>{count}</h1>
      <button onClick={() => action(count + 1)} >+</button>
    </div>
  );
}

export default Counter;
