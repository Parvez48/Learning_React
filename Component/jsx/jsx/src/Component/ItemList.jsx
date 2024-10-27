import React from "react";

function ItemList() {
  // Array of items to display
  const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

  return (
    <div>
      <h2>My Favorite Fruits</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li> // Using map to create a list of items
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
