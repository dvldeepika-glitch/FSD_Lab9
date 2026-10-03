import Child from "./Child";

function Parent({ user }) {
  return (
    <div className="parent-box">
      <h4>Parent Component</h4>

      <p>
        User data is received from App and passed to Child.
      </p>

      <Child user={user} />
    </div>
  );
}

export default Parent;
