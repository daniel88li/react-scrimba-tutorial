import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

function MyApp() {
  return (
    <div>
      <ul>
        <li>ONE</li>
        <li>TWO</li>
        <li>THREE</li>
      </ul>

      <p>Test</p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
