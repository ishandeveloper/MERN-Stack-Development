import React from "react";
import ReactDOM from "react-dom";
import pi, {doublePi,triplePi} from './math';

ReactDOM.render(
  <div>
    <li>{pi}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </div>,
  document.getElementById("root")
);
