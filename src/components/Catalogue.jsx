import React, { useState } from "react";
import Modal from "./Modal/Modal";
import modaldata from "./Modal/modaldata";

function Catalogue(props) {
  const [buttonId, setButtonid] = useState("1");
  const [check, setCheck] = useState(false);
  function showModal(btnId) {
    console.log("Button ID received:", btnId); // Debug props.btnId
    setButtonid(btnId);
    setCheck((prev) => !prev);
  }

  function handlecloseModal() {
    setCheck(false);
  }

  const style = {
    background: `url(${props.image}) no-repeat center center`,
  };
  return (
    <>
      <div className="productLeftOne" style={style}>
        <button
          className="contentButton"
          onClick={() => showModal(props.btnId)}
        >
          {props.name}
          <span>{props.price}</span>
        </button>
      </div>
      <Modal
        display={check ? "flex" : "none"}
        title={modaldata[buttonId].title}
        descrip={modaldata[buttonId].description}
        price={modaldata[buttonId].price}
        imageURL={modaldata[buttonId].background}
        onClose={handlecloseModal}
      />
    </>
  );
}

export default Catalogue;
