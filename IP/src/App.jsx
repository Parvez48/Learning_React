import React from "react";
import UserProfile from "./Component/UserProfile";

function App() {
  // Example dynamic data
  const user1 = { name: "Alice", age: 25, email: "alice@example.com" };
  const user2 = { name: "Bob", age: 30, email: "bob@example.com" };
  const user3 = { name: "Charlie", age: 35, email: "charlie@example.com" };

  return (
    <div>
      <h1>Dynamic Data Display</h1>
      <UserProfile name={user1.name} age={user1.age} email={user1.email} />
      <UserProfile name={user2.name} age={user2.age} email={user2.email} />
      <UserProfile name={user3.name} age={user3.age} email={user3.email} />
    </div>
  );
}

export default App;
