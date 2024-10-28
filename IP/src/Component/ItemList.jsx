import React from "react";

function ItemList() {
  // Array of items to display
  const items = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "this is our country",
    "Bangladesh",
  ];

  return (
    <div>
      <h2>My Favorite Fruits</h2>
      <ul>
        {items.map((bangladesh, usa) => {
          return (
            <li key={usa}>{bangladesh}</li> // Using map to create a list of items
          );
        })}
      </ul>
    </div>
  );
}

export default ItemList;
