import React from "react";

function Catalogue(props) {
  const style = {
    background: `url(${props.image}) no-repeat center center`,
  };
  return (
    <div className="productLeftOne" style={style}>
      <button className="contentButton">
        {props.name}
        <span>{props.price}</span>
      </button>
    </div>
  );
}

export default Catalogue;
