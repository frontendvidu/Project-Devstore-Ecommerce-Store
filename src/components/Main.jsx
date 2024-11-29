import React, { useState } from "react";
import Modal from "./Modal/Modal";
import modaldata from "./Modal/modaldata";

function Main(props) {
  const [check, setCheck] = useState(false);
  function showModal() {
    setCheck((prevcheck) => !prevcheck);
  }

  function handleClose() {
    setCheck(false);
  }

  return (
    <>
      <div
        className="productMain"
        style={{ background: `url(${props.image}) no-repeat center center` }}
      >
        <button className="contentButton" onClick={showModal}>
          {props.name} <span>{props.price} </span>
        </button>
      </div>
      <Modal
        display={check ? "flex" : "none"}
        title={modaldata[0].title}
        descrip={modaldata[0].description}
        price={modaldata[0].price}
        imageURL={modaldata[0].background}
        onClose={handleClose}
      />
    </>
  );
}

export default Main;

//`url(${props.image}) no-repeat center center`
//`url (${props.image})`
