import React from "react";

function Btn(props) {
  return (
    <button className="btn btn-lg btn-primary btn-block" type="submit">
      {props.value}
    </button>
  );
}

export default Btn;