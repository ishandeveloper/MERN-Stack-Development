import React from "react";
import createAvatar from "./components/avatar";
import people from "./people";

function App() {
  return <ul className="collection">{people.map(createAvatar)}</ul>;
}

export default App;
