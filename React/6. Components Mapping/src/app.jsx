import React from "react";
import Avatar from "./components/avatar";
import people from "./people";

function createAvatar(contact) {
  return <Avatar
    title={contact.title}
    subtitle={contact.subtitle}
    description={contact.description}
  />;
}

function App() {
  return <ul className="collection">{people.map(createAvatar)}</ul>;
}

export default App;
