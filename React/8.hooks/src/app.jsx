import React from "react";

function App() {
var [count,setCount]=React.useState(0);

  function increase() {
    setCount(++count);
  }
  function decrease() {
    setCount(--count);
  }

  return (
    <div className="container">
      <h1 className="count">{count}</h1>
      <button onClick={decrease} className="count-btn">
        -
      </button>
      <button onClick={increase} className="count-btn">
        +
      </button>
    </div>
  );
}
export default App;
