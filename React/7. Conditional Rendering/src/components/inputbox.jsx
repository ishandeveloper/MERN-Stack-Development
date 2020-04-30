import React from "react";

function InputBox(props) {
  return (
    <input
      type={props.type}
      className="form-control"
      placeholder={props.placeholder}
      required
      autoFocus
    />
  );
}

export default InputBox;