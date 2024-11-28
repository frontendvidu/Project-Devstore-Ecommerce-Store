import React from "react";

function Main(props) {
  return (
    <div
      className="productMain"
      style={{ background: `url(${props.image}) no-repeat center center` }}
    >
      <button className="contentButton">
        {props.name} <span>{props.price} </span>
      </button>
    </div>
  );
}

export default Main;

//`url(${props.image}) no-repeat center center`
//`url (${props.image})`
