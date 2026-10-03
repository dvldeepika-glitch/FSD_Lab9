import Parent from "./Parent";

function UserProfile() {
  const user = {
    name: "Deepika",
    email: "deepika@example.com",
    role: "CSE Student",
  };

  return (
    <div className="demo-card">
      <h3>Props Drilling</h3>

      <p>
        Data is passed from App → UserProfile → Parent → Child
        using props.
      </p>

      <Parent user={user} />
    </div>
  );
}

export default UserProfile;
