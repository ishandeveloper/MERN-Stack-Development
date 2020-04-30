import React from "react";
import Avatar from "./components/avatar";

function App() {
  return (
    <ul className="collection">
      <Avatar
        title="Alisha"
        subtitle="alisha@example.com"
        description="Mumbai, India"
      />
      <Avatar
        title="Andrew"
        subtitle="andrew@example.com"
        description="New York, USA"
      />
      <Avatar
        title="John"
        subtitle="john@example.com"
        description="Phillipines, Indonesia"
      />
      <Avatar
        title="Chirag"
        subtitle="chirag@example.com"
        description="Delhi, India"
      />
    </ul>
  );
}

export default App;
