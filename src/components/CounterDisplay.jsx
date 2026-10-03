function CounterDisplay({ count }) {
  return (
    <div className="display-box">
      <h4>Sibling Display Component</h4>

      <p className="big-number">{count}</p>

      <p>
        This component receives the shared state from the
        common parent.
      </p>
    </div>
  );
}

export default CounterDisplay;
