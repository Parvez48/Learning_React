import React, { useState } from "react";
import ActionButton from "./Component/ActionButton.js";

function App() {
  // State to track if the button was clicked
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  // Event handler function
  const handleButtonClick = () => {
    alert("Button was clicked!");
    setIsButtonClicked(true); // Set state to true when button is clicked
  };

  // Check if button has been clicked and log a message
  if (isButtonClicked) {
    console.log("Button was clicked by Khaled Parvez");
  } else {
    console.log("Button has not been clicked by Khaled Parvez");
  }

  return (
    <div>
      <h1>Event Handler Project</h1>
      <ActionButton handleClick={handleButtonClick} />
    </div>
  );
}

export default App;
