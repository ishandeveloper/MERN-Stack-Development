import React from "react";
import ReactDOM from "react-dom";

// We can import only necessary functions one by one using following syntax
// import pi, {doublePi,triplePi} from './math';

// To import all the functions at once, we can use
import * as pi from './math';

ReactDOM.render(
  <div>
    <li>{pi.default}</li>
    <li>{pi.doublePi()}</li>
    <li>{pi.triplePi()}</li>
  </div>,
  document.getElementById("root")
);
