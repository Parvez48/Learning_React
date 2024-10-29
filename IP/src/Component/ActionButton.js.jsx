import React from "react";

function ActionButton(props) {
  return (
    <div>
      <button onClick={props.handleClick}>Click Me</button>
    </div>
  );
}

export default ActionButton;
