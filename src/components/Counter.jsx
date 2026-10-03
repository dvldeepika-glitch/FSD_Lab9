import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="demo-card">
      <h3>useState Counter</h3>

      <p className="big-number">{count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>

      <p>
        useState manages the counter state and updates the screen
        whenever the state changes.
      </p>
    </div>
  );
}

export default Counter;
