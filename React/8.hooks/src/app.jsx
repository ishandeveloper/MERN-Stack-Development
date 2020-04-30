import React from "react";

function App() {
var [count,setCount]=React.useState(0);

  function increase() {
    setCount(++count);
  }

  return (
    <div className="container">
      <h1 className="count">{count}</h1>
      <button onClick={increase} className="count-btn">
        +
      </button>
    </div>
  );
}
export default App;
