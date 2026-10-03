import { useState } from "react";
import CounterButton from "./CounterButton";
import CounterDisplay from "./CounterDisplay";

function LiftedCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className="demo-card">
      <h3>Lifting State Up</h3>

      <p>
        The common parent stores the state and shares it with
        two sibling components.
      </p>

      <CounterButton
        increment={() => setCount(count + 1)}
      />

      <CounterDisplay count={count} />
    </div>
  );
}

export default LiftedCounter;
