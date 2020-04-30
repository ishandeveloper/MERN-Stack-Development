import React from "react";

function createAvatar(contact) {
  return (
    <Avatar
    key={contact.id}
      title={contact.title}
      subtitle={contact.subtitle}
      description={contact.description}
    />
  );
}

function Avatar(props) {
  return (
    <li className="collection-item avatar">
      <img
        src="https://source.unsplash.com/100x100?person,people,man,human,woman"
        alt=""
        className="circle"
      />
      <span className="title">{props.title}</span>
      <p>
        {props.subtitle}
        <br />
        {props.description}
      </p>
      <a href="#!" className="secondary-content">
        <i className="material-icons">grade</i>
      </a>
    </li>
  );
}

export default createAvatar;
