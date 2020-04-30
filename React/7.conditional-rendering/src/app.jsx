import React from "react";
import Login from "./components/login";
var isloggedin=false;

function App() {
  return (
    <div className="text-center">
      {isloggedin?<Login />:<Login register="true"/>}
    </div>
  );
}

export default App;
