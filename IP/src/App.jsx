import React from "react";
import Greeting from "./Component/Greeting";

function App() {
  return (
    <div>
      <h1>Basic Props Example</h1>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
      <Greeting name="Charlie" />
    </div>
  );
}

export default App;
