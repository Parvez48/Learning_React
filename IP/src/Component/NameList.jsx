import React from "react";

function NameList() {
  // Array of names to render
  const names = ["Alice", "Bob", "Charlie", "David", "Eve", "khaled", "Parvez"];

  return (
    <div>
      <h2>Name List</h2>
      <ul>
        {names.map((name, index) => (
          <li key={index}>
            {"this is a index number " + index + " : "}
            {name}
          </li> // Rendering each name with a unique key
        ))}
      </ul>
    </div>
  );
}

export default NameList;
