import React, { useState } from "react";

function ToggleContent() {
  // useState to manage visibility of the content
  const [isVisible, setIsVisible] = useState(null);

  // Function to toggle the visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"} Content
      </button>

      {isVisible && (
        <div>
          <p>This is the content to show or hide.</p>
        </div>
      )}
    </div>
  );
}

export default ToggleContent;
