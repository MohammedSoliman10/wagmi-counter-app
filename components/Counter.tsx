"use client";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(7);

  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);
  const increment = () => setCount((prev) => prev + 1);

  return (
    <div className="local-counter">
      <div className="odometer">
        <span className="odometer-value">{count}</span>
      </div>
      <span className="odometer-label">local state · resets on refresh</span>
      <div className="local-actions">
        <button className="btn" onClick={decrement} aria-label="Decrement">
          −
        </button>
        <button className="btn" onClick={reset}>
          Reset
        </button>
        <button className="btn btn-primary" onClick={increment} aria-label="Increment">
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
